import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 64;
      const top = element.offsetTop - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      setMenuOpen(false); // close mobile menu after click
    }
  };

  const navItemStyle = `
    relative cursor-pointer px-2 pb-1 transition-all duration-300
    text-black
    hover:text-indigo-600
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0
    after:bg-indigo-600
    after:transition-all after:duration-300
    hover:after:w-full
  `;

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="h-16 flex justify-between items-center px-8">

        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="text-3xl font-bold cursor-pointer"
        >
          Satyam
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li onClick={() => scrollToSection("home")} className={navItemStyle}>Home</li>
          <li onClick={() => scrollToSection("about")} className={navItemStyle}>About</li>
          <li onClick={() => scrollToSection("skills")} className={navItemStyle}>Skills</li>
          <li onClick={() => scrollToSection("projects")} className={navItemStyle}>Projects</li>
          <li onClick={() => scrollToSection("contact")} className={navItemStyle}>Contact</li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-lg font-medium">
          <li onClick={() => scrollToSection("home")} className={navItemStyle}>Home</li>
          <li onClick={() => scrollToSection("about")} className={navItemStyle}>About</li>
          <li onClick={() => scrollToSection("skills")} className={navItemStyle}>Skills</li>
          <li onClick={() => scrollToSection("projects")} className={navItemStyle}>Projects</li>
          <li onClick={() => scrollToSection("contact")} className={navItemStyle}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
