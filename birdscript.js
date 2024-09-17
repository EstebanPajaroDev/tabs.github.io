// script.js
document.addEventListener('DOMContentLoaded', function() {
    const botonesPestanas = document.querySelectorAll('.pestana');
    const contenidos = document.querySelectorAll('.tab-content');

    botonesPestanas.forEach(boton => {
        boton.addEventListener('click', function() {
            // Remover la clase 'activa' de todas las pestañas
            botonesPestanas.forEach(pestana => pestana.classList.remove('activa'));
            // Agregar la clase 'activa' a la pestaña clickeada
            this.classList.add('activa');

            // Remover la clase 'activo' de todo el contenido
            contenidos.forEach(contenido => contenido.classList.remove('activo'));

            // Mostrar el contenido relacionado con la pestaña clickeada
            const tabSeleccionada = this.getAttribute('data-tab');
            document.getElementById(`contenido-${tabSeleccionada}`).classList.add('activo');
        });
    });
});
