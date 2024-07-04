// scripts.js

document.addEventListener('DOMContentLoaded', (event) => {
    // Get the "Read More" button in the About Us section
    const readMoreButton = document.querySelector('#about button');

    // Add a click event listener to the button
    readMoreButton.addEventListener('click', () => {
        alert('Read more about us!');
    });

    // Form validation for the contact form
    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', (event) => {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        if (!name || !email || !message) {
            event.preventDefault();
            alert('Please fill in all fields.');
        }
    });

    // Add more JavaScript code here to enhance your website functionality
});
