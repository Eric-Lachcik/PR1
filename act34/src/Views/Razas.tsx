
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import FormSelect from 'react-bootstrap/FormSelect';
import Raza from "./Raza";

export type Razas = Raza[]

export interface Raza {
    weight: Weight
    id: string
    name: string
    cfa_url?: string
    vetstreet_url?: string
    vcahospitals_url?: string
    temperament: string
    origin: string
    country_codes: string
    country_code: string
    description: string
    life_span: string
    indoor: number
    lap?: number
    alt_names?: string
    adaptability: number
    affection_level: number
    child_friendly: number
    dog_friendly: number
    energy_level: number
    grooming: number
    health_issues: number
    intelligence: number
    shedding_level: number
    social_needs: number
    stranger_friendly: number
    vocalisation: number
    experimental: number
    hairless: number
    natural: number
    rare: number
    rex: number
    suppressed_tail: number
    short_legs: number
    wikipedia_url?: string
    hypoallergenic: number
    reference_image_id?: string
    cat_friendly?: number
    bidability?: number
}

export interface Weight {
    imperial: string
    metric: string
}

const Breeds = () => {
    const [razas, setRazas] = React.useState([] as Razas);
    const [selectRazaId, setSelectRazaId] = useState<string>();

    React.useEffect(() => {
        fetch('https://api.thecatapi.com/v1/breeds', {
            headers: {
                "x-api-key": "live_1YVGFpYlwsyV8TU6jju1QFPbLZko3Fhr41hhzPkKNJTlRwhIWxZ0Y4SMIIjZf4WV",
            },
        })
            .then(response => response.json())
            .then((data: Razas) => setRazas(data));
    }, []);

    const handleRazaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectRazaId(event.target.value);
    };

    return (
        <div>
            <h1 className="position-relative text-white">Razas</h1>
            <div className="d-flex justify-content-center">
                <Form.Select className="w-50 " value={selectRazaId} onChange={handleRazaChange}>
                    <option value="">Seleccione una raza</option>

                    {razas.map((raza) => (
                        <option value={raza.id}>
                            {raza.name}
                        </option>
                    ))}
                </Form.Select >
            </div>
            {selectRazaId && <Raza id={selectRazaId} />}

        </div>
    );
}

export default Breeds;