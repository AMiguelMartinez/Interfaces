import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListasRecibidas: React.FC = () => {
  const navigate = useNavigate();

const handleAbrir = () => {
  navigate('/detalles');
}
  return (
    
       <div className="d-flex min-vh-100 bg-dark text-white">
             <div className="bg-black text-white d-flex flex-column p-3" style={{ width: '220px' }}>
               <div className="mb-5">
                 <Button variant="outline-light" className="w-100 mt-5 mb-2 rounded-pill">Home</Button>
                 <Button variant="outline-light" className="w-100 mb-2 rounded-pill">Lista de Chequeos</Button>
                 <Button variant="outline-light" className="w-100 mb-2 rounded-pill">Reportes</Button>
                 <Button variant="outline-light" className="w-100 mb-2 rounded-pill">Gestion Epp</Button>
                 <Button variant="outline-light" className="w-100 mb-2 rounded-pill">Actividades Ludicas</Button>
                 <Button variant="outline-light" className="w-100 mb-2 rounded-pill">Blog</Button>
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
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="fw-bold">Listas de Chequeo Recibidas</h4>
            <InputGroup style={{ width: '300px', borderRadius: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <Form.Control placeholder="Buscar ..." className="rounded-start-pill border-0 shadow-sm" />
              <InputGroup.Text className="bg-white border-0 rounded-end-pill">
                🔍
              </InputGroup.Text>
            </InputGroup>
          </div>

          <div className="p-4 bg-secondary bg-opacity-25 rounded-4">
            {[...Array(7)].map((_, idx) => (
              <div key={idx} className="d-flex justify-content-between align-items-center p-3 mb-3 bg-white rounded-3 shadow-sm">
                <strong className="fs-6">Nombre Usuario - Fecha</strong>
                <div className="d-flex gap-2">
                  <Button style={{ backgroundColor: '#9fffe0', color: 'black', border: '1px solid black' }} className="fw-bold"   onClick={handleAbrir}
                  >Abrir</Button>
                  <Button variant="danger">⬇️</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListasRecibidas;