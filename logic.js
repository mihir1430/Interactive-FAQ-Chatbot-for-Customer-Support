// FAQ Toggle Functionality
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const isVisible = answer.style.display === 'block';

        document.querySelectorAll('.faq-answer').forEach(a => {
            a.style.display = 'none';
            a.previousElementSibling.querySelector("span").textContent = "+";
        });

        answer.style.display = isVisible ? 'none' : 'block';
        button.querySelector("span").textContent = isVisible ? "+" : "−";
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    darkModeToggle.textContent = body.classList.contains('dark-mode') ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Remember Dark Mode Setting
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = "☀️ Light Mode";
}

// Search FAQ
document.getElementById('search-bar').addEventListener('input', function () {
    const searchText = this.value.toLowerCase();
    document.querySelectorAll('.faq').forEach(faq => {
        const question = faq.querySelector('.faq-question').textContent.toLowerCase();
        faq.style.display = question.includes(searchText) ? 'block' : 'none';
    });
});

