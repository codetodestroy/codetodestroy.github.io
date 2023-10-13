const caroussel = document.querySelector(".categories-list");
const category = document.querySelector('.category');
const buttons = document.querySelectorAll(".btn-caroussel");

buttons[0].addEventListener('click', function() {
    const categoryWidth = category.clientWidth;
    caroussel.scrollLeft -= categoryWidth;
});

buttons[1].addEventListener('click', function(e) {
    const categoryWidth = category.clientWidth;
    caroussel.scrollLeft += categoryWidth;
});
