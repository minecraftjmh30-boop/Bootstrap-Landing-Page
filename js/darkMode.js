const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const pageHTML = document.querySelector('html');
const darkModeToggle = document.getElementById('btn-check');
const darkModeLabel = document.querySelector('label[for="btn-check"]');

document.addEventListener("DOMContentLoaded", function () {
    if (isDarkMode) {
        pageHTML.setAttribute('data-bs-theme', 'dark');
        if (darkModeLabel) darkModeLabel.innerText = "Toggle Light Mode";
        if (darkModeToggle) darkModeToggle.checked = true;
    } else {
        pageHTML.setAttribute('data-bs-theme', 'light');
        if (darkModeLabel) darkModeLabel.innerText = "Toggle Dark Mode";
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function () {
            if (this.checked) {
                pageHTML.setAttribute('data-bs-theme', 'dark');
                if (darkModeLabel) darkModeLabel.innerText = "Toggle Light Mode";
            } else {
                pageHTML.setAttribute('data-bs-theme', 'light');
                if (darkModeLabel) darkModeLabel.innerText = "Toggle Dark Mode";
            }
        });
    }
});