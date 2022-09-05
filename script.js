// console.log("Hello, world");

//Leyendo HTML desde JavaScript
//En chrome o en los entornos de ejecución de js, nos dan muchas funciones que nos ayudan a modificar/leer html, 
//nos ahorra el tiempo de crearlas. En entornos como nodejs, tienen funciones distintas ya que se encargan del backend.

//Crear variables que representen a los selectores de cada uno de los elementos del html.
//querySelector selecciona el primer el elemento que se encuentre correspondiente al selector que le pongamos.
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');//para seleccionar una clase se utiliza la misma sintaxis de css
//const parrafito = document.getElementsByClassName('parrafito'); Solo selecciona clases, solo se necesita el nombre de la clase 
const pid = document.querySelector('#pid');//para seleccionar un id se utiliza la misma sintaxis de css
//const pid = document.getElementById('pid'); Selecciona solamente id, solo se necesita su nombre
const input = document.querySelector('input');

//De esta manera podemos ver las propiedades de cada elemento
// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// });

// //Aqui vemos su valor
// console.log(h1)


//Escribiendo HTML desde JavaScript, Clase 2
h1.innerHTML = "Patito <br> Feo"; //Cambia el contenido del h1 por Patito Feo y br lo agrega como código html
h1.innerText = "Patito <br> Feoooo";//Todo lo que esta entre comillas lo pasa a texto 

// console.log(h1.getAttribute("class")); //getAttribute lee el valor de un atributo, pasamos como argumento el nombre del atributo leer del elemento.
// h1.setAttribute('class', 'verde'); //Cambia el valor del atributo, (nombreDelAtributo, nuevoValor)

h1.classList.add('verde'); //agregamos una nueva clase al elemento
h1.classList.remove('rojo'); //eliminamos una clase


input.value = "123"; //para agregar un valor por default al input

//Crear o agregar un elemento html desde js

console.log(document.createElement('span'));//En consola: <span></span>

//creamos una var que guarde la etiqueta img
const img = document.createElement('img');
//agregamos un atributo a la img
img.setAttribute('src', 'https://www.nationalgeographic.com.es/medio/2018/02/27/monos__1280x720.jpg');
//La imprimos en la consola
console.log(img);
//Agregamos la imagen dentro del elemento p(pid)
pid.append(img);//Hay mas funciones para agregar html, appendChild y innerHTML