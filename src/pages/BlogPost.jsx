import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CommentSection from "../components/blog-post/CommentSection";
import Reveal from "../components/shared/framer-motion/Reveal";
import useScroll from "../hooks/useScroll";
import { useBlogs } from "../components/blogs/hooks/useBlogs";
import { BACKEND_URL } from "../config/constants";

const BlogPost = () => {
  const { id } = useParams();
  const { blogPost, getBlogPostById } = useBlogs();
  const { scrollToTop } = useScroll();

  useEffect(() => {
    getBlogPostById(id);
    scrollToTop();
  }, [id]);

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <Reveal>
        <div className="container mx-auto px-4 py-12">
          <article className="max-w-4xl mx-auto">
            <header className="mb-8 text-center">
              <div className="flex items-center justify-center mb-4 space-x-2">
                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                  {blogPost.category}
                </span>
                <span className="text-gray-500 text-sm">{blogPost.date}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {blogPost.title}
              </h1>
              <div className="flex items-center justify-center">
                <span className="font-medium">{blogPost.author_name}</span>
              </div>
            </header>

            <div className="mb-10">
              <img
                src={
                  BACKEND_URL + "/" + blogPost.imageUrl || "/placeholder.svg"
                }
                alt={blogPost.title}
                className="w-full h-[400px] object-cover rounded-xl mb-8"
              />

              <div className="prose prose-lg max-w-none">
                {blogPost.content.map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <CommentSection blogPost={blogPost} />
            </div>
          </article>
        </div>
      </Reveal>
    </MainLayout>
  );
};

export default BlogPost;
