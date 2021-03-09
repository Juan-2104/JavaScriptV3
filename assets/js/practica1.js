/// DOM Document-Objecto-Model
//Variables

let btnAlerta = document.getElementById("btnAlerta");

const ventanaAlerta = () =>{
    alert("Prueba");
}

// Onclick
btnAlerta.onclick = function () {
    ventanaAlerta();
}