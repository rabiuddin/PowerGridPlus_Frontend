import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiBox, FiGlobe, FiUsers } from "react-icons/fi";

const StatsSection = () => {
  const stats = [
    { id: 1, number: "10K+", text: "Smart Devices Deployed", icon: <FiBox /> },
    { id: 2, number: "98%", text: "Customer Satisfaction", icon: <FiUsers /> },
    { id: 3, number: "25+", text: "Countries Served", icon: <FiGlobe /> },
    { id: 4, number: "15+", text: "Industry Awards", icon: <FiAward /> },
  ];

  return (
    <>
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center text-white p-6 rounded-lg hover:shadow-xl bg-white/10 backdrop-blur-sm"
              >
                <div className="text-4xl mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                <p className="text-white/80">{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsSection;
