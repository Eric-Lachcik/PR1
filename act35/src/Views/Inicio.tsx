import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import inicio from '../Images/GatoInicio.png';



function Inicio() {
    return <>
        <Container fluid className="mt-3">
            <div className="" >
                <h1 className="text-white">Bienvenidos a la biblioteca de los Gatos</h1>
                <p className="text-white">Veras representado a 6 gatos, estan disponibles y su nivel de dulzura segun el creador de la pagina.</p>
                <Image src={inicio} roundedCircle />
            </div>
        </Container>
    </>
}
export default Inicio;