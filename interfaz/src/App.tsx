import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'; // Usamos Grid System de React Bootstrap
import Sidebar from './Sidebar'; // Importamos el Sidebar
import Topbar from './Topbar'; // Importamos el Topbar
import Interface from './Interfaz';
import Login from './InicioSesion';
import Gestiones from './gestion';
import Registro from './Registro';
import './App.css'; // Los estilos generales
import ListaGestion from './ListaGestion';

const AppLayout: React.FC = () => {
  const location = useLocation();

  // Comprobamos si estamos en una ruta de autenticación o en la página de interfaz
  const isAuthRoute = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/';

  return (
    <div className="app-container">
      {/* Solo muestra Topbar y Sidebar si no estamos en rutas de login, register o Interface */}
      {!isAuthRoute && <Topbar />}

      <div className="app-layout">
        <Container fluid>
          <Row className="h-100">
            {/* Sidebar solo visible si no estamos en rutas de login, register o Interface */}
            {!isAuthRoute && (
              <Col xs={3} className="sidebar">
                <Sidebar />
              </Col>
            )}

            <Col xs={isAuthRoute ? 12 : 9} className="main-content">
              <Routes>
                <Route path="/" element={<Interface />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registro />} />
                <Route path="/gestion" element={<Gestiones />} />
                <Route path="/ListaGestion" element={<ListaGestion />} />
                
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
