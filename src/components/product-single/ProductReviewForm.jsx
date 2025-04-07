import { useState } from "react";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { addReviewApiCall } from "../../api/products.api";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const ProductReviewForm = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if user is not logged in
    if (!user) {
      navigate("/login", {
        state: { from: location },
        replace: true,
      });
      return;
    }

    // Validate form
    if (!rating || !comment) {
      setSubmitError("Please add a comment and provide a rating");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    const response = await addReviewApiCall(productId, {
      rating,
      comment,
      user: user.id,
    });

    if (response.success) {
      // Reset form on success
      setRating(0);
      setComment("");
      setSubmitSuccess(true);
    } else {
      setSubmitError(
        response.detail ||
          response.message ||
          "Failed to submit review. Please try again."
      );
      console.error(response);
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Rating */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Rating
        </label>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="p-1 focus:outline-none"
            >
              <FiStar
                className={`w-6 h-6 ${
                  (hoverRating || rating) >= star
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                } transition-colors`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Comment */}
      <div>
        <label
          htmlFor="review-comment"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Your Review
        </label>
        <textarea
          id="review-comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b6a62]/20 focus:border-[#0b6a62] outline-none transition-all"
          required
        />
      </div>

      {/* Error Message */}
      {submitError && (
        <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
          {submitError}
        </div>
      )}

      {/* Success Message */}
      {submitSuccess && (
        <div className="text-green-500 text-sm bg-green-50 p-3 rounded-lg">
          Thank you for your review! It has been submitted successfully.
        </div>
      )}

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="px-6 py-3 bg-[#0b6a62] text-white rounded-lg hover:bg-[#22a196] transition-colors disabled:bg-gray-300 disabled:text-gray-500"
      >
        {isSubmitting ? "Submitting..." : "Submit Review"}
      </motion.button>
    </form>
  );
};

export default ProductReviewForm;
