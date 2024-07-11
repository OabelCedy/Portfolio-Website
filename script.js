// Get all the navigation links
const navLinks = document.querySelectorAll('nav a');

// Add click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior

    // Get the target section based on the link's href
    const targetId = event.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    // Scroll to the target section smoothly
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});