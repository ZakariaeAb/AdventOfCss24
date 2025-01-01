window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        document.querySelectorAll('.card').forEach(card => {
            card.style.transform = 'none';
            card.style.position = 'static';
            card.style.marginBottom = '2rem';
        });
    } else {
        const cards = document.querySelectorAll('.card');
        cards[0].style.transform = 'rotate(-4.67deg)';
        cards[1].style.transform = 'rotate(4.27deg) translateX(-50%)';
        cards[1].style.position = 'absolute';
        cards[1].style.top = '0.5rem';
        cards[1].style.left = '50%';
        cards[2].style.transform = 'translateX(-50%)';
        cards[2].style.position = 'absolute';
        cards[2].style.top = '0';
        cards[2].style.left = '50%';
    }
});