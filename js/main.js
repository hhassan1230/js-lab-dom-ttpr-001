function toggleDarkMode() {
    // alert("change color in this function");
    document.body.classList.toggle("dark");
}

document
  .getElementById("toggle-btn")
  .addEventListener("click", toggleDarkMode);