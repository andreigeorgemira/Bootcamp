let nombre = "Andrei George";
let edad = 30;
let esEstudiante = true;
let direccion = { calle: "Av. Principal", numero: 123 };
let hobbies = ["jugar", "viajar", "deportes"];
let indefinido;
let nulo = null;

console.log(nombre);
console.log(edad);
console.log(esEstudiante);
console.log(direccion);
console.log(hobbies);
console.log(indefinido);
console.log(nulo);

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof esEstudiante);
console.log(typeof direccion);
console.log(typeof hobbies);
console.log(typeof indefinido);
console.log(typeof nulo);

var globalVar = "Soy una variable global";

function mostrarVariables() {
    let localVar = "Soy una variable local";
    console.log(globalVar);
    console.log(localVar);
}

mostrarVariables();

console.log(globalVar);
