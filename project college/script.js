const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded');
    // Add any interactivity you want here
});
let counter = 1;
setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);
