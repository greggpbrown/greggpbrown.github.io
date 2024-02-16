// Script to poulate the Nav Bar

// Find the nav bar
const navbar = document.querySelector('nav');
const currentPage = "./" + window.location.href.split('/').pop();

// Using fetch API to read the JSON file
fetch('../data/sitemap.json')
    .then(response => response.json())
    .then(data => {
        // Loop through the data
        data.forEach(item => {
            // Create a new element for each item in the data
            let element = document.createElement('a');
            element.href = item.pageURL;
            
            // Add classes to the element
            element.classList.add('nav-item');
            
            // Check if current page
            if (currentPage == item.pageURL) {
                element.classList.add('current');
            }

            // Add the icon
            let icon = document.createElement('i');
            icon.classList.add('fa', item.navIcon);
            element.appendChild(icon);
            
            // Add the text
            let navtext = document.createElement('div');
            navtext.textContent = item.pageTitle;
            element.appendChild(navtext);

            // Append the element to the document body or other container
            navbar.appendChild(element);
        });
    })
    .catch(error => console.error('Error:', error));