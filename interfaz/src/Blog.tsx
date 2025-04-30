import React from "react";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CrearPost from "./CrearPost";

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "TITULO 1",
      description: "DESCRIPCIÓN 1",
      image: "IMAGEN DE LA PUBLICACION 1",
    },
    {
      id: 2,
      title: "TITULO 2",
      description: "DESCRIPCIÓN 2",
      image: "IMAGEN DE LA PUBLICACION 2",
    },
    {
      id: 3,
      title: "TITULO 3",
      description: "DESCRIPCIÓN 3",
      image: "IMAGEN DE LA PUBLICACION 3",
    },
  ];

  return (
    <Container className="mt-5">
      <Row>
        {/* Columna para las publicaciones del blog */}
        <Col md={8}>
          <h1 className="text-center mb-5">Bienvenidos a mi Blog</h1>
          {posts.map((post) => (
            <Card className="mb-4 shadow-sm mx-auto" style={{ maxWidth: "900px" }} key={post.id}>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Control value={post.title} disabled />
                </Form.Group>

                <div className="bg-light p-4 text-center rounded mb-3">
                  <span>{post.image}</span>
                </div>

                <Form.Group className="mb-3">
                  <Form.Control value={post.description} disabled />
                </Form.Group>

                <Row className="text-center mb-3">
                  <Col><span>❤️</span></Col>
                  <Col><span>💬</span></Col>
                  <Col><span>🔖</span></Col>
                </Row>

                <Button variant="info" className="text-white w-100">
                  SECCION DE COMENTARIOS
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Col>
        {/* Columna para el formulario de CrearPost */}
        <Col md={4} className="mb-4">
          <CrearPost />
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
