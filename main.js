let currentSlide = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Automatically move to the next slide every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 9500);

// Initial slide
showSlide(currentSlide);
