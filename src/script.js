
const html = document.documentElement;
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
});

// keep user preference
if (localStorage.theme === 'dark') html.classList.add('dark');
