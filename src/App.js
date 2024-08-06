
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Countdown from './components/Countdown';
import Welcome from './components/Welcome';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeContinue = () => {
    setShowWelcome(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={showWelcome ? (
              <Welcome onContinue={handleWelcomeContinue} />
            ) : (
              <Countdown />
            )}
          />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
