const btnBurgerMenu = document.querySelector('.header-menu');
const btnCloseModal = document.querySelector('.close-header-menu');

const btnMenuModal = document.querySelector('.header-menu-modal');

function showMenu() {
    btnMenuModal.classList.toggle('hidden-modal');
    document.body.classList.toggle('hidden-scroll');
}

btnBurgerMenu.addEventListener('click', showMenu);
btnCloseModal.addEventListener('click', showMenu);