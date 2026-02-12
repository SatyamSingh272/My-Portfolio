import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 64; // navbar height
      const top = element.offsetTop - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-[#0b0846] text-white pt-10 pb-6">
      
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Satyam's Portfolio</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Thank you for visiting my personal portfolio website.
            Connect with me over socials.
          </p>
          <p className="mt-4 text-gray-300 text-sm">
            Keep Rising 🚀
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3 text-gray-300">
            {quickLinks.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-2 cursor-pointer hover:text-purple-400 transition"
              >
                <span className="w-2 h-2 bg-white rounded-full" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>

          <div className="space-y-4 text-gray-300 text-sm">
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400" />
              +91 7249302449
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400" />
              singhsatyam2072@gmail.com
            </p>

            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-yellow-400" />
              Mumbai, India - 400068
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[
              { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/satyam-singh123/" },
              { icon: <FaGithub />, link: "https://github.com/SatyamSingh272" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white text-[#090979] rounded-full hover:bg-purple-700 hover:text-white transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 pt-4 text-center text-sm text-gray-300 border-t border-white/20 mx-[10%]">
        Designed With ❤️ By <span className="text-yellow-400">Satyam Singh</span>
      </div>
    </footer>
  );
};

export default Footer;
