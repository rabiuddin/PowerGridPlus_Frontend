import React from "react";
import MainLayout from "../layouts/MainLayout";
import HeroSection from "../components/services/HeroSection";
import ServiceDetails from "../components/services/ServiceDetails";
import BenefitsSection from "../components/services/BenefitsSection";

const Services = () => {
  return (
    <MainLayout>
      <div className="bg-gradient-to-br from-[#0b6a62]/5 to-[#22a196]/5">
        <HeroSection />
        <ServiceDetails />
        <BenefitsSection />
      </div>
    </MainLayout>
  );
};

export default Services;
