import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const ContactCards = () => {
  const contactInfo = [
    {
      id: 1,
      icon: <FiPhone className="h-6 w-6" />,
      title: "Phone",
      info: "+37253676853",
    },
    {
      id: 2,
      icon: <FiMail className="h-6 w-6" />,
      title: "Email",
      info: "abiodun.onile@powergridplus.com",
    },
    {
      id: 3,
      icon: <FiMapPin className="h-6 w-6" />,
      title: "Office",
      info: "Tallinn, Estonia",
    },
  ];
  return (
    <>
      {/* Contact Information Cards */}
      <section className="bg-gradient-to-r from-primary py-16 to-[#22a196]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 p-10 rounded-lg shadow-lg text-white backdrop-blur-sm duration-300 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/80 break-words font-medium">
                  {item.info}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactCards;
