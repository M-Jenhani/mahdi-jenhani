"use client";

import { useEffect } from 'react';
const Projects = () => {
  const projects = [
    {
    title: 'EventHub — Full-Stack Event Management Platform',
    description:
      'Event management web app with role-based access, JWT auth, real-time notifications, RSVP with waitlists',
    technologies: [
      'Spring Boot',
      'Java',
      'Angular',
      'TypeScript',
      'Angular Material',
      'Spring Security',
      'WebSocket/STOMP',
      'PostgreSQL',
      'Docker'
    ],
    tags: ['Full-Stack', 'Event', 'Management', 'Spring Boot', 'Angular'],
    image: '🎟️',
    imageUrl: "/screenshots/eventhub.png", // Add a screenshot path if you have one, e.g. '/screenshots/EventHub.png'
    github: 'https://github.com/M-Jenhani/eventhub', // Replace with your actual repo if public
    demo: 'https://eventhub-demo25.vercel.app', // Add a live demo link if available
  },
    {
      title: 'MovieMate — Full-Stack Movie Recommendation Platform',
      description:
        'Hybrid recommendation engine combining content-based and collaborative filtering with a polished, responsive UI and full user management.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Prisma', 'PostgreSQL', 'JWT', 'FastAPI', 'PyTorch', 'scikit-learn', 'Docker', 'TMDB API'],
      tags: ['ML', 'Full-Stack', 'Recommendation'],
      image: '🎬',
      imageUrl: '/screenshots/MovieMate.png',
      github: 'https://github.com/M-Jenhani/movie-mate',
      demo: '#',
    },
    {
      title: 'TalkFlow — Full-stack AI Chatbot',
      description:
        'RAG over uploaded documents with sentence-transformers, ChromaDB, FastAPI backend, streaming SSE chat, browser TTS/STT, and personality presets.',
      technologies: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'Hugging Face', 'Transformers', 'sentence-transformers', 'ChromaDB'],
      tags: ['RAG', 'AI', 'Full-Stack'],
      image: '💬',
      imageUrl: '/screenshots/TalkFlow.png',
      github: 'https://github.com/M-Jenhani/TalkFlow',
      demo: 'https://talkflow-demo.vercel.app/',
    },
    {
      title: 'LeadSense — Insurance Lead Prioritization Dashboard',
      description:
        'Production-ready Streamlit dashboard analyzing 16,000+ submissions with time-decay lead scoring, clustering, and Plotly visualizations.',
      technologies: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Plotly', 'scikit-learn'],
      tags: ['Dashboard', 'ML', 'Data Science'],
      image: '📈',
      imageUrl: '/screenshots/LeadSense.png',
      github: 'https://github.com/M-Jenhani/insurance_broker_dashboard',
      demo: 'https://insurance-broker-dashboard.onrender.com/',
    },
    {
      title: 'ServiceHub — Customer Service Management Platform',
      description:
        'Full-stack platform to manage customer service requests with responsive UI, authentication, and ticket tracking.',
      technologies: ['React', 'Express.js', 'Node.js', 'MongoDB'],
      tags: ['Full-Stack', 'Platform'],
      image: '🛠️',
      imageUrl: null,
      github: 'https://github.com/yourusername/servicehub',
      demo: '#',
    },
    {
      title: 'ProjectFlow — Project Management System',
      description:
        'Project and task management web app with React + Ant Design UI and Supabase backend.',
      technologies: ['React', 'Ant Design', 'JavaScript', 'Supabase', 'PostgreSQL'],
      tags: ['Management', 'Full-Stack'],
      image: '📂',
      imageUrl: '/screenshots/ProjectFlow_1.png',
      github: 'https://github.com/yourusername/projectflow',
      demo: '#',
    },
    {
      title: 'PosteMarket — E‑Commerce Marketplace',
      description:
        'Marketplace enabling merchants to sell online with authentication, product management, and admin panel for operations.',
      technologies: ['PHP', 'JavaScript', 'jQuery', 'Bootstrap', 'MySQL'],
      tags: ['E-Commerce', 'Full-Stack'],
      image: '🛒',
      imageUrl: '/screenshots/PosteMarket_1.png',
      github: 'https://github.com/yourusername/postemarket',
      demo: '#',
    },
    {
      title: 'RemoteWork — Meetings & Milestones Manager',
      description:
        'Academic CRUD desktop app to manage remote work: schedule meetings, track project milestones, and organize teams. Built with OOP principles and MVC architecture.',
      technologies: ['Java', 'JavaFX', 'SceneBuilder', 'MVC', 'OOP'],
      tags: ['Management', 'CRUD', 'Desktop'],
      image: '🗂️',
      mediaUrl: '/screenshots/Java_project.mp4',
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          My <span className="text-blue-500">Projects</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          experience
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Listen for hash changes and apply highlight class */}
          <ScriptHandler />
          {projects.map((project, idx) => (
            <div
              key={idx}
              id={
                project.title
                  .split(' — ')[0]
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/(^-|-$)/g, '')
              }
              className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 scroll-mt-24"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 overflow-hidden">
                {project.mediaUrl ? (
                  <video
                    src={project.mediaUrl as string}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    controls
                  />
                ) : project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    {project.image}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-semibold border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="bg-slate-700 text-blue-400 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {/* Conditionally render GitHub link */}
                  {!['PosteMarket — E‑Commerce Marketplace', 'ProjectFlow — Project Management System', 'ServiceHub — Customer Service Management Platform'].includes(project.title) && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {/* Conditionally render Demo link */}
                  {![ 'EventHub — Full-Stack Event Management Platform', 'PosteMarket — E‑Commerce Marketplace', 'ProjectFlow — Project Management System', 'ServiceHub — Customer Service Management Platform', 'RemoteWork — Meetings & Milestones Manager'].includes(project.title) && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

// Client-side script component to handle hash-based highlighting

function ScriptHandler() {
  useEffect(() => {
    const applyHighlight = () => {
      const id = decodeURIComponent(window.location.hash.replace('#', ''));
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      el.classList.add('hash-highlight');
      // Remove after animation to allow re-triggering
      setTimeout(() => el.classList.remove('hash-highlight'), 3200);
    };

    // Apply on initial load if hash exists
    applyHighlight();

    window.addEventListener('hashchange', applyHighlight);
    return () => window.removeEventListener('hashchange', applyHighlight);
  }, []);

  return null;
}
