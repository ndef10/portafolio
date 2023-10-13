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

// contacto

const nombre =document.getElementById('nombre');
const correo =document.getElementById('correo');
const asunto =document.getElementById('asunto');
const mensaje =document.getElementById('mensaje');
const formulario =document.getElementById('form-contacto');
const parrafo =document.getElementById('mensaje-exito');

formulario.addEventListener("submit", function (e) {
    let enviar = false;
    const regex = (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/); 

    if(nombre.value.trim().length < 3) {
        nombre.nextElementSibling.classList.add("error");
        nombre.nextElementSibling.innerHTML = "Ingresa un nombre por favor" 
        enviar = true 
    } else {
        nombre.nextElementSibling.classList.remove("error"); 
        nombre.nextElementSibling.innerHTML = ""; 
    }

    if(!regex.test(correo.value)) {
        correo.nextElementSibling.classList.add("error");
        correo.nextElementSibling.innerHTML = "El correo ingresado no es válido"
        enviar = true
    } else {
        correo.nextElementSibling.classList.remove("error");
        correo.nextElementSibling.innerHTML = "";
    }

    if(mensaje.value.trim().length < 2) {
        mensaje.nextElementSibling.classList.add("error");
        mensaje.nextElementSibling.innerHTML = "Incluye un mensaje por favor"
        enviar = true  
    } else {
        mensaje.nextElementSibling.classList.remove("error");
        mensaje.nextElementSibling.innerHTML = "";
    }

    if(enviar) {
        e.preventDefault();
    } else {
        parrafo.classList.add("exito")
        parrafo.innerHTML = "¡Muchas gracias! Mensaje enviado con éxito";
    }
});







