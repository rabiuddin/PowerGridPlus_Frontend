"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiUser,
} from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsNavOpen } from "../../../redux/slices/utilitySlice";
import { LogOutIcon } from "lucide-react";
import { userDashboardMenuItems } from "../../../data/sidebar";

export default function Sidebar({ isUser }) {
  const location = useLocation();
  const menuItems = isUser ? userDashboardMenuItems : userDashboardMenuItems;
  const [activeItem, setActiveItem] = useState(location.pathname);
  const { isNavOpen } = useSelector((state) => state.utility);
  const dispatch = useDispatch();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      // On desktop, we want the sidebar to be visible by default
      // but respect the collapsed/expanded state
      if (!mobile) {
        setIsSidebarVisible(true);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Update active item when location changes
    setActiveItem(location.pathname);
  }, [location.pathname]);

  // Toggle sidebar visibility on mobile
  const toggleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Toggle sidebar collapsed state (using Redux)
  const toggleCollapsed = () => {
    dispatch(setIsNavOpen(!isNavOpen));
  };

  // Sidebar variants for animation
  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  // Menu item variants for staggered animation
  const menuItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    closed: {
      y: 20,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <>
      {/* Mobile backdrop overlay */}
      <AnimatePresence>
        {isMobile && isSidebarVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-10"
            onClick={toggleSidebarVisibility}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        variants={sidebarVariants}
        initial={false}
        animate={isMobile ? (isSidebarVisible ? "open" : "closed") : "open"}
        className={`
          fixed md:relative w-[280px] ${
            !isNavOpen ? "md:w-20" : "md:w-[280px]"
          } 
          h-screen bg-white flex flex-col shadow-lg z-20
          transition-all duration-300 ease-in-out
        `}
      >
        {/* Collapse toggle button (visible only on desktop) */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          onClick={toggleCollapsed}
          className="absolute -right-3 top-20 hidden md:flex items-center justify-center w-6 h-12 
                    bg-white rounded-r-md shadow-md border border-l-0 border-gray-200 z-10"
        >
          {!isNavOpen ? (
            <FiChevronRight className="text-[#0b6a62]" />
          ) : (
            <FiChevronLeft className="text-[#0b6a62]" />
          )}
        </motion.button>

        {/* Logo and header */}
        <div
          className={`p-4 flex items-center ${
            !isNavOpen ? "justify-center" : "justify-between"
          }`}
        >
          {isNavOpen && (
            <div className="flex items-center">
              {isMobile && (
                <button
                  onClick={toggleSidebarVisibility}
                  className="mr-2 p-1 rounded-full text-gray-500 hover:bg-gray-100 md:hidden"
                >
                  <FiX className="h-6 w-6" />
                </button>
              )}
              <Link to={"/"} className="flex items-center">
                <img
                  src="/PwergridplusLogoOld4.png"
                  alt="Company Logo"
                  className="h-10 w-auto"
                />
              </Link>
            </div>
          )}

          {!isNavOpen && (
            <Link to={"/"} className="flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#0b6a62] flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
            </Link>
          )}
        </div>

        {/* User profile section */}
        <motion.div
          className={`px-4 py-3 mx-4 mb-4 bg-gradient-to-r from-[#0b6a62]/10 to-[#22a196]/10 rounded-xl
                      ${!isNavOpen ? "flex justify-center" : ""}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {isNavOpen ? (
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#0b6a62] flex items-center justify-center text-white">
                  <FiUser className="h-5 w-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 truncate">
                  Power User
                </h3>
                <p
                  title={user?.email}
                  className="text-xs text-gray-500 truncate"
                >
                  {user?.email || "admin@powergridplus.com"}
                </p>
              </div>
            </div>
          ) : (
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-[#0b6a62] flex items-center justify-center text-white">
                <FiUser className="h-5 w-5" />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
          )}
        </motion.div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto overflow-x-visible px-4">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.label}
                variants={menuItemVariants}
                onHoverStart={() => setHoveredItem(item.label)}
                onHoverEnd={() => setHoveredItem(null)}
                className="relative"
              >
                <Link
                  id={item.label}
                  to={item.href}
                  className={`
                    flex items-center px-3 py-3 rounded-lg text-gray-600 
                    hover:bg-[#0b6a62]/5 hover:text-[#0b6a62] transition-all duration-200
                    ${
                      activeItem === item.href
                        ? "bg-[#0b6a62]/10 text-[#0b6a62] font-medium"
                        : ""
                    }
                    ${!isNavOpen ? "justify-center" : ""}
                  `}
                  onClick={() => {
                    setActiveItem(item.href);
                    if (isMobile) {
                      setIsSidebarVisible(false);
                    }
                  }}
                >
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon
                      className={`w-5 h-5 ${isNavOpen ? "mr-3" : ""}`}
                    />
                  </motion.div>

                  {isNavOpen && <span>{item.label}</span>}

                  {activeItem === item.href && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute left-0 w-1 h-full bg-[#0b6a62] rounded-r-full"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>

                {/* Tooltip for collapsed state */}
                {!isNavOpen && hoveredItem === item.label && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="fixed ml-2 top-auto z-[100] px-3 py-2 bg-gray-800 text-white text-sm rounded-md whitespace-nowrap shadow-lg"
                    style={{
                      left: "80px", // Width of collapsed sidebar (20rem)
                      transform: `translateY(-50%)`,
                      top: `${
                        document
                          .getElementById(item.label)
                          ?.getBoundingClientRect().top +
                        window.scrollY +
                        document.getElementById(item.label)?.offsetHeight / 2
                      }px`,
                    }}
                  >
                    {item.label}
                  </motion.div>
                )}
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Divider */}
        <div
          className={`mx-4 my-2 border-t border-gray-200 ${
            !isNavOpen ? "mx-2" : ""
          }`}
        ></div>

        {/* Logout Button */}
        <div className={`p-4 ${!isNavOpen ? "flex justify-center" : ""}`}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full relative"
            onHoverStart={() => setHoveredItem("logout")}
            onHoverEnd={() => setHoveredItem(null)}
          >
            <Link
              id="logout-button"
              to="/logout"
              className={`
                group w-full cursor-pointer flex items-center justify-center px-4 py-2.5 
                rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white
                shadow-md hover:shadow-lg transition-all duration-300
                ${!isNavOpen ? "p-2.5" : ""}
              `}
            >
              <LogOutIcon
                className={`w-5 h-5 ${
                  isNavOpen ? "mr-2" : ""
                } group-hover:rotate-12 transition-transform duration-300`}
              />
              {isNavOpen && <span className="font-medium">Logout</span>}
            </Link>

            {/* Tooltip for logout when sidebar is collapsed */}
            {!isNavOpen && hoveredItem === "logout" && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="fixed ml-2 z-[100] px-3 py-2 bg-gray-800 text-white text-sm rounded-md whitespace-nowrap shadow-lg"
                style={{
                  left: "80px", // Width of collapsed sidebar
                  top: "10%",
                  transform: "translateY(-50%)",
                }}
              >
                Logout
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile toggle button - fixed at the bottom */}
      <button
        onClick={toggleSidebarVisibility}
        className="md:hidden fixed bottom-4 right-4 z-30 w-12 h-12 rounded-full bg-[#0b6a62] text-white shadow-lg flex items-center justify-center"
      >
        <FiMenu className="h-6 w-6" />
      </button>
    </>
  );
}
