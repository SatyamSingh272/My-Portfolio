const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="h-16 flex justify-between items-center px-8">
        <div className="text-3xl font-bold">Satyam</div>

        <ul className="flex gap-8 text-lg font-medium">
          <li onClick={() => scrollToSection("home")} className="cursor-pointer hover:text-blue-600">Home</li>
          <li onClick={() => scrollToSection("about")} className="cursor-pointer hover:text-blue-600">About</li>
          <li onClick={() => scrollToSection("skills")} className="cursor-pointer hover:text-blue-600">Skills</li>
          <li onClick={() => scrollToSection("projects")} className="cursor-pointer hover:text-blue-600">Projects</li>
          <li onClick={() => scrollToSection("contact")} className="cursor-pointer hover:text-blue-600">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
