"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Testimonial = {
  quote: string;
  author: string;
  service: string;
  imageUrl: string;
  rating: number;
  location?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Absolutely love my box braids! The stylist was so professional and took her time. My hair feels healthy and the braids are so neat. I've gotten so many compliments!",
    author: "Aisha Mensah",
    service: "Box Braids",
    imageUrl: "/assets/images/client_1.jpg",
    rating: 5,
    location: "Accra",
  },
  {
    quote:
      "Best braiding experience I've had! The knotless braids are so comfortable and look amazing. The salon is clean and the staff is friendly. Highly recommend!",
    author: "Kemi Adjei",
    service: "Knotless Braids",
    imageUrl: "/assets/images/client_2.jpg",
    rating: 5,
    location: "Kumasi",
  },
  {
    quote:
      "I got goddess braids for my birthday and they turned out perfect! The attention to detail is incredible. My hair has never looked better. Will definitely be back!",
    author: "Sarah Osei",
    service: "Goddess Braids",
    imageUrl: "/assets/images/client_3.jpg",
    rating: 5,
    location: "Accra",
  },
  {
    quote:
      "The cornrows are so clean and well done. I love how they styled it with beads. The service was quick but thorough. My hair feels great and looks amazing!",
    author: "Nana Ama",
    service: "Cornrows",
    imageUrl: "/assets/images/client_4.jpg",
    rating: 5,
    location: "Tema",
  },
  {
    quote:
      "Got my micro braids done and I'm in love! They're so small and neat, exactly what I wanted. The stylist was patient and made sure I was comfortable throughout.",
    author: "Maame Yaa",
    service: "Micro Braids",
    imageUrl: "/assets/images/client_1.jpg",
    rating: 5,
    location: "Accra",
  },
  {
    quote:
      "Fulani braids done right! The styling is beautiful and the braids are so well done. I've been coming here for months and they never disappoint. Best salon in town!",
    author: "Ama Serwaa",
    service: "Fulani Braids",
    imageUrl: "/assets/images/client_2.jpg",
    rating: 5,
    location: "Kumasi",
  },
];

// Duplicate testimonials for seamless loop
const DUPLICATED_TESTIMONIALS = [...TESTIMONIALS, ...TESTIMONIALS];

export default function Testimonials() {
  const container = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.section
      className="mt-24"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="mb-6 md:mb-10">
        <h3 className="font-heading text-4xl md:text-5xl text-black ls-title">
          What Our Clients Say
        </h3>
      </div>

      <div className="relative overflow-x-hidden overflow-y-visible pb-4">
        <div className="flex gap-6 animate-scroll">
          {/* First set */}
          {DUPLICATED_TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={`first-${idx}`}
              className="shrink-0 w-[calc(100%-1.5rem)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm ring-1 ring-black/5 group h-full">
                {/* Image Section */}
                <div className="relative w-full h-[280px] md:h-[320px] overflow-hidden">
                  <Image
                    src={testimonial.imageUrl}
                    alt={`${testimonial.author} with ${testimonial.service}`}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                  {/* Service Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 rounded-full bg-[#80461B] text-white text-sm font-medium">
                      {testimonial.service}
                    </span>
                  </div>
                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill={i < testimonial.rating ? "#F0B429" : "#E2E8F0"}
                        aria-hidden
                      >
                        <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.786 1.402 8.168L12 18.896l-7.336 3.869 1.402-8.168L.132 9.211l8.2-1.193z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8">
                  <blockquote className="text-base md:text-lg text-black/80 leading-relaxed mb-6 line-clamp-4">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center justify-between pt-4 border-t border-black/5">
                    <div>
                      <p className="font-heading text-lg md:text-xl text-black font-medium">
                        {testimonial.author}
                      </p>
                      {testimonial.location && (
                        <p className="text-sm text-black/50 mt-1">
                          {testimonial.location}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {DUPLICATED_TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={`second-${idx}`}
              className="shrink-0 w-[calc(100%-1.5rem)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm ring-1 ring-black/5 group h-full">
                {/* Image Section */}
                <div className="relative w-full h-[280px] md:h-[320px] overflow-hidden">
                  <Image
                    src={testimonial.imageUrl}
                    alt={`${testimonial.author} with ${testimonial.service}`}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                  {/* Service Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 rounded-full bg-[#80461B] text-white text-sm font-medium">
                      {testimonial.service}
                    </span>
                  </div>
                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill={i < testimonial.rating ? "#F0B429" : "#E2E8F0"}
                        aria-hidden
                      >
                        <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.786 1.402 8.168L12 18.896l-7.336 3.869 1.402-8.168L.132 9.211l8.2-1.193z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8">
                  <blockquote className="text-base md:text-lg text-black/80 leading-relaxed mb-6 line-clamp-4">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center justify-between pt-4 border-t border-black/5">
                    <div>
                      <p className="font-heading text-lg md:text-xl text-black font-medium">
                        {testimonial.author}
                      </p>
                      {testimonial.location && (
                        <p className="text-sm text-black/50 mt-1">
                          {testimonial.location}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
