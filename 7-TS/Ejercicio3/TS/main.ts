// 1.
let nombre: string = "David";

// 2. 
let esVerdadero: boolean = true;

// 3.
let edad: number = 31;

// 4. 
let valor: boolean | number;
valor = true;  // válido
valor = 1234;  // válido

// ¿Qué pasa si no introducimos el tipo de dato correctamente?
// Que dara error en el ts, se podra comppilar a js ya que js no tiene declaracion de dato
// pero a la hora del ts, da error porque no coinicde el dato declarado

// ¿Se puede realizar la compilación?
// Si pero estaria mal, ya que los datos serian incorrectos