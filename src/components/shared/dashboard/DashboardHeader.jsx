import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiHome,
  FiChevronRight,
  FiBell,
  FiSearch,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function DashboardHeader({
  title,
  icon: Icon = FiHome,
  breadcrumbs,
}) {
  const [showSearch, setShowSearch] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const { user } = useSelector((state) => state.user);

  return (
    <div className="bg-white z-10">
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <div className="px-6 sm:px-6 py-7">
          <div className="flex items-center justify-between">
            {/* Left side - Title and mobile menu */}
            <div className="flex items-center">
              <button className="mr-4 p-1 rounded-full text-gray-500 hover:bg-gray-100 md:hidden">
                <FiMenu className="h-6 w-6" />
              </button>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 mr-3">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
              </div>
            </div>

            {/* Right side - Search, notifications, profile */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                {showSearch ? (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "250px", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      autoFocus
                      onBlur={() => setShowSearch(false)}
                    />
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <button
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowSearch(false)}
                    >
                      <FiX className="h-4 w-4" />
                    </button>
                  </motion.div>
                ) : (
                  <button
                    onClick={() => setShowSearch(true)}
                    className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                    aria-label="Search"
                  >
                    <FiSearch className="h-5 w-5" />
                  </button>
                )}
              </div>

              {/* Notifications */}
              <div className="relative">
                <button
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                  aria-label="Notifications"
                >
                  <FiBell className="h-5 w-5" />
                  {notifications > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-[#22a196] rounded-full">
                      {notifications}
                    </span>
                  )}
                </button>
              </div>

              {/* User Profile */}
              <div className="relative">
                <button className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-100 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                    <FiUser className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 hidden sm:inline-block">
                    {user.email}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="px-6 sm:px-6 py-3 bg-gray-50 border-t border-b  border-gray-100">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-1 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && (
                    <FiChevronRight className="h-4 w-4 text-gray-400 mx-1" />
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
        </div>
      </div>
    </div>
  );
}
