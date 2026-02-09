// booking-integration.js

// Integrate Calendly booking functionality

function initCalendly() {
    Calendly.initInlineWidget({
        url: 'https://calendly.com/YOUR_CALENDLY_LINK',
        parentElement: document.getElementById('calendly-inline-widget'),
        prefill: {
            email: 'customer@example.com',
            firstName: 'John',
            lastName: 'Doe',
        },
        utm: {} // Optional UTM parameters
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initCalendly();
});
