function mostrarTablas() {
    const tipo = document.getElementById("tipo").value;
    const resultado = document.getElementById("resultado_tablas");
    resultado.innerHTML = ""; 
    let inicio = tipo === "pares" ? 2 : 1;

    for (let i = inicio; i <= 10; i += 2) {
        const tabla = document.createElement("div");
        tabla.innerHTML = `<h3>Tabla del ${i}</h3>`;

        for (let j = 1; j <= 10; j++) {
            const linea = document.createElement("p");
            linea.textContent = `${i} x ${j} = ${i * j}`;
            tabla.appendChild(linea);
        }
        tabla.style.marginBottom = "15px";
        resultado.appendChild(tabla);
    }
}
