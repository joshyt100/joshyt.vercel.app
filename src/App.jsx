import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProjectNavbar from './components/ProjectNavbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticlesComponent from './components/ParticlesComponent';

import SideQuest from './projects-mdx/sidequest.mdx';
import VimMotionSnake from './projects-mdx/vim-motion-snake.mdx';
import MemberManagementDashboard from './projects-mdx/member-management-dashboard.mdx';
import DotFiles from './projects-mdx/dot_files.mdx';
import CanadianExperience from './projects-mdx/canadian-experience.mdx';
import PurchaseOrderSystem from './projects-mdx/purchase-order-system.mdx';
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
      const hash = location.hash || '';
      if (hash === '#projects') {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          window.scrollTo(0, projectsSection.offsetTop); // Instantly jump to projects
        }
      } else {
        window.scrollTo(0, 0); // Scroll to top for the home page
      }
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
        <Route path="/projects/sidequest" element={<SideQuest />} />
        <Route path="/projects/snake-game" element={<VimMotionSnake />} />
        <Route path="/projects/dot-files" element={<DotFiles />} />
        <Route path="/projects/canadian-experience" element={<CanadianExperience />} />
        <Route path="/projects/purchase-order-system" element={<PurchaseOrderSystem />} />
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

