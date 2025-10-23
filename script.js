// Ejercico 1 Cambiar el texto del h1 usando getElementById
document.getElementById('titulo').textContent = 'Nuevo título';

// Ejercicoi 1 Cambiar el color del párrafo usando getElementsByTagName
document.getElementsByTagName('p')[0].style.color = 'pink'; //El [0] es para seleccionar el primer párrafo.

// Ejercico 2 Cambiar el fondo del div usando getElementsByClassName
const textos = document.getElementsByClassName('texto');

for (let i = 0; i < textos.length; i++) {
    textos[i].style.backgroundColor = 'gray';
}

// Ejercicio 3: Selección con querySelector: Devuelve sólo el primer elemento
const caja = document.querySelector('.caja');
caja.style.border = '2px solid orange';
caja.style.backgroundColor = 'pink';

// Ejercicio 4: Selección con querySelectorAll: Devuelve todos los elementos 
const botones = document.querySelectorAll('.btn-dom');

botones.forEach(function(boton) {
    boton.textContent = 'DOM listo';
});

