"use client";

import { motion } from "framer-motion";

export default function ContactMap() {
  const container = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  // Replace with your actual Google Maps embed URL or coordinates
  // You can get this from Google Maps by going to your location, clicking Share > Embed a map
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5!2d-0.2!3d5.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzYnMDAuMCJOIDDCsDEyJzAwLjAiVw!5e0!3m2!1sen!2sgh!4v1234567890";

  return (
    <motion.div
      className="bg-white rounded-3xl p-6 md:p-10"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <h2 className="font-heading text-4xl md:text-5xl text-black ls-title mb-6">
        Find Us
      </h2>
      <div className="space-y-4 mb-6">
        <p className="text-base text-black/80">
          <strong>Address:</strong>
        </p>
        <p className="text-base text-black/60">
          [Your Business Address]
          <br />
          Accra, Ghana
        </p>
        <p className="text-base text-black/80 mt-4">
          <strong>Phone:</strong>{" "}
          <a
            href="tel:+233XXXXXXXXX"
            className="text-[#80461B] hover:underline"
          >
            +233 XX XXX XXXX
          </a>
        </p>
        <p className="text-base text-black/80">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:info@braindandbeyond.com"
            className="text-[#80461B] hover:underline"
          >
            info@braindandbeyond.com
          </a>
        </p>
      </div>
      <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
      </div>
    </motion.div>
  );
}
