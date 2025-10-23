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

// Ejercicio 5: Comparación entre colecciones vivas y estáticas
const listaViva = document.getElementsByTagName('li');
const listaEstatica = document.querySelectorAll('li');

console.log('Antes de agregar:');
console.log('getElementsByTagName (viva):', listaViva.length);//Muestra por consola 2 (elementos)
console.log('querySelectorAll (estática):', listaEstatica.length);//Muestra por consola 2 (elementos)

// Agregar nuevo elemento
const nuevoLi = document.createElement('li');
nuevoLi.textContent = 'Elemento 3';
document.getElementById('lista').appendChild(nuevoLi);

console.log('Después de agregar:');
console.log('getElementsByTagName (viva):', listaViva.length);//Muestra por consola 3 (elementos)
console.log('querySelectorAll (estática):', listaEstatica.length);//Muestra por consola 2 (elementos)

// Ejercicio 6: Crear elementos dinámicamente
const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'Creado dinámicamente';
document.body.appendChild(nuevoParrafo);