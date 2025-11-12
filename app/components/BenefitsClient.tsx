"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

export type BenefitItem = { src: string; alt?: string | null; label: string };

export default function BenefitsClient({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: BenefitItem[];
}) {
  const container = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, staggerChildren: 0.15 },
    },
  };
  const item = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };

  const images = [
    { src: "/assets/images/client_1.jpg", alt: "Client 1" },
    { src: "/assets/images/client_2.jpg", alt: "Client 2" },
    { src: "/assets/images/client_3.jpg", alt: "Client 3" },
    { src: "/assets/images/client_4.jpg", alt: "Client 4" },
  ];

  // Duplicate images for seamless infinite loop
  const duplicatedImages = [...images, ...images];

  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Wait for layout to calculate accurate widths
    const calculateWidth = () => {
      const children = Array.from(scrollContainer.children);
      const halfPoint = children.length / 2;
      let width = 0;

      for (let i = 0; i < halfPoint; i++) {
        const child = children[i] as HTMLElement;
        if (child) {
          // gap-4 on mobile (16px), gap-6 on desktop (24px)
          const gap = window.innerWidth >= 768 ? 24 : 16;
          width += child.offsetWidth + gap;
        }
      }

      return width;
    };

    // Use a timeout to ensure DOM is fully rendered
    const initTimeout = setTimeout(() => {
      const scrollSpeed = 0.25; // pixels per frame (adjust for speed - higher = faster)
      let singleSetWidth = calculateWidth();

      const animate = () => {
        if (scrollContainer) {
          positionRef.current += scrollSpeed;

          // When we've scrolled through one full set, reset to 0 seamlessly
          // This happens instantly so there's no visible jump
          if (positionRef.current >= singleSetWidth) {
            positionRef.current = positionRef.current - singleSetWidth;
          }

          scrollContainer.style.transform = `translateX(-${positionRef.current}px)`;
          scrollContainer.style.transition = "none"; // No transition for instant reset
          animationRef.current = requestAnimationFrame(animate);
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    }, 100);

    return () => {
      clearTimeout(initTimeout);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  return (
    <motion.section
      className="bg-white rounded-3xl mt-24 py-4 md:py-8 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Right: Copy */}
        <motion.div
          className="p-6 md:p-8 order-1 md:order-2 flex flex-col items-start"
          variants={item}
        >
          <div
            className="font-heading text-5xl md:text-7xl leading-tight tracking-tight text-[#492201] ls-title"
            role="heading"
            aria-level={2}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div
            className="mt-6 text-sm md:text-base text-[#492201]/60 "
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="mt-8 flex justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#80461B] text-white px-8 py-4 text-base font-medium transition-colors hover:bg-black"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Left: Horizontal gallery */}
        <motion.div className="relative order-2 md:order-1" variants={item}>
          <div className="relative -mx-4 md:mx-0">
            <div className="marquee-container h-[360px] md:h-[440px] px-4 md:px-0 overflow-hidden">
              <div
                ref={scrollRef}
                className="flex gap-4 md:gap-6 h-full"
                style={{ willChange: "transform" }}
              >
                {duplicatedImages.map((img, idx) => (
                  <div
                    key={`${img.src}-${idx}`}
                    className="relative shrink-0 w-[300px] md:w-[360px] h-full rounded-2xl overflow-hidden"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                    {/* <span className="absolute bottom-5 left-5 text-white text-3xl font-light font-heading drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                      {img.label}
                    </span> */}
                    {/* <div className="absolute bottom-4 right-4 h-8 w-8 rounded-full bg-[#80461B] text-white flex items-center justify-center">
                      {img.label === "Before" ? (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      ) : (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      )}
                    </div> */}
                  </div>
                ))}
              </div>
            </div>

            {/* Edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-white to-transparent" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
