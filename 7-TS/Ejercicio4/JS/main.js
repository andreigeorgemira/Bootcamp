"use strict";
// 1.
function voidFunction() {
    console.log("Esta función no retorna nada.");
}
// 2. 
function stringFunction() {
    return "Este es un string";
}
// 3.
function booleanOrStringFunction(input) {
    if (typeof input === "boolean") {
        return input;
    }
    else {
        return "Este es un string";
    }
}
// 4.
const voidArrowFunction = () => {
    console.log("Esta función no retorna nada.");
};
const stringArrowFunction = () => "Este es un string";
const booleanOrStringArrowFunction = (input) => typeof input === "boolean" ? input : "Este es un string";
