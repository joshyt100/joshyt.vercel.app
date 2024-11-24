import React from 'react';
import CanvasBackground from './components/CanvasBackground';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import ParticleBackground from './components/ParticleBackground';
import ParticlesComponent from './components/ParticlesComponent';
//import './App.scss';

function App() {
  return (
    <div className="app-container">
      {/* Canvas Background */}
      <ParticlesComponent />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Home />
      <Projects />
    </div>
  );
}

export default App;

