"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HERO_IMAGE_URL =
  "https://framerusercontent.com/images/Mvmwy2meoLookZmy5qqLLsuZ9A.png?width=840&height=1200";

export default function AboutVision() {
  const container = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.12 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <motion.section
      className="mt-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
        <motion.div
          className="bg-white rounded-3xl overflow-hidden order-1"
          variants={item}
        >
          <div className="relative w-full h-full min-h-[420px] md:min-h-[520px]">
            <Image
              src={HERO_IMAGE_URL}
              alt="Radiant smiling person representing brand vision"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl overflow-hidden p-6 md:p-10 order-2"
          variants={item}
        >
          <h2 className="font-heading text-5xl md:text-7xl leading-tight tracking-tight text-black ls-title">
            Our Vision
          </h2>
          <p className="mt-6 text-base md:text-lg text-black/60 max-w-3xl">
            To lead inclusive skincare by setting a new standard for efficacy,
            education, and sustainability. We envision a world where every
            melanin-rich complexion feels seen, supported, and confidently cared
            for—with products that are gentle on skin and kind to the planet.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
