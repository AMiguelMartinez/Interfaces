import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Interface from './Interfaz';
import Login from './InicioSesion';
import Registro from './Registro';
import ListaChequeo from './ListaChequeo';
import ListasRecibidas from './ListasRecibidas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Interface />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registro />} />
        <Route path="/Lista" element={<ListasRecibidas></ListasRecibidas>} />
        <Route path="/detalles" element={<ListaChequeo></ListaChequeo>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;