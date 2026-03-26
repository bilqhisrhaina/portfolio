
export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#0e0e10] to-[#1a1a1f] border-t border-[#ea580c]/30 py-8 relative overflow-hidden">
      {/* subtle glow */}
      <div className="absolute inset-x-0 -top-20 h-40 bg-[#ea580c]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <p className="text-gray-400">
          © 2026 <span className="text-[#ea580c] font-semibold">Bilqhis Rhaina</span>. Designing meaningful user experiences.
        </p>
      </div>
    </footer>
  );
}