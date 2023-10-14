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

// ============================================================== //

const modals = document.querySelectorAll('.modal-form');

const btnLogin = document.querySelectorAll('.btn-login');
const btnCloseLogin = document.querySelector('.close-modal-login');
const btnSignUp = document.querySelectorAll('.btn-signup');
const btnCloseSignUp = document.querySelector('.close-modal-signup');

function openModalLogin() {
    modals[1].classList.toggle('hidden-modal');
    document.body.style.overflow = 'hidden';
}

function closeModalLogin() {
    alert('teste');
}

function openModalSignUp() {
    modals[0].classList.toggle('hidden-modal');
    document.body.style.overflow = 'hidden';
}

function closeModalSignUp() {
    modals[0].classList.toggle('hidden-modal');
}

btnLogin[0].addEventListener('click', openModalLogin);
btnLogin[1].addEventListener('click', openModalLogin);
btnLogin[2].addEventListener('click', openModalLogin);
btnSignUp[0].addEventListener('click', openModalSignUp);
btnSignUp[1].addEventListener('click', openModalSignUp);
btnSignUp[2].addEventListener('click', openModalSignUp);

btnCloseSignUp.addEventListener('click', closeModalSignUp);