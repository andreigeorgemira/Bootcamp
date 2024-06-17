const nombreCompleto = () => "Juan Pérez";

console.log(nombreCompleto());

function imprimirBoolean(valorBooleano) {
    console.log(valorBooleano);
}

imprimirBoolean(true);

function imprimirParametrosInfinitos(...parametros) {
    parametros.forEach((parametro) => console.log(parametro));
}

imprimirParametrosInfinitos(1, 2, 3, 4, 5);
