const slides = document.querySelectorAll(".work-slide");
const previousButton = document.querySelector("#prev-slide");
const nextButton = document.querySelector("#next-slide");
const currentSlideText = document.querySelector("#current-slide");

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
    currentSlideText.textContent = String(index + 1).padStart(2, "0");
}

previousButton.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});