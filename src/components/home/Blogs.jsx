import { motion, AnimatePresence } from "framer-motion"
import { FiArrowRight, FiCalendar } from "react-icons/fi"

export default function Blogs() {
  const blogItems = [
    {
      id: 1,
      image: "https://picsum.photos/id/242/350/250",
      title: "Lorem ipsum dolor sit amet",
      date: "15.10.2024",
      description: "Consectetur adipiscing elit.",
    },
    {
      id: 2,
      image: "https://picsum.photos/id/238/350/250",
      title: "Lorem ipsum dolor sit amet",
      date: "15.10.2024",
      description: "Consectetur adipiscing elit.",
    },
    {
      id: 3,
      image: "https://picsum.photos/id/239/350/250",
      title: "Lorem ipsum dolor sit amet",
      date: "15.10.2024",
      description: "Consectetur adipiscing elit.",
    },
    {
      id: 4,
      image: "https://picsum.photos/id/240/350/250",
      title: "Lorem ipsum dolor sit amet",
      date: "15.10.2024",
      description: "Consectetur adipiscing elit.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-6 text-center">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="main-heading">Latest Blogs</h1>
        <div className="w-16 h-1 bg-teal-600 mx-auto mb-10"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest news, insights, and innovations in the world of smart energy management.
          </p>
      </div>

        {/* Blogs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {blogItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 relative">
                <div className="flex items-center justify-between mb-3 text-sm text-secondary">
                  <span className="flex items-center">
                    <FiCalendar className="mr-2" />
                    {item.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-end text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity hover:text-secondary duration-300 cursor-pointer">
                  Read More
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <button className="inline-flex items-center text-primary text-lg font-semibold px-6 py-3 rounded-md border border-primary hover:bg-primary hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
              View All Blogs
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
        </motion.div>
      </div>
    </section>
  )
  }
  