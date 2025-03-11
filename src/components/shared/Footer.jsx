import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import useScroll from "../../hooks/useScroll";

const Footer = () => {

  const {handleScrollToSection, scrollToTop} = useScroll();

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

            <p className="mt-2 black text-sm">PowerGridPlus - © 2025</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-secondary">Navigation</h3>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    onClick={scrollToTop}
                    className="hover:text-secondary transition-all duration-200 ease-in-out"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    onClick={scrollToTop}
                    className="hover:text-secondary transition-all duration-200 ease-in-out"
                  >
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    onClick={scrollToTop}
                    className="hover:text-secondary transition-all duration-200 ease-in-out"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="mx-5">
                  <Link
                    to="/services"
                    onClick={scrollToTop}
                    className="hover:text-secondary transition-all duration-200 ease-in-out"
                  >
                    Services
                  </Link>
                </li>
                <li className="mx-5">
                  <Link
                    to="/blogs"
                    onClick={scrollToTop}
                    className="hover:text-secondary transition-all duration-200 ease-in-out"
                  >
                    Blog
                  </Link>
                </li>
                <li className="mx-5">
                  <a
                    href="/#get-device"
                    onClick={(e)=>{handleScrollToSection(e, "get-device")}}
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
                abiodun.onile@powergridplus.com
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <MdPhone className="mr-2 text-xl text-secondary" />{" "}
                +37253676853
              </p>
            </div>
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <Link
                to="https://www.linkedin.com/in/powergridplus-o%C3%BC-1593a1355/"
                className="bg-teal-800 text-white p-2 rounded-full hover:bg-gray-300 hover:text-teal-800 transition-all duration-200 ease-in-out"
                target="_blank"
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
