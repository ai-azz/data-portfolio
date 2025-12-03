import { Award } from 'lucide-react';

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const navItems = ["Home", "About", "Projects", "Certificates"];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-30 bg-white flex flex-col items-center justify-center transition-all duration-300 ease-in-out
      ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
      `}
    >
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-semibold text-blue-950 my-6 hover:text-amber-500 transition-colors relative group"
        >
          {item}
          {item === "Certificates" && <Award className="inline-block ml-2 text-amber-500 w-6 h-6" />}
        </a>
      ))}
      
      <a 
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="mt-8 px-8 py-3 bg-blue-900 text-white rounded-lg text-lg font-medium shadow-lg active:scale-95 transition-transform"
      >
        Hire Me
      </a>
    </div>
  );
};