import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const top = element.offsetTop - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      setActive(id);
      setMenuOpen(false);
    }
  };

  const navItemStyle = (id) => `
    cursor-pointer transition duration-300
    ${active === id ? "text-orange-500" : "text-gray-800"}
    hover:text-orange-500
  `;

  return (
   <nav
  className={`fixed w-full top-0 z-50 transition-all duration-300 ${
    scrolled
      ? "backdrop-blur-lg bg-white/70 shadow-md border-b border-white/20"
      : "backdrop-blur-md bg-white/90"
  }`}
>
      <div className="h-16 flex justify-between items-center px-6 md:px-8 max-w-7xl mx-auto">

        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="text-2xl md:text-3xl font-bold cursor-pointer text-[#0a1f44]"
        >
          Satyam
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li onClick={() => scrollToSection("home")} className={navItemStyle("home")}>Home</li>
          <li onClick={() => scrollToSection("about")} className={navItemStyle("about")}>About</li>
          <li onClick={() => scrollToSection("skills")} className={navItemStyle("skills")}>Skills</li>
          <li onClick={() => scrollToSection("projects")} className={navItemStyle("projects")}>Projects</li>
          <li onClick={() => scrollToSection("contact")} className={navItemStyle("contact")}>Contact</li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
     <div
  className={`md:hidden absolute top-16 left-0 w-full transition-all duration-300 ${
    menuOpen
      ? "max-h-96 py-6 backdrop-blur-lg bg-white/70 shadow-lg border-b border-white/20"
      : "max-h-0 overflow-hidden"
  }`}
>
  <ul className="flex flex-col items-center gap-6 text-lg font-medium">
    {["home", "about", "skills", "projects", "contact"].map((item) => (
      <li
        key={item}
        onClick={() => scrollToSection(item)}
        className={navItemStyle(item)}
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </li>
    ))}
  </ul>
</div>
    </nav>
  );
};

export default Navbar;