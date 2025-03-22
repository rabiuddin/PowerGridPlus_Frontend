import React, { useEffect } from "react";
import { motion } from "framer-motion";
import BlogCardItem from "../components/blogs/BlogCardItem";
import MainLayout from "../layouts/MainLayout";
import { itemVariants, containerVariants } from "../data/blogs";
import Reveal from "../components/shared/framer-motion/Reveal";
import { useBlogs } from "../components/blogs/hooks/useBlogs";
import FullScreenLoader from "../components/shared/loader/FullScreenLoader";
import NoBlogsFound from "../components/blogs/NoBlogsFound";

const Blogs = () => {
  const { blogs, getBlogs, pageNumber, setPageNumber } = useBlogs();

  useEffect(() => {
    getBlogs(pageNumber);
  }, [pageNumber]);

  if (!blogs)
    return (
      <>
        <FullScreenLoader isLoading={!blogs} />
      </>
    );
  return (
    <MainLayout>
      <Reveal>
        <div className="bg-gradient-to-br text-center from-[#f3fff9] mx-auto py-6 to-[#edfff6]">
          <h1 className="text-4xl text-primary font-bold mb-6 md:text-5xl">
            <span className="flex justify-center gap-2 items-center shimmer-primary">
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
          className="grid grid-cols-1 gap-8 lg:grid-cols-3 sm:grid-cols-2"
        >
          {blogs.length > 0 &&
            blogs.map((item) => (
              <BlogCardItem key={item.id} item={item} variants={itemVariants} />
            ))}
        </motion.div>
        {blogs.length == 0 && (
          <>
            <NoBlogsFound />
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default Blogs;
