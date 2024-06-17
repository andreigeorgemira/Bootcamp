function mostrarMes(mes) {
    switch (mes) {
        case 1:
            document.write("Enero");
            break;
        case 2:
            document.write("Febrero");
            break;
        case 3:
            document.write("Marzo");
            break;
        case 4:
            document.write("Abril");
            break;
        case 5:
            document.write("Mayo");
            break;
        case 6:
            document.write("Junio");
            break;
        case 7:
            document.write("Julio");
            break;
        case 8:
            document.write("Agosto");
            break;
        case 9:
            document.write("Septiembre");
            break;
        case 10:
            document.write("Octubre");
            break;
        case 11:
            document.write("Noviembre");
            break;
        case 12:
            document.write("Diciembre");
            break;
        default:
            document.write("Número de mes no válido");
    }
}

mostrarMes(5);

function convertirStringANumero(numeroString) {
    switch (numeroString) {
        case "uno":
            return 1;
        case "dos":
            return 2;
        case "tres":
            return 3;
        case "cuatro":
            return 4;
        case "cinco":
            return 5;
        default:
            document.write("Cadena no válida");
            return null;
    }
}

document.write("<br>")

document.write(convertirStringANumero("tres"));
