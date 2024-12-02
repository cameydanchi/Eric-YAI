const header = document.querySelector('header');

// Listen to the scroll event
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {  // When the user scrolls down 50px or more
        header.classList.add('scrolled');  // Add the "scrolled" class
    } else {
        header.classList.remove('scrolled');  // Remove the "scrolled" class
    }
});
