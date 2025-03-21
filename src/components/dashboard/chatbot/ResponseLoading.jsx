import React from "react";

const ResponseLoading = () => {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex bg-primary h-8 justify-center rounded-full text-white w-8 items-center">
        AI
      </div>
      <div className="flex-1 rounded-lg py-4">
        <div className="flex space-x-2">
          <div
            className="bg-primary h-2 rounded-full w-2 animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="bg-primary h-2 rounded-full w-2 animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
          <div
            className="bg-primary h-2 rounded-full w-2 animate-bounce"
            style={{ animationDelay: "600ms" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ResponseLoading;
