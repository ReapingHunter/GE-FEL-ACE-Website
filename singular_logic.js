document.addEventListener('DOMContentLoaded', function() {
    // Retrieve numOfPages from localStorage
    const numOfPages = localStorage.getItem('numOfPages');
    const urlParams = new URLSearchParams(window.location.search);
    const pageId = parseInt(urlParams.get('page')); // Convert pageId to integer for arithmetic operations

    if (pageId) {
        const singularPageContainer = document.getElementById('singular-page-container');

        // Create singular page frame
        const singularPageFrame = document.createElement('div');
        singularPageFrame.classList.add('singular-page-frame');

        // Create page image
        const pageImg = document.createElement('div');
        pageImg.classList.add('page-img');
        let imageUrl = `pages/${pageId}.webp`;
        pageImg.style.backgroundImage = `url(${imageUrl})`;
        singularPageFrame.appendChild(pageImg);

        // Append singular page frame to container
        singularPageContainer.appendChild(singularPageFrame);

        // Update page number on the page
        const pageNav = document.getElementById('page-nav');
        let pageNum = document.createElement('div');
        pageNum.classList.add('page-num');
        pageNum.textContent = `${pageId}`;

        // Add event listeners to left-triangle and right-triangle for navigation
        const leftTriangle = document.createElement('div');
        const rightTriangle = document.createElement('div');
        leftTriangle.classList.add('left-triangle');
        rightTriangle.classList.add('right-triangle');

        leftTriangle.addEventListener('click', function() {
            if (pageId > 1) {
                window.location.href = `singular.html?page=${pageId - 1}`;
            }
        });

        rightTriangle.addEventListener('click', function() {
            // You may need to adjust the condition based on the total number of pages
            if (pageId < numOfPages) {
                window.location.href = `singular.html?page=${pageId + 1}`;
            }
        });

        if(pageId <= 1){
            leftTriangle.style.display = 'none';
        }
        if(pageId >= numOfPages){
            rightTriangle.style.display = 'none';
        }
        pageNav.appendChild(leftTriangle);
        pageNav.appendChild(pageNum);
        pageNav.appendChild(rightTriangle);
        
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const leftTriangle = document.querySelector('#page-nav .left-triangle');
    const rightTriangle = document.querySelector('#page-nav .right-triangle');

    leftTriangle.addEventListener('click', function() {
        this.style.transform = 'translate(2px, 2px)'; // Move slightly downright on click
        setTimeout(() => {
            this.style.transform = 'translate(0, 0)'; // Reset the transform after a short delay
        }, 300);
    });

    rightTriangle.addEventListener('click', function() {
        this.style.transform = 'translate(-2px, 2px)'; // Move slightly downright on click
        setTimeout(() => {
            this.style.transform = 'translate(0, 0)'; // Reset the transform after a short delay
        }, 300);
    });
});
