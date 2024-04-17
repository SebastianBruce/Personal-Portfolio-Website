function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Get the dark mode toggle button
const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", function() {
  // Get the current theme
  const currentTheme = document.getElementById("theme-style").getAttribute("href");

  // Check if the current theme is dark mode
  const isDarkMode = currentTheme.includes("css/darkmode.css");

  // Toggle the theme
  const newTheme = isDarkMode ? "css/lightmode.css" : "css/darkmode.css";

  // Update the href attribute
  document.getElementById("theme-style").setAttribute("href", newTheme);
});

// Initialize Swiper
var testimonialSwiper = new Swiper('.testimonial-slider', {
  slidesPerView: 'auto',
  spaceBetween: 20, // Adjust spacing between slides
  loop: true,
  autoplay: {
    delay: 5000, // Adjust autoplay delay (in milliseconds)
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

