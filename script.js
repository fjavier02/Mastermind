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

    function verificacion() {
        
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
    }

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}