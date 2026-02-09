// form-handler.js

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    const formData = new FormData(event.target);

    // Process form data (e.g., send to API or log it)
    console.log('Form submission data:', Object.fromEntries(formData));

    // Example of sending to a server using fetch
    // fetch('https://your-api-endpoint.com/submit', {
    //     method: 'POST',
    //     body: formData,
    // });
}

// Attach event listener to the form
const form = document.getElementById('your-form-id');
if (form) {
    form.addEventListener('submit', handleFormSubmission);
}