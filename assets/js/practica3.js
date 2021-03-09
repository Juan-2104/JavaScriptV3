//variables

let btnNombre = document.getElementById("btnNombre");
let hNombre = document.getElementById("hNombre") ;

//Funciones

const guardarNombre = () => {
    let nombre=prompt("Ingresa tu nombre: ");
    console.log(nombre);
    if (nombre === "") {
        alert("Por favor ingrese un nombre.");
    } else {
        hNombre.innerHTML = "Hola: " + nombre;
    }

}

//Onclick

btnNombre.onclick = function (){
    guardarNombre();
}
