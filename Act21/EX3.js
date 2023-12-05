const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const scan = readline.createInterface({ input, output });

/*for (int n = 0; n < insultos.length; n++) {
    System.out.println(resp + insultos[n]);*/
let numis = [6,3,9,2,0,2,5,2,9]
console.log("Los numeros del array son: ")
for ( n = 0; n < numis.length; n++){
    console.log(numis[n]);}
let total1 = numis.reduce((a, b) => a + b, 0);
console.log("La suma de todos los numeros del array es:" + total1)
let sum = numis.reduce((previous, current)=> current += previous);
let total2 = sum / numis.length;
console.log("El promedio del array es: "+ total2)
let mini = Math.min.apply(null, numis)
let maxi = Math.max.apply(null, numis)
console.log("El numero maximo del array es: " + maxi + " y el minimo es: " + mini)
scan.close();