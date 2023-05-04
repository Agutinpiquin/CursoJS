/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar(){
let numero;
while (numero < 0 || numero > 9 || isNaN(numero)){
numero = parseInt(prompt("ingrse un numero entr 0 y 9"));
}
document.getElementById("txtNumero").value = numero;
}