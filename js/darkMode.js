const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const pageHTML = document.querySelector('html');
const darkModeToggle = document.getElementById('btn-check');

document.addEventListener("DOMContentLoaded", function () {
    if (isDarkMode) {
        pageHTML.setAttribute('data-bs-theme', 'dark');
        if (darkModeToggle) darkModeToggle.checked = true;
    } else {
        pageHTML.setAttribute('data-bs-theme', 'light');
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function () {
            if (this.checked) {
                pageHTML.setAttribute('data-bs-theme', 'dark');
            } else {
                pageHTML.setAttribute('data-bs-theme', 'light');
            }
        });
    }
});