import React from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Registro.css'

const Registro: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-dark">
      <div className="register-form-container bg-light p-5 rounded-5 shadow-lg position-relative" style={{ width: '500px' }}>
        <button className="btn-close position-absolute top-0 end-0 m-3" aria-label="Close"></button>
        <h3 className="text-center mb-4 fw-bold">Resgistrarse</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>Nombre:</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre" className="rounded-pill px-3" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Apellido:</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu apellido" className="rounded-pill px-3" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Nombre de usuario:</Form.Label>
            <Form.Control type="text" placeholder="Nombre de usuario" className="rounded-pill px-3" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Correo Electronico:</Form.Label>
            <Form.Control type="email" placeholder="ejemplo@correo.com" className="rounded-pill px-3" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPosition">
            <Form.Label>Cargo:</Form.Label>
            <Form.Control type="text" placeholder="Tu cargo" className="rounded-pill px-3" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" className="rounded-pill px-3" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formConfirmPassword">
            <Form.Label>Confirmación de contraseña:</Form.Label>
            <Form.Control type="password" placeholder="Repite la contraseña" className="rounded-pill px-3" />
          </Form.Group>

          <div className="text-center">
            <Button variant="dark" className="rounded-pill px-4 py-2 shadow-lg neon-btn">
              Iniciar Sesion</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Registro;