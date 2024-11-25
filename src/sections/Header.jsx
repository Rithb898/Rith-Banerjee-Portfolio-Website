import React from "react";

function Header() {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-20">
      <nav className="flex gap-1 p-0.5 border border-white/50 md:border-white/15 rounded-full bg-white/30 md:bg-white/10 backdrop-blur">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a href="#contact" className="nav-item">
          Contact
        </a>
      </nav>
    </div>
  );
}

export default Header;
