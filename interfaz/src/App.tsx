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
import Init from './Home';

const AppLayout: React.FC = () => {
  const location = useLocation();

  const isAuthRoute = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/';

  return (
    <div className="app-container">
      {!isAuthRoute && <Topbar />}

      <div className="app-layout">
        <Container fluid>
          <Row className="h-100">
        
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
                <Route path="/Home" element={<Init />} />
                
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
