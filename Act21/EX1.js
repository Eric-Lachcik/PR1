const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const scan = readline.createInterface({ input, output });

scan.question('Introdueix el teu nom ' , (answer) =>{
    console.log(`Bienvenido al mini infierno de JavaScript: ${answer}`);
    scan.close();
});
