import {
  Video,
  Palette,
  PenTool
} from "lucide-react";


import pospek from "../assets/pospek.jpeg";
import film from "../assets/film.jpeg";
import hiro from "../assets/hiro.jpeg";
import poster from "../assets/poster.jpeg";
import rajaban from "../assets/rajaban.jpeg";

export const skills = [
  {
    category: "Video Editing",
    icon: Video,
    items: [
      "Capcut",
      "Alight Motion",
      "Adobe After Effect",
      "Kinemaster",
      "VN"
    ],
  },
  {
    category: "Graphic Design",
    icon: Palette,
    items: ["Canva", "Adobe Photoshop", "Ibis Paint"],
  },
  {
    category: "UI/UX Design",
    icon: PenTool,
    items: ["Figma"],
  },
];

export const projects = [
  {
    title: "Design Class x Kenapa Creative",
    description:
      "Achieved 1st place (Juara 1) in the Design Class x Kenapa Creative event with the theme 'Empowering Identity through The Power of Design'. Organized by Himpunan Mahasiswa Administrasi Pendidikan, Faculty of Education, Universitas Negeri Yogyakarta.",
    tech: ["Graphic Design", "Visual Design", "Creativity", "Design Thinking"],
    date: "Oktober 2025",
    image: poster,
  },
  {
    title: "1st Place Digital Poster Competition POSPEK 2025",
    description:
      "Won 1st place in the Digital Poster Competition at POSPEK 2025, organized by BEM REMA UPI Kampus Purwakarta. Demonstrated strong visual communication and creative design skills in a competitive environment.",
    tech: ["Graphic Design", "Visual Design", "Creativity", "Design Thinking"],
    date: "November 2025",
    image: pospek,
  },
  {
    title: "1st Place Short Film Competition",
    description:
      "Won 1st place in a short film competition during Bulan Bahasa (Gemerlap Bintang IX). Contributed as director, scriptwriter, editor, and cinematographer, demonstrating strong storytelling and visual production skills.",
    tech: ["Film Production", "Storytelling", "Video Editing", "Cinematography"],
    date: "October 2023",
    image: film,
  },
  {
    title: "Merchandise Design Mechatronics & AI Gathering 2025",
    description:
      "Designed official merchandise for the Mechatronics & Artificial Intelligence student gathering held on November 29, 2025. The design features a mascot-based concept representing strength, achievement, and unity through a modern and playful visual style.thering 2025 event, focusing on creating visually appealing and functional products that represent the theme and values of the gathering.",
    tech: ["Illustration", "Graphic Design", "Branding", "Visual Design"],
    date: "November 2025",
    image: hiro,
  },
  {
    title: "Event Committee – Isra Mi'raj 1447 H",
    description:
      "Contributed as part of the Publication, Documentation, and Design (PDD) team for the Isra Mi'raj 1447 H event at UPI Purwakarta, responsible for visual content and event documentation.",
    tech: ["Illustration", "Graphic Design", "Branding", "Visual Design"],
    date: "Februari 2026",
    image: rajaban,
  },

];