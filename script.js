let name;
const saludar = name => alert(`Hola Bebe ${name} ❤️`);

do {
    name = prompt("Introduce tu nombre Bebe");
    if (name != null && name != ""){
        saludar(name);
        break;
    }
}while(true);


let pOne = document.getElementById("pUno");
pOne.innerHTML = `- ${name.toUpperCase()} -`;




