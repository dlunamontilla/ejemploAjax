<?php
function get( string $variable ) {
    return ( isset( $_GET[(string) $variable ]) )
        ? $_GET[(string) $variable ] : "";
}


$variablePHP = get("seleccionar");
echo "\$variablePHP => $variablePHP";
?>