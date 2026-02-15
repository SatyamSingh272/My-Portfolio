import { Code2, Server, Database, Wrench } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["HTML5", "CSS3", "Tailwind CSS", "React.js"],
  },
  {
    title: "Languages",
    icon: Database,
    skills: ["JavaScript", "TypeScript"],
  },
  {
    title: "Backend & Database",
    icon: Server,
    skills: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Canva", "Figma"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#f6f7fb]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-16 text-[#0a1f44]">
          Technical <span className="text-orange-500">Skills</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              >
                {/* Card Header */}
                <div className="mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-orange-500 mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0a1f44]">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1.5 text-sm rounded-full bg-orange-50 text-orange-600 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;