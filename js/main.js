
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

class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.stock = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

const productos = [];
productos.push(new Producto("Shampoo", "370"));
productos.push(new Producto("Cera para peinar", "400"));
productos.push(new Producto("tintura", "700"));

for (const producto of productos)
    producto.sumaIva();

    console.log(Producto.nombre)