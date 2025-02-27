import { motion, AnimatePresence } from "framer-motion"
import { FiArrowRight, FiCalendar } from "react-icons/fi"
import BlogCardItem from "../shared/BlogCardItem";

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
            <BlogCardItem key={item.id} item={item} variants={itemVariants} />
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
