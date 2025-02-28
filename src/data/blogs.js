export const blogData = [
  {
    id: 1,
    title: "How AI is Revolutionizing Energy Efficiency: Cutting Your Electric Bill",
    excerpt:
      "Discover how artificial intelligence is transforming energy consumption, reducing waste, and optimizing power usage to save on electricity bills.",
    content: [
      "Artificial Intelligence is playing a crucial role in reducing electricity bills by optimizing energy usage in homes and businesses. AI-powered systems analyze energy consumption patterns and suggest the most efficient ways to use power, helping individuals and companies save money and reduce their carbon footprint.",
      "Smart AI-driven thermostats, such as Google Nest and Ecobee, learn from user behavior and adjust heating and cooling settings automatically. This ensures that energy is not wasted on unnecessary cooling or heating when no one is home, leading to significant reductions in electricity costs over time.",
      "AI-powered energy monitoring platforms provide real-time data on electricity consumption, identifying areas where energy waste occurs. These platforms help users make informed decisions about their energy use and provide actionable insights to lower consumption.",
      "Additionally, AI-driven home automation systems integrate with IoT devices to create smart energy-efficient environments. Lights, appliances, and even entire power grids can be controlled based on real-time occupancy and weather patterns, optimizing power consumption to maximize savings.",
      "Businesses are also leveraging AI for demand forecasting and load balancing, allowing them to purchase electricity at lower rates during off-peak hours and distribute power efficiently. By harnessing the power of AI, both residential and commercial users can significantly cut down on their electricity bills while promoting sustainability.",
    ],
    imageUrl: "/blog1Image.webp",
    category: "Technology",
    date: "April 10, 2024",
    author: {
      name: "Alex Johnson",
    },
  },
  {
    id: 2,
    title: "The Rise of Smart IoT Plugs: Enhancing Energy Efficiency",
    excerpt:
      "Smart IoT plugs are changing how we manage electricity consumption. Learn how these innovative devices help reduce power waste and lower bills.",
    content: [
      "Smart IoT plugs have become a popular solution for controlling energy usage and cutting electricity costs. These devices allow users to remotely control electrical appliances through a smartphone app, helping to ensure that energy is only used when needed.",
      "One of the primary benefits of smart plugs is the ability to schedule appliance usage. By setting timers for devices like coffee makers, televisions, and heaters, users can prevent unnecessary power consumption and avoid standby energy drain, which can contribute significantly to higher electricity bills.",
      "Smart plugs also provide energy monitoring features, giving users real-time insights into the power usage of connected devices. With this information, households and businesses can identify inefficient appliances and replace or upgrade them to more energy-efficient alternatives.",
      "Integration with voice assistants like Alexa and Google Assistant adds convenience, allowing users to turn devices on or off with simple voice commands. Additionally, automation through smart home systems enables devices to work in sync based on occupancy, weather conditions, or other triggers, optimizing power usage efficiently.",
      "With advancements in IoT technology, smart plugs are evolving to work seamlessly with renewable energy sources. Some models are designed to prioritize the use of solar or wind energy, ensuring that appliances run on green power whenever available, further reducing electricity costs and environmental impact.",
    ],
    imageUrl: "/blog2Image.webp",
    category: "Smart Home",
    date: "March 25, 2024",
    author: {
      name: "Maya Patel",
    },
  },
  {
    id: 3,
    title: "How IoT Devices Slash Electricity Costs with Smart Tech.",
    excerpt:
      "Discover how IoT devices like smart meters, sensors, and automation systems are helping households and businesses lower their energy bills.",
    content: [
      "IoT devices are revolutionizing the way we manage electricity usage, offering innovative solutions to reduce energy consumption and lower costs. From smart thermostats to automated lighting systems, these devices optimize power usage based on real-time data and user preferences.",
      "Smart meters, for example, provide detailed insights into energy consumption patterns, allowing users to make informed decisions about reducing waste. These meters enable utility companies to implement dynamic pricing models, encouraging consumers to use electricity during off-peak hours when rates are lower.",
      "IoT-enabled sensors help detect inefficiencies in appliances and electrical systems. For instance, occupancy sensors can automatically turn off lights and devices when no one is present, preventing unnecessary energy waste. Additionally, water heaters and HVAC systems can be optimized to run only when needed, reducing their overall energy consumption.",
      "Home automation systems powered by IoT technology allow users to control multiple devices from a central platform, making it easier to implement energy-saving routines. By syncing smart thermostats, lights, and appliances, users can create efficient energy schedules tailored to their daily routines.",
      "As IoT technology continues to advance, its impact on energy efficiency will only grow. By integrating smart devices into our homes and businesses, we can significantly cut electricity bills while contributing to a more sustainable future.",
    ],
    imageUrl: "/blog3Image.webp",
    category: "IoT",
    date: "February 18, 2024",
    author: {
      name: "Jordan Lee",
    },
  },
  {
    id: 4,
    title: "The Role of AI in Predictive Energy Management",
    excerpt: "Learn how AI-powered predictive analytics are reshaping energy management and reducing power consumption in homes and industries.",
    content: [
      "AI-driven predictive analytics is helping businesses and homeowners optimize their energy use by forecasting demand and suggesting efficient energy consumption patterns.",
      "Smart grid technology utilizes AI to balance energy loads, prevent power outages, and distribute energy efficiently, reducing costs for users and suppliers alike.",
      "By analyzing historical energy usage, AI systems can predict peak demand periods and adjust energy distribution to minimize waste and ensure efficient power usage.",
    ],
    imageUrl: "/blog4Image.webp",
    category: "Technology",
    date: "May 5, 2024",
    author: {
      name: "Samantha Green",
    },
  },
  {
    id: 5,
    title: "Smart Lighting Systems: A Bright Idea for Energy Savings",
    excerpt: "Discover how smart lighting systems are revolutionizing energy efficiency in homes and businesses.",
    content: [
      "Smart lighting systems utilize sensors, automation, and AI to adjust lighting based on occupancy, natural light availability, and user preferences, reducing unnecessary energy use.",
      "LED smart bulbs consume significantly less power than traditional bulbs and can be programmed to operate only when needed, further cutting down on electricity bills.",
      "Integration with home automation systems allows for remote control, scheduling, and energy monitoring, making smart lighting a key component in modern energy-efficient solutions.",
    ],
    imageUrl: "/blog5Image.webp",
    category: "Smart Home",
    date: "June 15, 2024",
    author: {
      name: "David Carter",
    },
  },
  {
    id: 6,
    title: "Home Energy Storage: How Batteries Are Changing Power Consumption",
    excerpt: "Learn how home energy storage solutions are helping homeowners save money and use power more efficiently.",
    content: [
      "Home energy storage systems, such as Tesla Powerwall and LG Chem batteries, store excess energy from solar panels or the grid for later use, reducing reliance on peak-hour electricity.",
      "With smart AI integration, these systems can predict energy demand and optimize battery usage to lower electricity costs and improve efficiency.",
      "By enabling energy independence and promoting renewable energy use, home storage solutions are revolutionizing how consumers interact with power consumption.",
    ],
    imageUrl: "/blog6Image.webp",
    category: "Renewable Energy",
    date: "July 22, 2024",
    author: {
      name: "Olivia Martinez",
    },
  }
]

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
}

export const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
}

