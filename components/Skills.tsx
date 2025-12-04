const Skills = () => {
  const categories = [
    {
      title: 'Core Stack',
      items: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'FastAPI', 'Python', 'Angular', 'Spring Boot'],
    },
    {
      title: 'Data / ML',
      items: ['PyTorch', 'scikit-learn', 'Pandas', 'NumPy', 'Streamlit', 'Plotly', 'Hugging Face', 'sentence-transformers', 'ChromaDB'],
    },
    {
      title: 'Databases',
      items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Prisma', 'Supabase', 'Oracle (PL/SQL)'],
    },
    {
      title: 'DevOps / Tools',
      items: ['Docker', 'Git/GitHub', 'Jira', 'AWS (Cloud Practitioner)'],
    },
    {
      title: 'Concepts',
      items: ['RAG', 'REST APIs', 'MVC / OOP', 'JWT / Auth'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          My <span className="text-blue-500">Skills</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A snapshot of my practical skills — grouped by technology areas
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-blue-500 mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, iIdx) => (
                  <span
                    key={iIdx}
                    className="bg-slate-700 text-blue-400 px-3 py-1 rounded-full text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          {['Problem Solving', 'Agile', 'Team Collaboration', 'Testing', 'Responsive Design', 'API Integration', 'Version Control'].map(
            (skill, idx) => (
              <span
                key={idx}
                className="bg-slate-800 border border-slate-600 text-gray-300 px-4 py-2 rounded-full text-sm hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
