function toggleDarkMode() {
  // Toggle the 'dark' class on the <body>
  document.body.classList.toggle('dark');

  // Update the aria-pressed attribute for accessibility
  const button = document.getElementById("toggle-btn");
  const isPressed = button.getAttribute("aria-pressed") === "true";
  button.setAttribute("aria-pressed", String(!isPressed));
}


document
  .getElementById("toggle-btn")
  .addEventListener("click", toggleDarkMode);