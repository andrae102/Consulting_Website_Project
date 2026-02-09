// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scrolling
const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
};

// Scroll Animations
const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
};
window.addEventListener('scroll', revealElements);

// Accordion Functionality
const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        accordion.classList.toggle('active');
        let panel = accordion.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    counter.textContent = '0';
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.textContent;
        const increment = target / 200;
        if (count < target) {
            counter.textContent = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {
            counter.textContent = target;
        }
    }; 
    updateCount();
});

// Header Scroll Effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 0);
});

// Lazy Loading Images
const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.src = img.getAttribute('data-src');
        img.onload = () => img.removeAttribute('data-src');
    });
};
window.addEventListener('load', lazyLoadImages);

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const inputs = form.querySelectorAll('input, textarea');
    let valid = true;
    inputs.forEach(input => {
        if (!input.value) {
            valid = false;
            input.classList.add('invalid');
        } else {
            input.classList.remove('invalid');
        }
    });
    if (!valid) e.preventDefault();
});

// Notification System
const showNotification = (message) => {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
};

// Back to Top Button
const topButton = document.querySelector('.top-button');
topButton.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Video Play on Hover
const video = document.querySelector('.video');
video.addEventListener('mouseover', () => video.play());
video.addEventListener('mouseout', () => video.pause());

// Testimonial Slider
const slides = document.querySelectorAll('.testimonial');
let index = 0;
setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}, 5000);

// Console Branding
console.log('%cWelcome to the Consulting Website!','color: blue; font-size: 20px; font-weight: bold;');