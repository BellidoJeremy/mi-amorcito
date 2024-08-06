
import React from 'react';
import './Welcome.css'; 

const Welcome = ({ onContinue }) => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-title">Bienvenida, Mi amorcito bonita 💖</h1>
        <p className="welcome-message">
          Amorcito, esta página es una cuenta regresiva para algo realmente importante. <br />
          Quiero que estés atenta para cuando esto esté listo, mi amorcito.
        </p>
        <button
          onClick={onContinue}
          className="continue-button"
        >
          Continuar
        </button>
      </div>    
    </div>
  );
};

export default Welcome;
