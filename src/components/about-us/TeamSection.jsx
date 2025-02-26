import React from "react";
import { motion } from "framer-motion";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Head of Innovation",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Head of Operations",
      image: "/placeholder.svg?height=400&width=400",
    },
  ];
  return (
    <>
      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="main-heading">Our Leadership Team</h1>
              <div className="w-16 h-1 bg-teal-600 mx-auto mb-10"></div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b6a62] to-transparent opacity-75"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
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
