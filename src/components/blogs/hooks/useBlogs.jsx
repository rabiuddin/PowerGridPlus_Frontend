import { useState } from "react";
import { getLatestBlogsApiCall } from "../../../api/blogs.api";

export const useBlogs = () => {
  // states
  const [latestBlogs, setLatestBlogs] = useState(null);

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
  return { getLatestBlogs, latestBlogs };
};
