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
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      // On desktop, we want the sidebar to be visible by default
      // but respect the collapsed/expanded state
      if (!mobile) {
        dispatch(setIsNavOpen(true));
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
        {isMobile && isNavOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="bg-black fixed inset-0 z-10"
            onClick={toggleCollapsed}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        variants={sidebarVariants}
        initial={false}
        animate={isMobile ? (isNavOpen ? "open" : "closed") : "open"}
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
            <FiChevronRight className="text-primary" />
          ) : (
            <FiChevronLeft className="text-primary" />
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
                  onClick={toggleCollapsed}
                  className="p-1 rounded-full text-gray-500 hover:bg-gray-100 md:hidden mr-2"
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
            <Link to={"/"} className="flex justify-center items-center">
              <div className="flex bg-primary h-10 justify-center rounded-full w-10 items-center">
                <span className="text-lg text-white font-bold">
                  <img src="/PwergridplusLogoOld.png" alt="P" className="h-6" />
                </span>
              </div>
            </Link>
          )}
        </div>

        {/* User profile section */}
        <motion.div
          className={`px-4 py-3 mx-4 mb-4 bg-gradient-to-r from-primary/10 to-[#22a196]/10 rounded-xl
                      ${!isNavOpen ? "flex justify-center" : ""}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {isNavOpen ? (
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="flex bg-primary h-10 justify-center rounded-full text-white w-10 items-center">
                  <FiUser className="h-5 w-5" />
                </div>
                <span className="bg-green-500 border-2 border-white h-3 rounded-full w-3 absolute bottom-0 right-0"></span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-gray-900 text-sm font-medium truncate">
                  Power User
                </h3>
                <p
                  title={user?.email}
                  className="text-gray-500 text-xs truncate"
                >
                  {user?.email || "admin@powergridplus.com"}
                </p>
              </div>
            </div>
          ) : (
            <div className="relative">
              <div className="flex bg-primary h-10 justify-center rounded-full text-white w-10 items-center">
                <FiUser className="h-5 w-5" />
              </div>
              <span className="bg-green-500 border-2 border-white h-3 rounded-full w-3 absolute bottom-0 right-0"></span>
            </div>
          )}
        </motion.div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-x-visible overflow-y-auto px-4">
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
                    hover:bg-primary/5 hover:text-primary transition-all duration-200
                    ${
                      activeItem === item.href
                        ? "bg-primary/10 text-primary font-medium"
                        : ""
                    }
                    ${!isNavOpen ? "justify-center" : ""}
                  `}
                  onClick={() => {
                    setActiveItem(item.href);
                    if (isMobile) {
                      dispatch(setIsNavOpen(false));
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
                      className="bg-primary h-full rounded-r-full w-1 absolute left-0"
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
                    className="bg-gray-800 rounded-md shadow-lg text-sm text-white fixed ml-2 px-3 py-2 top-auto whitespace-nowrap z-[100]"
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
                className="bg-gray-800 rounded-md shadow-lg text-sm text-white fixed ml-2 px-3 py-2 whitespace-nowrap z-[100]"
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
        onClick={toggleCollapsed}
        className="flex bg-primary h-12 justify-center rounded-full shadow-lg text-white w-12 bottom-4 fixed items-center md:hidden right-4 z-30"
      >
        <FiMenu className="h-6 w-6" />
      </button>
    </>
  );
}
