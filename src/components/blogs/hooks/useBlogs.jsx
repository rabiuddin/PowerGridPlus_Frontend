import { useState } from "react";
import { getBlogsApiCall } from "../../../api/blogs.api";
import { getBlogPostByIdApiCall } from "../../../api/blogPost.api";

export const useBlogs = () => {
  // states
  const [latestBlogs, setLatestBlogs] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const [blogPost, setBlogPost] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // functions
  const getLatestBlogs = async () => {
    const response = await getBlogsApiCall();

    if (response.success) {
      setLatestBlogs(response.data.results.slice(0, 4));
    } else {
      console.error(response.message);
    }
  };

  const getBlogs = async (pageNumber) => {
    const response = await getBlogsApiCall(pageNumber);

    if (response.success) {
      setBlogs(response.data.results);
    } else {
      console.error(response.message);
    }
  };

  const getBlogPostById = async (id) => {
    const response = await getBlogPostByIdApiCall(id);

    if (response.success) {
      setBlogPost(response.data);
    } else {
      console.error(response.message);
    }
  };
  return {
    getLatestBlogs,
    latestBlogs,
    blogs,
    getBlogs,
    getBlogPostById,
    blogPost,
    pageNumber,
    setPageNumber,
  };
};
