


import { useState } from "react";
import "../CSS/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">Benjamin</div>

      {/* Hamburger Button */}
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Nav Links */}
      <div className={`Nav-links ${isOpen ? "active" : ""}`}>
        <a href="#abt" onClick={closeMenu}>About me</a>
        <a href="#serve" onClick={closeMenu}>My Services</a>
        <a href="#proj" onClick={closeMenu}>My Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact me</a>
      </div>
    </nav>
  );
};

export default Navbar;