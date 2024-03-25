document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    const form = document.querySelector("form");

    // Add event listener to the form for submission
    form.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Validate name field
        const nameInput = document.getElementById("name");
        if (!nameInput.value.trim()) {
            alert("Please enter your name.");
            nameInput.focus();
            return;
        }

        // Validate email field
        const emailInput = document.getElementById("email");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            return;
        }

        // You can add more validation for other fields if needed...

        // If all validations pass, submit the form
        this.submit();
    });
});
