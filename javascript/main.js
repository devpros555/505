document.addEventListener("DOMContentLoaded", function () {
    // 🔹 Fix for Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navContainer = document.querySelector(".nav-container");

    // Ensure menu button exists before adding event listener
    if (menuToggle && navContainer) {
        menuToggle.addEventListener("click", function () {
            console.log("Menu clicked"); // Debugging
            navContainer.classList.toggle("active");
        });
    }

    // 🔹 Carousel Functionality
    let slideIndex = 0;
    const slides = document.querySelector(".carousel-images");
    const totalSlides = document.querySelectorAll(".carousel-images img").length;
    const dots = document.querySelectorAll(".dot");

    function updateCarousel() {
        slides.style.transform = `translateX(${-slideIndex * 100}vw)`;
        dots.forEach(dot => dot.classList.remove("active"));
        dots[slideIndex].classList.add("active");
    }

    function moveSlide(n) {
        slideIndex += n;
        if (slideIndex < 0) slideIndex = totalSlides - 1;
        if (slideIndex >= totalSlides) slideIndex = 0;
        updateCarousel();
    }

    function jumpToSlide(n) {
        slideIndex = n;
        updateCarousel();
    }

    // Auto-slide every 3 seconds
    setInterval(() => moveSlide(1), 3000);

    // Initialize the first slide as active
    updateCarousel();

    // Attach event listeners to navigation dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => jumpToSlide(index));
    });

    // Attach event listeners to navigation buttons
    document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
    document.querySelector(".next").addEventListener("click", () => moveSlide(1));
});
