import { useState } from "react";
import {
  addCommentToBlogPostApiCall,
  addLikeToCommentApiCall,
  deleteCommentApiCall,
  unLikeCommentApiCall,
} from "../../../api/blogPost.api";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";

export const useCommentSection = (blogPost) => {
  // states
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(blogPost.comments);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  // function
  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    if (!user) {
      toast.error(
        <>
          <div className="flex items-center gap-4">
            <span>Please Login first</span>

            <span
              className="cursor-pointer hover:scale-102 w-fit flex items-center gap-1 hover:bg-secondary outline-secondary outline-1 text-secondary hover:text-white font-semibold ps-3 pe-4 py-1 rounded-md shadow-md bg-white transition-all duration-300 xl:text-[1em] text-sm"
              onClick={() => {
                navigate("/login");
              }}
            >
              <IoLogInOutline className="text-lg" />
              Login
            </span>
          </div>
        </>
      );
      return;
    }

    setLoading(true);

    const comment = {
      content: newComment,
    };

    // Add Comment Api Call
    const response = await addCommentToBlogPostApiCall(
      {
        content: comment.content,
      },
      blogPost.id
    );

    if (response.success) {
      // update state on frontend
      setComments([response.data, ...comments]);
      setNewComment("");
    } else {
      console.error(response.message);
    }

    setLoading(false);
  };

  const handleUnlike = async (commentId) => {
    const response = await unLikeCommentApiCall(commentId);

    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              likes: comment.likes - 1,
              liked_by: comment.liked_by.filter((id) => id !== user.id),
            }
          : comment
      )
    );

    if (!response.success) {
      console.error(response.message);
    }
  };

  const handleLike = async (commentId) => {
    const response = await addLikeToCommentApiCall(commentId);

    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              likes: comment.likes + 1,
              liked_by: [...comment.liked_by, user.id],
            }
          : comment
      )
    );

    if (!response.success) {
      console.error(response.message);
    }
  };

  const handleDeleteComment = async (commentId) => {
    setDeleting(true);

    const response = await deleteCommentApiCall(commentId);

    setComments(comments.filter((comment) => comment.id !== commentId));

    if (!response.success) {
      console.error(response.message);
    }

    setDeleting(false);
  };

  return {
    handleInputChange,
    newComment,
    handleSubmitComment,
    comments,
    handleLike,
    loading,
    handleUnlike,
    handleDeleteComment,
    deleting,
  };
};
