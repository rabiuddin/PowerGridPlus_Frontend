export default function LatestNews() {
  const newsItems = [
    {
      id: 1,
      image: "https://picsum.photos/id/242/350/250", // Replace with your image URL
      title: "Lorem ipsum dolor sit amet",
      date: "15.10.2024",
      description: "Consectetur adipiscing elit.",
    },
    {
      id: 2,
      image: "https://picsum.photos/id/238/350/250", // Replace with your image URL
      title: "Lorem ipsum dolor sit amet",
      date: "15.10.2024",
      description: "Consectetur adipiscing elit.",
    },
    {
      id: 3,
      image: "https://picsum.photos/id/239/350/250", // Replace with your image URL
      title: "Lorem ipsum dolor sit amet",
      date: "15.10.2024",
      description: "Consectetur adipiscing elit.",
    },
    {
      id: 4,
      image: "https://picsum.photos/id/240/350/250", // Replace with your image URL
      title: "Lorem ipsum dolor sit amet",
      date: "15.10.2024",
      description: "Consectetur adipiscing elit.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="main-heading">Latest News</h2>
        <div className="w-16 h-1 bg-teal-600 mx-auto mb-10"></div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt="News"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                <span className="block mt-4 text-teal-600 font-semibold">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10">
          <button className="text-[#0b6a62] text-lg font-semibold px-6 py-3 rounded-md border border-[#0b6a62] hover:bg-[#0b6a62] hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
