# Ejemplo PHP

## Enviar datos al servidor

Partiendo de un `select` :

``` html
<select name="seleccionar" id="seleccionar">
    ...
</select>
```

Para capturar su valor con **JavaScript** podrías hacer lo siguiente:

``` js
seleccionar.onchange = () => {
    console.log(seleccionar.value);
}
```

Es decir:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    seleccionar.onchange = () => {
      console.clear();

      console.log(seleccionar.value);
    }

<!-- language: lang-html -->

    <select id="seleccionar">
      <option value="">Seleccione un valor</option>
      <option value="valor1">Primer valor</option>
      <option value="valor2">Segundo valor</option>
      <option value="valor3">Tercer valor</option>
      <option value="valor4">Último valor</option>
    </select>

<!-- end snippet -->

Si embargo, para capturar el texto de la opción seleccionada y no su valor (bastante inusual) podrías plantearlo de esta manera:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    seleccionar.onchange = () => {
      console.clear();

      const elemento = document.querySelector( `[value="${seleccionar.value}"]` );

      console.log(elemento.textContent);
    };

<!-- language: lang-html -->

    <select name="seleccionar" id="seleccionar">
      <option value="">Seleccione un valor</option>
      <option value="valor1">Primer valor</option>
      <option value="valor2">Segundo valor</option>
      <option value="valor3">Tercer valor</option>
      <option value="valor4">Último valor</option>
    </select>

<!-- end snippet -->

Ahora bien, ya que tenemos claro esto, la pregunta es, ¿cómo pasar el valor de una variable **JavaScript** a **PHP**?

Se hace mediante una petición **Ajax**.

Por ejemplo, vamos a crear los fragmentos que siguen más abajo para reproducir el experimento.

Se tiene el siguiente fragmento HTML:

``` html
<select name="seleccionar" id="seleccionar">
    <option value="">Seleccione un valor</option>
    <option value="valor1">Primer valor</option>
    <option value="valor2">Segundo valor</option>
    <option value="valor3">Tercer valor</option>
    <option value="valor4">Último valor</option>
</select>
```

Podrías definir en JavaScript lo que sigue:

``` js
seleccionar.onchange = () => {
    let valor = seleccionar.value;
    let ruta = `archivo.php?seleccionar=${valor}`;

    // Enviamos nuestra petición al servidor 
    // con JavaScript:
    fetch(ruta)
        .then(respuesta => respuesta.text())
        .then(data => {
            console.log(data);
        })
};
```

En este caso, pasar el `valor` de un `select` como parámetro para que sea asignado a una variable `PHP` en el siguiente fragmento:

**archivo.php:**

``` php
<?php
$variablePHP = $_GET['seleccionar'];
echo $variablePHP;
```

Donde `seleccionar` es el índice de **`$_GET`**.

## Pasar texto de la opción seleccionada

Para enviar el texto de la opción seleccionada se sigue el mismo procedimiento que en el caso anterior, pero, con una pequeña diferencia:

Se tiene el siguiente fragmento HTML:

``` html
<select name="seleccionar" id="seleccionar">
    <option value="">Seleccione un valor</option>
    <option value="valor1">Primer valor</option>
    <option value="valor2">Segundo valor</option>
    <option value="valor3">Tercer valor</option>
    <option value="valor4">Último valor</option>
</select>
```

Podrías definir en JavaScript lo que sigue, pero con una diferencia:

``` js
seleccionar.onchange = () => {
    console.clear();
    let texto = document.querySelector(`[value="${seleccionar.value}"]`).textContent;
    let ruta = `archivo.php?seleccionar=${texto}`;

    // Enviamos la petición a PHP con JavaScript:
    fetch(ruta)
        .then(respuesta => respuesta.text())
        .then(data => {
            console.log(data);
        })
};
```

Y finalmente, sin cambios, nuestro archivo **PHP.**

**archivo.php:**

``` php
<?php
$variablePHP = $_GET['seleccionar'];
echo $variablePHP;
```

Si desea profundizar sobre el uso de **fetch** podrías visitar la documentación oficial de **Mozilla:** [Uso de Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch)



## Actualización

Dada la siguiente inquietud presentada en los comentarios lo dejé disponible en [**GitHub**][repositorio] con el objeto de facilitar las pruebas.

 También lo puedes clonar directamente:

``` shell
git clone https://github.com/dlunamontilla/ejemploAjax.git
```

[repositorio]:https://github.com/dlunamontilla/ejemploAjax "Ir al repositorio"