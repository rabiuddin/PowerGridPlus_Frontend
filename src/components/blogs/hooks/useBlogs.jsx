import { useState } from "react";
import {
  getAllBlogsApiCall,
  getBlogPostByIdApiCall,
  getLatestBlogsApiCall,
} from "../../../api/blogs.api";

export const useBlogs = () => {
  // states
  const [latestBlogs, setLatestBlogs] = useState(null);
  const [allBlogs, setAllBlogs] = useState(null);
  const [blogPost, setBlogPost] = useState(null);

  // functions
  const getLatestBlogs = async () => {
    const response = await getLatestBlogsApiCall();

    if (response.success) {
      setLatestBlogs(response.data);
      console.log(response.message);
    } else {
      console.error(response.message);
    }
  };

  const getAllBlogs = async () => {
    const response = await getAllBlogsApiCall();

    if (response.success) {
      setAllBlogs(response.data);
      console.log(response.message);
    } else {
      console.error(response.message);
    }
  };

  const getBlogPostById = async (id) => {
    const response = await getBlogPostByIdApiCall(id);

    if (response.success) {
      setBlogPost(response.data);
      console.log(response.message);
    } else {
      console.error(response.message);
    }
  };
  return {
    getLatestBlogs,
    latestBlogs,
    allBlogs,
    getAllBlogs,
    getBlogPostById,
    blogPost,
  };
};
