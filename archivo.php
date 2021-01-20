<?php
function get( string $string ) {
    return ( isset($_GET[(string) $string]) )
        ? $_GET[(string) $string] : "";
}

$variablePHP = get("seleccionar");
echo $variablePHP;