import React from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListaChequeo: React.FC = () => {
  return (
    <div className="d-flex min-vh-100 bg-dark text-white">
      <div className="bg-black text-white d-flex flex-column p-3" style={{ width: '220px' }}>
        <div className="flex-grow-1 d-flex flex-column">
        <Button variant="outline-light" className="w-100 mt-5 mb-1 rounded-pill">Home</Button>
        <Button variant="outline-light" className="w-100 mb-1 rounded-pill">Lista de Chequeos</Button>
          <Button variant="outline-light" className="w-100 mb-1 rounded-pill">Reportes</Button>
          <Button variant="outline-light" className="w-100 mb-1 rounded-pill">Gestion Epp</Button>
          <Button variant="outline-light" className="w-100 mb-1 rounded-pill">Actividades Ludicas</Button>
          <Button variant="outline-light" className="w-100 mb-1 rounded-pill">Blog</Button>
        </div>

        <div className="mt-auto text-center">
          <div className="text-muted small">Mas Servicios</div>
          <Button variant="outline-light" className="w-100 mt-2 rounded-pill">Salir</Button>
          <div className="mt-4 text-center">
            <small className="text-muted">IST SAS</small>
          </div>
        </div>
      </div>

      <div className="flex-grow-1 bg-light text-dark">
        <div className="d-flex justify-content-between align-items-center p-3 bg-black text-white">
          <div></div>
          <div className="d-flex align-items-center gap-3">
            <span className="fw-bold">Nombre Administrador</span>
            <div
              style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(to bottom right, purple, white)' }}
            ></div>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default ListaChequeo;
