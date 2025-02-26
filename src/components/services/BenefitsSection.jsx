import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    id: 1,
    title: "Real-Time Insights",
    description:
      "Gain real-time insights into your energy consumption, allowing you to make informed decisions and take immediate action to optimize usage.",
  },
  {
    id: 2,
    title: "Cost Savings",
    description:
      "Reduce energy waste and lower your energy bills with our cost-effective solutions designed to maximize efficiency.",
  },
  {
    id: 3,
    title: "Improved Efficiency",
    description:
      "Enhance your overall energy efficiency with our tailored services, helping you achieve your sustainability goals.",
  },
  {
    id: 4,
    title: "Sustainability",
    description:
      "Contribute to a greener future by reducing your carbon footprint and promoting sustainable energy practices.",
  },
  {
    id: 5,
    title: "Expert Support",
    description:
      "Our dedicated support team is always available to assist you with any questions or issues, ensuring a seamless experience.",
  },
  {
    id: 6,
    title: "Scalable Solutions",
    description:
      "Our services are scalable to meet the needs of both small businesses and large enterprises, providing flexible solutions for all.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Benefits of Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
