// 1.
function voidFunction(): void {
	console.log("Esta función no retorna nada.");
}

// 2. 
function stringFunction(): string {
	return "Este es un string";
}

// 3.
function booleanOrStringFunction(input: boolean | string): boolean | string {
	if (typeof input === "boolean") {
		return input;
	} else {
		return "Este es un string";
	}
}

// 4.

const voidArrowFunction = (): void => {
    console.log("Esta función no retorna nada.");
};

const stringArrowFunction = (): string => "Este es un string";


const booleanOrStringArrowFunction = (input: boolean | string): boolean | string =>
    typeof input === "boolean" ? input : "Este es un string";
