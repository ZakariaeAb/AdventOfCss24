const scrollIndicator = document.querySelector('.scroll-indicator');

document.addEventListener('scroll', () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled =  window.scrollY;

    scrollIndicator.style.width = `${(scrolled * 100) / scrollableHeight}%`;
});