// script.js

// Dark/Light Mode Toggle
const toggle = document.getElementById("theme-toggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  });
}

// Save Theme Between Visits
window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
  }
  // Initialize AOS
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true
  });
});
