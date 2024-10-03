// popup.js

// Function to create and display the popup
function openPopup(event) {
    // Prevent default link behavior
    event.preventDefault();

    // Remove any existing popup
    const existingPopup = document.querySelector('.popup');
    if (existingPopup) {
      existingPopup.remove();
    }

    // Create a new popup element
    const popup = document.createElement('div');
    popup.classList.add('popup'); // Add a class for future reference
    popup.style.position = 'absolute';
    popup.style.left = `${event.pageX}px`; // Position relative to the click
    popup.style.top = `${event.pageY}px`;
    popup.style.width = '400px';
    popup.style.height = '300px';
    popup.style.backgroundColor = '#f9f9f9';
    popup.style.border = '1px solid #ddd';
    popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    popup.style.padding = '10px';
    popup.style.zIndex = '1000';

    // Get all elements with the class 'gutter-bottom-xs'
    const gutterElements = document.querySelectorAll('.gutter-bottom-xs');

    // Create a container for the gutter elements
    const contentContainer = document.createElement('div');
    gutterElements.forEach((element) => {
      const clonedElement = element.cloneNode(true); // Clone the element
      contentContainer.appendChild(clonedElement); // Append to the container
    });

    // Append the content to the popup
    popup.appendChild(contentContainer);

    // Append the popup to the body
    document.body.appendChild(popup);

    // Add event listener to close the popup if clicked outside of it
    document.addEventListener('click', function(event) {
      if (!popup.contains(event.target)) {
        popup.remove(); // Remove the popup
      }
    }, { once: true });
  }

  // Add event listeners to all h3 elements with class 'category-title'
  document.querySelectorAll('h3.category-title').forEach(function(h3) {
    h3.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevent the click from bubbling to the document
      openPopup(event); // Open the popup
    });
  });
