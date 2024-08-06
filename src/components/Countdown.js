import React from 'react';
import CountdownTimer from './CountdownTimer';
import './Countdown.css';
import MiAmorcitoImage from '../images/MiAmorcito.png'; 

const Countdown = () => {
  return (
    <div className="countdown-wrapper">
      <div className="countdown-image-container">
        <img src={MiAmorcitoImage} alt="Left" className="side-image" />
      </div>
      <div className="countdown-content">
        <h1 className="countdown-title">Contadores</h1>
        <div className="countdown-container">
          <CountdownTimer
            targetDate={new Date('2024-08-11T00:00:00')}
            title="???????????????????"
          />
          <CountdownTimer
            targetDate={new Date('2024-11-09T00:00:00')}
            title="???????????????????"
          />
          <CountdownTimer
            targetDate={new Date('2024-12-17T00:00:00')}
            title="???????????????????"
          />
        </div>
      </div>
      <div className="countdown-image-container">
        <img src={MiAmorcitoImage} alt="Right" className="side-image" />
      </div>
    </div>
  );
};

export default Countdown;
