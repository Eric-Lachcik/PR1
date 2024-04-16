import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import inicio from '../Images/GatoInicio.png';



function Inicio() {
    return <>
        <Container fluid className="mt-3">
            <div className="" >
                <h1 className="text-white">Bienvenidos al diccionario de los Gatos</h1>
                <p className="text-white">Esto es un diccionario de gatos donde con una imagen podras recibir informacion breve sobre ese mismo gato.</p>
                <Image src={inicio} roundedCircle />
            </div>
        </Container>
    </>
}
export default Inicio;