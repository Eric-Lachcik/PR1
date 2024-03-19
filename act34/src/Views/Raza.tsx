import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Image from 'react-bootstrap/Image';

export type DetallesRazas = DetalleRaza[];

export interface DetalleRaza {
    weight: Weight
    height: Height
    id: number
    name: string
    bred_for?: string
    breed_group?: string
    life_span: string
    temperament?: string
    origin?: string
    reference_image_id: string
    country_code?: string
    description?: string
    history?: string
}

export interface Weight {
    imperial: string
    metric: string
}

export interface Height {
    imperial: string
    metric: string
}


export interface RazaProps {
    id: string;
}

const RazaDet = ({ id }: { id: string }) => {
    const [detalleRaza, setDetalleRaza] = useState<DetalleRaza[]>([]);
    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/breeds/${id}`, {
            headers: {
                "x-api-key": "live_1YVGFpYlwsyV8TU6jju1QFPbLZko3Fhr41hhzPkKNJTlRwhIWxZ0Y4SMIIjZf4WV",
            },
        })
            .then((response) => response.json())
            .then((data: DetalleRaza) => {
                setDetalleRaza([data]);
            });
    }, [id]);
    return (
        <div className="container-fluid ">
            <h1 className="position-relative text-white">Detalles de la Raza</h1>
            <div className="d-flex justify-content-center">
                {detalleRaza.map((raza) => (
                    <Card className="text-center align-self-baseline" key={raza.id}>
                        <Card.Body >
                            <Card.Title>{raza.name}</Card.Title>
                            <h4>Detalles:</h4> {raza.description}
                            <Card.Img />
                            <Image className="img-fluid align-self-end"
                                src={"https://cdn2.thecatapi.com/images/" + raza.reference_image_id + ".jpg"}
                                alt={raza.name}
                                fluid
                            />
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}
export default RazaDet;