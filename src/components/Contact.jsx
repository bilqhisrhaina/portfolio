import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-10 relative overflow-hidden"
    >
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e10] via-[#151518] to-[#0e0e10]" />
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-[#ea580c]/15 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] bg-[#dc2626]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-[#dc2626] via-[#ea580c] to-[#f59e0b]" />
            <h2 className="text-2xl md:text-5xl font-bold text-white">
              Get In <span className="text-[#ea580c]">Touch</span>
            </h2>
            <div className="h-px w-16 bg-gradient-to-l from-[#dc2626] via-[#ea580c] to-[#f59e0b]" />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out if you want to collaborate on a project, have
            a question, or just want to connect.
          </p>
        </div>

        <div className="md:w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Email */}
          <a
            href="mailto:bilqhisrhaina87@gmail.com"
            className="bg-[#1f1f23]/80 py-8 px-2 rounded-2xl
                       border border-[#ea580c]/20
                       hover:border-[#ea580c]
                       hover:bg-[#1f1f23]/90
                       transition-all duration-300
                       transform hover:scale-105
                       text-center group"
          >
            <div className="w-16 h-16 bg-[#ea580c]/20 rounded-full flex items-center justify-center mx-auto mb-4
                            group-hover:bg-[#ea580c] transition-all duration-300">
              <Mail
                size={28}
                className="text-[#ea580c] group-hover:text-white"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">
              Email
            </h3>
            <p className="text-gray-400 text-sm break-all">
              bilqhisrhaina87@gmail.com
            </p>
          </a>

          {/* Github */}
          <a
            href="https://github.com/bilqhisrhaina"
            className="bg-[#1f1f23]/80 p-8 rounded-2xl
                       border border-[#ea580c]/20
                       hover:border-[#ea580c]
                       hover:bg-[#1f1f23]/90
                       
                       transition-all duration-300
                       transform hover:scale-105
                       text-center group"
          >
            <div className="w-16 h-16 bg-[#ea580c]/20 rounded-full flex items-center justify-center mx-auto mb-4
                            group-hover:bg-[#ea580c] transition-all duration-300">
              <Github
                size={28}
                className="text-[#ea580c] group-hover:text-white"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">
              Github
            </h3>
            <p className="text-gray-400 text-sm">
              Checkout my Github Profile
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/bilqhis-rhaina-sasmita-97b716388/"
            className="bg-[#1f1f23]/80 p-8 rounded-2xl
                       border border-[#ea580c]/20
                       hover:border-[#ea580c]
                       hover:bg-[#1f1f23]/90
                       transition-all duration-300
                       transform hover:scale-105
                       text-center group"
          >
            <div className="w-16 h-16 bg-[#ea580c]/20 rounded-full flex items-center justify-center mx-auto mb-4
                            group-hover:bg-[#ea580c] transition-all duration-300">
              <Linkedin
                size={28}
                className="text-[#ea580c] group-hover:text-white"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">
              LinkedIn
            </h3>
            <p className="text-gray-400 text-sm">
              Connect with me
            </p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/hihoyaaaa?igsh=aG84azRnb2xuZ2J4"
            className="bg-[#1f1f23]/80 p-8 rounded-2xl
                       border border-[#ea580c]/20
                       hover:border-[#ea580c]
                       hover:bg-[#1f1f23]/90
                       transition-all duration-300
                       transform hover:scale-105
                       text-center group"
          >
            <div className="w-16 h-16 bg-[#ea580c]/20 rounded-full flex items-center justify-center mx-auto mb-4
                            group-hover:bg-[#ea580c] transition-all duration-300">
              <Instagram
                size={28}
                className="text-[#ea580c] group-hover:text-white"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">
              Instagram
            </h3>
            <p className="text-gray-400 text-sm">
              See my instagram profile
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}