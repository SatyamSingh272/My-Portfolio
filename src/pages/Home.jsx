
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-16 flex items-center bg-white overflow-hidden"
    >
      

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT CONTENT */}
        <div className="flex-1 mr-16 ">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0a1f44]">
            Hi There,
          </h1>

          <h2 className="mt-4 mb-6 text-4xl md:text-6xl font-bold text-[#0a1f44] whitespace-nowrap">
          I'm <span className="text-orange-500">Satyam&nbsp;Singh</span>
          </h2>

          <p className="mt-6 text-2xl text-red-700 font-semibold">
            I Am, Full Stack Developer!
          </p>

          {/* Resume */}
          <a
            href="/Satyam Resume_Full_Stack.pdf"
            download
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition"
          >
            Download Resume
          </a>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/SatyamSingh272"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white hover:scale-110 transition"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/satyam-singh123/"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:scale-110 transition"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center md:justify-end  ml-16">
          <div className="w-72 h-72 rounded-full bg-yellow-400 flex items-center justify-center shadow-xl">
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
