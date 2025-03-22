"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Message component displays a single message in the chat with Markdown support
const Message = ({ message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`flex gap-4 ${
        message.is_user_message ? "justify-end" : "justify-start"
      }`}
    >
      {/* Avatar */}
      {!message.is_user_message && (
        <div className="flex bg-primary h-8 justify-center rounded-full text-white w-8 items-center flex-shrink-0">
          AI
        </div>
      )}

      {/* Message content */}
      <div
        className={`${
          !message.is_user_message ? "flex-1 max-w-3xl" : "max-w-[80%]"
        }`}
      >
        <div
          className={`${
            message.is_user_message
              ? "bg-white rounded-3xl py-3 px-4 shadow-sm"
              : " rounded-lg leading-loose"
          }`}
        >
          {message.is_user_message ? (
            <p className="text-gray-800 leading-loose whitespace-pre-wrap">
              {message.content}
            </p>
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                // Add a wrapper div with the className
                root: ({ node, ...props }) => (
                  <div className="markdown-content text-gray-800" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="mb-4 last:mb-0" {...props} />
                ),
                h1: ({ node, ...props }) => (
                  <h1 className="text-xl font-bold mb-4" {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="text-lg font-bold mb-3" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="text-md font-bold mb-2" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc pl-6 mb-4" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="list-decimal pl-6 mb-4" {...props} />
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
                    className="border-l-4 border-gray-200 pl-4 italic my-4 text-gray-600"
                    {...props}
                  />
                ),
                code: ({ node, inline, className, children, ...props }) => {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <div className="my-4 rounded-md overflow-hidden">
                      <SyntaxHighlighter
                        style={atomDark}
                        language={match[1]}
                        PreTag="div"
                        className="rounded-md"
                        {...props}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    </div>
                  ) : (
                    <code
                      className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
                table: ({ node, ...props }) => (
                  <div className="overflow-x-auto my-4">
                    <table
                      className="min-w-full divide-y divide-gray-200"
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
                    className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    {...props}
                  />
                ),
                td: ({ node, ...props }) => (
                  <td
                    className="px-3 py-2 whitespace-nowrap text-sm text-gray-500"
                    {...props}
                  />
                ),
                hr: ({ node, ...props }) => (
                  <hr className="my-4 border-gray-200" {...props} />
                ),
                img: ({ node, ...props }) => (
                  <img
                    className="max-w-full h-auto rounded-md my-4"
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

export default Message;
