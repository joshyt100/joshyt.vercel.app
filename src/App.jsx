import React, { useState, useEffect, lazy, Suspense, memo } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// lazy load MDX Project Components
const SideQuest = lazy(() => import('./projects-mdx/sidequest.mdx'));
const VimMotionSnake = lazy(() => import('./projects-mdx/vim-motion-snake.mdx'));
const MemberManagementDashboard = lazy(() => import('./projects-mdx/member-management-dashboard.mdx'));
const DotFiles = lazy(() => import('./projects-mdx/dot_files.mdx'));
const CanadianExperience = lazy(() => import('./projects-mdx/canadian-experience.mdx'));
const PurchaseOrderSystem = lazy(() => import('./projects-mdx/purchase-order-system.mdx'));

// memoized components to optimize performance
const Navbar = memo(lazy(() => import('./components/Navbar')));
const ProjectNavbar = memo(lazy(() => import('./components/ProjectNavbar')));
const Home = memo(lazy(() => import('./components/Home')));
const Projects = memo(lazy(() => import('./components/Projects')));
const Contact = memo(lazy(() => import('./components/Contact')));
const About = memo(lazy(() => import('./components/About')));
const ParticlesComponent = memo(lazy(() => import('./components/ParticlesComponent')));

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    const isPageReload = performance.getEntriesByType('navigation').some((nav) => nav.type === 'reload');

    if (!isPageReload && location.pathname === '/') {
      const hash = location.hash || '';
      if (hash === '#projects') {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          smoothScrollTo(projectsSection.offsetTop);
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [location]);

  // Smooth scrolling function using requestAnimationFrame
  const smoothScrollTo = (targetPosition) => {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 500;
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const easeInOutCubic = progress / duration < 0.5
        ? 4 * (progress / duration) ** 3
        : 1 - Math.pow(-2 * (progress / duration) + 2, 3) / 2;

      window.scrollTo(0, startPosition + distance * easeInOutCubic);
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  };

  //toggle Theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const isProjectDetailPage =
    location.pathname.replace(/\/$/, '').startsWith('/projects/') &&
    location.pathname.replace(/\/$/, '') !== '/projects';

  return (
    <div className={`app-container ${theme}`}>
      {isProjectDetailPage ? <ProjectNavbar /> : <Navbar theme={theme} toggleTheme={toggleTheme} />}

      <Suspense fallback={<div className="text-center text-xl mt-10">Loading...</div>}>
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
                  <div id="projects" className="relative scroll-mt-4 sm:scroll-mt-6 md:scroll-mt-6 2xl:scroll-mt-6">
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
          <Route path="/about" element={<About theme={theme} />} />
        </Routes>
      </Suspense>
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

