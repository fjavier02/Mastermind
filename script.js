alert("welcome the Mastermind")

var Player1 = prompt("inserte el nombre de un jugador 1")
var Player2 = prompt("inserte el nombre de un jugador 2")

var code = prompt(Player1 + " por favor inserte un codigo de 4 numeros")

var save_code = code;

console.log("Jugador 1 " + Player1);
console.log("Jugador 2 " + Player2);
console.log(code) ;

var numero_code = code.split("");

var codeValidation = prompt("Por favor inserte el codigo de 4 digitos");
var res = codeValidation.split("");
console.log(res);
verificacion();



// verificación de los datos
var numero_correcto;
var posicion_correcta; 

function verificacion() {
    
    var numero_correcto = 0;
    var posicion_correcta = 0;
    

    // verificación diagonal principal
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (i == j && res [j] === numero_code[i] ) {
                posicion_correcta++;
                console.log(numero_code[i]);
                numero_code[i]= "N";
            }       
        }
    }

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (i !== j && res [j] === numero_code[i] ) {
                numero_correcto++;
                numero_code[i]= "B";
                console.log(numero_code[i]);
            }       
        }
    }

    var code = save_code;

    var numeros_correcto = numero_correcto + posicion_correcta;
    console.log(res.join(' ') + ": " + numeros_correcto + " numeros correctos: " + posicion_correcta + " en la posición correcta y " + numero_correcto + " numero en la posicion incorrecta.")
    return posicion_correcta
}
