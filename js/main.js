const toggleBtn = document.querySelector("#toggle-btn");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  toggleBtn.setAttribute("aria-pressed", isDark);
});
