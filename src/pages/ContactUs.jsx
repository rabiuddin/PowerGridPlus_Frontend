import MainLayout from "../layouts/MainLayout";
import HeroSection from "../components/contact-us/HeroSection";
import ContactCards from "../components/contact-us/ContactCards";
import ContactForm from "../components/contact-us/ContactForm";
import MapSection from "../components/contact-us/MapSection";
import Reveal from "../components/shared/Reveal";

export default function ContactUs() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        <HeroSection />
        <ContactForm />
        <ContactCards />
        <Reveal>
          <MapSection />
        </Reveal>
      </div>
    </MainLayout>
  );
}
