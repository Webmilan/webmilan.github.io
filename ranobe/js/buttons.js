const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

prevButton.addEventListener("click", () => showSlide(currentSlide - 1));
nextButton.addEventListener("click", () => showSlide(currentSlide + 1));


