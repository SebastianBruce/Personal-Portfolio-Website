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
  const isDarkMode = currentTheme.includes("darkmode.css");

  // Toggle the theme
  const newTheme = isDarkMode ? "style.css" : "darkmode.css";

  // Update the href attribute
  document.getElementById("theme-style").setAttribute("href", newTheme);
});









