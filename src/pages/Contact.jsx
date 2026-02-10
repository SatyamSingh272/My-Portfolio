import { FaHeadphonesAlt, FaUser, FaEnvelope, FaPhoneAlt, FaComment } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#eef2ff] py-16 px-6"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
        <FaHeadphonesAlt />
        <span>
          Get In <span className="text-purple-600">Touch</span>
        </span>
      </h2>

      {/* Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src="/contact_image.jpg"   // put image in public folder
              alt="contact"
              className="w-full max-w-sm"
            />
          </div>

          {/* RIGHT FORM */}
          <form className="space-y-6">
            
            {/* Name */}
           <div className="flex items-center gap-3 bg-[#eef2ff] px-4 py-3 rounded-lg border 
                border-gray-300 focus-within:border-purple-700
                focus-within:ring-2 focus-within:ring-purple-200
                transition">
               <FaUser className="text-gray-500 group-focus-within:text-purple-700 transition" />
                <input
                 type="text"
                 placeholder="Name"
                 className="w-full bg-transparent outline-none"
                />
           </div>


            {/* Email */}
            <div className="flex items-center gap-3 bg-[#eef2ff] px-4 py-3 rounded-lg border 
                border-gray-300 focus-within:border-purple-700
                focus-within:ring-2 focus-within:ring-purple-200 transition">
               <FaEnvelope className="text-gray-500 focus-within:text-purple-700" />
               <input type="email" placeholder="Email" className="w-full bg-transparent outline-none" />
            </div>


            {/* Phone */}
           <div className="flex items-center gap-3 bg-[#eef2ff] px-4 py-3 rounded-lg border 
                border-gray-300 focus-within:border-purple-700
                focus-within:ring-2 focus-within:ring-purple-200 transition">
               <FaPhoneAlt className="text-gray-500 focus-within:text-purple-700" />
               <input type="tel" placeholder="Phone" className="w-full bg-transparent outline-none" />
           </div>


            {/* Message */}
           <div className="flex gap-3 bg-[#eef2ff] px-4 py-3 rounded-lg border 
                border-gray-300 focus-within:border-purple-700
                focus-within:ring-2 focus-within:ring-purple-200 transition">
              <FaComment className="text-gray-500 mt-1 focus-within:text-purple-700" />
               <textarea
                 rows="4"
                 placeholder="Message"
                 className="w-full bg-transparent outline-none resize-none"
                 />
               </div>


            {/* Button */}
            <button
              type="submit"
              className="ml-auto flex items-center gap-2 bg-indigo-700 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-800 transition"
            >
              Submit
              <span>➤</span>
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
