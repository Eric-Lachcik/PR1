import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function actividad() {
    return <>
        <Container fluid className="mt-3 mb-3">
            <h1 className="mb-3">Actividades de Ocio</h1>
                <Row xs={1} md={2} lg={3}> 
                    <Col className="mb-4">
                        <Card>
                            <Card.Img  src="./Furbo.png" style={{height: '300px', objectFit: 'cover'}}   />
                            <Card.Body>
                                <Card.Title>Fútbol</Card.Title>
                                <Card.Text>
                                    Deporte de equipo, objetivo marcar goles en arco contrario.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4">
                        <Card>
                            <Card.Img  src="./furbosala.png" style={{height: '300px', objectFit: 'cover'}} />
                            <Card.Body>
                                <Card.Title>Futbol Sala</Card.Title>
                                <Card.Text>
                                    Variante del fútbol, jugado en recintos cerrados.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4">
                        <Card>
                            <Card.Img  src="./basque.png" style={{height: '300px', objectFit: 'cover'}} />
                            <Card.Body>
                                <Card.Title>BasquetBol</Card.Title>
                                <Card.Text>
                                    Deporte de equipo, objetivo encestar balón en aro.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4">
                        <Card>
                            <Card.Img  src="./volley.png" style={{height: '300px', objectFit: 'cover'}} />
                            <Card.Body>
                                <Card.Title>VolleyBall</Card.Title>
                                <Card.Text>
                                    Deporte de equipo, se juega golpeando una pelota.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4">
                        <Card>
                            <Card.Img  src="./patin.png" style={{height: '300px', objectFit: 'cover'}} />
                            <Card.Body>
                                <Card.Title>Patinaje</Card.Title>
                                <Card.Text>
                                    Deporte de deslizamiento, se practica sobre superficies lisas.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4">
                        <Card>
                            <Card.Img  src="./indios.png" style={{height: '300px', objectFit: 'cover'}} />
                            <Card.Body>
                                <Card.Title>BadMinton</Card.Title>
                                <Card.Text>
                                    Deporte de raqueta, se juega golpeando un volante.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        </Container>
    </>
}
export default actividad;