import { Menu, X } from 'lucide-react';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const navItems = ["Home", "About", "Projects", "Certificates"];

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm transition-all duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* logo branding */}
          <a href="#home" className="text-xl font-bold text-blue-950 font-mono tracking-tight group">
            aini<span className="text-amber-500 group-hover:text-blue-600 transition-colors">.data_enthusiast</span>
          </a>

          {/* mobile hamburger button */}
          <div className="md:hidden relative z-50">
             <button 
                onClick={() => setMenuOpen((prev) => !prev)}
                className="text-blue-900 focus:outline-none p-2"
             >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
             </button>
          </div>

          {/* desktop nav items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-600 hover:text-blue-900 transition-colors font-medium relative group text-sm lg:text-base"
              >
                {item}
                {/* gold line anim */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            <a href="#contact" className="px-5 py-2 text-sm font-medium text-white bg-blue-900 rounded hover:bg-blue-800 transition-all shadow-md hover:shadow-lg flex items-center gap-2">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};