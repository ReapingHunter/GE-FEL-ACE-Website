const numOfPages = 16;

// Store numOfPages in localStorage
localStorage.setItem('numOfPages', numOfPages);

// Function to populate the gallery with dynamic content
let populateGallery = function(){
    const pagesContainer = document.getElementById('pages-container');

    for(let x = 1; x <= numOfPages; x++){
        let page = document.createElement('div');
        page.classList.add('page');

        page.id = x;
        
        let pageFrame = document.createElement('a');
        pageFrame.href = `singular.html?page=${x}`;
        pageFrame.classList.add('page-frame');

        let pageImg = document.createElement('div');
        pageImg.classList.add('page-img');
        let imageUrl = `pages/${x}.webp`;
        pageImg.style.backgroundImage = `url(${imageUrl})`;
        pageFrame.appendChild(pageImg);

        page.appendChild(pageFrame);

        let pageNumDiv = document.createElement('div');
        pageNumDiv.classList.add('page-num');
        pageNumDiv.textContent = `${x}`;

        page.appendChild(pageNumDiv);

        pagesContainer.appendChild(page);

        // Add click event to each page
        page.addEventListener('click', function() {
            window.location.href = `singular.html?page=${x}`;
        });
    }
}

populateGallery();
