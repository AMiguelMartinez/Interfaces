import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Gestiones: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [cedula, setCedula] = useState(0);
  const [cargo, setCargo] = useState('');
  const [importancia, setImportancia] = useState('');
  const [fecha, setFecha] = useState('');
  const [estado, setEstado] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      nombre,
      apellido,
      cedula,
      cargo,
      importancia,
      fecha,
      estado,
    });
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <div
        style={{
          maxWidth: '800px',
          width: '100%',
          backgroundColor: '#f8f9fa',
          padding: '4rem',
          borderRadius: '15px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}
      >
        <h2 className="mb-4 text-center">Gestión EPP</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Muestra el nombre"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Muestra el apellido"
              required
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Cédula</Form.Label>
            <Form.Control
              type="number"
              placeholder="Muestra la cédula"
              required
              onChange={(e) => setCedula(parseInt(e.target.value))}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Cargo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Muestra el cargo"
              required
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Importancia</Form.Label>
            <Form.Control
              type="text"
              placeholder="Muestra la importancia"
              required
              value={importancia}
              onChange={(e) => setImportancia(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              required
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Estado</Form.Label>
            <Form.Select
              required
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            >
              <option value="">Selecciona un estado</option>
              <option value="recibida">Recibida</option>
              <option value="en proceso">En proceso</option>
              <option value="rechazado">Rechazado</option>
            </Form.Select>
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Enviar Estado
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Gestiones;