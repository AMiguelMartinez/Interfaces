import React from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListaChequeo: React.FC = () => {
  return (
        <div className="p-4">
          <h3 className="fw-bold mb-4">Lector de Listas</h3>
          <div className="p-4 rounded-4" style={{ backgroundColor: '#d9d9d9' }}>
            <Form>
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

              <div className="d-flex gap-3">
                <Button className="flex-fill rounded-0 py-3 fs-5 fw-bold" style={{ backgroundColor: '#027b8c', border: 'none' }}>
                  CARACTERISTICAS
                </Button>
                <Button className="flex-fill rounded-0 py-3 fs-5 fw-bold" style={{ backgroundColor: '#027b8c', border: 'none' }}>
                  VERIFICADO
                </Button>
              </div>
            </Form>
          </div>
        </div>
  );
};

export default ListaChequeo;
