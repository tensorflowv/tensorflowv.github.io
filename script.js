let nombre;
const saludar = nombre => {
    if (nombre !== null) {
        alert(`Bienvenido ${nombre}`);
    }
}

do {
    nombre = prompt("Introduce tu nombre");
    saludar(nombre);
}while (nombre === null);

let numero;
do {
    numero = prompt(`${nombre} Introduce un numero`);
    if (numero !== null) {
        alert(Prop(numero));
    }
}while (numero === null);

function Prop(numero) {
    let num = parseInt(numero);
    if (isNaN(num)) {
        return `El dato introducido: ${numero} ¡NO! es un numero`;
    } else {
        if (num % 2 == 0) {
            return `El numero ${num} es par`;
        } else {
            return `El numero ${num} es impar`;
        }
    }
}
