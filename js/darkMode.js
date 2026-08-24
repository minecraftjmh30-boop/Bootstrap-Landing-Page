const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const pageHTML = document.querySelector('html');
const darkModeToggle = document.getElementById('btn-check');
const darkModeText = document.getElementById('dark-mode-text');

document.addEventListener("DOMContentLoaded", function () {
    if (isDarkMode) {
        pageHTML.setAttribute('data-bs-theme', 'dark');
        if (darkModeText) darkModeText.innerText = "Light Mode";
        if (darkModeToggle) darkModeToggle.checked = true;
    } else {
        pageHTML.setAttribute('data-bs-theme', 'light');
        if (darkModeText) darkModeText.innerText = "Dark Mode";
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function () {
            if (this.checked) {
                pageHTML.setAttribute('data-bs-theme', 'dark');
                if (darkModeText) darkModeText.innerText = "Light Mode";
            } else {
                pageHTML.setAttribute('data-bs-theme', 'light');
                if (darkModeText) darkModeText.innerText = "Dark Mode";
            }
        });
    }
});