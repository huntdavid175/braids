"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

type InstagramPost = {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  permalink: string;
  service?: string;
};

// Mock Instagram posts - Replace with actual Instagram API data
// To integrate Instagram API, you'll need to:
// 1. Set up Instagram Basic Display API or Instagram Graph API
// 2. Create an API route to fetch posts
// 3. Replace this mock data with API call
const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "1",
    imageUrl: "/assets/images/client_1.jpg",
    caption: "Beautiful box braids transformation ✨ #braids #boxbraids #accra",
    likes: 245,
    permalink: "https://www.instagram.com/braid_and_beyond/",
    service: "Box Braids",
  },
  {
    id: "2",
    imageUrl: "/assets/images/client_2.jpg",
    caption: "Knotless braids looking flawless! 💕 #knotlessbraids #hairgoals",
    likes: 312,
    permalink: "https://instagram.com/p/example2",
    service: "Knotless Braids",
  },
  {
    id: "3",
    imageUrl: "/assets/images/client_3.jpg",
    caption:
      "Goddess braids for the goddess in you 👑 #goddessbraids #braidsalon",
    likes: 189,
    permalink: "https://instagram.com/p/example3",
    service: "Goddess Braids",
  },
  {
    id: "4",
    imageUrl: "/assets/images/client_4.jpg",
    caption: "Clean cornrows with beads! 🔥 #cornrows #braids #accra",
    likes: 278,
    permalink: "https://instagram.com/p/example4",
    service: "Cornrows",
  },
  {
    id: "5",
    imageUrl: "/assets/images/client_1.jpg",
    caption: "Micro braids perfection! So neat and beautiful ✨ #microbraids",
    likes: 421,
    permalink: "https://instagram.com/p/example5",
    service: "Micro Braids",
  },
  {
    id: "6",
    imageUrl: "/assets/images/client_2.jpg",
    caption: "Fulani braids with accessories! 😍 #fulanibraids #braidsalon",
    likes: 356,
    permalink: "https://instagram.com/p/example6",
    service: "Fulani Braids",
  },
  {
    id: "7",
    imageUrl: "/assets/images/client_3.jpg",
    caption: "Another stunning box braids look! 💫 #boxbraids #hair",
    likes: 298,
    permalink: "https://instagram.com/p/example7",
    service: "Box Braids",
  },
  {
    id: "8",
    imageUrl: "/assets/images/client_4.jpg",
    caption: "Knotless braids are so comfortable! Love this look 🥰",
    likes: 334,
    permalink: "https://instagram.com/p/example8",
    service: "Knotless Braids",
  },
];

// Duplicate posts for seamless infinite loop
const DUPLICATED_POSTS = [...INSTAGRAM_POSTS, ...INSTAGRAM_POSTS];

export default function RecentWorks() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Wait for layout to calculate accurate widths
    const calculateWidth = () => {
      const firstChild = scrollContainer.firstElementChild as HTMLElement;
      if (!firstChild) return 0;

      // Calculate width of one set (first half of all children)
      const children = Array.from(scrollContainer.children);
      const halfPoint = children.length / 2;
      let width = 0;

      for (let i = 0; i < halfPoint; i++) {
        const child = children[i] as HTMLElement;
        if (child) {
          width += child.offsetWidth + 24; // 24px for gap-6
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
        <h3 className="font-heading text-4xl md:text-5xl text-[#492201] ls-title">
          Our Recent Works
        </h3>
        <p className="mt-4 text-base text-[#492201]/60">
          Follow us on{" "}
          <a
            href="https://www.instagram.com/braid_and_beyond/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#80461B] hover:underline font-medium"
          >
            Instagram
          </a>{" "}
          for more inspiration
        </p>
      </div>

      <div className="relative overflow-x-hidden overflow-y-visible pb-4">
        <div
          ref={scrollRef}
          className="flex gap-6"
          style={{ willChange: "transform" }}
        >
          {/* First set */}
          {DUPLICATED_POSTS.map((post, idx) => (
            <Link
              key={`first-${post.id}-${idx}`}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 w-[calc(100%-1.5rem)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm ring-1 ring-black/5 h-full">
                {/* Image Section */}
                <div className="relative w-full h-[400px] md:h-[450px] overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.caption}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Service Badge */}
                  {post.service && (
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 rounded-full bg-[#80461B] text-white text-sm font-medium">
                        {post.service}
                      </span>
                    </div>
                  )}
                  {/* Instagram Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-10 w-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                      </svg>
                    </div>
                  </div>
                  {/* Likes overlay on hover */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 text-white">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                      <span className="font-medium">
                        {post.likes.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Caption Section */}
                <div className="p-6 md:p-8">
                  <p className="text-sm md:text-base text-black/70 leading-relaxed line-clamp-3">
                    {post.caption}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[#80461B] text-sm font-medium">
                    <span>View on Instagram</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          {/* Duplicate set for seamless loop */}
          {DUPLICATED_POSTS.map((post, idx) => (
            <Link
              key={`second-${post.id}-${idx}`}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 w-[calc(100%-1.5rem)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm ring-1 ring-black/5 h-full">
                {/* Image Section */}
                <div className="relative w-full h-[400px] md:h-[450px] overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.caption}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Service Badge */}
                  {post.service && (
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 rounded-full bg-[#80461B] text-white text-sm font-medium">
                        {post.service}
                      </span>
                    </div>
                  )}
                  {/* Instagram Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-10 w-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                      </svg>
                    </div>
                  </div>
                  {/* Likes overlay on hover */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 text-white">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                      <span className="font-medium">
                        {post.likes.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Caption Section */}
                <div className="p-6 md:p-8">
                  <p className="text-sm md:text-base text-black/70 leading-relaxed line-clamp-3">
                    {post.caption}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[#80461B] text-sm font-medium">
                    <span>View on Instagram</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
