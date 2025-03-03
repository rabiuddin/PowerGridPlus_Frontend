import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { blogData } from "../data/blogs";
import CommentSection from "../components/blog-post/CommentSection";
import Reveal from "../components/shared/framer-motion/Reveal";
import useScroll from "../hooks/useScroll";

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogData.find((post) => post.id === parseInt(id));

  const {scrollToTop} = useScroll()

  useEffect(() => {
    scrollToTop();
  }, [id]);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <MainLayout>
      <Reveal>
        <div className="container mx-auto px-4 py-12">
          <article className="max-w-4xl mx-auto">
            <header className="mb-8 text-center">
              <div className="flex items-center justify-center mb-4 space-x-2">
                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                  {blog.category}
                </span>
                <span className="text-gray-500 text-sm">{blog.date}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {blog.title}
              </h1>
              <div className="flex items-center justify-center">
                <span className="font-medium">{blog.author.name}</span>
              </div>
            </header>

            <div className="mb-10">
              <img
                src={blog.imageUrl || "/placeholder.svg"}
                alt={blog.title}
                className="w-full h-[400px] object-cover rounded-xl mb-8"
              />

              <div className="prose prose-lg max-w-none">
                {blog.content.map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <CommentSection blogId={blog.id} />
            </div>
          </article>
        </div>
      </Reveal>
    </MainLayout>
  );
};

export default BlogPost;
