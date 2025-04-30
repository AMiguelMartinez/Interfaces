import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LectorReportes: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center p-5 bg-white">
      <div
        className="p-4 rounded-4"
        style={{
          backgroundColor: '#f8f9fa',
          width: '600px', 
          maxWidth: '100%', 
        }}
      >
        <h4 className="text-center fw-bold mb-4">Lector de Reportes</h4>

        <Form>
          {[
            ["Nombre Usuario", "text"],
            ["Cargo del usuario", "text"],
            ["Cedula", "text"],
            ["Fecha", "date"],
            ["Lugar", "text"],
            ["Descripcion", "text"]
          ].map(([label, type], idx) => (
            <Form.Group key={idx} as={Row} className="mb-3">
              <Form.Label column sm={3} className="fw-bold">{label}:</Form.Label>
              <Col sm={9}>
                <Form.Control type={type as string} />
              </Col>
            </Form.Group>
          ))}

          <Row className="mb-3">
            <Form.Label column sm={3} className="fw-bold">Imagen:</Form.Label>
            <Col sm={3}>
              <Form.Control type="file" />
            </Col>
            <Form.Label column sm={2} className="fw-bold">Archivos:</Form.Label>
            <Col sm={4}>
              <Form.Control type="file" multiple />
            </Col>
          </Row>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3} className="fw-bold">Selecciona un estado</Form.Label>
            <Col sm={9}>
              <Form.Select>
                <option>Selecciona una opción</option>
                <option>Pendiente</option>
                <option>En revisión</option>
                <option>Completado</option>
                <option>Rechazado</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit">
              Enviar Estado
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LectorReportes;
