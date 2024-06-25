/**
 * Ejercicio 1: Operaciones básicas con arrays
 * Enunciado:
 * Crea un array de números que contenga los números del 1 al 5.
 * Agrega el número 6 al final del array.
 * Elimina el primer número del array.
 * Encuentra el índice del número 4 en el array.
 * Imprime el array final.
 */

let numeros: number[] = [1, 2, 3, 4, 5];

numeros.push(6);

numeros.shift();

let index = numeros.indexOf(4);

console.log(numeros);
console.log(index);

/**
 * Ejercicio 2: Operaciones básicas con tuplas
 * Enunciado:
 * Define una tupla que contenga un string y un número.
 * Asigna los valores "TypeScript" y 2024 a la tupla.
 * Accede al segundo elemento de la tupla e imprímelo.
 * Actualiza el primer elemento de la tupla a "JavaScript".
 * Imprime la tupla completa.
 */

let tupla: [string, number];

tupla = ["TypeScript", 2024];

console.log(tupla[1]);

tupla[0] = "JavaScript";

console.log(tupla);
