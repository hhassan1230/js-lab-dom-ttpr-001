function toggleDarkMode() {
    // This function should toggle the dark mode class on the body
    // comment out the alert below and replace it with your code
    document.body.classList.toggle('dark');

    const isDarkMode = document.body.classList.contains('dark');

    const button = document.getElementById('toggle-btn');
    button.setAttribute('aria-pressed', isDarkMode ? 'true' : 'false');

    localStorage.setItem('darkMode', isDarkMode);

    alert("change color in this function");
  /*
    TODO: Replace the alert above with code that toggles
    the 'dark' class on <body>.
  */
}

const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true'){
  document.body.classList.add('dark');
  document.getElementById('toggle-btn').setAttribute('aria-pressed', 'true');
}

document
  .getElementById("toggle-btn")
  .addEventListener("click", toggleDarkMode);