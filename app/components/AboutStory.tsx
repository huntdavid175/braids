"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HERO_IMAGE_URL =
  "https://framerusercontent.com/images/Mvmwy2meoLookZmy5qqLLsuZ9A.png?width=840&height=1200";

export default function AboutStory({
  text,
  imageUrl,
}: {
  text?: string;
  imageUrl?: string;
}) {
  return (
    <motion.section
      className="mt-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-heading text-5xl md:text-7xl text-black ls-title mb-6">
        Our Story
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
        <motion.div
          className="relative w-full h-full min-h-[420px] md:min-h-[520px] rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={imageUrl || HERO_IMAGE_URL}
            alt="Founder portrait"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </motion.div>
        <motion.div
          className="text-black/60 text-base md:text-lg leading-relaxed md:leading-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {text ? (
            <div dangerouslySetInnerHTML={{ __html: text }} />
          ) : (
            <>
              <p>
                Founded in the heart of Ghana, Braid & Beyond was created from a
                deep love for beauty, culture, and self-expression. What began
                as a passion for creative hairstyling has grown into a trusted
                salon where every braid is crafted with skill, care, and pride.{" "}
              </p>{" "}
              <p>
                {" "}
                At Braid & Beyond, we believe braiding is more than a hairstyle
                — it’s a reflection of identity, heritage, and confidence. Our
                team of expert stylists blends traditional African techniques
                with modern trends to create looks that are stylish, protective,
                and uniquely you.{" "}
              </p>{" "}
              <p>
                {" "}
                From knotless braids and box braids to twists and cornrows, we
                focus on precision, comfort, and beauty that lasts. Every
                appointment is a moment of self-care — a chance to relax, renew,
                and celebrate your natural crown.{" "}
              </p>{" "}
              <p>
                {" "}
                We’re more than a salon; we’re a space where beauty meets
                culture, and every client leaves feeling bold, confident, and
                beyond beautiful.{" "}
              </p>
            </>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
