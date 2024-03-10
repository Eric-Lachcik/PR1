import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Edificio from '../Images/Edificio-principal.png'
import Comedor from '../Images/Comedor.png'
import Pista from '../Images/PistaBasquet.png'

function Puntos() {
    return <>
        <Container fluid className="mt-3 mb-3">
            <h1>Puntos de Interés</h1>
        </Container>
        <Container fluid className="mt-4">
            <Row>
                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={Edificio} style={{height: '300px', objectFit: 'cover'}}  />
                        <Card.Body>
                            <Card.Text>
                                Este es el edificio principal del colegio CIDE
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={Comedor} style={{height: '300px', objectFit: 'cover'}} />
                        <Card.Body>
                            <Card.Text>
                                Este es el comedor principal del colegio CIDE
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={Pista} style={{height: '300px', objectFit: 'cover'}} />
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