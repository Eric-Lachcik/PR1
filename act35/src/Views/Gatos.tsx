import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export type Gatitos = Gato[]

export interface Gato {
  Nombre: string
  Dulzura: number
  Disponible: boolean
  Imagen: string
}


function Gatos(){
    const[Gatitos,setGatitos] = React.useState ([] as Gatitos)

    React.useEffect(() => {
      fetch("https://raw.githubusercontent.com/pedrogarciaaag/Lenguaje-de-marcas/main/actividad_35/data.json")
        .then((response)=>response.json())
        .then((data:Gatitos)=>{
            setGatitos(data)
        }) 
    }, [])
    
    
    return<></>
}

export default Gatos;