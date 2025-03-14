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
      className="bg-white z-10 shadow-sm"
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
          <div className="flex items-center justify-between">
            {/* Left side - Title and mobile menu */}
            <div className="flex items-center">
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0b6a62]/10 mr-3 shadow-sm">
                  <Icon className="h-5 w-5 text-[#0b6a62]" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-gray-800">
                    {title}
                  </h1>
                  <p className="text-xs text-gray-500 hidden sm:block">
                    Welcome back to your dashboard
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right side - Search, notifications, profile */}
            <div className="flex items-center space-x-1 sm:space-x-4">
              {/* User Profile */}
              <div className="relative">
                <motion.button
                  className="flex items-center space-x-2 p-1.5 rounded-lg hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#0b6a62] flex items-center justify-center text-white shadow-sm">
                    <FiUser className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 hidden sm:inline-block">
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
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">
                          {user?.name || "User"}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {user?.email || "user@example.com"}
                        </p>
                      </div>
                      <Link className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <FiUser className="h-4 w-4 mr-2 text-gray-500" />
                        Profile
                      </Link>
                      <Link className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <FiSettings className="h-4 w-4 mr-2 text-gray-500" />
                        Settings
                      </Link>
                      <div className="border-t border-gray-100 my-1"></div>
                      <Link
                        to="/logout"
                        className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
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
          className="px-4 sm:px-6 py-3 border-t border-b border-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-1 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && (
                    <FiChevronRight className="h-4 w-4 text-gray-400 mx-1" />
                  )}
                  <Link
                    to={crumb.href}
                    className={`hover:text-[#0b6a62] transition-colors ${
                      index === breadcrumbs.length - 1
                        ? "text-[#0b6a62] font-medium"
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
