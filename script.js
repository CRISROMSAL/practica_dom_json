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

//Ejercicio 7: Crear nodos de texto
const nodoTexto = document.createTextNode('Este es un nodo de texto');
document.getElementById('contenedor').appendChild(nodoTexto);

// Ejercicio 8: Añadir atributos a un elemento
const imagen = document.createElement('img');
imagen.setAttribute('src', 'https://media.revistagq.com/photos/607d3e0c4286e6a59febbacc/master/pass/los-simpson.jpg');
imagen.setAttribute('alt', 'Imagen generada por JS'); //Esto se utiliza para mostrar un texto descriptivo si la imagen no se carga, para ayudar a personas con discapacidad visual y mejorar el SEO.
document.body.appendChild(imagen);

// Ejercicio 9: Crear estructura completa
const tarjeta = document.createElement('div'); // Crear el div principal de la tarjeta
tarjeta.className = 'card'; // Añadirle la clase 'card' de Bootstrap

const tarjetaCuerpo = document.createElement('div'); // Crear el div interno del cuerpo de la tarjeta
tarjetaCuerpo.className = 'card-body'; // Añadirle la clase 'card-body' de Bootstrap

const titulo = document.createElement('h5'); // Crear el título h5
titulo.className = 'card-title'; // Añadirle la clase 'card-title' de Bootstrap
titulo.textContent = 'Título de la tarjeta'; // Añadir el texto del título

const texto = document.createElement('p'); // Crear el párrafo
texto.className = 'card-text'; // Añadirle la clase 'card-text' de Bootstrap
texto.textContent = 'Este es el texto de la tarjeta creada dinámicamente.'; // Añadir el texto del párrafo

const boton = document.createElement('button'); // Crear el botón
boton.className = 'btn btn-primary'; // Añadirle las clases 'btn btn-primary' de Bootstrap
boton.textContent = 'Botón'; // Añadir el texto del botón

tarjetaCuerpo.appendChild(titulo); // Añadir el título dentro de tarjetaCuerpo
tarjetaCuerpo.appendChild(texto); // Añadir el texto dentro de tarjetaCuerpo
tarjetaCuerpo.appendChild(boton); // Añadir el botón dentro de tarjetaCuerpo

tarjeta.appendChild(tarjetaCuerpo); // Añadir tarjetaCuerpo dentro de cuerpo

document.querySelector('.container').appendChild(tarjeta); // Añadir toda la tarjeta dentro del primer container de la página
