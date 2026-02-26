import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-100 pt-20"
    >
      {/* Improved Container */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 w-full">
        
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">

          {/* LEFT CONTENT */}
          <div className="flex-1 text-center md:text-left">

            <h1 className="text-xl md:text-2xl text-gray-500">
              Hi There,
            </h1>

            <h2 className="mt-3 text-5xl sm:text-4xl md:text-5xl font-bold text-[#0a1f44] leading-tight">
              I'm <span className="text-orange-500">Satyam Singh</span>
            </h2>

            <p className="mt-6 text-lg md:text-2xl text-orange-500 font-semibold">
              I Am Full Stack Developer
            </p>

            {/* Resume Button */}
            <a
              href="/Satyam Resume_Full_Stack.pdf"
              download
              className="inline-flex items-center gap-3 mt-8 px-8 py-4
                         bg-[#182c52] text-white text-lg font-semibold 
                         rounded-2xl shadow-lg
                         hover:bg-[#223b6b] transition duration-300"
            >
              <FaDownload size={10} />
              Download Resume
            </a>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-6 mt-8">
              
              <a
                href="https://github.com/SatyamSingh272"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center 
                           rounded-full border-2 border-orange-400 
                           text-orange-500 hover:bg-orange-500 
                           hover:text-white transition duration-300"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/satyam-singh123/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center 
                           rounded-full border-2 border-orange-400 
                           text-orange-500 hover:bg-orange-500 
                           hover:text-white transition duration-300"
              >
                <FaLinkedin size={20} />
              </a>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80
                         rounded-full border-4 border-orange-500
                         bg-orange-400 shadow-2xl overflow-hidden"
            >
              <img
                src="/6294327753029306300.jpg"
                alt="Satyam Singh"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;