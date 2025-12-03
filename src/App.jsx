import { useState } from 'react';
import {LoadingScreen} from './components/LoadingScreen';
import {Navbar} from './components/sections/Navbar';
import {MobileMenu} from './components/sections/MobileMenu';
import {Hero} from './components/sections/Hero';
import {About} from './components/sections/About';
import {Projects} from './components/sections/Projects';
import {Certificates} from './components/sections/Certificates';
import {Contact} from './components/sections/Contact';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen font-sans bg-slate-50 text-slate-800 transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Contact />
        
        {/* Footer Sederhana */}
        <footer className="py-6 bg-slate-50 border-t border-slate-200 text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Dani Portfolio. All rights reserved.
        </footer>
      </div>
    </>
  );
}

export default App;