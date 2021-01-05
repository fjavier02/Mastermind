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
    //console.log(numero_code);

    let code1 = ["_","_","_","_"];
    let code2;
    let code3;
    let code4;
    let code5;
    let code6;
    let code7;
    let code8;
    let code9;
    let code10;
    let code11;
    let code12;
    let code13;
    let code14;
    let code15;
    //console.log(code1.join(' '))


    /* for (let i = 0; i < 2; i++) {
        let codeValidation = prompt(Player2 + " por favor inserte el codigo de 4 digitos");
        let numero_codeValidation = codeValidation.split("");

        while (codeValidation.split("").length !== 4) {
            
            alert ('El codigo debe ser de 4 digitos');
            let codeValidation = prompt(Player1 + " por favor inserte el codigo de 4 digitos");
            console.log(codeValidation);
        }
        while (Number(codeValidation) === NaN ){
            alert ('El codigo debe ser numerico');
            let codeValidation = prompt(Player1 + " por favor inserte el codigo de 4 digitos");
            console.log(codeValidation);
        } 

        let code1 = verificacion(); 


        console.log(code1.join(' '))
        console.log(code2.join(' '))
        console.log(code3.join(' '))
        console.log(code4.join(' '))
        console.log(code5.join(' '))
        console.log(code6.join(' '))
        console.log(code7.join(' '))
        console.log(code8.join(' '))
        console.log(code9.join(' '))
        console.log(code10.join(' '))
        console.log(code11.join(' '))
        console.log(code12.join(' '))
        console.log(code13.join(' '))
        console.log(code14.join(' '))
        console.log(code15.join(' '))
    } */

//    for (let i = 0; i < 4; i++) {
        let codeValidation = prompt(Player2 + " por favor inserte el codigo de 4 digitos");
        let numero_codeValidation = codeValidation.split("");
        verificacion();
//    }
    

    

    // verificación de los datos
    let numero_correcto;
    let posicion_correcta;



    function verificacion() {
        
        let numero_correcto = 0;
        let posicion_correcta = 0;
        let save_numero_code = numero_code;
        if (numero_codeValidation[0] === numero_code[0]) { //verificando posicion 0
            posicion_correcta++;
            save_numero_code[0] = "x";
        }else { // verificando position 1
            if (numero_codeValidation[0] === save_numero_code[1]) {
                numero_correcto++;
                save_numero_code[1] = "x";
            }else { // verificando position 2
                if (numero_codeValidation[0] === save_numero_code[2]) {
                    numero_correcto++;
                    save_numero_code[2] = "x";
                }else { // verificando position 3
                    if (numero_codeValidation[0] === save_numero_code[3]) {
                        numero_correcto++;
                        save_numero_code[3] = "x";
                    }
                }
            }
        }
        if (numero_codeValidation[1] === numero_code[1]) { //verificando posicion 0
            posicion_correcta++;
            save_numero_code[1] = "x"; 
        }else { // verificando position 1
            if (numero_codeValidation[1] === save_numero_code[0]) {
                numero_correcto++;
                save_numero_code[0] = "x"; 
            }else { // verificando position 2
                if (numero_codeValidation[1] === save_numero_code[2]) {
                    numero_correcto++;
                    save_numero_code[2] = "x";
                }else { // verificando position 3
                    if (numero_codeValidation[1] === save_numero_code[3]) {
                        numero_correcto++;
                        save_numero_code[3] = "x";
                    }
                }
            }
        }
        if (numero_codeValidation[2] === numero_code[2]) { //verificando posicion 0
            posicion_correcta++;
            save_numero_code[2] = "x";
        }else { // verificando position 1
            if (numero_codeValidation[2] === save_numero_code[0]) {
                numero_correcto++;
                save_numero_code[0] = "x";
            }else { // verificando position 2
                if (numero_codeValidation[2] === save_numero_code[1]) {
                    numero_correcto++;
                    save_numero_code[1] = "x";
                }else { // verificando position 3
                    if (numero_codeValidation[2] === save_numero_code[3]) {
                        numero_correcto++;
                        save_numero_code[3] = "x";
                    }
                }
            }
        }
        if (numero_codeValidation[3] === numero_code[3]) { //verificando posicion 0
            posicion_correcta++;
            save_numero_code[3] = "x";
        }else { // verificando position 1
            if (numero_codeValidation[3] === save_numero_code[0]) {
                numero_correcto++;
                save_numero_code[0] = "x";
            }else { // verificando position 2
                if (numero_codeValidation[3] === save_numero_code[1]) {
                    numero_correcto++;
                    save_numero_code[1] = "x";
                }else { // verificando position 3
                    if (numero_codeValidation[3] === save_numero_code[2]) {
                        numero_correcto++;
                        save_numero_code[2] = "x";
                    }
                }
            }
        }
        //let numero_code = code.split("");
        //console.log(numero_correcto+ " numeros correctos");
        //console.log(posicion_correcta+ " numeros en la posicion correcta");
        //console.log(code1.join(' '))
        let numeros_correcto = numero_correcto + posicion_correcta;
        console.log(numero_codeValidation.join(' ') + ": " + numeros_correcto + " numeros correctos: " + numero_correcto + " Numero en la posicion inorrecta y " + posicion_correcta + "  en la posición correcta")
        return posicion_correcta
    }
}