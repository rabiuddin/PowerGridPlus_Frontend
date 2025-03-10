import { useState } from "react";
import { motion } from "framer-motion";
import { FiHelpCircle } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { userDashboardMenuItems } from "../../../data/sidebar";
import { LogOutIcon } from "lucide-react";

export default function Sidebar({ isUser }) {
  const location = useLocation();
  const menuItems = isUser ? userDashboardMenuItems : userDashboardMenuItems;
  const [activeItem, setActiveItem] = useState(location.pathname);

  return (
    <div className="w-1/5 h-screen bg-white flex flex-col shadow-md shadow-gray-400 z-10">
      {/* Logo */}
      <div className="p-6">
        <div className="flex lg:flex-1">
          <Link to={"/"} target="_blank" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              src="/PwergridplusLogoOld4.png"
              alt="Company Logo"
              className="w-52"
            />
          </Link>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className={`flex items-center px-6 py-3 text-gray-600 hover:bg-primary/5 hover:text-primary transition-colors relative ${
                  activeItem === item.href
                    ? "text-primary bg-primary/5 font-medium"
                    : ""
                }`}
                onClick={() => setActiveItem(item.href)}
              >
                {activeItem === item.href && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute left-0 w-1 h-10 bg-primary rounded-r-full"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Support Button */}
      <div className="p-6">
        <Link
          to="/logout"
          className="w-full cursor-pointer flex items-center justify-center px-4 py-2 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-300"
        >
          <LogOutIcon className="w-5 h-5 mr-2" />
          Logout
        </Link>
      </div>
    </div>
  );
}
