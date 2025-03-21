"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

// Available AI models
const models = [
  { id: "gpt4", name: "GPT-4", provider: "OpenAI" },
  // { id: "gemini", name: "Gemini", provider: "Google" },
  // { id: "claude", name: "Claude", provider: "Anthropic", disabled: true },
];

// ModelSelector component allows selecting the AI model to use
const ModelSelector = ({ currentModel }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Get the current model object
  const getCurrentModel = () => {
    return models.find((model) => model.id === currentModel) || models[0];
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex border border-gray-200 rounded-lg text-gray-700 text-sm gap-2 hover:bg-gray-50 items-center px-3 py-1.5"
      >
        <span>Model: {getCurrentModel().name}</span>
        <FiChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop to capture clicks outside */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown menu */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-gray-200 rounded-lg shadow-lg w-48 absolute mt-1 right-0 z-20"
            >
              <div className="py-1">
                {models.map((model) => (
                  <button
                    key={model.id}
                    className={`w-full text-left px-4 py-2 text-sm ${
                      model.disabled
                        ? "text-gray-400 cursor-not-allowed"
                        : model.id === currentModel
                        ? "bg-primary/10 text-primary"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    disabled={model.disabled}
                    onClick={() => {
                      // This would update the model in a real implementation
                      setIsOpen(false);
                    }}
                  >
                    <div className="font-medium">{model.name}</div>
                    <div className="text-gray-500 text-xs">
                      {model.provider}
                    </div>
                    {model.disabled && (
                      <div className="text-gray-400 text-xs mt-1">
                        Coming soon
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModelSelector;
