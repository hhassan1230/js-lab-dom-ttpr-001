function toggleDarkMode() {
    // This function should toggle the dark mode class on the body
    // comment out the alert below and replace it with your code
    //alert("change color in this function");
    document.body.classList.toggle('dark');
  /*
    TODO: Replace the alert above with code that toggles
    the 'dark' class on <body>.
  */
  };

function darkModeButton(){
  if (localStorage.getItem("dark") !== null) {
    localStorage.removeItem("dark");
  } else {
    localStorage.setItem("dark", "true");
  }

  toggleDarkMode();
};

window.onload = function() {
  if (localStorage.getItem("dark") !== null){
  toggleDarkMode();
  }
};

document
  .getElementById("toggle-btn")
  .addEventListener("click", darkModeButton);