const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const p = document.querySelector('#result');


//otra forma de escuchar eventos

function btnOnClick () {
    //console.log('Escuchando el evento de onclick, Function');
    //console.log(Number(input1.value) + parseInt(input2.value));//funciones para convertir a numero
    const result = Number(input1.value) + parseInt(input2.value)
    p.innerText = "Resultado: " + result;
}