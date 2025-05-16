document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('button');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    toggleButton.setAttribute('aria-pressed', isDark);
  });
});
