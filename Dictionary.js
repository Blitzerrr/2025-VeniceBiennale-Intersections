const tags = [
    {
        tagName: "SUSTAIN: Air & Water",
        subTags: ["heart", "brain", "body"],
        color: "#FF0000", // Red
    },
    {
        tagName: "RESIST: Climate",
        subTags: ["pollution", "microbes", "toxins"],
        color: "#FFA500", // Orange
    },
    {
        tagName: "ACCESS: Mental Health",
        subTags: ["walls", "windows", "doors"],
        color: "#FFFF00", // Yellow
    },
    {
        tagName: "ADAPT: The Built Environment",
        subTags: ["cars", "bikes", "trucks"],
        color: "#008000", // Green
    },
    {
        tagName: "INNOVATE: Technology",
        subTags: ["Invention", "Creativity", "Technology"],
        color: "#0000FF", // Blue
    },
];

let items = [];

// Function to parse a CSV row manually
function parseCSVRow(row) {
    const values = [];
    let current = "";
    let inQuotes = false;

    for (let i = 0; i < row.length; i++) {
        const char = row[i];

        if (char === '"' && row[i + 1] === '"') {
            // Handle escaped quotes
            current += '"';
            i++; // Skip the next quote
        } else if (char === '"') {
            // Toggle inQuotes flag
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            // End of a value
            values.push(current.trim());
            current = "";
        } else {
            // Append character to the current value
            current += char;
        }
    }

    // Add the last value
    values.push(current.trim());
    return values;
}

// Function to load and parse the CSV file
function loadItemsFromCSV(csvFilePath) {
    fetch(csvFilePath)
        .then(response => response.text())
        .then(csvText => {
            const rows = csvText.trim().split("\n");
            const headers = parseCSVRow(rows[0]); // Parse the header row

            items = rows.slice(1).map(row => {
                const values = parseCSVRow(row); // Parse each data row
                const item = {};

                // Map each value to its corresponding header
                headers.forEach((header, index) => {
                    item[header] = values[index] || ""; // Default to an empty string if the value is missing
                });

                // Return the dictionary with the required keys
                return {
                    name: item["Name"],
                    projectTitle: item["Project Title"],
                    projectDescription: item["Description"],
                    biennaleTags: item["Tags"] ? item["Tags"].split(",").map(tag => tag.trim()) : [],
                };
            });

            console.log("Items loaded from CSV:", items); // Debugging: Log the parsed items
            createGridItems(); // Call the function to create the grid
        })
        .catch(error => console.error("Error loading CSV file:", error));
}

// Call the function with the path to your CSV file
loadItemsFromCSV("Exhibit.csv");
