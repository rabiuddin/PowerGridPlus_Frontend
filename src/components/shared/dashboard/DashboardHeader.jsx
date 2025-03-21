"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHome,
  FiChevronRight,
  FiUser,
  FiSearch,
  FiBell,
  FiSettings,
  FiLogOut,
  FiChevronDown,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function DashboardHeader({
  title,
  icon: Icon = FiHome,
  breadcrumbs,
}) {
  const { user } = useSelector((state) => state.user);
  const { isNavOpen } = useSelector((state) => state.utility);
  const [showSearch, setShowSearch] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [notifications] = useState(3); // Example notification count

  return (
    <motion.div
      className="bg-white shadow-sm z-10"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <div
          className={`px-4 sm:px-6 py-4 transition-all duration-300 ${
            isNavOpen ? "md:ml-0" : "md:ml-0"
          }`}
        >
          <div className="flex justify-between items-center">
            {/* Left side - Title and mobile menu */}
            <div className="flex items-center">
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex bg-primary/10 h-10 justify-center rounded-lg shadow-sm w-10 items-center mr-3">
                  <Icon className="h-5 text-primary w-5" />
                </div>
                <div>
                  <h1 className="text-gray-800 text-xl font-semibold">
                    {title}
                  </h1>
                  <p className="text-gray-500 text-xs hidden sm:block">
                    Welcome back to your dashboard
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right side - Search, notifications, profile */}
            <div className="flex items-center sm:space-x-4 space-x-1">
              {/* User Profile */}
              <div className="relative">
                <motion.button
                  className="flex border border-transparent p-1.5 rounded-lg hover:bg-gray-100 hover:border-gray-200 items-center space-x-2 transition-colors"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 1 }}
                >
                  <div className="flex bg-primary h-8 justify-center rounded-full shadow-sm text-white w-8 items-center">
                    <FiUser className="h-4 w-4" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium hidden sm:inline-block">
                    {user?.email || "User"}
                  </span>
                  <FiChevronDown
                    className={`h-4 w-4 text-gray-500 transition-transform duration-200 hidden sm:block ${
                      showUserMenu ? "rotate-180" : ""
                    }`}
                  />
                </motion.button>

                {/* User Dropdown Menu */}
                <AnimatePresence>
                  {showUserMenu && (
                    <motion.div
                      className="bg-white border border-gray-200 rounded-lg shadow-lg w-48 absolute mt-2 py-1 right-0 z-50"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="border-b border-gray-100 px-4 py-2">
                        <p className="text-gray-900 text-sm font-medium">
                          {user?.name || "User"}
                        </p>
                        <p className="text-gray-500 text-xs truncate">
                          {user?.email || "user@example.com"}
                        </p>
                      </div>
                      <Link className="flex text-gray-700 text-sm hover:bg-gray-100 items-center px-4 py-2">
                        <FiUser className="h-4 text-gray-500 w-4 mr-2" />
                        Profile
                      </Link>
                      <Link className="flex text-gray-700 text-sm hover:bg-gray-100 items-center px-4 py-2">
                        <FiSettings className="h-4 text-gray-500 w-4 mr-2" />
                        Settings
                      </Link>
                      <div className="border-gray-100 border-t my-1"></div>
                      <Link
                        to="/logout"
                        className="flex text-red-600 text-sm hover:bg-red-50 items-center px-4 py-2"
                      >
                        <FiLogOut className="h-4 w-4 mr-2" />
                        Logout
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumbs */}
        <motion.div
          className="border-b border-gray-100 border-t px-4 py-3 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex text-sm items-center space-x-1">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && (
                    <FiChevronRight className="h-4 text-gray-400 w-4 mx-1" />
                  )}
                  <Link
                    to={crumb.href}
                    className={`hover:text-primary transition-colors ${
                      index === breadcrumbs.length - 1
                        ? "text-primary font-medium"
                        : "text-gray-500"
                    }`}
                  >
                    {crumb.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </motion.div>
      </div>
    </motion.div>
  );
}
