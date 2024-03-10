import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from "react-bootstrap";
import manu1 from '../Images/manuela1.png'
import manu2 from '../Images/manuela2.png'

function Restaurante() {
    return <>
        <Container fluid className="mt-3 mb-3">
            <h1>Restaurantes</h1>
        </Container>
        <Container fluid className="mt-4">
            <p>Desafortunadament solo contamos con un bar accesible para todos ,sin contar el comedor que solo es accesible para los alumnos y profesores del colegio.</p>
            <h2>Bar Manuela</h2>
            <p>Pequeño bar ubicado al lado del campo de futbol donde podemos pedir diferentes tipos de snacks y bebidas.</p>
        </Container>
        <Container fluid className="mt-3">
            <Row className="justify-content-md-center">
                <Col className="mb-3" md={3} >
                    <Image src={manu1} rounded  style={{width: '300px', height: '200px'}} />
                </Col>
                <Col className="mb-3" md={3}>
                    <Image src={manu2} rounded style={{width: '300px', height: '200px'}} />
                </Col>
            </Row>
            <p>¡Aviso! Estas imagenes no representan como se ve realmente el bar recomendado. Tampoco se llama asi.</p>
        </Container>
    </>
}
export default Restaurante;