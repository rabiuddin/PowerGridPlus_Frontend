import { useCommentSection } from "./hooks/useCommentSection";

export default function CommentSection({ blogPost }) {
  const {
    newComment,
    handleInputChange,
    comments,
    handleLike,
    handleSubmitComment,
  } = useCommentSection(blogPost);

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Comments ({comments.length})</h3>

      <form onSubmit={handleSubmitComment} className="mb-8">
        <div className="mb-4">
          <textarea
            value={newComment}
            onChange={handleInputChange}
            placeholder="Share your thoughts..."
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none h-32"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary cursor-pointer">
          Post Comment
        </button>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  <h4 className="font-semibold">{comment.author}</h4>
                  <span className="text-gray-500 text-sm ml-2">
                    {comment.date}
                  </span>
                </div>
                <p className="text-gray-700 mb-3">{comment.content}</p>
                <button
                  onClick={() => handleLike(comment.id)}
                  className="text-gray-500 hover:text-primary flex items-center text-sm cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  {comment.likes} {comment.likes === 1 ? "Like" : "Likes"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
