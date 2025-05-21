function generarTabla() {
    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado_tabla");
    resultado.innerHTML = "";
    numero = parseInt(numero);

    if (isNaN(numero)) {
        resultado.textContent = "Ingresa un valor numerico";
        return;
    }
    for (let i = 1; i <= 12; i++) {
        let producto = numero * i;
        let respuesta = document.createElement("p");
        respuesta.textContent = `${numero} x ${i} = ${producto}`;
        resultado.appendChild(respuesta);
    }
}
