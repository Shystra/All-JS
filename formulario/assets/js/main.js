// Capturar evento de submit do formulario

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Test Ok');
});