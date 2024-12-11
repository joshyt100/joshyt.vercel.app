import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticlesComponent from './components/ParticlesComponent';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Apply the theme to the root element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Prevent scroll restoration on refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0); // Scroll to the top when the app loads
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <div className={`app-container ${theme}`}>
        {/* Navbar */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="absolute top-0 left-0 w-full h-screen">
                  <ParticlesComponent theme={theme} />
                </div>
                <div id="home">
                  <Home />
                </div>
                <div id="projects" className="relative scroll-mt-20">
                  <Projects />
                </div>
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

