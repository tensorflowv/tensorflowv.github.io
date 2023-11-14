let name;
const saludar = name => alert(`Hola ${name} ❤️`);

while(true) {
    name = prompt("Introduce tu nombre");
    if (name != null && name != ""){
        saludar(name);
        break;
    }
}


let pOne = document.getElementById("pUno");
pOne.innerHTML = `- ${name.toUpperCase()} -`;


console.log(`El nombre del usuario es: ${name}`);

let aboutMe = document.getElementById("aboutMe");
aboutMe.innerHTML = `Jajaja, aqui no hay nd acerca de mi,<b> ${name} </b> si quieres ver una pizca de magia actualiza la pagina e introduce un nombre distinto <br><br> A y otra cosa bajale un poco y me das tu opinión`