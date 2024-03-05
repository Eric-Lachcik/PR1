import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


function Hotel() {
    return <>
        <Container fluid className="mt-3 mb-3">
            <h1>Hoteles</h1>
        </Container>
        <Container fluid className="mt-4">
            <p>Desgraciadamente como se trata de un colegio concertado no disponemos de un servicio de hoteles</p>
            <Image src="./perdonar.gif" roundedCircle />
        </Container>
    </>
}
export default Hotel;