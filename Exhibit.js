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
        gridItem.dataset.projectDescription = item.projectDescription;
        gridItem.dataset.projectTitle = item.projectTitle; // Store project title
        gridItem.dataset.creatorName = item.creatorName; // Store creator name

        // Dynamically construct the folder path based on the project title
        const projectTitle = item.projectTitle; // Remove spaces from project title
        const folderPath = `images/${encodeURIComponent(projectTitle)}/`; // Construct the folder path
        const fileExtensions = ['jpg', 'jpeg', 'png']; // Supported file extensions
        let imageFound = false; // Flag to track if an image is found

        // Check for the existence of the PrimaryImage file
        fileExtensions.forEach(ext => {
            if (imageFound) return; // Skip further checks if an image is already found

            const filePath = `${folderPath}PrimaryImage.${ext}`; // Construct the file path

            const fileElement = new Image(); // Use Image to check if the file exists
            fileElement.onload = () => {
                if (!imageFound) {
                    gridItem.style.backgroundImage = `url(${filePath})`; // Set the background image
                    gridItem.style.backgroundSize = 'cover'; // Ensure the image covers the entire grid item
                    gridItem.style.backgroundPosition = 'center'; // Center the image
                    imageFound = true; // Mark the image as found
                }
            };

            fileElement.onerror = () => {
                // Ignore errors for missing files
            };

            fileElement.src = filePath; // Trigger the file check
        });

        // Add additional data attributes to the grid item
        gridItem.dataset.projectDescription = item.projectDescription;
        gridItem.dataset.projectTitle = item.projectTitle; // Store project title
        gridItem.dataset.creatorName = item.creatorName; // Store creator name

        // Store "categoryTags" as a JSON string
        gridItem.dataset.categoryTags = JSON.stringify(item.categoryTags);

        // Append the grid item to the container (even if no image is found)
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
        tagItem.style.fontSize = '1rem'; // Adjust font size
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

    // Create the left column (image and video display)
    const leftColumn = document.createElement('div');
    leftColumn.classList.add('popup-left');

    // Dynamically load images and videos from the folder
    const projectTitle = clickedButton.dataset.projectTitle; // Keep spaces in the project title
    const folderPath = `images/${encodeURIComponent(projectTitle)}/`; // Encode the project title to handle spaces and special characters
    const fileExtensions = ['jpg', 'jpeg', 'png', 'tiff', 'tif', 'mp4']; // Supported file extensions

    for (let i = 1; i <= 10; i++) { // Assuming a maximum of 10 files per folder
        fileExtensions.forEach(ext => {
            const filePath = `${folderPath}image${i}.${ext}`; // Construct the file path
    
            if (ext === 'mp4') {
                // Handle video files separately
                fetch(filePath, { method: 'HEAD' }) // Check if the video file exists
                    .then(response => {
                        if (response.ok) {
                            const video = document.createElement('video');
                            video.src = filePath;
                            video.controls = true;
                            video.autoplay = true; // Enable autoplay
                            video.loop = true; // Enable looping
                            video.style.width = '100%';
                            video.style.marginTop = '10px';
                            leftColumn.appendChild(video);
                        }
                    })
                    .catch(() => {
                        // Ignore errors for missing video files
                    });
            } else {
                // Handle image files
                const fileElement = new Image(); // Use Image to check if the file exists
    
                fileElement.onload = () => {
                    const img = document.createElement('img');
                    img.src = filePath;
                    img.alt = `Project Media ${i}`;
                    img.style.width = '100%';
                    img.style.marginTop = '10px';
                    leftColumn.appendChild(img);
                };
    
                fileElement.onerror = () => {
                    // Ignore errors for missing image files
                };
    
                fileElement.src = filePath; // Trigger the file check
            }
        });
    }

    // Create the right column (text information)
    const rightColumn = document.createElement('div');
    rightColumn.classList.add('popup-right');

    // Add the project title as an <h2>
    const header = document.createElement('h2');
    header.textContent = clickedButton.dataset.projectTitle; // Use project title for the header
    header.classList.add('popup-title'); // Use CSS class for styling

    // Add the project description
    const paragraph = document.createElement('p');
    paragraph.textContent = clickedButton.dataset.projectDescription || "No description available."; // Updated key
    paragraph.classList.add('popup-description'); // Use CSS class for styling

    // Add the creator name underneath the description
    const creator = document.createElement('p');
    creator.textContent = `Credits: ${clickedButton.dataset.creatorName || "Unknown"}`; // Use creatorName for the paragraph
    creator.classList.add('popup-creator'); // Use CSS class for styling

    // Append text elements to the right column
    rightColumn.appendChild(header); // Add the title first
    rightColumn.appendChild(paragraph); // Add the description next
    rightColumn.appendChild(creator); // Add the creator name after the description

    // Append columns to the popup content
    popupContent.appendChild(leftColumn);
    popupContent.appendChild(rightColumn);

    // Append the popup content to the popup container
    popup.appendChild(popupContent);

    // Append the popup to the body
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

            // Add the expand class for the scaling effect
            clickedButton.classList.add('expand');

            // Remove the expand class after the animation duration
            setTimeout(() => {
                clickedButton.classList.remove('expand');
            }, 300); // Match the duration of the CSS transition

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
                setTimeout(() => {
                    DetailedInfo(clickedButton); // Call DetailedInfo directly
                }, 400); // Delay to allow the scaling effect to complete
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

            // Change opacity of other grid items based on "categoryTags"
            const gridItems = document.querySelectorAll('.grid-item:not(.tag-item)'); // Select all non-tag grid items
            gridItems.forEach(gridItem => {
                const categoryTags = gridItem.dataset.categoryTags
                    ? JSON.parse(gridItem.dataset.categoryTags) // Parse the "categoryTags" dataset
                    : [];

                if (!categoryTags.includes(tagName)) {
                    gridItem.style.opacity = '0.2'; // Dim items that don't match the tag name
                } else {
                    gridItem.style.opacity = '1'; // Keep items with matching "categoryTags" fully visible
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

createGridItems();

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