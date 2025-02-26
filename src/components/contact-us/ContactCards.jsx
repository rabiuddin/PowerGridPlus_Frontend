import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const ContactCards = () => {
  const contactInfo = [
    {
      id: 1,
      icon: <FiPhone className="w-6 h-6" />,
      title: "Phone",
      info: "+1 (555) 123-4567",
      subInfo: "Monday to Friday, 9am to 6pm",
    },
    {
      id: 2,
      icon: <FiMail className="w-6 h-6" />,
      title: "Email",
      info: "contact@powergridplus.com",
      subInfo: "We'll respond within 24 hours",
    },
    {
      id: 3,
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Office",
      info: "123 Innovation Drive",
      subInfo: "Silicon Valley, CA 94025",
    },
  ];
  return (
    <>
      {/* Contact Information Cards */}
      <section className="py-16 bg-gradient-to-r from-[#0b6a62] to-[#22a196]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-white bg-white/10 backdrop-blur-sm"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold  mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 font-medium">{item.info}</p>
                <p className="text-white/80 text-sm">{item.subInfo}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactCards;
