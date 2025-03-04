import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import Reveal from "../shared/framer-motion/Reveal";
import { useContactForm } from "./hooks/useContactForm";

const ContactForm = () => {

  const {handleFormSubmit, handleInputChange, formData, loading} = useContactForm()
  const {firstName ,lastName, email, message} = formData

  return (
    <>
      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-br from-[#f3fff9] to-[#edfff6]">
        <Reveal>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-5">
                {/* Form */}
                <div className="p-8 md:col-span-3">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Send us a Message
                  </h2>
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                        value={firstName}
                        onChange={handleInputChange}
                          name="firstName"
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                        value={lastName}
                        onChange={handleInputChange}
                        name="lastName"
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Email</label>
                      <input
                      value={email}
                      onChange={handleInputChange}
                      name="email"
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                      value={message}
                      onChange={handleInputChange}
                      name="message"
                        rows="4"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        required
                      ></textarea>
                    </div>
                    <button
                    disabled={loading}
                      type="submit"
                      className="group relative inline-flex items-center px-6 py-3 overflow-hidden rounded-md bg-primary border-2 cursor-pointer hover:bg-white hover:text-primary text-white transform hover:scale-105 transition-all duration-300"
                    >
                      <span className="relative flex items-center">
                        Send Message
                        <FiSend className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </button>
                  </form>
                </div>

                {/* Social Links */}
                <div className="bg-gradient-to-br from-primary to-secondary p-8 text-white md:col-span-2">
                  <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
                  <p className="mb-8 text-white/80">
                    Follow us on social media to stay updated with our latest
                    innovations and news.
                  </p>
                  <div className="space-y-4">
                    <a
                      href="#"
                      className="flex items-center space-x-3 hover:text-white/80 transition-colors"
                    >
                      <FaLinkedin className="w-6 h-6" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center space-x-3 hover:text-white/80 transition-colors"
                    >
                      <FaTwitter className="w-6 h-6" />
                      <span>Twitter</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center space-x-3 hover:text-white/80 transition-colors"
                    >
                      <FaFacebook className="w-6 h-6" />
                      <span>Facebook</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center space-x-3 hover:text-white/80 transition-colors"
                    >
                      <FaInstagram className="w-6 h-6" />
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default ContactForm;
