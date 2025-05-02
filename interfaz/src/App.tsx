import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar'; 
import Topbar from './Topbar';
import Interface from './Interfaz';
import Login from './InicioSesion';
import Gestiones from './gestion';
import Registro from './Registro';
import './App.css'; 
import ListaGestion from './ListaGestion';
import Init from './Home';
import ListaChequeo from './ListaChequeo';
import ListaChequeoRecibida from './ListaRecibidaChequeo';
import LectorReportes from './Reportes';
import ListaReportes from './ListaReportes';
import CrearPost from './CrearPost';
import Blog from './Blog';
import Formulario from './Act';
import ListaAct from './ListaAct';
import AsesoramientoApp from './Asesoramiento';

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
                <Route path="/CrearPost" element={<CrearPost />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/ListaReportes" element={<ListaReportes />} />
                <Route path="/Reportes" element={<LectorReportes/>} />
                <Route path="/Asesoramiento" element={<AsesoramientoApp/>} />
                <Route path="/ListaAct" element={<ListaAct/>} />
                <Route path="/Formulario" element={<Formulario/>} />
                <Route path="/ListaChequeo" element={<ListaChequeo />} />
                <Route path="/ListaChequeoRecibida" element={<ListaChequeoRecibida />} />
                
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
