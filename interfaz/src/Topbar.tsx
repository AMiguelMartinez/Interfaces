import React from 'react';
import "./App.css"
import { Navbar, Container, ListGroup, Nav } from 'react-bootstrap';

const Topbar: React.FC = () => {
    return (
        <Navbar bg="black" variant="dark" expand="lg" className="topbar">
            <Container fluid>
                <Navbar.Brand href="#">SST</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                    <Nav className="ms-auto">
                        <Nav.Link href="#">Perfil</Nav.Link>
                        <Nav.Link href="#">Configuración</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Topbar;