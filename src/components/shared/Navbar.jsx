import React, { useState } from "react";
import { Dialog, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogInOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import useScroll from "../../hooks/useScroll";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { handleScrollToSection } = useScroll();

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:pl-8 lg:pr-6"
      >
        <div className="flex lg:flex-1">
          <Link to={"/"} className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              src="/PwergridplusLogoOld4.png"
              alt="Company Logo"
              className="w-52"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 mr-4">
          <Link
            to={"/"}
            className="font-semibold text-gray-900 text-sm/6 hover:text-secondary transition-all duration-200 ease-in-out"
          >
            Home
          </Link>
          <Link
            to={"/about-us"}
            className="text-sm/6 font-semibold text-gray-900 hover:text-secondary transition-all duration-200 ease-in-out"
          >
            About Us
          </Link>
          <Link
            to={"/services"}
            className="text-sm/6 font-semibold text-gray-900 hover:text-secondary transition-all duration-200 ease-in-out"
          >
            Services
          </Link>
          <Link
            to={"/blogs"}
            className="text-sm/6 font-semibold text-gray-900 hover:text-secondary transition-all duration-200 ease-in-out"
          >
            Blog
          </Link>
          <Link
            to={"/contact-us"}
            className="text-sm/6 font-semibold text-gray-900 hover:text-secondary transition-all duration-200 ease-in-out"
          >
            Contact Us
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
          <a
            href="/#get-device"
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleScrollToSection(e, "get-device");
            }}
            className="flex items-center bg-primary text-white font-semibold px-4 py-2 rounded-md mr-3 hover:scale-102 hover:bg-white hover:text-primary transition-all duration-300 ease-in-out hover:outline-2 hover:outline-primary xl:text-[1em] text-sm"
          >
            Get Your Device Now
          </a>
          <Link
            to="/login"
            className="flex items-center gap-1 hover:bg-secondary outline-secondary outline-1 text-secondary hover:text-white font-semibold px-3 py-1 rounded-md shadow-md bg-white transition-all duration-300 xl:text-[1em] text-sm"
            whileHover={{ scale: 1.02 }}
          >
            <IoLogInOutline className="text-lg" />
            Login
          </Link>
        </div>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            className="lg:hidden"
          >
            <div
              className="fixed inset-0 z-10"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5 }}
              className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
              <div className="flex items-center justify-between">
                <Link to={"/"} className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    src="/PwergridplusLogoOld.png"
                    alt="Company Logo"
                    className="w-12"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Link
                      to={"/"}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Home
                    </Link>
                    <Link
                      to={"/about-us"}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      About Us
                    </Link>
                    <Link
                      to={"/services"}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Services
                    </Link>
                    <Link
                      to={"/blogs"}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Blog
                    </Link>
                    <Link
                      to={"/contact-us"}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Contact Us
                    </Link>
                  </div>
                  <div className="py-6 flex flex-col">
                    <Link
                      onClick={(e) => {
                        setMobileMenuOpen(false);
                        handleScrollToSection(e, "get-device");
                      }}
                      className="w-fit bg-primary text-white text-sm/6 font-semibold px-4 py-2 rounded-md mr-6 hover:scale-102 hover:bg-white hover:text-primary transition-all duration-300 ease-in-out hover:outline-2 hover:outline-primary"
                    >
                      Get Your Device Now
                    </Link>
                    <Link
                      to="/login"
                      className="w-fit flex items-center gap-1 hover:bg-secondary outline-secondary outline-1 text-secondary hover:text-white font-semibold ps-3 pe-4 py-1 rounded-md shadow-md bg-white transition-all duration-300 xl:text-[1em] text-sm mt-5"
                      whileHover={{ scale: 1.02 }}
                    >
                      <IoLogInOutline className="text-lg" />
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
