
function loginadmin(){
    let nombreadmin = prompt ("Ingrese su nombre de administrador")
    if (nombreadmin == "Ivoski"){
        alert("¡Hola, Ivoski!");
        sacarturno()
    }else{
        alert("You not Ivoski, Get out here!");
    }

}

function sacarturno(){
    for (let i = 1; i <= 5; i++) {
        let ingresarNombre = prompt ("Ingresar Nombre para sacar un turno");
        alert("Turno N°"+i+"Nombre: "+ingresarNombre);
    }
}

loginadmin();

