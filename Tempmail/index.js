// script.js

    const input = document.getElementById("input");
    const mailQr = document.querySelector(".bg-gray-500");
    const copyQr = document.getElementById("copyQr");

    // Function to generate a random email address
    function generateRandomEmail() {
        const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const passwordLength = Math.floor(Math.random() * (12 - 8 + 1)) + 8; // Random length between 8 and 12
        let randomEmail = "";

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomEmail += characters[randomIndex];
        }

        return randomEmail + "@example.com";
    }

    // Function to copy text to clipboard and highlight the input field
    function copyToClipboardAndHighlight(text) {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);

        // Highlight the input field
        input.select();
    }

    // Event listener for generating a random email on mailQr click
    mailQr.addEventListener("click", function () {
        const randomEmail = generateRandomEmail();
        input.value = randomEmail;
    });

    // Event listener for copying the email on copyQr click
    copyQr.addEventListener("click", function () {
        const emailToCopy = input.value;
        copyToClipboardAndHighlight(emailToCopy);
    });

    // Handle visibility for different breakpoints
function handleVisibility() {
    if (window.innerWidth >= 600) {
        // Code to run for wider screens
        copyQr.style.display = "flex";
    } else {
        // Code to run for smaller screens
        copyQr.style.display = "none";
    }
}


    // Initial call to handle visibility based on the window width
    handleVisibility();

    // Listen for window resize events to handle visibility dynamically
    window.addEventListener("resize", handleVisibility);


