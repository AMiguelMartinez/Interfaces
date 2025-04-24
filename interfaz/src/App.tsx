import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Interface from './Interfaz';
import Login from './InicioSesion';
import Registro from './Registro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Interface />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;