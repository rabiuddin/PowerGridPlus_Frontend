import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Smart Monitoring",
    description:
      "Our smart monitoring solutions provide real-time insights into your energy consumption, allowing you to track and manage your power usage effectively.",
  },
  {
    id: 2,
    title: "Energy Analytics",
    description:
      "Utilize our advanced analytics tools to identify patterns and trends in your energy usage, helping you make informed decisions to optimize efficiency.",
  },
  {
    id: 3,
    title: "Cost Reduction",
    description:
      "Our services are designed to help you reduce energy waste and lower costs, ensuring that you get the most out of your energy consumption.",
  },
  {
    id: 4,
    title: "Efficiency Improvement",
    description:
      "Improve your overall energy efficiency with our tailored solutions, designed to meet the unique needs of your business or household.",
  },
  {
    id: 5,
    title: "Sustainability",
    description:
      "Contribute to a more sustainable future by optimizing your energy usage and reducing your carbon footprint with our innovative services.",
  },
  {
    id: 6,
    title: "Support & Maintenance",
    description:
      "Our dedicated support team is here to assist you with any issues or questions you may have, ensuring that your energy management system runs smoothly.",
  },
];

const ServiceDetails = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
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
