import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


function NavBar() {
    return <>
        {[false].map((expand) => (
            <Navbar expand="sm" style={{ backgroundColor: '#50C878' }} >
                <Container fluid>
                    <Navbar.Brand as={Link} to='/'>
                        <img src="./Knekro.png" width='70'></img>
                    </Navbar.Brand>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                CIDE
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-center flex-grow-1 pe-3 ">
                                <Nav.Link as={Link} to='/' >Inicio</Nav.Link>
                                <Nav.Link as={Link} to='/puntos'>Puntos de Interes</Nav.Link>
                                <Nav.Link as={Link} to='/hotel'>Hoteles</Nav.Link>
                                <Nav.Link as={Link} to='/restaurante'>Restaurantes</Nav.Link>
                                <Nav.Link as={Link} to='/actividad'>Actividades</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                </Container>
            </Navbar>
        ))}
    </>
}

export default NavBar;
