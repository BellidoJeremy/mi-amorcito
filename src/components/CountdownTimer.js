// src/components/CountdownTimer.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CountdownTimer.css'; // Asegúrate de tener el CSS adecuado

const CountdownTimer = ({ targetDate, title, showButtonAfter }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));
  const navigate = useNavigate();
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  function getTimeLeft(targetDate) {
    const now = new Date();
    const difference = targetDate - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  }

  const handleButtonClick = () => {
    if (showButtonAfter && timeLeft.days <= 0 && timeLeft.hours <= 0 && timeLeft.minutes <= 0 && timeLeft.seconds <= 0) {
      navigate('/gallery');
    }
  };

  return (
    <div className="countdown-timer">
      <h2>{title}</h2>
      <div className="time">
        <span>{timeLeft.days} Dias </span>
        <span>{timeLeft.hours} Horas </span>
        <span>{timeLeft.minutes} Minutos </span>
        <span>{timeLeft.seconds} Segundos </span>
      </div>
      {showButtonAfter && timeLeft.days <= 0 && timeLeft.hours <= 0 && timeLeft.minutes <= 0 && timeLeft.seconds <= 0 && (
        <button onClick={handleButtonClick} className="btn">Click Aquí</button>
      )}
    </div>
  );
};

export default CountdownTimer;
