function toggleDarkMode() {
  // Toggle the 'dark' class on the body
  document.body.classList.toggle('dark');

  const button = document.getElementById("toggle-btn");
  const isDarkMode = document.body.classList.contains('dark');
  button.setAttribute("aria-pressed", isDarkMode);
}

document
  .getElementById("toggle-btn")
  .addEventListener("click", toggleDarkMode);
