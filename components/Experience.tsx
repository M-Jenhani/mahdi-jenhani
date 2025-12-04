const Experience = () => {
  const experiences = [
    {
      title: 'Data Scientist Intern',
      organization: 'Cabinet Vital',
      period: 'Jul 2025 – Aug 2025',
      location: 'Remote',
      description:
        'LeadSense — Insurance Lead Prioritization Dashboard',
      highlights: [
        'Engineered production-ready Streamlit dashboard analyzing 16,000+ insurance prospects with ML-based lead scoring',
        'Implemented clustering algorithms and Plotly visualizations for data-driven conversion tracking',
        'Tech: Python, Pandas, NumPy, Plotly, Scikit-learn, Streamlit',
      ],
    },
    {
      title: 'Full-Stack Developer Intern',
      organization: 'Tunisie Telecom',
      period: 'Jul 2024 – Aug 2024',
      location: 'Kelibia',
      description:
        'ServiceHub — Customer Service Management Platform',
      highlights: [
        'Built full-stack customer service management platform with responsive UI and ticketing system',
        'Integrated Express.js backend with API endpoints, authentication, and MongoDB data management',
        'Tech: React, Express.js, Node.js, MongoDB',
      ],
    },
    {
      title: 'Full-Stack Developer Intern',
      organization: 'HorizonLux',
      period: 'Feb 2023 – Jun 2023',
      location: 'Kelibia',
      description:
        'ProjectFlow — Project Management System',
      highlights: [
        'Created project management web application with React and Ant Design for enhanced collaboration',
        'Leveraged Supabase for RESTful API, secure authentication, and PostgreSQL database',
        'Tech: React, Ant Design, JavaScript, Supabase, PostgreSQL',
      ],
    },
    {
      title: 'Full-Stack Developer Intern',
      organization: 'La Poste Tunisienne',
      period: 'Jan 2022 – Feb 2022',
      location: 'Kélibia',
      description:
        'PosteMarket — E-Commerce Marketplace',
      highlights: [
        'Developed e-commerce platform with user authentication, product management, and merchant features',
        'Built admin panel for managing users, products, orders, and improving operational efficiency',
        'Tech: PHP, JavaScript, jQuery, Bootstrap, MySQL',
      ],
    },
  ];

  const education = [
    {
      degree: 'National Degree in Computer Engineering',
      institution: 'National Engineering School of Carthage (ENICarthage)',
      period: 'Sep 2023 – Jul 2026',
      location: 'Tunis',
      description: 'Final-year student specializing in Software Engineering & Data Science / AI',
    },
    {
      degree: 'National Degree in Information Technology',
      institution: 'National Higher Institute of Technological Studies (ISET)',
      period: 'Sep 2020 – Jul 2023',
      location: 'Kelibia',
      description: 'Undergraduate program in Information Technology',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Experience & <span className="text-blue-500">Education</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          My journey in tech and academic achievements
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-blue-500 mb-6 flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-white mb-1">
                    {exp.title}
                  </h4>
                  <p className="text-blue-400 mb-1">{exp.organization}</p>
                  <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                  <a
                    href={`#${exp.description.split(' — ')[0].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                    className="text-gray-400 hover:text-blue-500 transition-colors mb-3 inline-block"
                  >
                    {exp.description}
                  </a>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start text-gray-300">
                        <span className="text-blue-500 mr-2">▹</span>
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-blue-500 mb-6 flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-white mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-400 mb-1">{edu.institution}</p>
                  <p className="text-gray-500 text-sm mb-3">{edu.period}</p>
                  <p className="text-gray-400">{edu.description}</p>
                </div>
              ))}

              {/* Certifications */}
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h4 className="text-lg font-bold text-white mb-4">
                  Leadership & Activities
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-300">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-sm">IEEE ENICarthage Student Branch - Member (Sep 2023 – Jun 2024)</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-sm">The Changers Club - Secretary General (Mar 2021 – Nov 2021)</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-sm">AWS Cloud Practitioner Certification</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
