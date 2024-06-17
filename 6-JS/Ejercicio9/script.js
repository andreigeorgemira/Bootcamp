console.log(reemplazarAporO("academia"));

empiezaPorAca("academia");
empiezaPorAca("escuela");

saludarTresVeces("Hola");

function reemplazarAporO(str) {
    return str.replace("a", "o");
}

function empiezaPorAca(str) {
    if (str.startsWith("aca")) {
        console.log("El string empieza por 'aca'");
    } else {
        console.log("El string no empieza por 'aca'");
    }
}

function saludarTresVeces(saludo) {
    for (let i = 0; i < 3; i++) {
        console.log(saludo);
    }
}