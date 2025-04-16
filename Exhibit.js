// script.js

const userInteractionTimeoutDelay = 10000; // Delay for user interaction timeout in milliseconds

function createGridItems() {
    const container = document.getElementById('grid-container');
    
    // Clear the grid container contents
    container.innerHTML = '';

    // Add the original items to the grid
    items.forEach(item => {
        const gridItem = document.createElement('button');
        gridItem.classList.add('grid-item');

        // Construct the folder path based on the naming convention
        const folderPath = `images/${item.name}`;

        const imageExtensions = ['jpg', 'jpeg', 'png'];
        let foundImage = null;

        for (const ext of imageExtensions) {
            const imagePath = `${folderPath}/THUMBNAIL.${ext}`;
            const img = new Image();

            img.onload = () => {
                foundImage = imagePath;
                gridItem.style.backgroundImage = `url(${encodeURI(foundImage)})`;
            };

            img.onerror = () => {
                console.warn(`Failed to load image: ${imagePath}`);
            };

            img.src = imagePath;
        }

        if (foundImage) {
            gridItem.style.backgroundImage = `url(${encodeURI(foundImage)})`;
        } else {
            console.warn(`No thumbnail found for ${item.name}`);
        }
        gridItem.style.backgroundSize = 'cover'; // Ensure the image covers the entire grid item
        gridItem.style.backgroundPosition = 'center'; // Center the image
        gridItem.dataset.projectDescription = item.projectDescription; // Updated key
        gridItem.dataset.projectTitle = item.projectTitle; // Updated key
        gridItem.dataset.name = item.name; // Store name for reference
        
        // Store imageSecondary as a JSON string in the dataset
        if (item.imageSecondary) {
            gridItem.dataset.imageSecondary = JSON.stringify(item.imageSecondary);
        }

        // Store "biennaleTags" as a JSON string
        gridItem.dataset.biennaleTags = JSON.stringify(item.biennaleTags); // Updated key

        container.appendChild(gridItem);
    });

    // Define the specific positions for the tags
    const tagPositions = [10, 14, 25, 29, 41]; // Zero-based indices for 4th, 8th, 19th, 23rd, and 33rd positions

    // Add the tags to the grid at the specified positions
    tags.forEach((tag, index) => {
        if (index >= tagPositions.length) return; // Ensure we don't exceed the number of defined positions

        const tagItem = document.createElement('button');
        tagItem.classList.add('grid-item', 'tag-item'); // Add a special class for tag items
        tagItem.style.backgroundColor = tag.color; // Set the background color based on the tag
        tagItem.textContent = tag.tagName; // Set the text to the tag name
        tagItem.style.color = 'white'; // Set text color
        tagItem.style.fontSize = '0.75rem'; // Adjust font size
        tagItem.style.fontWeight = 'bold'; // Make the text bold
        tagItem.style.textAlign = 'center'; // Center the text horizontally
        tagItem.style.display = 'flex'; // Use flexbox for centering
        tagItem.style.justifyContent = 'center'; // Center the text horizontally
        tagItem.style.alignItems = 'center'; // Center the text vertically

        // Insert the tag at the specified position in the grid
        const position = tagPositions[index];
        if (position < container.children.length) {
            container.insertBefore(tagItem, container.children[position]);
        } else {
            container.appendChild(tagItem); // If the position exceeds the current grid size, append it
        }
    });

    // Apply event listeners
    addGridEventListeners(); // Apply to all non-tag buttons
    addGridEventListenersNoPopup(); // Apply to tag buttons
}

function DetailedInfo(clickedButton) {
    // Get the position of the clicked button
    const rect = clickedButton.getBoundingClientRect();

    // Create the pop-up container
    const popup = document.createElement('div');
    popup.classList.add('popup-container', 'fade-in'); // Add 'fade-in' class for animation

    // Set the initial position and size of the popup to match the clicked button
    popup.style.position = 'absolute';
    popup.style.top = `${rect.top}px`;
    popup.style.left = `${rect.left}px`;
    popup.style.width = `${rect.width}px`;
    popup.style.height = `${rect.height}px`;

    // Set the transform origin to the center of the clicked button
    popup.style.transformOrigin = `${rect.left + rect.width / 2}px ${rect.top + rect.height / 2}px`;

    // Create the flex grid
    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');

    // Create the close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.classList.add('close-btn');
    closeButton.addEventListener('click', () => {
        // Fade out the popup
        popup.classList.add('fade-out');
        setTimeout(() => {
            popup.remove();

            // Reset the grid item styles **after** the popup is removed
            clickedButton.classList.remove('center');
            clickedButton.style.position = '';
            clickedButton.style.top = '';
            clickedButton.style.left = '';
            clickedButton.style.width = '';
            clickedButton.style.height = '';
            clickedButton.style.transform = '';
            clickedButton.style.transition = '';

            // Reset the grid by showing all items with a fade-in effect
            document.querySelectorAll('.grid-item').forEach(btn => {
                btn.style.transition = 'opacity 0.5s ease'; // Add transition for fade-in
                btn.style.opacity = '1'; // Fade in all grid items
            });
        }, 500); // Ensure this happens after the 0.5s fade-out animation
    });

    // Append the close button to the popup content
    popupContent.appendChild(closeButton);

    // Create the left column (image display)
    const leftColumn = document.createElement('div');
    leftColumn.classList.add('popup-left');

    // Get the folder path based on the clicked button's dataset name
    const folderPath = `images/${clickedButton.dataset.name}/`;

    // Possible image extensions
    const imageExtensions = ['jpg', 'jpeg', 'png'];

    // Loop through possible image extensions and add all images to the left column
    imageExtensions.forEach(ext => {
        for (let i = 1; i <= 5; i++) { // Assuming a maximum of 10 images per folder
            const imagePath = `${folderPath}image${i}.${ext}`;
            const img = new Image();

            img.onload = () => {
                const imgElement = document.createElement('img');
                imgElement.src = imagePath;
                imgElement.alt = `Image ${i}`;
                imgElement.style.width = '100%'; // Adjust as needed
                leftColumn.appendChild(imgElement);
            };

            img.onerror = () => {
                // Ignore errors for missing images
            };

            img.src = imagePath;
        }
    });

    // Append the left column to the popup content
    popupContent.appendChild(leftColumn);

    // Create the right column (text information)
    const rightColumn = document.createElement('div');
    rightColumn.classList.add('popup-right'); // Use CSS class for styling

    // Add the project title as an <h2>
    const header = document.createElement('h2');
    header.textContent = clickedButton.dataset.projectTitle; // Use project title for the header
    header.classList.add('popup-title'); // Use CSS class for styling

    // Add the name underneath the project title
    const name = document.createElement('p');
    name.textContent = clickedButton.dataset.name; // Use name for the paragraph
    name.classList.add('popup-name'); // Use CSS class for styling

    // Add the project description
    const paragraph = document.createElement('p');
    paragraph.textContent = clickedButton.dataset.projectDescription || "No description available."; // Updated key
    paragraph.classList.add('popup-description'); // Use CSS class for styling

    // Append text elements to the right column
    rightColumn.appendChild(header);
    rightColumn.appendChild(name); // Add the name below the title
    rightColumn.appendChild(paragraph);

    // Append columns to the pop-up content
    popupContent.appendChild(leftColumn);
    popupContent.appendChild(rightColumn);

    // Append the pop-up content to the pop-up container
    popup.appendChild(popupContent);

    // Append the pop-up to the body
    document.body.appendChild(popup);

    // Animate the popup to expand to its full size and position
    setTimeout(() => {
        popup.style.position = 'fixed';
        popup.style.top = '0';
        popup.style.left = '0';
        popup.style.width = '100%';
        popup.style.height = '100%';
        popup.style.transform = 'none'; // Reset transform
    }, 0);
}

function addGridEventListeners() {
    const gridItems = document.querySelectorAll('.grid-item:not(.tag-item)'); // Exclude tag buttons

    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseup', (event) => { // Change to 'mouseup' to trigger after click release
            const clickedButton = event.target;

            if (clickedButton.classList.contains('center')) {
                document.querySelectorAll('.grid-item').forEach(btn => btn.classList.add('hidden'));

                setTimeout(() => {
                    createGridItems();
                    document.querySelectorAll('.grid-item').forEach(btn => {
                        btn.classList.add('hidden');
                        setTimeout(() => btn.classList.remove('hidden'), 50);
                    });
                }, 450);
            } else {
                DetailedInfo(clickedButton); // Call DetailedInfo directly without delay
            }
        });
    });

    setTimeout(() => document.getElementById('grid-container').classList.add('fade-in'), 50);
}

function addGridEventListenersNoPopup() {
    const tagItems = document.querySelectorAll('.tag-item'); // Select only tag buttons
    let resetTimeout; // Variable to store the timeout ID

    function resetGrid() {
        // Reset all tag buttons and grid items to their normal state
        tagItems.forEach(tagItem => tagItem.classList.remove('active')); // Remove active state from all tag buttons
        const gridItems = document.querySelectorAll('.grid-item'); // Select all grid items
        gridItems.forEach(gridItem => {
            gridItem.style.opacity = '1'; // Reset opacity to normal
        });
    }

    function startResetTimer() {
        // Clear any existing timeout and start a new one
        clearTimeout(resetTimeout);
        resetTimeout = setTimeout(() => {
            resetGrid(); // Reset everything after 10 seconds of inactivity
        }, userInteractionTimeoutDelay);
    }

    tagItems.forEach(tagItem => {
        // Add click event to handle the button behavior
        tagItem.addEventListener('click', () => {
            const tagName = tagItem.textContent; // Get the name of the tag (e.g., "Air")

            // Check if the button is already active
            if (tagItem.classList.contains('active')) {
                // Reset everything back to normal
                resetGrid();
                return; // Exit the function
            }

            // If not active, set it as active and apply the dimming logic
            tagItems.forEach(item => item.classList.remove('active')); // Remove active state from all tag buttons
            tagItem.classList.add('active'); // Set the clicked button as active

            // Enlarge the clicked button
            tagItem.style.transform = 'scale(1.05)'; // Enlarge the button
            tagItem.style.transition = 'transform 0.3s ease'; // Smooth transition
            setTimeout(() => {
                tagItem.style.transform = 'scale(1)'; // Reset the size after a short delay
            }, 300);

            // Change opacity of other grid items based on "biennaleTags"
            const gridItems = document.querySelectorAll('.grid-item:not(.tag-item)'); // Select all non-tag grid items
            gridItems.forEach(gridItem => {
                const biennaleTags = gridItem.dataset.biennaleTags
                    ? JSON.parse(gridItem.dataset.biennaleTags) // Parse the "biennaleTags" dataset
                    : [];

                if (!biennaleTags.includes(tagName)) {
                    gridItem.style.opacity = '0.2'; // Dim items that don't match the tag name
                } else {
                    gridItem.style.opacity = '1'; // Keep items with matching "biennaleTags" fully visible
                }
            });

            // Restart the reset timer on every click
            startResetTimer();
        });
    });

    // Start the reset timer when the function is initialized
    startResetTimer();

    setTimeout(() => document.getElementById('grid-container').classList.add('fade-in'), 50);
}

function displayAllItems() {
    // Create a new window
    const newWindow = window.open("", "_blank", "width=800,height=600,scrollbars=yes");

    // Add a title to the new window
    newWindow.document.write("<html><head><title>All Items</title></head><body>");
    newWindow.document.write("<h1>All Items</h1>");

    // Create a table to display the items
    newWindow.document.write("<table border='1' style='width: 100%; border-collapse: collapse;'>");
    newWindow.document.write("<thead><tr>");
    newWindow.document.write("<th>Name</th>");
    newWindow.document.write("<th>Project Title</th>");
    newWindow.document.write("<th>Project Description</th>");
    newWindow.document.write("<th>Tags</th>");
    newWindow.document.write("</tr></thead><tbody>");

    // Populate the table with items
    items.forEach(item => {
        newWindow.document.write("<tr>");
        newWindow.document.write(`<td>${item.name}</td>`);
        newWindow.document.write(`<td>${item.projectTitle}</td>`);
        newWindow.document.write(`<td>${item.projectDescription || "No description available"}</td>`);
        newWindow.document.write(`<td>${item.biennaleTags.join(", ")}</td>`);
        newWindow.document.write("</tr>");
    });

    newWindow.document.write("</tbody></table>");

    // Close the HTML structure
    newWindow.document.write("</body></html>");
    newWindow.document.close();
}

// Call the function to create the button when the page loads
window.onload = function () {
    createGridItems(); // Ensure the grid is created when the page loads
};

// Autoscrolling functions remain intact
let autoScrollInterval;
let userInteractionTimeout;
let isProgrammaticScroll = false; // Flag to differentiate programmatic scrolls

function startAutoScroll() {
    console.log("Starting auto-scroll...");
    let direction = 1; // 1 for scrolling down, -1 for scrolling up
    let scrollSpeed = 1; // Initial scroll speed in pixels per step
    const maxScrollSpeed = 1; // Maximum scroll speed
    const scrollDelay = 15; // Delay between scroll steps in milliseconds
    const pauseDuration = 2000; // Pause duration at the top or bottom in milliseconds
    const easingDuration = 1000; // Duration for easing in/out in milliseconds
    let isPaused = false; // Flag to prevent scrolling during the pause
    let easingInterval; // Interval for easing

    function easeScrollSpeed(targetSpeed, duration) {
        clearInterval(easingInterval);
        const speedStep = (targetSpeed - scrollSpeed) / (duration / scrollDelay);
        easingInterval = setInterval(() => {
            scrollSpeed += speedStep;
            if ((speedStep > 0 && scrollSpeed >= targetSpeed) || (speedStep < 0 && scrollSpeed <= targetSpeed)) {
                scrollSpeed = targetSpeed;
                clearInterval(easingInterval);
            }
        }, scrollDelay);
    }

    // Start the auto-scroll
    autoScrollInterval = setInterval(() => {
        if (isPaused || scrollSpeed === 0) return; // Skip scrolling if paused or speed is zero

        const scrollTop = window.scrollY; // Current vertical scroll position
        const scrollHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight
        ); // Total scrollable height
        const clientHeight = window.innerHeight; // Height of the viewport

        console.log(`ScrollTop: ${scrollTop}, ScrollHeight: ${scrollHeight}, ClientHeight: ${clientHeight}, ScrollSpeed: ${scrollSpeed}`);

        // Temporarily set the flag to true to indicate programmatic scrolling
        isProgrammaticScroll = true;

        // Check if we reached the bottom or top
        if (scrollTop + clientHeight >= scrollHeight - 1 && direction === 1) { // Adjusted condition
            console.log("Reached the bottom, pausing...");
            isPaused = true; // Pause scrolling
            easeScrollSpeed(0, easingDuration); // Ease out to stop
            setTimeout(() => {
                direction = -1; // Change direction to scroll up
                isPaused = false; // Resume scrolling
                easeScrollSpeed(maxScrollSpeed, easingDuration); // Ease in to resume
                console.log("Resuming scroll upwards...");
            }, pauseDuration);
        } else if (scrollTop <= 0 && direction === -1) {
            console.log("Reached the top, pausing...");
            isPaused = true; // Pause scrolling
            easeScrollSpeed(0, easingDuration); // Ease out to stop
            setTimeout(() => {
                direction = 1; // Change direction to scroll down
                isPaused = false; // Resume scrolling
                easeScrollSpeed(maxScrollSpeed, easingDuration); // Ease in to resume
                console.log("Resuming scroll downwards...");
            }, pauseDuration);
        }

        // Scroll the page
        window.scrollBy(0, scrollSpeed * direction);

        // Reset the flag after a short delay to allow the scroll event to process
        setTimeout(() => {
            isProgrammaticScroll = false;
        }, scrollDelay);
    }, scrollDelay);
}

function stopAutoScroll() {
    console.log("Stopping auto-scroll...");
    clearInterval(autoScrollInterval);
    autoScrollInterval = null; // Reset the interval reference
}

function resetAutoScrollTimer() {
    console.log("Resetting auto-scroll timer...");
    stopAutoScroll();
    clearTimeout(userInteractionTimeout);

    // Restart the auto-scroll after the specified delay, **only if no popup is open**
    userInteractionTimeout = setTimeout(() => {
        if (!document.querySelector('.popup-container') && autoScrollInterval === null) { // Check if no popup is open and auto-scroll is not running
            console.log(`No interaction detected for ${userInteractionTimeoutDelay / 1000} seconds and no popup is open, starting auto-scroll...`);
            startAutoScroll();
        } else {
            console.log("Popup is open or auto-scroll is already running, auto-scroll will not restart.");
        }
    }, userInteractionTimeoutDelay);
}

// Add event listeners to detect user interactions
['mousemove', 'keydown', 'touchstart', 'wheel'].forEach(eventType => {
    window.addEventListener(eventType, (event) => {
        console.log(`User interaction detected: ${eventType}`);
        resetAutoScrollTimer(); // Reset the auto-scroll timer on user interaction
    });
});

// Start auto-scroll when the page initially loads
startAutoScroll();
