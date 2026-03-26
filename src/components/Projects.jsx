import React from "react";

export default function Projects({ projects }) {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e10] via-[#151518] to-[#0e0e10]" />
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-[#ea580c]/15 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] bg-[#dc2626]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-[#dc2626] via-[#ea580c] to-[#f59e0b]" />
            <h2 className="text-2xl md:text-5xl font-bold text-white">
              My <span className="text-[#ea580c]">Achievements</span>
            </h2>
            <div className="h-px w-16 bg-gradient-to-l from-[#dc2626] via-[#ea580c] to-[#f59e0b]" />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Things I’ve achieved so far
          </p>
        </div>

        {/* project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#1f1f23]/80 rounded-2xl overflow-hidden
                         border border-[#ea580c]/20
                         hover:border-[#ea580c]
                         transition-all duration-300
                         transform hover:scale-105
                         hover:shadow-2xl hover:shadow-[#ea580c]/30"
            >
              {/* image */}
              <div className="h-56 bg-gradient-to-br from-[#ea580c]/25 to-transparent flex items-center justify-center">
                <img src={project.image} alt="" className="h-fit" />
              </div>

              {/* content */}
              <div className="p-6 space-y-4 mt-8">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#ea580c]/20 text-[#ea580c]
                                 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* footer */}
                <div className="flex justify-between items-center pt-4 border-t border-[#ea580c]/20">
                  <span className="text-gray-500 text-sm">
                    {project.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}