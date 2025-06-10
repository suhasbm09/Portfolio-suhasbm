// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-16 border-t border-white/10 pt-6 pb-12 text-center text-white bg-transparent z-10">
      {/* Contact Links */}
      <div className="flex justify-center gap-6 text-xl mb-4">
        <a href="mailto:suhaasbm2004@gmail.com" className="hover:text-cyan-400">
          <FaEnvelope />
        </a>
        <a href="https://github.com/suhasbm09" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/suhas-b-m-88a179244" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
          <FaLinkedin />
        </a>
      </div>

      {/* Fun Emoji Feedback */}
      <div className="text-sm text-white/60">
        Built with ❤️, ⚡️, and ☕ — Let me know what you think:
        <div className="mt-2 text-xl space-x-2">
          <button className="hover:scale-110 transition">🔥</button>
          <button className="hover:scale-110 transition">🚀</button>
          <button className="hover:scale-110 transition">💡</button>
        </div>
      </div>

      <p className="mt-6 text-xs text-white/30">© 2025 Suhas B M. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
