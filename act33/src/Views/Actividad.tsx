import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function actividad() {
    return <>
        <Container fluid className="mt-3 mb-3">
            <h1>Actividades de Ocio</h1>
                <Row xs={1} md={2} lg={3}> 
                    <Col className="mb-4">
                        <Card>
                            <Card.Img variant="top" src="ruta_a_tu_imagen_futbol.jpg" />
                            <Card.Body>
                                <Card.Title>Fútbol</Card.Title>
                                <Card.Text>
                                    Aquí puedes añadir información sobre el fútbol.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4">
                        <Card>
                            <Card.Img variant="top" src="ruta_a_tu_imagen_basquetbol.jpg" />
                            <Card.Body>
                                <Card.Title>Futbol Sala</Card.Title>
                                <Card.Text>
                                    Aquí puedes añadir información sobre el basquetbol.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4">
                        <Card>
                            <Card.Img variant="top" src="ruta_a_tu_imagen_basquetbol.jpg" />
                            <Card.Body>
                                <Card.Title>BasquetBol</Card.Title>
                                <Card.Text>
                                    Aquí puedes añadir información sobre el basquetbol.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4">
                        <Card>
                            <Card.Img variant="top" src="ruta_a_tu_imagen_basquetbol.jpg" />
                            <Card.Body>
                                <Card.Title>VolleyBall</Card.Title>
                                <Card.Text>
                                    Aquí puedes añadir información sobre el basquetbol.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4">
                        <Card>
                            <Card.Img variant="top" src="ruta_a_tu_imagen_basquetbol.jpg" />
                            <Card.Body>
                                <Card.Title>Patinaje</Card.Title>
                                <Card.Text>
                                    Aquí puedes añadir información sobre el basquetbol.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4">
                        <Card>
                            <Card.Img variant="top" src="ruta_a_tu_imagen_basquetbol.jpg" />
                            <Card.Body>
                                <Card.Title>BadMinton</Card.Title>
                                <Card.Text>
                                    Aquí puedes añadir información sobre el basquetbol.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        </Container>
    </>
}
export default actividad;