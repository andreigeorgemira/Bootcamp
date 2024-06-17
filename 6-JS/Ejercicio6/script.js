document.write("La suma de los tres números 1, 2 y 3 es " + sumaTresNumeros(1, 2, 3) + "<br>");
document.write("Mi nombre es " + nombreConcatenado("Andrei", "George", "Mira") + "<br>");
document.write("El número más grande entre 5 y 2 es " + numeroMayor(5, 2));

function sumaTresNumeros(num1, num2, num3) {
    return num1 + num2 + num3;
}

function nombreConcatenado(nombre, apellido1, apellido2) {
    return `${nombre} ${apellido1} ${apellido2}`;
}

function numeroMayor(num1, num2) {
    return Math.max(num1, num2);
}
