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


class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove characters
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add charaters
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 50;

    if (this.isDeleting) {
      // Increase speed by half when deleting
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".title-text");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}