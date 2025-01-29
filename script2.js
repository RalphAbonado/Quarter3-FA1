document.addEventListener('DOMContentLoaded', function() {
    // Prompt user for input
    let firstName = prompt("Enter your first name:");
    let lastName = prompt("Enter your last name:");
    let birthYear = prompt("Enter your birth year:");

    // Calculate age
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;

    // Display information
    document.getElementById('output').innerText = `Hello ${firstName} ${lastName}! How does it feel to be ${age} years old?`;
});
