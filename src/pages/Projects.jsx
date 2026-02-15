import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Swiggy Clone - Real-Time API Integration",
    description:
      "A Swiggy-inspired food delivery app with real-time restaurant data, Redux-powered cart management, and SSR for fast performance and SEO-friendly routing.",
    tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "React Router"],
    live: "https://github.com/SatyamSingh272/Swiggy-React-Project",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern and fully responsive personal portfolio website built with React.js to showcase my skills, projects, and experience. Features smooth section-based navigation, reusable components, and a clean UI.",
    tech: ["React.js", "Tailwind CSS"],
    live: "https://github.com/SatyamSingh272/My-Portfolio",
  },
  {
    title: "Tic Tac Toe",
    description:
      "An interactive Tic Tac Toe game built using HTML, CSS, and JavaScript featuring real-time game logic, win/draw detection, and dynamic UI updates.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://github.com/SatyamSingh272/Tic-Tac-Toe",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-16 text-[#0a1f44]">
          My <span className="text-orange-500">Projects</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#f6f7fb] rounded-2xl p-8 border border-gray-200 shadow-sm"
            >
              {/* Top Right Link */}
              <div className="flex justify-end mb-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-orange-500 transition"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-[#0a1f44] mb-3">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1.5 text-xs rounded-full bg-orange-50 text-orange-600 font-medium"
                  >
                    {tech}
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