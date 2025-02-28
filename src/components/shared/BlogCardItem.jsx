import React from "react";
import { FiArrowRight, FiCalendar } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BlogCardItem = ({ item, variants }) => {
  return (
    <Link to={`/blogs/${item.id}`}>
      <motion.div
        variants={variants}
        className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      >
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <img
            src={item.imageUrl || "/placeholder.svg"}
            alt={item.title}
            className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-6 relative">
          <div className="flex items-center justify-between mb-3 text-sm text-secondary">
            <span className="flex items-center">
              <FiCalendar className="mr-2" />
              {item.date}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4">{item.excerpt}</p>
          <div className="flex items-center justify-end text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity hover:text-secondary duration-300 cursor-pointer">
            <p className="flex items-center">
              Read More
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default BlogCardItem;
