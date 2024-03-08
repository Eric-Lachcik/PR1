import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from "react-bootstrap";

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
                <Col xs={6} md={4}>
                    <Image src="./manuela1.png" rounded  style={{width: '300px', height: '200px'}} className="m-auto"/>
                </Col>
                <Col xs={6} md={4}>
                    <Image src="./manuela2.png" rounded style={{width: '300px', height: '200px'}} className="m-auto"/>
                </Col>
            </Row>
            <p>¡Aviso! Estas imagenes no representan como se ve realmente el bar recomendado. Tampoco se llama asi.</p>
        </Container>
    </>
}
export default Restaurante;