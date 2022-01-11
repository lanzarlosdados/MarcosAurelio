const menu = document.querySelector(".icon_menu");
const iconClose = document.querySelector(".icon_close");

const nav = document.querySelector(".navegacion");
const img_meditaciones = document.querySelectorAll(".img_meditaciones");
const contenedor_zoom = document.querySelector(".contenedor_zoom");
const img_zoom =document.querySelector(".img_zoom")

img_meditaciones.forEach( img =>{
    img.addEventListener('click', function() {
        const imgRuta= img.getAttribute("src");
        img_zoom.setAttribute("src",imgRuta);
        contenedor_zoom.classList.toggle("mostra_img_zoom")
        })
});

iconClose.addEventListener('click', function() {
    contenedor_zoom.classList.toggle("mostra_img_zoom")
});

menu.addEventListener('click', function() {
    nav.classList.toggle("mostrar_menu");
});
