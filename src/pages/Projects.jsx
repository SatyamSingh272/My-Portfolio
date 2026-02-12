import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
 
  
  {
    title: "Swiggy Clone - Real-Time API Integration",
    description:
      "A Swiggy-inspired food delivery app with real-time restaurant data, Redux-powered cart management, and SSR for fast performance and SEO-friendly routing.",
    tech: ["React.js", "Redux Toolkit", "Tailwind CSS","React Router"],
    github: "https://github.com/SatyamSingh272/Swiggy-React-Project",
    live: "",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern and fully responsive personal portfolio website built with React.js to showcase my skills, projects, and experience. Features smooth section-based navigation, reusable components, and a clean UI designed with Tailwind CSS.",
    tech: ["React.js", "Tailwind CSS"],
    github: "https://github.com/SatyamSingh272/My-Portfolio",
    live: "",
  },
  {
    title: "Tic Tac Toe",
    description:
      "An interactive Tic Tac Toe game built using HTML, CSS, and JavaScript, featuring real-time game logic and dynamic UI updates. Implemented win and draw detection, player turn handling, and game reset functionality for a smooth and engaging user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/SatyamSingh272/Tic-Tac-Toe",
    live: "",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0a1f44]">
            Projects
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                bg-white border border-gray-200
                rounded-xl p-6 shadow-sm
                hover:shadow-md hover:border-indigo-400
                transition
              "
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                  <Folder size={20} />
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-gray-500 hover:text-indigo-600 transition"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="text-gray-500 hover:text-indigo-600 transition"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-[#0a1f44] mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
