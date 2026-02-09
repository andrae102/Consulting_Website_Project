// js/form-handler.js

// Formspree and EmailJS configuration
const formspreeEndpoint = 'https://formspree.io/f/yourFormID'; // replace with your Formspree form ID
const emailJSServiceID = 'your_service_id';
const emailJSTemplateID = 'your_template_id';
const emailJSToken = 'your_emailjs_user_id';

// Validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Validate phone format (basic validation)
function validatePhone(phone) {
    const re = /^[0-9]{10,15}$/; // Adjust according to your needs
    return re.test(phone);
}

// Display error messages next to input fields
function displayError(input, message) {
    const errorDisplay = document.createElement('div');
    errorDisplay.className = 'error-message';
    errorDisplay.textContent = message;
    input.parentNode.appendChild(errorDisplay);
}

// Real-time validation
function realTimeValidation(input) {
    input.addEventListener('input', function () {
        const isValid = input.checkValidity();
        const errorDisplay = input.parentNode.querySelector('.error-message');
        if (errorDisplay) {
            errorDisplay.remove();
        }
        if (!isValid) {
            displayError(input, input.validationMessage);
        }
    });
}

// Spam protection (basic example)
function isSpam(input) {
    // Basic spam checking logic
    // This can be more sophisticated based on your requirements
    return input.value.includes('spam');
}

// Form submission
document.getElementById('contact-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (!validateEmail(email)) {
        displayError(document.getElementById('email'), 'Invalid email format');
        return;
    }
    
    if (!validatePhone(phone)) {
        displayError(document.getElementById('phone'), 'Invalid phone number');
        return;
    }

    if (isSpam(document.getElementById('message'))) {
        displayError(document.getElementById('message'), 'Your message looks like spam.');
        return;
    }

    // Send data to Formspree
    try {
        const response = await fetch(formspreeEndpoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                phone: phone,
                message: document.getElementById('message').value,
            })
        });

        if (response.ok) {
            // Send a notification via EmailJS
            const emailResponse = await emailjs.send(emailJSServiceID, emailJSTemplateID, {
                email: email,
                phone: phone,
                message: document.getElementById('message').value
            }, emailJSToken);
            alert('Message sent successfully!');
        } else {
            alert('There was an error sending your message. Please try again later.');
        }

    } catch (error) {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again later.');
    }
});

// Apply real-time validation
realTimeValidation(document.getElementById('email'));
realTimeValidation(document.getElementById('phone'));