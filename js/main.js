function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

document
  .getElementById("toggle-btn")
  .addEventListener("click", toggleDarkMode);