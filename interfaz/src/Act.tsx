import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const Formulario: React.FC = () => {
  return (
    <Container className="bg-secondary bg-opacity-10 rounded p-4 my-4" style={{ maxWidth: "700px" }}>
       <h4 className="text-center fw-bold mb-4">Lector de Actividades</h4>
      <Form>
        <FormField label="Nombre Usuario:" />
        <FormField label="Nombre de la Actividad:" />
        <FormField label="Fecha de las actividades:" type="date" />
        <FormField label="Descripcion de la Actividad:" isTextarea />
        <FormField label="Subir imagen o videos:" type="file" />
        <FormField label="Subir archivos:" type="file" />
        <div className="text-center mt-4">
          <div className="d-flex justify-content-center">
                      <Button variant="primary" type="submit">
                        Visto
                      </Button>
                    </div>
        </div>
      </Form>
    </Container>
  );
};

const FormField = ({
  label,
  type = "text",
  isTextarea = false,
}: {
  label: string;
  type?: string;
  isTextarea?: boolean;
}) => (
  <Form.Group className="mb-3">
    <Form.Label>{label}</Form.Label>
    {isTextarea ? (
      <Form.Control as="textarea" rows={3} />
    ) : (
      <Form.Control type={type} />
    )}
  </Form.Group>
);

export default Formulario;