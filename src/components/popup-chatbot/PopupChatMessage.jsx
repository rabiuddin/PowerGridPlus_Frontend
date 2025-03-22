"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const PopupChatMessage = ({ message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`flex gap-1 sm:gap-2 ${
        message.is_user_message ? "justify-end" : "justify-start"
      }`}
    >
      {/* Avatar */}
      {!message.is_user_message && (
        <div
          className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white bg-primary flex-shrink-0`}
        >
          <span className="text-xs sm:text-base">AI</span>
        </div>
      )}

      {/* Message content */}
      <div
        className={`${
          !message.is_user_message
            ? "max-w-[75%] sm:max-w-[80%] md:max-w-[85%]"
            : "max-w-[75%] sm:max-w-[80%] md:max-w-[85%]"
        }`}
      >
        <div
          className={` leading-relaxed ${
            message.is_user_message
              ? "bg-white rounded-2xl sm:rounded-3xl py-2 sm:py-3 px-3 sm:px-4 shadow-sm text-base "
              : ""
          }`}
        >
          {message.is_user_message ? (
            <p className="text-gray-800 whitespace-pre-wrap break-words text-base">
              {message.content}
            </p>
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                // Add a wrapper div with the className
                root: ({ node, ...props }) => (
                  <div
                    className="markdown-content text-gray-800 text-xs sm:text-sm"
                    {...props}
                  />
                ),
                p: ({ node, ...props }) => (
                  <p className="mb-3 sm:mb-4 last:mb-0" {...props} />
                ),
                h1: ({ node, ...props }) => (
                  <h1
                    className="text-lg sm:text-xl font-bold mb-3 sm:mb-4"
                    {...props}
                  />
                ),
                h2: ({ node, ...props }) => (
                  <h2
                    className="text-base sm:text-lg font-bold mb-2 sm:mb-3"
                    {...props}
                  />
                ),
                h3: ({ node, ...props }) => (
                  <h3
                    className="text-sm sm:text-md font-bold mb-1 sm:mb-2"
                    {...props}
                  />
                ),
                ul: ({ node, ...props }) => (
                  <ul
                    className="list-disc pl-4 sm:pl-6 mb-3 sm:mb-4"
                    {...props}
                  />
                ),
                ol: ({ node, ...props }) => (
                  <ol
                    className="list-decimal pl-4 sm:pl-6 mb-3 sm:mb-4"
                    {...props}
                  />
                ),
                li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                a: ({ node, ...props }) => (
                  <a
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                  />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote
                    className="border-l-4 border-gray-200 pl-3 sm:pl-4 italic my-3 sm:my-4 text-gray-600"
                    {...props}
                  />
                ),
                code: ({ node, inline, className, children, ...props }) => {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <div className="my-3 sm:my-4 rounded-md overflow-hidden text-xs">
                      <SyntaxHighlighter
                        style={atomDark}
                        language={match[1]}
                        PreTag="div"
                        className="rounded-md text-xs sm:text-sm"
                        customStyle={{ fontSize: "0.8rem" }}
                        {...props}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    </div>
                  ) : (
                    <code
                      className="bg-gray-100 px-1 sm:px-1.5 py-0.5 rounded text-xs sm:text-sm font-mono"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
                table: ({ node, ...props }) => (
                  <div className="overflow-x-auto my-3 sm:my-4">
                    <table
                      className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm"
                      {...props}
                    />
                  </div>
                ),
                thead: ({ node, ...props }) => (
                  <thead className="bg-gray-50" {...props} />
                ),
                tbody: ({ node, ...props }) => (
                  <tbody className="divide-y divide-gray-200" {...props} />
                ),
                tr: ({ node, ...props }) => <tr {...props} />,
                th: ({ node, ...props }) => (
                  <th
                    className="px-2 sm:px-3 py-1 sm:py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    {...props}
                  />
                ),
                td: ({ node, ...props }) => (
                  <td
                    className="px-2 sm:px-3 py-1 sm:py-2 whitespace-nowrap text-xs sm:text-sm text-gray-500"
                    {...props}
                  />
                ),
                hr: ({ node, ...props }) => (
                  <hr className="my-3 sm:my-4 border-gray-200" {...props} />
                ),
                img: ({ node, ...props }) => (
                  <img
                    className="max-w-full h-auto rounded-md my-3 sm:my-4"
                    {...props}
                  />
                ),
              }}
            >
              {message.content}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PopupChatMessage;
