import React from "react";
import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <>
      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            {/* Replace with your actual map implementation */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d129708.19178387651!2d24.573436094946743!3d59.4715851939173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46929499df5616bf%3A0x400b36d18fc6270!2sTallinn%2C%20Estonia!5e0!3m2!1sen!2s!4v1740838536760!5m2!1sen!2s"
                width="1560"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MapSection;
