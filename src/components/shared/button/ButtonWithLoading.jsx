import { ArrowPathIcon } from "@heroicons/react/24/outline";
import React from "react";

const ButtonWithLoading = ({ loading, text }) => {
  return (
    <>
      <button
        disabled={loading}
        type="submit"
        className={`w-full py-2 px-4 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out transform flex items-center justify-center gap-2 ${
          loading
            ? "bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed"
            : "bg-gradient-to-r from-primary to-secondary hover:scale-[1.02] hover:bg-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:outline-2 hover:outline-gradient-to-r hover:outline-primary"
        }`}
      >
        {loading && (
          <ArrowPathIcon className="w-5 h-5 animate-spin text-white" />
        )}
        {text}
      </button>
    </>
  );
};

export default ButtonWithLoading;
