import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Puntos() {
    return <>
        <Container fluid className="mt-3 mb-3">
            <h1>Puntos de Interés</h1>
        </Container>
        <Container fluid className="mt-4">
            <Row>
                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src="./Edificio-principal.png" />
                        <Card.Body>
                            <Card.Text>
                                Este es el edificio principal del colegio CIDE
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src="./Comedor.png" />
                        <Card.Body>
                            <Card.Text>
                                Este es el comedor principal del colegio CIDE
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src="./PistaBasquet.png" />
                        <Card.Body>
                            <Card.Text>
                                Estas son las pistas de basquetbol que ofrece el colegio CIDE
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
}
export default Puntos;