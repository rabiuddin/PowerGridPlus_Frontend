import React from "react";
import { motion } from "framer-motion";
import BlogCardItem from "../components/blogs/BlogCardItem";
import MainLayout from "../layouts/MainLayout";
import { blogData, itemVariants, containerVariants } from "../data/blogs";
import Reveal from "../components/shared/framer-motion/Reveal";

const Blogs = () => {
  return (
    <MainLayout>
      <Reveal>
        <div className="text-center py-6 mx-auto bg-gradient-to-br from-[#f3fff9] to-[#edfff6]">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0b6a62] mb-6">
            <span className="flex justify-center items-center gap-2  shimmer-primary">
              <span>Our Blog</span>
            </span>
          </h1>
          <p className="text-gray-600 text-lg mb-12">
            Explore our collection of articles, tutorials, and insights
          </p>
        </div>
      </Reveal>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogData.map((item) => (
            <BlogCardItem key={item.id} item={item} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default Blogs;
