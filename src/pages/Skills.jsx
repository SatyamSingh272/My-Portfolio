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
    <section id="skills" className="py-24 bg-[#f5f7ff]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0a1f44]">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0a1f44]">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1.5 text-sm rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-600 hover:text-white transition"
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
