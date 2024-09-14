// Script to populate project list

// Find the project list section
const projectlist = document.querySelector('#projectlist');

// Using fetch API to read the JSON file
fetch('../data/projects.json')
    .then(response => response.json())
    .then(data => {
        // Loop thru the data
        data.forEach(item => {
            // Create an article element
            let article = document.createElement('article');

            // Add the URL
            let pageURL = document.createElement('a');
            pageURL.href = item.pageURL;
            // pageURL.textContent = "View "+ item.pageTitle +" Project";
            pageURL.target = "_blank";
            article.appendChild(pageURL);

            // Add the title
            let title = document.createElement('h3');
            title.textContent = item.pageTitle;
            pageURL.appendChild(title);

            // Add the description
            let description = document.createElement('p');
            description.textContent = item.description;
            pageURL.appendChild(description);


            // Append to project list
            projectlist.appendChild(article);            
        });
    })
