const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const scan = readline.createInterface({ input, output });

scan.question("Introdueix una temperatura: " , (Temperatura) =>{
    scan.question("Es C o F?", (answer1) =>{
        let centi, fare;  
        if((answer1) == "C"){
            centi = (Temperatura);
            fare = (9/5*centi)+32;
            console.log("Tu temperatura en Fahrenheit es " + fare )
        }
        else if((answer1) == "F"){
            fare = (Temperatura);
            centi = (fare-32)*(5/9);
            console.log("Tu temperatura en Celsius es " + centi)
        }
    scan.close();
    });
})