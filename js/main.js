//let nombreingresado = prompt ("Ingrese su nombre");
//let apellidoingresado = prompt ("Ingrese su apellido");
//let nombrecompleto = "Su nombre completo es: " + nombreingresado + " " + apellidoingresado;
//alert(nombrecompleto);

let nombreadmin = prompt ("Ingrese su nombre de administrador")

if (nombreadmin == "Ivoski"){
    alert("¡Hola, Ivoski!");
}else{
    alert("You not Ivoski, Get out here!");
}

for (let i = 1; i <= 8; i++) {
    let ingresarNombre = prompt ("Ingresar Nombre");
    alert("Turno N°"+i+"Nombre: "+ingresarNombre);
}

let total = 0

function sumar (primernum, segnum){
    total = primernum + segnum
}

function mostrar (mensaje) {
    console.log (mensaje)
}

sumar(1000,500);
mostrar(resultado);