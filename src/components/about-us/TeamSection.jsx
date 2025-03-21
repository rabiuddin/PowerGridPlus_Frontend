import React from "react";
import { motion } from "framer-motion";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Onile Abiodun Emmanuel",
      role: "Chief Executive Officer",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 2,
      name: "Vjatseslav Keksin",
      role: "Head of Innovation",
      image: "/placeholder.svg?height=400&width=400",
    },
  ];
  return (
    <>
      {/* Team Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="text-center max-w-6xl mx-auto">
              <h1 className="main-heading">Our Leadership Team</h1>
              <div className="bg-teal-600 h-1 w-16 mb-10 mx-auto"></div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:mx-50 md:grid-cols-2 xl:mx-80">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="rounded-lg group overflow-hidden relative"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="h-full w-full duration-300 group-hover:scale-110 object-cover transform transition-transform"
                  />
                  <div className="bg-gradient-to-t absolute from-primary inset-0 opacity-75 to-transparent"></div>
                </div>
                <div className="p-6 text-white absolute bottom-0 left-0 right-0">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-white/80">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
