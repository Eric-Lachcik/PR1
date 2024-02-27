import React from "react";
import {Link} from "react-router-dom";


const navbar = () => {
    return <>
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/'>
                        <img src="./Knekro.png" width='70'></img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link " to='/'>Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to= '/puntos'>Puntos de Interes</Link>
                            </li>
                            <li className="nav-item">
                               <Link className="nav-link " to= '/restaurante'>Restaurantes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to= '/hotel'>Hoteles</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to= '/actividad'>Actividades</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>
}
export default navbar;