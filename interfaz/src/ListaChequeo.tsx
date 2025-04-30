import React from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListaChequeo: React.FC = () => {
  return (
    <div className="d-flex justify-content-center p-4">
      <div
        className="p-4 rounded-4"
        style={{
          backgroundColor: '#f8f9fa',
          width: '600px',
          maxWidth: '100%',
        }}
      >
        <Form>
          <h2 className="mb-4 text-center">Lector de lista de chequeo</h2>
          <Form.Group className="mb-4">
            <Form.Label className="fw-bold">Nombre Usuario:</Form.Label>
            <Form.Control type="text" className="rounded-pill" />
          </Form.Group>

          <div className="row">
            <Form.Group className="mb-4 col">
              <Form.Label className="fw-bold">Fecha Realizada:</Form.Label>
              <Form.Control type="date" className="rounded-pill" />
            </Form.Group>
            <Form.Group className="mb-4 col">
              <Form.Label className="fw-bold">Hora:</Form.Label>
              <Form.Control type="time" className="rounded-pill" />
            </Form.Group>
          </div>

          <Form.Group className="mb-4">
            <Form.Label className="fw-bold">Marca:</Form.Label>
            <Form.Control type="text" className="rounded-pill" />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="fw-bold">Modelo:</Form.Label>
            <Form.Control type="text" className="rounded-pill" />
          </Form.Group>

          <div className="row">
            <Form.Group className="mb-4 col">
              <Form.Label className="fw-bold">Soat:</Form.Label>
              <div className="d-flex align-items-center gap-3">
                <Form.Check inline label="Sí" name="soat" type="radio" id="soat-si" />
                <Form.Check inline label="No" name="soat" type="radio" id="soat-no" />
              </div>
            </Form.Group>

            <Form.Group className="mb-4 col">
              <Form.Label className="fw-bold">Tecnicomecanica:</Form.Label>
              <div className="d-flex align-items-center gap-3">
                <Form.Check inline label="Sí" name="tec" type="radio" id="tec-si" />
                <Form.Check inline label="No" name="tec" type="radio" id="tec-no" />
              </div>
            </Form.Group>
          </div>

          <Form.Group className="mb-4">
            <Form.Label className="fw-bold">Kilometraje Actual:</Form.Label>
            <Form.Control type="text" className="rounded-pill" />
          </Form.Group>

          {/* Contenedor para los botones centrados */}
          <div className="d-flex justify-content-center gap-4 mt-4">
            <Button variant="primary" type="submit" className="w-25">
              Caracteristicas
            </Button>
            <Button variant="primary" type="submit" className="w-25">
              Verificado
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ListaChequeo;


