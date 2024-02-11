const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMoreButton = document.getElementById('show-more-btn');

// Lightbox elements
const lightbox = document.getElementById('lightbox');
const closeLightbox = document.getElementById('close-lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const unsplashLink = document.getElementById('unsplash-link');

let keyword = "";
let page = 1;
const accessKey = '_b06Av3IpSm6CxQI7o7JXejfnyn8t7RP1ZvQU3XgkZ8';

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
        searchResult.innerHTML = '';
    }
    const results = data.results;

    if (results.length === 0) {
        searchResult.innerHTML = '<p style="text-align: center;">:( No images found. Please try a different search keyword.</p>'; // Display no results message
        showMoreButton.style.display = 'none'; // Hide the "Load More" button
    } else {
        results.forEach((result) => {
            const image = document.createElement('img');
            image.src = result.urls.small;
            image.dataset.unsplashUrl = result.links.html; // Store Unsplash URL in data attribute
            image.classList.add('search-result-image'); // Optional: for styling
            searchResult.appendChild(image);
        });

        showMoreButton.style.display = 'block'; // Only show if there are results
    }
}

// Event listener for submitting the search form
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

// Event listener for the "Show More" button
showMoreButton.addEventListener('click', () => {
    page++;
    searchImages();
});

// Event listener for opening images in the lightbox
searchResult.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        const imgSrc = e.target.src;
        const unsplashUrl = e.target.dataset.unsplashUrl;
        lightboxImg.src = imgSrc;
        unsplashLink.href = unsplashUrl;
        lightbox.style.display = 'block';
    }
});

// Close the lightbox when the close button is clicked
closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Optional: Close the lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
