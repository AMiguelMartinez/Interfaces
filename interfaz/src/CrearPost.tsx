import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CrearPost: React.FC = () => {
  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card
        style={{ maxWidth: "500px", width: "90%" }}
        className="shadow p-5 bg-light rounded"
      >
        <h2 className="text-center mb-4" style={{ fontSize: "24px", color: "#333" }}>
          ¡Crea una publicación!
        </h2>

        <Button variant="secondary" className="mb-3 w-100">
          AÑADE EL TÍTULO
        </Button>

        <div
          className="mb-3 p-4 text-center rounded border border-dashed"
          style={{
            backgroundColor: "#f0f0f0",
            border: "1px dashed #ccc",
            color: "#555",
          }}
        >
          <span>SUBE UNA IMAGEN</span>
        </div>

        <Button variant="secondary" className="mb-3 w-100">
          AÑADE UNA DESCRIPCIÓN
        </Button>

        <Button variant="secondary" className="mb-3 w-100">
          SUBE UN ARCHIVO
        </Button>

        <Button
          className="w-100"
          style={{ backgroundColor: "#99f6e4", border: "none", color: "white" }}
        >
          PUBLICAR
        </Button>
      </Card>
    </Container>
  );
};

export default CrearPost;