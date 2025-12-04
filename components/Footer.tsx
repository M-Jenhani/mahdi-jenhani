const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Mahdi Jenhani. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="/resume.pdf"
              download
              className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
            >
              Resume
            </a>
            <a
              href="https://github.com/M-Jenhani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mahdi-jenhani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="mailto:mahdijenhani00@gmail.com"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
            >
              Email
            </a>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-500 text-xs">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
