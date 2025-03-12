// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const scrollingText = document.createElement('div'); // Create a div for the rolling text
    scrollingText.classList.add('scrolling-text'); // Add a class for styling

    // Add your message or text here
    scrollingText.innerHTML = "Welcome to VD Sports! Get the best sports products now. ";

    // Append the created scrolling text to the body or a specific section
    const heroSection = document.querySelector('.hero');
    heroSection.appendChild(scrollingText);

    // Variables
    const textElement = scrollingText;
    const container = heroSection;
    const containerWidth = container.offsetWidth;
    const textWidth = textElement.offsetWidth;
    const scrollSpeed = 2; // Adjust scroll speed

    // Start the rolling text animation
    let currentPosition = containerWidth;

    function animateText() {
        currentPosition -= scrollSpeed;

        // Reset position once the text completely scrolls off-screen
        if (currentPosition <= -textWidth) {
            currentPosition = containerWidth;
        }

        // Apply the current position to the scrolling text element
        textElement.style.transform = `translateX(${currentPosition}px)`;

        // Request the next frame to create a smooth animation loop
        requestAnimationFrame(animateText);
    }

    // Initialize animation
    animateText();
});
