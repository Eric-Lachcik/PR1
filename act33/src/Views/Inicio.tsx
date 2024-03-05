import React from "react";
import Container from 'react-bootstrap/Container';

import Image from 'react-bootstrap/Image';




function Inicio() {
    return <>
        <Container fluid className="mt-3">
            <div className="">
                <h1>Bienvenidos al colegio Cide</h1>
                <p>Somos un colegio que formamos una cooperativa donde cada uno aporta su granito de arena</p>
                <Image src="./cideInicio.png" roundedCircle />
            </div>
        </Container>
    </>
}
export default Inicio;