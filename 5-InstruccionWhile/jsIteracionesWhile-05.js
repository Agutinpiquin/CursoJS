/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino*/
function mostrar() {
  let sexo; 
  sexo = prompt("ingrese sexo f/m").toLowerCase();
  
while (sexo != "f" && sexo != "m" ){
sexo = prompt("sexo invalido. ingrese sexo f/m").toLowerCase();
}
document.getElementById("txtSexo").value = sexo;

}
