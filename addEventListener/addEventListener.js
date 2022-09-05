const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const p = document.querySelector('#result');


//otra forma de escuchar eventos
//Método addEventListener, este método escucha cada vez que ocurre un evento, cada vez que ocurra ejecuta el código js que yo te diga.

/*EL MÉTODO RECIBE 2 ARGUMENTOS, EL PRIMERO EL EVENTO QUE QUEREMOS ESCUCHAR Y EL OTRO EL CÓDIGO DE JS
QUE QUEREMOS MANDAR A LLAMAR CUANDO SUCEDA EL EVENTO.

CON addEventListener solo ponemos el nombre de la función que queremos que ejecute, ya que el mismo método se los pone automaticamente
*/
// btn.addEventListener('click', btnOnClick);

// function btnOnClick () {
//      //console.log('Escuchando el evento de onclick, Function');
//      //console.log(Number(input1.value) + parseInt(input2.value));//funciones para convertir a numero
//     const result = Number(input1.value) + parseInt(input2.value)
//     p.innerText = "Resultado: " + result;
// };

//agregamos un form
//escuchamos el evento del form porque es el que hace que se recargue la página

form.addEventListener('submit', sumarInputValues);//por defecto el método envia como argumento el evento(el mismo que queremos escuchar)

function sumarInputValues (evento) {//lo comun es que el evento se reciba en la variable "e o event".


    console.log(evento);//El evento tiene muchas propiedades
    evento.preventDefault();//esta propiedad detiene o cancela el evento, lo que significa que cualquier acción por defecto que deba producirse como resultado de este evento, no ocurrirá.
    
    //RESUMEN: Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.

    //Puedes usar event.cancelable para comprobar si el evento es cancelable o no. Llamar a preventDefault para un evento no cancelable, no tiene ningún efecto.


    const result = Number(input1.value) + parseInt(input2.value)
    p.innerText = "Resultado: " + result;
};

//otra forma de resolver esto es usar el mismo código de antes, escuchar el evento del click, <button type="button" id="btnCalcular">Calcular</button> 
//agregar de forma explicita que el boton es de tipo boton, para el form no lo cambie a submit.