const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          About <span className="text-blue-500">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a motivated final-year Software Engineer & Data Science / AI enthusiast at ENICarthage (National Engineering School of Carthage), passionate about building innovative solutions at the intersection of software engineering and artificial intelligence.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With hands-on experience in full-stack development, machine learning, and data analysis across multiple internships, I've developed expertise in creating production-ready applications—from AI-powered dashboards to intelligent recommendation systems. I'm actively seeking a PFE (end-of-studies internship) to contribute to cutting-edge projects.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-slate-700/50 p-4 rounded-lg flex-1 min-w-[150px]">
                <h3 className="text-blue-500 font-semibold text-xl mb-2">
                  Education
                </h3>
                <p className="text-gray-300">Computer Engineering</p>
                <p className="text-gray-400 text-sm">ENICarthage (Final Year)</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg flex-1 min-w-[150px]">
                <h3 className="text-blue-500 font-semibold text-xl mb-2">
                  Focus
                </h3>
                <p className="text-gray-300">Software Engineering & AI</p>
                <p className="text-gray-400 text-sm">Data Science / ML</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-1">
              <div className="bg-slate-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  What I'm Looking For
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">▹</span>
                    <span>
                      PFE internship in software engineering or AI/ML
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">▹</span>
                    <span>
                      Open to opportunities in Tunisia and internationally, willing to relocate
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">▹</span>
                    <span>
                      Opportunity to work on impactful, real-world projects
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">▹</span>
                    <span>
                      Environment fostering innovation and continuous learning
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">▹</span>
                    <span>
                      Hands-on experience with cutting-edge technologies
                    </span>
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

export default About;
