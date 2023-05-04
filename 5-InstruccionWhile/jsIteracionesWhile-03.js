/*
al presionar el botón pedir la CLAVE (ayuda: es abc123)*/
function mostrar() {
  let pass_guardado = "abc123";
  let clave;
  clave = prompt("ingrse clave:");

  while (clave != pass_guardado){
  
    clave = prompt("clave invalida. reingrsar clave");


  }
alert ("bienvenido")

}
