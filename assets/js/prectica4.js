//variables
let dNombre = document.getElementById("dNombre");
let dEdad = document.getElementById("dEdad");
let dDocumento = document.getElementById("dDocumento");
let dTelefono = document.getElementById("dTelefono");



//Funciones

const guardarDatos = () => {

    let nombre=prompt("Ingrese su nombre:");
    let edad=prompt("Ingrese su edad:");
    let documento=prompt("Ingrese su documento");
    let telefono=prompt("Ingrese su teléfono:");
    console.log(nombre, edad, documento, telefono)

    if (nombre===""||edad===""||documento===""||telefono === "") {
        alert("Por favor complete todos los datos solicitados.");
    } else {
        dNombre.innerHTML = "Nombre: " + nombre;
        dEdad.innerHTML = "Edad: " + edad;
        dDocumento.innerHTML = "Documento: " + documento;
        dTelefono.innerHTML = "Teléfono: " + telefono;
    }

}

//Onclick

vVamos.onclick = function (){
    guardarDatos();
}