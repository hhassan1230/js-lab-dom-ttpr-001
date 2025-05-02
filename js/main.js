function toggleDarkMode() {
  // Toggle the 'dark' class on <body>
  document.body.classList.toggle("dark");

  // Update the aria-pressed attribute for accessibility
  const button = document.getElementById("toggle-btn");
  const isDark = document.body.classList.contains("dark");
  button.setAttribute("aria-pressed", isDark);
}

document
  .getElementById("toggle-btn")
  .addEventListener("click", toggleDarkMode);
