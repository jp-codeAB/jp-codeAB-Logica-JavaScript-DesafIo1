// Cambiar contenido del h1
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafío";

// Función para el botón Console
function clickConsole() {
    console.log("El botón fue clicado");
}

// Función para el botón Prompt
function clickPrompt(){
    let ciudad = prompt("Dame un nombre de una ciudad de Brasil.");
    alert(`Estuve en ${ciudad} y me acorde de ti.`);
}


// Función para el botón Alert
function clickAlert(){
    alert("Yo amo JS.❤");
}

function clickSuma(){
    let num1, num2;
    //repetir hasta que sea válido
    while (true) {
        num1 = parseFloat(prompt("Ingrese el primer número:"));
        if (!isNaN(num1)) break;
        alert("Por favor, ingrese un número válido.");
    }

    //repetir hasta que sea válido
    while (true) {
        num2 = parseFloat(prompt("Ingrese el segundo número:"));
        if (!isNaN(num2)) break;
        alert("Por favor, ingrese un número válido.");
    }
    //Resultado
    alert(`La suma de ${num1} y ${num2} es: ${num1 + num2}`);
}