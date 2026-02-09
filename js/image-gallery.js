// image-gallery.js

// Lightbox functionality
function openLightbox(imageUrl) {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    const img = document.createElement('img');
    img.src = imageUrl;
    lightbox.appendChild(img);
    document.body.appendChild(lightbox);

    lightbox.onclick = function() {
        lightbox.remove();
    };
}

// Lazy loading functionality
const lazyLoadImages = document.querySelectorAll('.lazy');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

lazyLoadImages.forEach(img => {
    imageObserver.observe(img);
});