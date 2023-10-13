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
const mensajes =document.getElementById('contenedor-mensajes');

formulario.addEventListener("submit", e => {
    let alerta = ""
    let enviar = false;
    const regex = (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/); 
    mensajes.innerHTML = ""
    if(nombre.value.trim().length < 3) {
        alerta += `Ingresa un nombre por favor <br>`
        enviar = true 
    } 

    if(!regex.test(correo.value)) {
        alerta += `Correo no es válido <br>`
        enviar = true
    } 

    if(mensaje.value.trim().length < 2) {
        alerta += `Incluye un mensaje por favor <br>`
        enviar = true  
    } 

    if(enviar) {
        mensajes.innerHTML = alerta;
        e.preventDefault();
        
    } else {
        mensajes.classList.add("exito")
        mensajes.innerHTML = `Gracias por contactar!! <br> Mensaje enviado`;
    }
});







