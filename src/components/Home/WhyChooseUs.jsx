import React from "react";

const WhyChooseUs = () => {
  const reason = [
    {
      title: "Alleviate cost of adoption of energy",
      description:
        "Lowering the financial burden associated with adopting energy solutions helps encourage wider usage. Making energy more affordable ensures accessibility for individuals and businesses.",
      bgColor: "bg-slate-50/95",
    },
    {
      title: "Minimizing Sensor Requirements",
      description:
        "Optimizing technology to rely on fewer sensors reduces costs, simplifies deployment, and enhances efficiency. This approach improves scalability while maintaining accurate data collection.",
      bgColor: "bg-violet-50/95",
    },
    {
      title: "Real-Time Energy Analysis",
      description:
        "Monitoring energy waste, costs, and CO₂ emissions at the asset level enables proactive decision-making. This helps optimize energy usage, reduce expenses, and lower environmental impact.",
      bgColor: "bg-orange-50/95",
    },
  ];
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50" />

      {/* Animated Gradient Blob */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-24 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.15) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Wave Shape */}
      <div className="absolute top-0 inset-x-0 h-40 opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#22a196"
            fillOpacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto">
            WHY CHOOSE POWERGRID PLUS?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {reason.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md shadow-secondary border border-white/20 relative z-10`}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
