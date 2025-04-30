import React from "react";
import "./IS.css";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <button className="close-button">×</button>

        <img src="/logo.png" alt="Logo" className="logo" />
        <p className="logo-text">SST</p>
        <p className="slogan">SLOGAN HERE</p>

        <p className="title">
          <span className="dot">◉</span> INICIO SESION
        </p>

        <div className="form-group">
          <label>Email</label>
          <input type="email" className="input" />
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input type="password" className="input" />
        </div>

        <div className="links">
          <a href="#">¿Olvidaste la contraseña?</a>
          <a href="#">registrate</a>
        </div>

        <button className="login-button" onClick={() => navigate("/Home")}>Iniciar Sesion</button>
      </div>
    </div>
  );
}

export default Login;