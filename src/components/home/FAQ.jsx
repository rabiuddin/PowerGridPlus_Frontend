import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis consequat elit. Etiam feugiat quam eros, quis eleifend ex molestie ultricies.",
  },
  {
    question: "Lorem ipsum dolor sit amet adipiscing elit?",
    answer:
      "Vestibulum maximus justo id velit gravida pulvinar. Proin eu augue augue. Nam eleifend porta viverra.",
  },
  {
    question: "Lorem ipsum dolor sit amet adipiscing elit?",
    answer:
      "Integer gravida tempor convallis. Nulla id lorem odio. Lorem ipsum dolor sit amet euismod dui.",
  },
  {
    question: "Lorem ipsum dolor sit amet adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida tempor convallis.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="main-heading text-center">
        Frequently Asked Questions
      </h1>
      <div className="w-16 h-1 bg-teal-600 mx-auto mb-10"></div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-lg font-medium text-gray-800 hover:bg-gray-100 transition duration-300 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp className="text-teal-500" />
              ) : (
                <ChevronDown className="text-teal-500" />
              )}
            </button>
            <div
              className={`transition-all overflow-hidden ${
                openIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
