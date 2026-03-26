import { ChevronDown, Instagram, Linkedin } from "lucide-react";
import heroPoster from "../assets/hiho.png";
import TextType from "./TextType";

export default function Hero({ onScrollTo }) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient (orange kemerahan x gray) */}
      <div className="absolute inset-0 z-1 pointer-events-none
        bg-gradient-to-br
        from-[#0e0e10]
        via-[#1a1a1f]
        to-[#ea580c33]"
      />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 z-1 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ea580c'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM36 6V2h-2v4h-4v2h4v4h2V8h4V6h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 6V2H4v4H0v2h4v4h2V8h4V6H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div className="space-y-6 mr-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-gray-400 text-lg tracking-widest uppercase font-light">
                Hello, My name is 👋
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Bilqhis
                <span className="animate-charcter sm:ml-5 md:ml-5">
                  {" "}Rhaina
                </span>
              </h1>
            </div>

            {/* Info */}
            <div className="space-y-2 border-l-2 border-[#ea580c] pl-6">
              <p className="text-white text-lg font-medium">
                Mechatronics and Artificial Intelligence Student
                <br />
                at Indonesia University of Education
              </p>
              <p className="text-gray-400 text-base">
                <TextType
                  text={[
                    "Graphic Designer • Digital Creator • AI Enthusiast",
                  ]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor
                  cursorCharacter="|"
                />
              </p>
            </div>

            {/* CTA */}
            <div className="flex gap-9 pt-4">
              <a href="www.linkedin.com/in/bilqhis-rhaina-sasmita-97b716388">
                <button className="flex items-center gap-2 px-4 md:px-8 py-3 rounded-lg font-semibold
                  transition-all duration-300 transform hover:scale-105 hover:shadow-xl
                  bg-gradient-to-r from-[#dc2626] via-[#ea580c] to-[#f59e0b] text-white">
                  <span>Let's Connect</span>
                  <Linkedin size={20} />
                </button>
              </a>

              <a
                href="https://www.instagram.com/hihoyaaaa?igsh=aG84azRnb2xuZ2J4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <button className="flex items-center gap-2 px-4 md:px-8 py-3 rounded-lg font-semibold
                  transition-all duration-300 transform hover:scale-105 hover:shadow-xl
                  bg-gradient-to-r from-[#dc2626] via-[#ea580c] to-[#f59e0b] text-white">
                  
                  <span>Instagram</span>
                  <Instagram size={20} />
                </button>
              </a>

            </div>
          </div>

          {/* RIGHT */}
          <div className="relative hidden md:block ml-18">
            {/* Glow backdrop */}
            <div className="w-[500px] h-[480px] absolute -inset-4
              bg-gradient-to-br from-[#ea580c44] via-[#dc262633] to-transparent
              rounded-3xl"
            />

            {/* Image container */}
            <div className="relative w-[450px] h-[450px] rounded-3xl overflow-hidden
              bg-gradient-to-br from-[#1f1f23] to-[#0e0e10]
              border border-[#ea580c44] shadow-2xl">
              <img
                src={heroPoster}
                alt="Hero Poster"
                className="w-fit h-fit object-cover grayscale-[25%]"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10]/75 via-transparent to-transparent" />

              {/* Accent borders */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#ea580c]/70" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#f59e0b]/70" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <button
        onClick={() => onScrollTo("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-20 text-gray-400"
      >
        <ChevronDown size={32} className="mx-auto text-[#ea580c]" />
        scroll down
      </button>
    </section>
  );
}