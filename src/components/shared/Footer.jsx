import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Bottom Section: Footer Content */}
      <div className="container mx-auto px-6 lg:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo Section */}
          <div className="mx-auto">
            <img
              src="/PwergridplusLogoOld4.png"
              alt="Company Logo"
              className="w-52"
            />

            <p className="mt-2 black text-sm">PowerGridPlus - © 2024</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-secondary">Navigation</h3>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="hover:text-secondary transition-all duration-200 ease-in-out"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-all duration-200 ease-in-out"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-all duration-200 ease-in-out"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="mx-5">
                  <a
                    href="#"
                    className="hover:text-secondary transition-all duration-200 ease-in-out"
                  >
                    Services
                  </a>
                </li>
                <li className="mx-5">
                  <a
                    href="#"
                    className="hover:text-secondary transition-all duration-200 ease-in-out"
                  >
                    Blog
                  </a>
                </li>
                <li className="mx-5">
                  <a
                    href="#get-device"
                    className="hover:text-secondary transition-all duration-200 ease-in-out"
                  >
                    Get your Device
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-secondary">
              Contact info
            </h3>
            <div className="mt-2 space-y-2">
              <p className="flex items-center justify-center md:justify-start">
                <MdEmail className="mr-2 text-xl text-secondary" />{" "}
                info@powergridplus.ee
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <MdPhone className="mr-2 text-xl text-secondary" />{" "}
                +372-555-599-65
              </p>
            </div>
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href="#"
                className="bg-teal-800 text-white p-2 rounded-full hover:bg-gray-300 hover:text-teal-800 transition-all duration-200 ease-in-out"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="bg-teal-800 text-white p-2 rounded-full hover:bg-gray-300 hover:text-teal-800 transition-all duration-200 ease-in-out"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-teal-800 text-white p-2 rounded-full hover:bg-gray-300 hover:text-teal-800 transition-all duration-200 ease-in-out"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
