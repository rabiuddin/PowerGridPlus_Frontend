import { useState } from "react";
import { addCommentToBlogPostApiCall } from "../../../api/blogPost.api";

export const useCommentSection = (blogPost) => {
  // states
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(blogPost.comments);

  // function
  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: comments.length + 1,
      author: "You",
      date: "Just now",
      content: newComment,
      likes: 0,
    };

    // update state on frontend
    setComments([comment, ...comments]);
    setNewComment("");

    // Add Comment Api Call
    const response = await addCommentToBlogPostApiCall({
      comment,
      id: blogPost.id,
    });

    if (response.success) {
      console.log(response.message);
    } else {
      console.error(response.message);
    }
  };

  const handleLike = (id) => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };

  return {
    handleInputChange,
    newComment,
    handleSubmitComment,
    comments,
    handleLike,
  };
};
