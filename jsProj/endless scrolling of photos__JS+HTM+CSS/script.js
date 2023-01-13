const carausel = document.querySelector('.carausel');
let isDragStart = false, prevPageX, prevScrollLeft;
let sliders = document.querySelectorAll('h1');

function createNewImages () {
    for (let i = 1; i < 6; i++) {
        let img = document.createElement('img');
        img.classList.add('imgItem');
        img.src = `./images/img-${i}.jpg`;
        carausel.appendChild(img);
    }
}

createNewImages();
createNewImages();
const firstImage = carausel.querySelectorAll('img')[0];
sliders.forEach((slider) => {
    slider.addEventListener('click', () => {
        carausel.scrollLeft += slider.id == 'right' ? firstImage.clientWidth + 25 : -firstImage.clientWidth + 15;
        if (carausel.scrollLeft > carausel.scrollWidth / 2) createNewImages();
        console.log(carausel.scrollLeft,carausel.scrollWidth)
    })
})

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carausel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    if (carausel.scrollLeft > carausel.scrollWidth / 2) createNewImages();
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carausel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}

carausel.addEventListener('mousedown', dragStart)
carausel.addEventListener('touchstart', dragStart)

carausel.addEventListener('mousemove', dragging);

carausel.addEventListener('mouseup', dragStop)