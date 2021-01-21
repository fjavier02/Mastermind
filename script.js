function Start() {
    alert("welcome the Mastermind")

    var Player1 = prompt("Insert the name of a player 1")
    var Player2 = prompt("Insert the name of a player 2")

    var code = prompt(Player1 + " please insert a 4 number code")

    var save_code = code;

    console.log("Player 1 :" + Player1);
    console.log("Player 2 :" + Player2);
    //console.log(code) ;

    var code_number = code.split("");


    //console.log(res);
    verificacion();
    console.log(correct_position)



    // verificación de los datos
    var correct_number;
    var correct_position; 

    /* function verificacion() {
        
        for (let i = 0; i < 15; i++) {

            var codeValidation = prompt(Player2 + " Decode the 4-digit code and enter it");
            var res = codeValidation.split("");
            
            var correct_number = 0;
            var correct_position = 0;
            

            // verificación diagonal principal
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    if (i == j && res [j] === code_number[i] ) {
                        correct_position++;
                        code_number[i]= "N" + i;
                        res [j]= "N" + i;
                        //console.log(code_number);
                        //console.log(res);
                    }       
                }
            }

            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    if (i !== j && res [j] === code_number[i] ) {
                        correct_number++;
                        code_number[i]= "B" + i;
                        res [j]= "B" + i;
                        //console.log(code_number);
                        //console.log(res);
                    }       
                }
            }
            var code = save_code;
            var res = codeValidation.split("");

            var correct_numbers = correct_number + correct_position;
            console.log(res.join(' ') + ": " + correct_numbers + " correct numbers: " + correct_position + " in the correct position and " + correct_number + " number in the wrong position.");
            code_number = code.split("");
            //console.log(code);
            //console.log(code_number);
            //return correct_position
            if (correct_position == 4) {
                console.log("Decode Success")
                break
            }
            if (i === 14 && correct_position !== 4 ) {
                console.log("Game over")
            }
        }
    } */

}

var code_number = []
for (let i = 0; i < 4; i++) {
    code_number.push(getRandomInt(1,8));
    console.log(code_number);
}
var save_code = code_number;
//console.log(save_code)

function displayDate() {
//    console.log("hola")
}

var res = [];
var codeValidation = [];

function addColor(color) {
    
    res.push(color);
    codeValidation.push(color);
    console.log(res);
    if (res.length == 4) {
        console.log(res);
        console.log(code_number);
        verificacion(res,code_number);
        //res = [];
        //codeValidation = [];
    }
    //console.log(color);
}


  

function deleteColor(){
    res.pop();
    console.log(res);
}

function isTyping() {
    document.querySelector("#typing").style.opacity="1";
}

//chat
/* var socket = io.connect('http://localhost:8080');
            // enviar mensaje de texto sin recargar/reiniciar la página
            $('form').submit(function(e){
                e.preventDefault(); // evitar recarga página
                socket.emit('chat_message', $('#txt').val());
                $('#txt').val('');
                return false;
            });
            // Añadir mensaje texto al chat
            socket.on('chat_message', function(msg){
                $('#messages').append($('<li>').html(msg));
            });
            // Añadir texto si alguien está online
            socket.on('is_online', function(username) {
                $('#messages').append($('<li>').html(username));
            });
            // Preguntar el nombre de usuario
            var username = prompt('Dime tu nombre, por favor');
            socket.emit('username', username); */

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function verificacion(res,code_number) {
    console.log(res);
    console.log(code_number);
    //console.log(codeValidation);
    var correct_number = 0;
    var correct_position = 0;
    
    // verificación diagonal principal
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (i == j && res [j] === code_number[i] ) {
                correct_position++;
                code_number[i]= "N" + i;
                res [j]= "N" + i;
                console.log(code_number);
                console.log(res);
            }       
        }
    }

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (i !== j && res [j] === code_number[i] ) {
                correct_number++;
                code_number[i]= "B" + i;
                res [j]= "B" + i;
                console.log(code_number);
                console.log(res);
            }       
        }
    }
    var code = save_code;
    //var x = codeValidation;
    //console.log(x);
    //console.log(codeValidation);

    var correct_numbers = correct_number + correct_position;
    console.log(codeValidation.join(' ') + ": " + correct_numbers + " correct numbers: " + correct_position + " in the correct position and " + correct_number + " number in the wrong position.");
    
    //console.log(code);
    //console.log(y);
    //return correct_position
   /*  if (correct_position == 4) {
        console.log("Decode Success")
        break
    }
    if (i === 10 && correct_position !== 4 ) {
        console.log("Game over")
    }  */
    
    
}