import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export type Gatitos = Gato[]

export interface Gato {
    Nombre: string
    dulzura: number
    Disponible: boolean
    Imagen: string
}


function Gatos() {
    const [Gatitos, setGatitos] = React.useState([] as Gatitos)

    React.useEffect(() => {
        fetch("https://raw.githubusercontent.com/Eric-Lachcik/PR1/main/act35/data.json")
            .then((response) => response.json())
            .then((data: Gatitos) => {
                setGatitos(data)
            })
    }, [])


    return <>
        <div className="m-2">
            <Row xs={1} md={3} className="g-4">
                {Gatitos.map(Gatitos => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={Gatitos.Imagen} style={{ height: '350px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>{Gatitos.Nombre}</Card.Title>
                                <Card.Text className="text-background m-2" >
                                    Nivel de dulzura: {Gatitos.dulzura}
                                </Card.Text>
                                <Card.Text className="text-background m-2" >
                                    Esta disponible?:{Gatitos.Disponible ? 'Sí' : 'No'}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div></>
}

export default Gatos;