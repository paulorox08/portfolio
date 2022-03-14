function lightOrDark() {
    const root = document.documentElement;
    const newTheme = root.className === 'light' ? 'dark' : 'light';
    root.className = newTheme;

}

lightOrDark()

document.querySelector('.toggle').addEventListener('click', lightOrDark)
