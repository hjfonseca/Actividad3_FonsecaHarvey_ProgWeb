let edad = prompt("Hola! Cúal es tu edad? ");
let resultado = document.getElementById("resultado_edad");

if (edad === null) {
    console.log("Ingresa una edad");
    resultado.textContent = "Ingresa tu edad";
} else {
    edad = parseInt(edad);
    if (isNaN(edad)) {
        console.log("Error, ingresa un valor entero");
        resultado.textContent = "Error, ingresa un valor entero";
    } else {
        if (edad < 0) {
            console.log("Error, valor negativo");
            resultado.textContent = "Error, valor negativo";
        } else if (edad <= 12) {
            console.log("Niño");
            resultado.textContent = "Eres un niño/a";
        } else if (edad <= 17) {
            console.log("Adolescente");
            resultado.textContent = "eres un adolescente";
        } else if (edad <= 59) {
            console.log("Adulto");
            resultado.textContent = "Eres un adulto/a";
        } else {
            console.log("Adulto mayor");
            resultado.textContent = "Eres un adulto/a mayor";
        }
    }
}

