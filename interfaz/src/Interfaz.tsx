import React from "react";
import "./HomeScreen.css";
import { useNavigate } from "react-router-dom";

const Interface: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <div className="home-container">
        <h1 className="home-title">SALUD Y SEGURIDAD<br />EN EL TRABAJO</h1>

        <button className="home-button" onClick={() => navigate("/login")}>Inicio de sesión</button>
        <button className="home-button" onClick={() => navigate("/register")}>Registrarme</button>

        <a href="#" className="forgot-password">¿Olvidaste la contraseña?</a>

        <button className="start-button" onClick={() => navigate("/ListaGestion")}>Comenzar</button>
      </div>
    </div>
  );
}

export default Interface;