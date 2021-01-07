function Start() {
    alert("welcome the Mastermind")

    let Player1 = prompt("inserte el nombre de un jugador 1")
    let Player2 = prompt("inserte el nombre de un jugador 2")

    let code = prompt(Player1 + " por favor inserte un codigo de 4 numeros")
    while (code.split("").length !== 4) {
        alert ('El codigo debe ser de 4 digitos')
        let code = prompt(Player1 + " por favor inserte el codigo de 4 digitos")
        console.log(code.split("").length);
        if (code.split("").length === 4) {
            break
        }
    }

    console.log("Jugador 1 " + Player1)
    console.log("Jugador 2 " + Player2)
    console.log(code) 

    let numero_code = code.split("")


    /* while (Number(codeValidation) === NaN ){
            alert ('El codigo debe ser numerico');
            let codeValidation = prompt(Player1 + " por favor inserte el codigo de 4 digitos");
            console.log(codeValidation);
        } 
    } */

//    for (let i = 0; i < 4; i++) {
        let codeValidation = prompt(Player2 + " por favor inserte el codigo de 4 digitos");
        let validation = codeValidation.split("");
        verificacion();
//    }
    


    // verificación de los datos
    let numero_correcto;
    let posicion_correcta; 

    function verificacion() {
        
        let numero_correcto = 0;
        let posicion_correcta = 0;
        let cont = [];
        let cont2= [];
        let save_numero_code;
        //let save_numero_code = numero_code;

        // verificación diagonal principal
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (i == j && validation [j] === numero_code[i] ) {
                    posicion_correcta++;
                    cont.push(i);
                }       
            }
        }

        //indice en los que los numero no estan correctos
        for (let i = 0; i < 4; i++) {
            if (cont.indexOf(i) == -1){
                 cont2.push(i)
            }
        }
        // intento de verificación para numero que no fueron verificados
        for (const iterator of cont2) {
            //console.log(numero_code[iterator]);
            console.log(cont2); 
            for (let j = cont2[i] ; j < 4; j++) {
                console.log(validation [j] + " validation J: " + j );
                console.log(numero_code[iterator] + " numero_code en " + iterator);
                if (validation [j] === numero_code[iterator]) {
                    //cont2.shift();
                    numero_correcto++;
                    console.log(numero_correcto + " se sumo 1 en numero_correcto");
                }
            }
        }
        console.log(cont2);

        //proximamente solo en cines: verificación de numero_correcto
        /* cont2.forEach(element => {
            console.log(element)
        }); */
        //console.log(numero_code);
        //console.log(save_numero_code);

        let numeros_correcto = numero_correcto + posicion_correcta;
        console.log(validation.join(' ') + ": " + numeros_correcto + " numeros correctos: " + posicion_correcta + " en la posición correcta y " + numero_correcto + " numero en la posicion incorrecta.")
        return posicion_correcta
    }
}