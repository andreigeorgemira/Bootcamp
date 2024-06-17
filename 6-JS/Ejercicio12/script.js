let numero = 1;
let i = 0;
do {
    if (i === 0) {
        i++;
        numero--;
        console.log(numero);
    } else {
        numero++;
        console.log(numero);
    }
} while (numero < 5);

/*
El programa comienza definiendo dos variables: numero con el valor 1 e i con el valor 0. 
Luego, entra en un bucle do...while que se ejecuta mientras numero sea menor que 5.
En la primera iteración, como i es 0, se incrementa i en 1, se decrementa numero en 1, 
y se imprime el valor de numero, que es 0.
En las siguientes iteraciones, como i ya no es 0, el programa entra en la parte else del 
condicional, incrementa numero en 1, e imprime el valor actualizado de numero.
Este proceso continúa hasta que numero alcanza el valor 5, momento en el cual el bucle termina.

¿Cuántas iteraciones da?
El programa realiza 6 iteraciones.
¿Cuándo entrará en el if?
Entrará en el if durante la primera iteración, cuando i es 0.
¿Y en el else?
Entrará en el else en todas las iteraciones posteriores, cuando i ya no es 0.
*/
