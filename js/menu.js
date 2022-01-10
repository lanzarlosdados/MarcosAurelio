const menu = document.querySelector(".icon_menu");
const nav = document.querySelector(".navegacion");



menu.addEventListener('click', function() {
    nav.classList.toggle("mostrar_menu");
});