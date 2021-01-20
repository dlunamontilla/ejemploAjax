// Ejemplo 1:
seleccionarA.onchange = () => {
    let valor = seleccionarA.value;
    let ruta = `archivo.php?seleccionar=${valor}`;

    // Enviamos nuestra petición al servidor 
    // con JavaScript:
    fetch(ruta)
        .then(respuesta => respuesta.text())
        .then(data => {
            resultados.textContent = data;
            console.log(data);
        })
        .catch( error => {
            resultados.textContent = error;
        })
};

// Ejemplo 2:
seleccionarB.onchange = () => {
    console.clear();
    let texto = document.querySelector(`[value="${seleccionarB.value}"]`).textContent;
    let ruta = `archivo.php?seleccionar=${texto}`;

    // Enviamos la petición a PHP con JavaScript:
    fetch(ruta)
        .then(respuesta => respuesta.text())
        .then(data => {
            resultados.textContent = data;
            console.log(data);
        })
        .catch( error => {
            resultados.textContent = error;
        })
};