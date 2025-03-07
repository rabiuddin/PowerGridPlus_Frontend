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
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <div className="relative">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0b6a62] focus:ring-2 focus:ring-[#0b6a62]/20 outline-none transition-all"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>

        {error && (
          <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="group cursor-pointer relative w-full inline-flex items-center justify-center px-6 py-3 overflow-hidden rounded-lg bg-primary border-2 border-primary text-white font-medium transition-all duration-300 hover:bg-white hover:text-primary disabled:opacity-70"
        >
          <span className="relative flex items-center justify-center w-full">
            {isSubmitting ? "Sending..." : "Send Reset Link"}
          </span>
        </button>
      </form>
    </>
  );
};

export default ForgotPasswordForm;
