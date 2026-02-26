import { Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#f6f7fb]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-16 text-[#0a1f44]">
          Get In <span className="text-orange-500">Touch</span>
        </h2>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <img
                src="/contact_image.jpg"
                alt="Contact"
                className="w-full max-w-sm"
              />
            </div>
          </div>

          {/* Right Form */}
          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-4 rounded-xl border border-gray-300 
              text-gray-800 placeholder-gray-500
              focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-5 py-4 rounded-xl border border-gray-300 
              text-gray-800 placeholder-gray-500
              focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-5 py-4 rounded-xl border border-gray-300 
              text-gray-800 placeholder-gray-500
              focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 resize-none"
            />

            <button
              type="submit"
              className="inline-flex items-center gap-2 
              bg-orange-500 hover:bg-orange-600 
              text-white font-semibold 
              px-8 py-3 rounded-xl 
              transition duration-300"
            >
              Submit
              <Send size={16} />
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;