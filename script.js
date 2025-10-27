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

// Ejercicio 10: Insertar elementos en distintas posiciones
const lista = document.getElementById('miLista'); // Seleccionar la lista ul

const liAlFinal = document.createElement('li'); // Crear un li para añadir al final
liAlFinal.textContent = 'Elemento añadido al final de la lista con append';

const liAlInicio = document.createElement('li'); // Crear un li para añadir al inicio
liAlInicio.textContent = 'Elemento añadido al principio de la lista con prepend';

const parrafoAntes = document.createElement('p'); // Crear un párrafo para colocar antes del ul
parrafoAntes.textContent = 'Elemento añadido antes de la lista con before';

const parrafoDespues = document.createElement('p'); // Crear un párrafo para colocar después del ul
parrafoDespues.textContent = 'Elemento añadido despues de la lista con after';

lista.append(liAlFinal); // append(): añade el li al final, dentro del ul
lista.prepend(liAlInicio); // prepend(): añade el li al inicio, dentro del ul
lista.before(parrafoAntes); // before(): coloca el párrafo antes del ul 
lista.after(parrafoDespues); // after(): coloca el párrafo despues del ul

// Ejercicio 11: Reemplazar y eliminar
const botonEliminar = document.getElementById('botonEliminar'); // Selecciona el botón eliminar
const botonReemplazar = document.getElementById('botonReemplazar'); // Selecciona el botón reemplazar
const parrafo11 = document.getElementById('parrafoEjercicio11'); // Selecciona el párrafo

botonEliminar.onclick = function() { // Cuando se hace clic en el botón eliminar
    parrafo11.remove(); // Elimina el párrafo del DOM
    console.log('Párrafo eliminado'); // Muestra mensaje en consola
};

botonReemplazar.onclick = function() { // Cuando se hace clic en el botón reemplazar
    const nuevoElemento = document.createElement('p'); // Crea un parrafo
    nuevoElemento.textContent = 'Elemento reemplazado'; // Le añade texto
    parrafo11.replaceWith(nuevoElemento); // Reemplaza el párrafo con el h3
};

// Ejercicio 12: Clonar elementos
const botonClonar = document.getElementById('botonClonar'); // Selecciona el botón clonar
const tarjeta12 = document.getElementById('tarjeta12'); // Selecciona la tarjeta original

botonClonar.onclick = function() { // Cuando se hace clic en el botón
    const clon = tarjeta12.cloneNode(true); // Clona la tarjeta con todo su contenido
    clon.querySelector('.card-text').textContent = 'Texto de la tarjeta clonada'; // Cambia el texto del clon
    tarjeta12.parentNode.appendChild(clon); // Añade el clon al contenedor. Aqui utilizamo el parentNode porque queremos poner el clon al lado de la tarjeta original, no dentro. En otros ejercicios no hemos puesto el parentNode porque porque queriamos añadir algo dentro del elemento que tenemos.
};

// Ejercicio 13: Crear lista dinámica con botón
const botonAgregar = document.getElementById('botonAgregar'); // Selecciona el botón
const listaDinamica = document.getElementById('listaDinamica13'); // Selecciona la lista

botonAgregar.onclick = function() { // Cuando se hace clic en el botón
    const nuevoLi = document.createElement('li'); // Crea un nuevo elemento li
    nuevoLi.textContent = 'Nuevo elemento'; // Le añade texto
    listaDinamica.appendChild(nuevoLi); // Añade el li a la lista
};

// Ejercicio 14: Eliminar último elemento
const botonEliminarUltimoElemento = document.getElementById('botonEliminarUltimoElemento'); // Selecciona el botón eliminar

botonEliminarUltimoElemento.onclick = function() { // Cuando se hace clic en el botón
    listaDinamica.lastElementChild.remove(); // Elimina el último hijo de la lista
};

// Ejercicio 15: Recorrer colección y modificar
const items = document.querySelectorAll('.item'); // Selecciona todos los elementos con clase item
items.forEach(function(item, pos) { // Recorre cada elemento
    item.textContent = 'Elemento ' + (pos + 1); // Numera cada elemento (pos empieza en 0, sumamos 1)
});

// Ejercicio 16: Crear una galería con JSON local
const imagenes = [ // Array con objetos JSON
    { titulo: "Montaña", url: "https://via.placeholder.com/150/1" },
    { titulo: "Lago", url: "https://via.placeholder.com/150/2" },
    { titulo: "Bosque", url: "https://via.placeholder.com/150/3" }
];

const contenedorGaleria = document.createElement('div'); // Crea un contenedor para la galería
contenedorGaleria.className = 'container my-5'; // Le añade clases de Bootstrap
document.body.appendChild(contenedorGaleria); // Añade el contenedor al body

imagenes.forEach(function(imagen) { // Recorre cada objeto del array
    const tarjeta = document.createElement('div'); // Crea una tarjeta
    tarjeta.className = 'card'; // Le añade la clase card
    tarjeta.style.width = '18rem'; // Le establece un ancho
    tarjeta.style.display = 'inline-block'; // Las tarjetas se muestran en línea
    tarjeta.style.margin = '10px'; // Añade margen entre tarjetas
    
    const img = document.createElement('img'); // Crea la imagen
    img.className = 'card-img-top'; // Le añade la clase de Bootstrap
    img.src = imagen.url; // Establece la URL de la imagen
    img.alt = imagen.titulo; // Establece el texto alternativo
    
    const tarjetaBody = document.createElement('div'); // Crea el cuerpo de la tarjeta
    tarjetaBody.className = 'card-body'; // Le añade la clase card-body
    
    const titulo = document.createElement('h5'); // Crea el título
    titulo.className = 'card-title'; // Le añade la clase card-title
    titulo.textContent = imagen.titulo; // Establece el texto del título
    
    tarjetaBody.appendChild(titulo); // Añade el título al cuerpo
    tarjeta.appendChild(img); // Añade la imagen a la tarjeta
    tarjeta.appendChild(tarjetaBody); // Añade el cuerpo a la tarjeta
    contenedorGaleria.appendChild(tarjeta); // Añade la tarjeta al contenedor
});


// Ejercicio 17: Mostrar datos de API JSONPlaceholder

const listaUsuarios = document.createElement("ul"); // Crea un elemento ul vacío
document.body.appendChild(listaUsuarios); //Añade la lista ul al body de la página

fetch("https://jsonplaceholder.typicode.com/users") // Hace la petición GET a la API para obtener usuarios
    .then(function(respuesta) { // Recibe la respuesta de la API (paquete cerrado)
        return respuesta.json(); // Convierte la respuesta a JSON (se abre el paquete)
    })
    .then(function(usuarios) { // Recibe el array usuarios ya convertido a JSON
        usuarios.forEach(function(usuario){ // Recorre cada usuario del array
        
        const li = document.createElement('li'); // Crea un elemento li para cada usuario

        li.textContent = usuario.name + ' - ' + usuario.email; // Añade nombre y email del usuario como texto del li
        listaUsuarios.appendChild(li); // Añade el li a la lista lu
        });
    });


 // Ejercicio 18: Mostrar datos anidados de JSON
fetch("https://jsonplaceholder.typicode.com/users") // Hace la petición a la API
    .then(function(respuesta) { // Recibe la respuesta
        return respuesta.json(); // Convierte a JSON
    })
    .then(function(usuarios) { // Recibe el array de usuarios
        const tabla = document.createElement('table'); // Crea la tabla
        tabla.className = 'table container my-5'; // Le añade clases de Bootstrap
        
        const encabezado = document.createElement('thead'); // Crea el encabezado de la tabla
        const filaEncabezado = document.createElement('tr'); // Crea la fila del encabezado
        
        const columnaNombre = document.createElement('th'); // Crea columna para nombre
        columnaNombre.textContent = 'Name'; // Añade texto
        const columnaEmail = document.createElement('th'); // Crea columna para email
        columnaEmail.textContent = 'Email'; // Añade texto
        const columnaCiudad = document.createElement('th'); // Crea columna para ciudad
        columnaCiudad.textContent = 'City'; // Añade texto
        
        filaEncabezado.appendChild(columnaNombre); // Añade columna nombre a la fila
        filaEncabezado.appendChild(columnaEmail); // Añade columna email a la fila
        filaEncabezado.appendChild(columnaCiudad); // Añade columna ciudad a la fila
        encabezado.appendChild(filaEncabezado); // Añade la fila al encabezado
        tabla.appendChild(encabezado); // Añade el encabezado a la tabla
        
        const cuerpo = document.createElement('tbody'); // Crea el cuerpo de la tabla
        
        usuarios.forEach(function(usuario) { // Recorre cada usuario
            const fila = document.createElement('tr'); // Crea una fila
            
            const celdaNombre = document.createElement('td'); // Crea celda para nombre
            celdaNombre.textContent = usuario.name; // Añade el nombre
            const celdaEmail = document.createElement('td'); // Crea celda para email
            celdaEmail.textContent = usuario.email; // Añade el email
            const celdaCiudad = document.createElement('td'); // Crea celda para ciudad
            celdaCiudad.textContent = usuario.address.city; // Añade la ciudad (dato anidado)
            
            fila.appendChild(celdaNombre); // Añade celda nombre a la fila
            fila.appendChild(celdaEmail); // Añade celda email a la fila
            fila.appendChild(celdaCiudad); // Añade celda ciudad a la fila
            cuerpo.appendChild(fila); // Añade la fila al cuerpo
        });
        
        tabla.appendChild(cuerpo); // Añade el cuerpo a la tabla
        document.body.appendChild(tabla); // Añade la tabla al body
    });   

    // Ejercicio 19: Filtrar y mostrar datos
fetch("https://jsonplaceholder.typicode.com/users") // Hace la petición a la API
    .then(function(respuesta) { // Recibe la respuesta
        return respuesta.json(); // Convierte a JSON
    })
    .then(function(usuarios) { // Recibe el array de usuarios
        const contenedor = document.createElement('div'); // Crea un contenedor
        contenedor.className = 'container my-5'; // Le añade clases de Bootstrap
        
        const usuariosFiltrados = usuarios.filter(function(usuario) { // Filtra los usuarios
            return usuario.email.endsWith('.biz'); // Devuelve solo los que terminan en .biz
        });
        
        usuariosFiltrados.forEach(function(usuario) { // Recorre cada usuario filtrado
            const tarjeta = document.createElement('div'); // Crea una tarjeta
            tarjeta.className = 'card'; // Le añade la clase card
            tarjeta.style.width = '18rem'; // Establece el ancho
            tarjeta.style.margin = '10px'; // Añade margen
            
            const cuerpoTarjeta = document.createElement('div'); // Crea el cuerpo de la tarjeta
            cuerpoTarjeta.className = 'card-body'; // Le añade la clase card-body
            
            const nombre = document.createElement('h5'); // Crea el título
            nombre.className = 'card-title'; // Le añade la clase card-title
            nombre.textContent = usuario.name; // Añade el nombre del usuario
            
            const email = document.createElement('p'); // Crea un párrafo
            email.className = 'card-text'; // Le añade la clase card-text
            email.textContent = usuario.email; // Añade el email del usuario
            
            cuerpoTarjeta.appendChild(nombre); // Añade el nombre al cuerpo
            cuerpoTarjeta.appendChild(email); // Añade el email al cuerpo
            tarjeta.appendChild(cuerpoTarjeta); // Añade el cuerpo a la tarjeta
            contenedor.appendChild(tarjeta); // Añade la tarjeta al contenedor
        });
        
        document.body.appendChild(contenedor); // Añade el contenedor al body
    });

    // Ejercicio 20: Ejercicio final - mini "visor de usuarios"
const botonCargarUsuarios = document.getElementById('botonCargarUsuarios'); // Selecciona el botón cargar
const botonClonarUltimo = document.getElementById('botonClonarUltimo'); // Selecciona el botón clonar
const contenedorUsuarios = document.getElementById('contenedorUsuarios'); // Selecciona el contenedor

botonCargarUsuarios.onclick = function() { // Cuando se hace clic en cargar usuarios
    fetch("https://jsonplaceholder.typicode.com/users") // Hace la petición a la API
        .then(function(respuesta) { // Recibe la respuesta
            return respuesta.json(); // Convierte a JSON
        })
        .then(function(usuarios) { // Recibe el array de usuarios
            usuarios.forEach(function(usuario) { // Recorre cada usuario
                const tarjeta = document.createElement('div'); // Crea una tarjeta
                tarjeta.className = 'card'; // Le añade la clase card
                tarjeta.style.width = '18rem'; // Establece el ancho
                tarjeta.style.display = 'inline-block'; // Las muestra en línea
                tarjeta.style.margin = '10px'; // Añade margen
                
                const cuerpoTarjeta = document.createElement('div'); // Crea el cuerpo de la tarjeta
                cuerpoTarjeta.className = 'card-body'; // Le añade la clase card-body
                
                const nombre = document.createElement('h5'); // Crea el título
                nombre.className = 'card-title'; // Le añade la clase card-title
                nombre.textContent = usuario.name; // Añade el nombre
                
                const email = document.createElement('p'); // Crea un párrafo para el email
                email.className = 'card-text'; // Le añade la clase card-text
                email.textContent = 'Email: ' + usuario.email; // Añade el email
                
                const ciudad = document.createElement('p'); // Crea un párrafo para la ciudad
                ciudad.className = 'card-text'; // Le añade la clase card-text
                ciudad.textContent = 'Ciudad: ' + usuario.address.city; // Añade la ciudad
                
                const botonEliminar = document.createElement('button'); // Crea el botón eliminar
                botonEliminar.className = 'btn btn-danger'; // Le añade clases de Bootstrap
                botonEliminar.textContent = 'Eliminar'; // Añade el texto del botón
                botonEliminar.onclick = function() { // Cuando se hace clic en eliminar
                    tarjeta.remove(); // Elimina la tarjeta del DOM
                };
                
                cuerpoTarjeta.appendChild(nombre); // Añade el nombre al cuerpo
                cuerpoTarjeta.appendChild(email); // Añade el email al cuerpo
                cuerpoTarjeta.appendChild(ciudad); // Añade la ciudad al cuerpo
                cuerpoTarjeta.appendChild(botonEliminar); // Añade el botón al cuerpo
                tarjeta.appendChild(cuerpoTarjeta); // Añade el cuerpo a la tarjeta
                contenedorUsuarios.appendChild(tarjeta); // Añade la tarjeta al contenedor
            });
        });
};

botonClonarUltimo.onclick = function() { // Cuando se hace clic en clonar último
    const ultimaTarjeta = contenedorUsuarios.lastElementChild; // Obtiene la última tarjeta
    if (ultimaTarjeta) { // Si existe una tarjeta
        const clon = ultimaTarjeta.cloneNode(true); // Clona la tarjeta completa
        contenedorUsuarios.appendChild(clon); // Añade el clon al contenedor
    }
};