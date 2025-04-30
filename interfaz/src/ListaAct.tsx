
import React from "react";
import { useNavigate } from 'react-router-dom';
import { InputGroup, Form, Button, Card, Container } from 'react-bootstrap';

const ListaAct: React.FC = () => {
  const navigate = useNavigate();

  const handleAbrir = () => {
    navigate("/Formulario"); 
  };

  return (
    <Container className="py-4">
      {/* Título y buscador */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold">Actividades Recibidas</h4>
        <InputGroup style={{ width: '300px' }}>
          <Form.Control
            placeholder="Buscar ..."
            className="rounded-start-pill border-0 shadow-sm"
          />
          <InputGroup.Text className="bg-white border-0 rounded-end-pill">
            🔍
          </InputGroup.Text>
        </InputGroup>
      </div>

      {/* Lista de elementos */}
      <div className="p-4 bg-light rounded-4">
        {[...Array(7)].map((_, idx) => (
          <Card key={idx} className="mb-3 shadow-sm">
            <Card.Body className="d-flex justify-content-between align-items-center">
              <strong className="fs-6">Nombre Usuario - Fecha</strong>
              <div className="d-flex gap-2">
                <Button
                  className="fw-bold"
                  style={{ backgroundColor: '#9fffe0', color: 'black', border: '1px solid black' }}
                  onClick={handleAbrir}
                >
                  Abrir
                </Button>
                <Button variant="danger">⬇️</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default ListaAct;
