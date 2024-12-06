const container = document.querySelector('.container');
const images = document.querySelectorAll('img');
let numberOfImages = document.querySelectorAll('img').length;
let columns = [];

function displayImages() {
    switch (numberOfImages) {
        case 1 :
            container.classList.add('one_img');
            break;
        case 2 :
            container.classList.add('two_img');
            break;
        case 3:
            container.classList.add('three_img');
            columns = ['1 / 2', '2 / 3', '1 / 3'];
            [...images].forEach((image, index) => {
                image.style.gridColumn = columns[index];
            });
            break;
        case 4 :
            container.classList.add('four_img');
            columns = ['1 / 2', '2 / 3', '1 / 2', '2 / 3'];
            [...images].forEach((image, index) => {
                image.style.gridColumn = columns[index];
            });
            break;
        case 5 :
            container.classList.add('five_img');
            columns = ['1 / 4', '4 / 7', '1 / 3', '3 / 5', '5 / 7'];
            [...images].forEach((image, index) => {
                image.style.gridColumn = columns[index];
            });
            break;
        default :
            container.classList.add('five_img');
            columns = ['1 / 4', '4 / 7', '1 / 3', '3 / 5', '5 / 7'];

            [...images].slice(0, 5).forEach((image, index) => {
                image.style.gridColumn = columns[index];
            });
            [...images].slice(5).forEach(img => img.style.display = 'none');

            const blurContainer = document.createElement('div');
            blurContainer.classList.add('blurred_img');
            blurContainer.innerHTML = `
                <div class="blur">
                    <span>+${numberOfImages - 5}</span>
                </div>
            `;

            blurContainer.appendChild(images[4]);
            container.appendChild(blurContainer);
            break;
    }
}

displayImages();