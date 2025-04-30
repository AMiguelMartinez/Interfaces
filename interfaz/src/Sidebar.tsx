import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './App.css';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar bg-black text-white p-3 d-flex flex-column justify-content-between">
            <div>
                <h4 className="mb-4">Menú</h4>
                <ListGroup variant="flush">
                    <ListGroup.Item className="bg-black text-white border-0" action href="Home">Home</ListGroup.Item>
                    <ListGroup.Item className="bg-black text-white border-0" action href="ListaGestion">Gestión EPP</ListGroup.Item>
                    <ListGroup.Item className="bg-black text-white border-0" action href="#">Actividades Lúdicas</ListGroup.Item>
                    <ListGroup.Item className="bg-black text-white border-0" action href="ListaChequeoRecibida">Lista de Chequeo</ListGroup.Item>
                    <ListGroup.Item className="bg-black text-white border-0" action href="ListaReportes">Reportes</ListGroup.Item>
                    <ListGroup.Item className="bg-black text-white border-0" action href="#">Blog</ListGroup.Item>
                    <ListGroup.Item className="bg-black text-white border-0" action href="#">Asesoramiento</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <ListGroup variant="flush">
                    <ListGroup.Item className="bg-black text-white border-0" action href="https://play.google.com/store/games?device=windows&pli=1">Más Servicios</ListGroup.Item>
                    <ListGroup.Item className="bg-black text-white border-0" action href="#">Salir</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default Sidebar;
