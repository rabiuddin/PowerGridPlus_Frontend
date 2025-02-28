import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Chatbot technology",
    description:
      "Enhance customer engagement with AI-driven chatbots. Get instant responses and personalized interactions to improve user experience.",
  },
  {
    id: 2,
    title: "Recommendations services",
    description:
      "Identify patterns in your energy usage with advanced analytics. Make informed decisions to optimize efficiency.",
  },
  {
    id: 3,
    title: "Elastic sensing technology",
    description:
      "Reduce energy waste and lower costs with our innovative sensing technology. Maximize your energy consumption efficiency.",
  },
  {
    id: 4,
    title: "Remote control",
    description:
      "Control your energy devices remotely for better efficiency and convenience. Manage your energy usage from anywhere.",
  },
];

const ServiceDetails = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-6 lg:px-0">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-secondary rounded-lg shadow-md hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
