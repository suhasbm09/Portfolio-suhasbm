// src/components/Header.jsx
import React, { useState } from "react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-4 right-4 z-50 bg-white/5 backdrop-blur-md text-white rounded-2xl border border-white/10 shadow-lg px-6 py-4 flex justify-between items-center">
      <h1
          className="
            text-4xl md:text-xl lg:text-2xl 
            font-bold tracking-widest 
            bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 
            bg-clip-text text-transparent 
            
          "
        >
          SUHAS B M
      </h1>


      {/* Desktop Links */}
      <nav className="hidden md:flex gap-6 text-sm font-medium">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            behavior='smooth'
            className="hover:text-cyan-400 transition duration-300 relative group"
          >
            {link.label}
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-black/80 rounded-xl px-4 py-4 flex flex-col items-start md:hidden z-40">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              behavior='smooth'
              className="py-2 w-full text-cyan-300 border-b border-white/10"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
