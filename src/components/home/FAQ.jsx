import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does the AI smart plug work?",
    answer:
      "Our AI smart plug uses advanced algorithms to automatically detect and generate recommendations that help eliminate minor power waste from your devices, reducing both your carbon emissions and electricity costs.",
  },
  {
    question: "Is the PowergridPlus app compatible with all devices?",
    answer:
      "The PowergridPlus app is designed to be compatible with most smartphones and tablets. It supports both iOS and Android operating systems.",
  },
  {
    question: "How do I set up my AI smart plug?",
    answer:
      "Setting up your AI smart plug is easy. Simply plug it into a power outlet, download and install the PowergridPlus app, and follow the in-app instructions to connect your smart plug to your Wi-Fi network. ",
  },
  {
    question: "How secure is my data with the PowergridPlus app?",
    answer:
      "We take data security seriously. The PowergridPlus app uses advanced encryption and secure servers to protect your personal and energy usage data.",
  },
  {
    question: "Can I use the AI smart plug with devices that have timers or remote controls? ",
    answer:
      "Yes, you can use our AI smart plug with devices that have timers or remote controls. The smart plug will work alongside these features to optimize energy usage.",
  },
  {
    question: "How does the AI smart plug help reduce my electricity bill?",
    answer:
      "The AI smart plug helps reduce your electricity bill by automatically detecting and eliminating wastes and standby power consumption from devices when they are not in use.",
  },
  {
    question: "Can I access historical energy usage data through the PowergridPlus app? ",
    answer:
      "Yes, the PowergridPlus app provides detailed historical data on your energy consumption, helping you track changes over time and make informed decisions about your energy usage.",
  },
  {
    question: "Can I control multiple devices with one smart plug?",
    answer:
      "Each smart plug track and controls all devices connected to it. However, while it is possible to track all devices connected to our AI-smart plug, you can use multiple smart plugs to control individual devices and manage them all through the PowergridPlus app.",
  },
  {
    question: "Is the AI smart plug compatible with smart home systems like Alexa or Google Home?",
    answer:
      "Our AI smart plug is compatible with popular smart home systems, allowing you to control your devices using voice commands.",
  },
  {
    question: "What kind of support does the company offer if I encounter issues with my AI smart plug?",
    answer:
      "We offer comprehensive customer support through our website, including FAQs, user manuals, and a dedicated customer service team available via phone or email to assist with any issues you may encounter.",
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
      <div className="space-y-4 last:mb-8">
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
