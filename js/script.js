const carousselCategories = document.querySelector(".categories-list");
const category = document.querySelector('.category');
const buttons = document.querySelectorAll(".btn-caroussel");

buttons[0].addEventListener('click', function() {
    const categoryWidth = category.clientWidth;
    carousselCategories.scrollLeft -= categoryWidth;
});

buttons[1].addEventListener('click', function(e) {
    const categoryWidth = category.clientWidth;
    carousselCategories.scrollLeft += categoryWidth;
});

const openMenuMobile = document.querySelector('.btn-burger');
const closeMenuMobile = document.querySelector('.close-header-menu');
const modelMenuMobile = document.querySelector('.header-nav-menu-modal-visitant');

openMenuMobile.addEventListener('click', () => {
    modelMenuMobile.classList.toggle('hidden-modal');
    document.body.style.overflow = 'hidden';
});

closeMenuMobile.addEventListener('click', () => {
    modelMenuMobile.classList.toggle('hidden-modal');
    document.body.style.overflow = 'scroll';
});