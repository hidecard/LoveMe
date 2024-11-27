document.getElementById('yesButton').addEventListener('click', function() {
    const image = document.getElementById('mainImage');
    const caption = document.getElementById('caption');

    // Change the image and caption when "Yes" is clicked
    image.src = "./img/img2.avif"; // Replace with the second image URL
    caption.textContent = "Thank you for liking it!";
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    const button = document.getElementById('noButton');
    const randomX = Math.random() * 200 - 100; // Random X position
    const randomY = Math.random() * 200 - 100; // Random Y position
    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
