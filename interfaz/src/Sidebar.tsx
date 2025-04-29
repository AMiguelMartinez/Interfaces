import React from 'react';
import { Navbar, Container, ListGroup, Nav } from 'react-bootstrap';
import './App.css';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar bg-black text-white p-3">
            <h4 className="mb-4">Menú</h4>
            <ListGroup variant="flush">
                <ListGroup.Item className="bg-black text-white border-0" action href="#">Gestion EPP</ListGroup.Item>
                <ListGroup.Item className="bg-black text-white border-0" action href="#">Actividades Lúdicas</ListGroup.Item>
                <ListGroup.Item className="bg-black text-white border-0" action href="#">Reportes</ListGroup.Item>
                <ListGroup.Item className="bg-black text-white border-0" action href="#">Blog</ListGroup.Item>
                <ListGroup.Item className="bg-black text-white border-0" action href="#">Asesoramiento</ListGroup.Item>
                <ListGroup.Item className="bg-black text-white border-0" action href="#">Más Servicios</ListGroup.Item>
                <ListGroup.Item className="bg-black text-white border-0" action href="#">Salir</ListGroup.Item>
            </ListGroup>
        </div>
    );
};
export default Sidebar;
