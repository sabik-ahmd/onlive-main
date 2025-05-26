import React from 'react';

const Home3 = () => {
  return (
    <section className="w-full px-6 py-16 bg-transparent text-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">Get in Touch</h2>
        <p className="text-gray-300 mb-10">
          Have a question or want to work together? Send a message below!
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border border-gray-600 bg-transparent text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-600 bg-transparent text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full px-4 py-3 border border-gray-600 bg-transparent text-white rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gray-300 text-black px-6 py-3 rounded-lg font-semibold hover:bg-white transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info Section */}
        <div className="mt-10 space-y-3 text-sm text-gray-300">
          <div className="flex items-center justify-center gap-2">
            <span role="img" aria-label="location">📍</span>
            <span>INDIA, In</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span role="img" aria-label="email">✉️</span>
            <span>sabik.mh@gmail.com</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span role="img" aria-label="phone">📞</span>
            <span>+91 9686893983</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home3;
