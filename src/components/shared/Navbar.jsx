import { useState } from "react";
import { Dialog, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

import React from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollToSection = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to={"#"} className="-m-1.5 p-1.5">
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
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link to={"#"} className="text-sm/6 font-semibold text-gray-900">
            Home
          </Link>
          <Link to={"#"} className="text-sm/6 font-semibold text-gray-900">
            About
          </Link>
          <Link to={"#"} className="text-sm/6 font-semibold text-gray-900">
            Services
          </Link>
          <Link to={"#"} className="text-sm/6 font-semibold text-gray-900">
            Blog
          </Link>
          <Link to={"#"} className="text-sm/6 font-semibold text-gray-900">
            Contact Us
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to={"#get-device"}
            onClick={handleScrollToSection}
            className="bg-[#0b6a62] text-white text-sm/6 font-semibold px-4 py-2 rounded-md mr-6 hover:scale-102 hover:bg-white hover:text-primary transition-all duration-300 ease-in-out hover:outline-2 hover:outline-[#0b6a62]"
          >
            GET YOUR DEVICE NOW
          </Link>
          <Link to={"/login"} className="text-sm/6 font-semibold text-gray-900 my-auto">
            Log in <span aria-hidden="true">&rarr;</span>
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
                      to={"#"}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Home
                    </Link>
                    <Link
                      to={"#"}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      About
                    </Link>
                    <Link
                      to={"#"}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Services
                    </Link>
                    <Link
                      to={"#"}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Blog
                    </Link>
                    <Link
                      to={"#"}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Contact Us
                    </Link>
                  </div>
                  <div className="py-6">
                    <Link
                      to={"#get-device"}
                      onClick={handleScrollToSection}
                      className="bg-[#0b6a62] text-white text-sm/6 font-semibold px-4 py-2 rounded-md mr-6 hover:scale-102 hover:bg-white hover:text-primary transition-all duration-300 ease-in-out hover:outline-2 hover:outline-[#0b6a62]"
                    >
                      GET YOUR DEVICE NOW
                    </Link>
                    <Link
                      to={"/login"}
                      className="-mx-3 my-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Log in
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
