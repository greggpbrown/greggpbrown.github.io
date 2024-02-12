// My custom JavaScript goes here

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
            let element = document.createElement('div');

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

            // Create an anchor tag for the page link
            let link = document.createElement('a');
            link.href = item.pageURL;
            link.textContent = item.pageTitle;

            // Append the link to the element
            element.appendChild(link);

            // Append the element to the document body or other container
            navbar.appendChild(element);
        });
    })
    .catch(error => console.error('Error:', error));

console.log(currentPage)