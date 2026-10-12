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
              I'm a Software Developer at Linedata, where I build new features and maintain EKIP, an end-to-end financing and leasing software solution. I graduated from ENICarthage (National Engineering School of Carthage) with a degree in Computer Science Engineering.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey at Linedata began with my end-of-studies internship: an AI-powered assistant that helps users navigate and leverage EKIP's API ecosystem. I enjoy working with others to turn complex systems into reliable, user-friendly solutions, and I'm especially interested in AI, LLM-based tools, and the full software development lifecycle, from design to delivery.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-slate-700/50 p-4 rounded-lg flex-1 min-w-[150px]">
                <h3 className="text-blue-500 font-semibold text-xl mb-2">
                  Education
                </h3>
                <p className="text-gray-300">Computer Engineering</p>
                <p className="text-gray-400 text-sm">ENICarthage (Graduated 2026)</p>
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
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    Where I Work
                  </h3>
                  <a
                    href="https://www.linedata.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-lg p-1 shrink-0"
                  >
                    <img
                      src="/Linedata_Logo.jpg"
                      alt="Linedata"
                      className="h-14 w-auto"
                    />
                  </a>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">▹</span>
                    <span>
                      Linedata is an international software provider serving the asset management and lending & leasing industries
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">▹</span>
                    <span>
                      Software Developer on EKIP, the company's end-to-end financing and leasing solution, in Tunis
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">▹</span>
                    <span>
                      Day to day with Java, Spring, Angular, PL/SQL, and Maven
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">▹</span>
                    <span>
                      Joined after my end-of-studies internship building an LLM-based API assistant
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">▹</span>
                    <span>
                      Always happy to connect on AI, LLM-based tools, and software engineering
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
