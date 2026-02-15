import { FaUser, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3 text-blue-900">
          <FaUser />
          <span>
            About <span className="text-orange-500">Me</span>
          </span>
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/satyam image.jpg"
              alt="Satyam Singh"
              className="w-72 h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-blue-900 mb-2">
              I’m <span className="text-orange-500">Satyam</span>
            </h3>

            <p className="text-orange-500 font-semibold text-lg mb-6">
              Full Stack Developer
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Full-Stack Developer based in Mumbai, India, and MCA Postgraduate
              from TIMSCDR College. I am passionate about building efficient,
              scalable, and user-friendly web applications. I specialize in the
              MERN stack and enjoy turning ideas into functional, real-world
              digital solutions.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 text-gray-700">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-orange-500" />
                <span>singhsatyam2072@gmail.com</span>
              </div>

              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-orange-500" />
                <span>Mumbai, India - 400068</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;