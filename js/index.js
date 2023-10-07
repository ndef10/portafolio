// menu

const menu = document.querySelector('.menu');
const abrir = document.querySelector('.hamburguesa');
const cerrar = document.querySelector('.btn-cerrar');

function toggleMenu() {
    menu.classList.toggle('menu_abierto');
}

abrir.addEventListener('click', toggleMenu);
cerrar.addEventListener('click', toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener("click", function() {
        menu.classList.remove("menu_abierto");
    })
})

