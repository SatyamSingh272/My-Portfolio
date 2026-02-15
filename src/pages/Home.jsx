import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-16 flex items-center bg-gray-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left">

          {/* Small Intro */}
          <h1 className="text-2xl md:text-3xl text-gray-500">
            Hi There,
          </h1>

          {/* Name in One Line */}
          <h2 className="mt-2 text-5xl md:text-6xl font-bold text-[#0a1f44] whitespace-nowrap">
            I'm <span className="text-orange-500">Satyam Singh</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-6 text-xl md:text-2xl text-orange-500 font-semibold">
            I Am, Full Stack Developer!
          </p>

          {/* Resume Button with Download Icon */}
         <a
  href="/Satyam Resume_Full_Stack.pdf"
  download
  className="inline-flex items-center gap-3 mt-8 px-8 py-4
             bg-[#182c52] text-white text-lg font-semibold 
             rounded-2xl shadow-md 
             hover:bg-[#223b6b] transition duration-300"
>
  <FaDownload size={18} />
  Download Resume
</a>

          {/* Social Icons - Same Design */}
          <div className="flex justify-center md:justify-start gap-6 mt-8">

            <a
              href="https://github.com/SatyamSingh272"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/satyam-singh123/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300"
            >
              <FaLinkedin size={20} />
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full border-4 border-orange-500 bg-orange-400 flex items-center justify-center shadow-2xl">
            <img
              src="/6294327753029306300.jpg"
              alt="avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;