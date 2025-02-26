import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {

  const handleScrollToSection = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
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
                  <Link
                    to="/"
                    className="hover:text-secondary transition-all duration-200 ease-in-out"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="hover:text-secondary transition-all duration-200 ease-in-out"
                  >
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="hover:text-secondary transition-all duration-200 ease-in-out"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="mx-5">
                  <Link
                    to="/"
                    className="hover:text-secondary transition-all duration-200 ease-in-out"
                  >
                    Services
                  </Link>
                </li>
                <li className="mx-5">
                  <Link
                    to="/"
                    className="hover:text-secondary transition-all duration-200 ease-in-out"
                  >
                    Blog
                  </Link>
                </li>
                <li className="mx-5">
                  <Link
                    to="#get-device"
                    onClick={handleScrollToSection}
                    className="hover:text-secondary transition-all duration-200 ease-in-out"
                  >
                    Get your Device
                  </Link>
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
              <Link
                to="#"
                className="bg-teal-800 text-white p-2 rounded-full hover:bg-gray-300 hover:text-teal-800 transition-all duration-200 ease-in-out"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to="#"
                className="bg-teal-800 text-white p-2 rounded-full hover:bg-gray-300 hover:text-teal-800 transition-all duration-200 ease-in-out"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="#"
                className="bg-teal-800 text-white p-2 rounded-full hover:bg-gray-300 hover:text-teal-800 transition-all duration-200 ease-in-out"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
