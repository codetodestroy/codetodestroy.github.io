const categoriesCarrossel = document.querySelector('.categories-list');

let pressed = false;
let startX = 0;

categoriesCarrossel.addEventListener('mousedown', function (e) {
    pressed = true;
    startX = e.clientX;
    categoriesCarrossel.style.cursor = 'grabbing';
})

categoriesCarrossel.addEventListener('mouseleave', function (e) {
    pressed = false;
})

window.addEventListener('mouseup', function (e) {
    pressed = false;
    categoriesCarrossel.style.cursor = 'grab';
})

categoriesCarrossel.addEventListener('mousemove', function (e) {
    if(!pressed) {
        return
    }

    categoriesCarrossel.scrollLeft += startX - e.clientX;
})