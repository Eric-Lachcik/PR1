
Sensore = setInterval(sensor, 1000);

function sensor(){
    Datos = Math.random(10);
    if(Datos > 0.70){
        console.log("Aviso,Aviso")
        clearInterval(Sensore)
    }
    console.log(Datos)
}