import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
const Init: React.FC = () => {
    return (
        <Container fluid className="mt-5 px-4">
            <Row className="justify-content-center text-center mb-5">
                <Col lg={8}>
                    <h1 className="text-success fw-bold">¡Bienvenido al Sistema de Salud y Seguridad en el Trabajo!</h1>
                    <p className="fs-5 text-muted">
                        Promovemos entornos laborales seguros, saludables y productivos para todos. 
                        Explora nuestras herramientas para la gestión de riesgos, EPP, reportes y más.
                    </p>
                </Col>
            </Row>
            <Row className="align-items-center justify-content-center min-vh-50">
                <Col md={5} className="text-center mb-4 mb-md-0">
                    <Image
                        src="https://img.freepik.com/vector-premium/dia-mundial-seguridad-salud-trabajo-ilustracion_278713-1164.jpg?w=2000"
                        fluid
                        rounded
                        alt="Imagen de seguridad en el trabajo"
                    />
                </Col>
                <Col
                    md={6}
                    className="bg-light text-black text-center d-flex justify-content-center align-items-center"
                    style={{ minHeight: "300px" }}
                >
                    <div>
                        <h2>Comprometidos con tu bienestar laboral</h2>
                        <p>
                            Esta aplicación te ayuda a cumplir con los estándares de seguridad, gestionar tu EPP, 
                            reportar incidentes y recibir asesoría efectiva. ¡Tu salud es lo primero!
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Init;