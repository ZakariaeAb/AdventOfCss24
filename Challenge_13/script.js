const svgContainers = document.getElementsByClassName('svg-container');
const textContainer = document.querySelector('.text-container');

[...svgContainers].forEach(container => {
    container.addEventListener('click', () => {
        [...svgContainers].forEach(c => c.classList.remove('active'));
        container.classList.add('active');
        textContainer.innerText = container.dataset.name;
    })
});