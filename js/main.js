function toggleDarkMode() {
  // This function should toggle the dark mode class on the body
  // comment out the alert below and replace it with your code
  // alert("change color in this function");
  document.body.classList.toggle("dark");
  /*
    TODO: Replace the alert above with code that toggles
    the 'dark' class on <body>.
  */
}

document.getElementById("toggle-btn").addEventListener("click", toggleDarkMode);
