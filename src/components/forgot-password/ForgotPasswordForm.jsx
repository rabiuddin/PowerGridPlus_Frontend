import React from "react";

const ForgotPasswordForm = ({ useForgotPasswordInstance }) => {
  const { handleSubmit, setEmail, email, error, isSubmitting } =
    useForgotPasswordInstance;
  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="text-gray-700 text-sm block font-medium mb-1"
          >
            Email Address
          </label>
          <div className="relative">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg w-full focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none px-4 py-3 transition-all"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>

        {error && (
          <div className="bg-red-50 p-3 rounded-lg text-red-500 text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary border-2 border-primary justify-center rounded-lg text-white w-full cursor-pointer disabled:opacity-70 duration-300 font-medium group hover:bg-white hover:text-primary inline-flex items-center overflow-hidden px-6 py-3 relative transition-all"
        >
          <span className="flex justify-center w-full items-center relative">
            {isSubmitting ? "Sending..." : "Send Reset Link"}
          </span>
        </button>
      </form>
    </>
  );
};

export default ForgotPasswordForm;
