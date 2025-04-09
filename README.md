Portfolio Website
A modern, responsive portfolio website showcasing my projects and skills. Built with React, Vite, TailwindCSS, and MDX for a seamless user experience with both light and dark mode support.
Show Image
🚀 Features

Responsive Design: Fully responsive layout that works on all devices
Dark/Light Mode: Toggle between dark and light themes with persistent preferences
Interactive Particles Background: Dynamic particle animation that responds to user interaction
MDX Project Pages: Detailed project descriptions using MDX for rich content
Contact Form Integration: Email contact form powered by EmailJS
Smooth Scrolling: Enhanced navigation with smooth scrolling between sections
Route-based Navigation: Clean URL structure using React Router

💻 Tech Stack

Frontend Framework: React.js
Build Tool: Vite
Styling: TailwindCSS
Routing: React Router
Content: MDX (Markdown + JSX)
Animations: Framer Motion
Background Effects: tsParticles
Forms: EmailJS for contact form submission
Analytics: Vercel Analytics

⚙️ Project Structure
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectNavbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── About.jsx
│   │   ├── ParticlesComponent.jsx
│   │   └── ...
│   ├── projects-mdx/
│   │   ├── member-management-dashboard.mdx
│   │   ├── sidequest.mdx
│   │   ├── vim-motion-snake.mdx
│   │   └── ...
│   └── App.jsx
└── ...
🚀 Getting Started
Prerequisites

Node.js (v16.0.0 or later)
npm or yarn

Installation

Clone the repository
bashgit clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website

Install dependencies
bashnpm install
# or
yarn install

Set up environment variables
bash# Create a .env file with the following variables for EmailJS
VITE_SERVICE_ID=your_service_id
VITE_TEMPLATE_ID=your_template_id
VITE_PUBLIC_KEY=your_public_key

Start the development server
bashnpm run dev
# or
yarn dev

Open your browser and navigate to http://localhost:5173

📝 Key Components
Particle Background
The website features an interactive particle background that responds to user interaction and adapts to the current theme (light/dark mode).
Project Pages
Projects are displayed using MDX files, allowing for rich content mixing markdown and React components. Each project has its own dedicated page with navigation and code snippets.
Contact Form
The contact form is powered by EmailJS, allowing visitors to send messages directly through the website without a backend server.
🌐 Deployment
This website is configured for deployment on Vercel with analytics integration. Simply connect your GitHub repository to Vercel for automatic deployments.
🔄 Theme Switching
The theme preference (dark/light) is stored in localStorage to persist across sessions, providing a consistent experience for returning visitors.
📱 Responsive Design
The site is fully responsive with carefully crafted breakpoints:

Mobile-first approach
Tablet optimization
Desktop enhancement

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
📞 Contact
Feel free to reach out through the contact form on the website or connect with me on LinkedIn.
