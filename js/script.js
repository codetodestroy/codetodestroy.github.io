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

const openCreateAccount = document.querySelectorAll(".btn-signup");
const closeCreateAccount = document.querySelector(".close-modal-signup");
const modalSignUp = document.querySelector('.modal-signup');

const btnCreateAccountMobile = openCreateAccount[1];

btnCreateAccountMobile.addEventListener('click', () => {
    modalSignUp.classList.toggle('hidden-modal');
});

closeCreateAccount.addEventListener('click', () => {
    modalSignUp.classList.toggle('hidden-modal');
});