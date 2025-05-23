function toggleDarkMode() {
 
  document.body.classList.toggle('dark');


  const isDark = document.body.classList.contains('dark');
  document.getElementById("toggle-btn").setAttribute("aria-pressed", isDark);

  
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

document
  .getElementById("toggle-btn")
  .addEventListener("click", toggleDarkMode);

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    document.getElementById("toggle-btn").setAttribute("aria-pressed", true);
  }
});
