"use client";

import { motion } from "framer-motion";

const HOURS = [
  { day: "Monday", hours: "9:00 AM - 6:00 PM" },
  { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
  { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
  { day: "Thursday", hours: "9:00 AM - 6:00 PM" },
  { day: "Friday", hours: "9:00 AM - 7:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 7:00 PM" },
  { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
];

export default function OpeningHours() {
  const container = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      className="bg-white rounded-3xl p-6 md:p-10"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <h2 className="font-heading text-4xl md:text-5xl text-black ls-title mb-6">
        Opening Hours
      </h2>
      <div className="space-y-4">
        {HOURS.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-3 border-b border-black/5 last:border-0"
          >
            <span className="text-base font-medium text-black">{item.day}</span>
            <span className="text-base text-black/60">{item.hours}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-black/60">
        * Walk-ins welcome. VIP lounge appointments available.
      </p>
    </motion.div>
  );
}
