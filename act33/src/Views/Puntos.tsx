import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Puntos(){
    return<>
       <Container fluid className="mt-3 mb-3">
            <h1>Puntos de Interés</h1>
       </Container>
       <Container fluid className="mt-4">
       <Row>
                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src="ruta/a/tu/imagen1.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Este es un texto corto para el primer punto.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src="ruta/a/tu/imagen2.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Este es un texto corto para el segundo punto.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src="ruta/a/tu/imagen3.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Este es un texto corto para el tercer punto.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
       </Container>
    </>
}
export default Puntos;