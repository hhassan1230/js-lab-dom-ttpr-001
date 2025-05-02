const savedMode = localStorage.getItem("mode");
const body = document.body;

if (savedMode) {
    body.classList.add(savedMode);
} else {
    body.classList.add("light");
}
const toggleButton = document.getElementById("toggle-btn");

toggleButton.innerHTML = savedMode === "dark"
    ? "🌤️ Toggle Light Mode"
    : "🌙 Toggle Dark Mode";

function toggleDarkMode() {
    // This function should toggle the dark mode class on the body
    // comment out the alert below and replace it with your code
    // document.body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        body.classList.replace("dark", "light");
        localStorage.setItem("mode", "light");
        toggleButton.innerHTML = "🌙 Toggle Dark Mode";
    } else {
        body.classList.replace("light", "dark");
        localStorage.setItem("mode", "dark");
        toggleButton.innerHTML = "🌤️ Toggle Light Mode"
    }

    /*
      TODO: Replace the alert above with code that toggles
      the 'dark' class on <body>.
    */


}

document
    .getElementById("toggle-btn")
    .addEventListener("click", toggleDarkMode);