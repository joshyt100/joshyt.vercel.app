import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProjectNavbar from './components/ProjectNavbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticlesComponent from './components/ParticlesComponent';

import ECommercePlatform from './projects-mdx/e-commerce-platform.mdx';
import SocialNetworkingPlatform from './projects-mdx/social-networking-platform.mdx';
import MachineLearningProject from './projects-mdx/machine-learning-project.mdx';
import MemberManagementDashboard from './projects-mdx/member-management-dashboard.mdx';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (location.pathname === '/') {
      window.scrollTo(0, 0); // Scroll to the top for the home page
    }
  }, [location]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const isProjectDetailPage =
    location.pathname.replace(/\/$/, '').startsWith('/projects/') &&
    location.pathname.replace(/\/$/, '') !== '/projects';

  return (
    <div className={`app-container ${theme}`}>
      {isProjectDetailPage ? (
        <ProjectNavbar />
      ) : (
        <Navbar theme={theme} toggleTheme={toggleTheme} />
      )}

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="absolute top-0 left-0 w-full h-screen z-0">
                <ParticlesComponent theme={theme} />
              </div>
              <main className="relative z-10">
                <Home />
                <div id="projects" className="relative scroll-mt-20">
                  <Projects />
                </div>
              </main>
            </>
          }
        />
        <Route path="/projects/member-management-dashboard" element={<MemberManagementDashboard />} />
        <Route path="/projects/e-commerce-platform" element={<ECommercePlatform />} />
        <Route path="/projects/social-networking-platform" element={<SocialNetworkingPlatform />} />
        <Route path="/projects/machine-learning-project" element={<MachineLearningProject />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

