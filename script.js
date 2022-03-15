const toggle = document.querySelector('.toggle');


function lightOrDark() {
    const root = document.documentElement;
    const newTheme = root.className === 'light' ? 'dark' : 'light';
    root.className = newTheme;
}


lightOrDark()

toggle.addEventListener('click', lightOrDark)

