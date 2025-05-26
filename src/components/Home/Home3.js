import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Home3 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_rxub9kl',      // Replace with your EmailJS service ID
        'template_1gb82xd',     // Replace with your EmailJS template ID
        form.current,
        'pwHspfsaItxnBOYh7'       // Replace with your EmailJS public key (user ID)
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section className="w-full px-6 py-16 bg-transparent text-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">Get in Touch</h2>
        <p className="text-gray-300 mb-10">
          Have a question or want to work together? Send a message below!
        </p>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="w-full px-4 py-3 border border-gray-600 bg-transparent text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-600 bg-transparent text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
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
