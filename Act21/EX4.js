const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const scan = readline.createInterface({ input, output });
let fs = require('fs');

scan.question("Introduce el nombre del fichero que quieres leer: ", (answer) =>{
    
    fs.readFile( (answer) , "utf-8", (err, data) => {
        if(err){
            console.log("error: ", err)
        }else{
            console.log(data)
        }
});
scan.close();
});





