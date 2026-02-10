import { useState } from "react";
import { FaUser } from "react-icons/fa";

const About = () => {
  const [isColor, setIsColor] = useState(false);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-white py-20 px-6"
    >
      <div className="max-w-6xl w-full">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3">
          <FaUser />
          <span>
            About <span className="text-purple-600">Me</span>
          </span>
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* IMAGE */}
          <div className="flex-1 flex justify-center">
            <img
              src="/satyam image.jpg"
              alt="profile"
              onClick={() => setIsColor(!isColor)}
              className={`
                w-72 h-96 object-cover rounded-2xl shadow-2xl
                  
              `}
            />
          </div>

          {/* TEXT */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-2">I'm Satyam</h3>
            <p className="text-blue-700 font-semibold mb-4">
              Full Stack Developer
            </p>

            <p className="text-black leading-relaxed mb-6 font-semibold">
              I am a Full-Stack developer based in Mumbai, India. I am MCA postgraduate from TIMSCDR. I am very
              passionate about improving my coding skills & developing
              applications & websites. I build WebApps and Websites using MERN
              Stack.
            </p>

            <p className="mb-2">
              <span className="text-blue-600 font-semibold">Email :</span>{" "}
              singhsatyam2072@gmail.com
            </p>

            <p className="mb-8">
              <span className="text-blue-600 font-semibold">Place :</span>{" "}
              Mumbai, India - 400068
            </p>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
