import React from "react";

export default function Skills({ skills }) {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e10] via-[#151518] to-[#0e0e10]" />
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-[#ea580c]/15 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] bg-[#dc2626]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-[#dc2626] via-[#ea580c] to-[#f59e0b]" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              My <span className="text-[#ea580c]">Skills</span>
            </h2>
            <div className="h-px w-16 bg-gradient-to-l from-[#dc2626] via-[#ea580c] to-[#f59e0b]" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ category, icon: Icon, items }, idx) => (
            <div
              key={category}
              className="bg-[#1f1f23]/80 p-6 rounded-2xl
                         border border-[#ea580c]/30
                         hover:border-[#ea580c]
                         transition-all duration-300
                         transform hover:scale-105
                         hover:shadow-xl hover:shadow-[#ea580c]/30"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3
                className="text-xl flex gap-3 font-bold
                           bg-gradient-to-r from-[#dc2626] via-[#ea580c] to-[#f59e0b]
                           bg-clip-text text-transparent mb-4"
              >
                <Icon className="text-[#ea580c]" />
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg text-sm
                               bg-[#0e0e10]/80
                               text-gray-300
                               border border-[#ea580c]/30
                               hover:bg-gradient-to-r
                               hover:from-[#dc2626]
                               hover:via-[#ea580c]
                               hover:to-[#f59e0b]
                               hover:text-white
                               transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}