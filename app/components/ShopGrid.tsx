"use client";

import { useMemo, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

type Product = {
  title: string;
  price: string;
  imageUrl: string;
  rating: number;
  tags: string[]; // categories
};

const HERO_IMAGE_URL =
  "https://framerusercontent.com/images/Mvmwy2meoLookZmy5qqLLsuZ9A.png?width=840&height=1200";

const PRODUCTS: Product[] = [
  {
    title: "Face oil",
    price: "$15.50",
    imageUrl: HERO_IMAGE_URL,
    rating: 5,
    tags: ["acne"],
  },
  {
    title: "Green Tea + Aloe Face Cleanser",
    price: "$35.00",
    imageUrl: HERO_IMAGE_URL,
    rating: 4,
    tags: ["acne", "blemishes"],
  },
  {
    title: "Snail Mucin Radiance Cream",
    price: "$19.99",
    imageUrl: HERO_IMAGE_URL,
    rating: 5,
    tags: ["eczema", "psoriasis"],
  },
  {
    title: "10% Niacinamide + NAG Serum",
    price: "$37.50",
    imageUrl: HERO_IMAGE_URL,
    rating: 5,
    tags: ["hyperpigmentation", "blemishes"],
  },
  {
    title: "Hydrating Toner",
    price: "$22.00",
    imageUrl: HERO_IMAGE_URL,
    rating: 4,
    tags: ["blemishes"],
  },
  {
    title: "Vitamin C Day Serum",
    price: "$29.00",
    imageUrl: HERO_IMAGE_URL,
    rating: 5,
    tags: ["hyperpigmentation"],
  },
  {
    title: "Ceramide Barrier Cream",
    price: "$26.00",
    imageUrl: HERO_IMAGE_URL,
    rating: 5,
    tags: ["eczema", "psoriasis"],
  },
  {
    title: "Soothing Cleanser",
    price: "$18.50",
    imageUrl: HERO_IMAGE_URL,
    rating: 4,
    tags: ["acne"],
  },
];

const FILTERS = [
  { key: "all", label: "All" },
  { key: "acne", label: "Acne" },
  { key: "blemishes", label: "Blemishes" },
  { key: "eczema", label: "Eczema/psoriasis" },
  { key: "hyperpigmentation", label: "Hyperpigmentation" },
] as const;

export default function ShopGrid() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["key"]>("all");
  const [visible, setVisible] = useState(4);

  const items = useMemo(() => {
    if (filter === "all") return PRODUCTS;
    return PRODUCTS.filter((p) => p.tags.includes(filter));
  }, [filter]);

  useEffect(() => {
    // Reset visible count when the filter changes so the button appears consistently
    setVisible(4);
  }, [filter]);

  return (
    <motion.section
      className="mt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {/* Filter pills */}
      <motion.div
        className="flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {FILTERS.map((f) => {
          const active = f.key === filter;
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={
                active
                  ? "px-8 h-12 rounded-full bg-[#6EA53A] text-white"
                  : "px-8 h-12 rounded-full bg-white border border-black/10 text-black"
              }
            >
              {f.label}
            </button>
          );
        })}
      </motion.div>

      {/* Grid */}
      <motion.div
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.12 },
          },
        }}
      >
        {items.slice(0, visible).map((p) => {
          const slug = p.title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-");
          return (
            <motion.div
              key={`${p.title}-${p.price}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <ProductCard
                title={p.title}
                price={p.price}
                imageUrl={p.imageUrl}
                rating={p.rating}
                hoverCart={true}
                href={`/shop/${slug}`}
              />
            </motion.div>
          );
        })}
      </motion.div>

      {visible < items.length && (
        <div className="mt-10 flex justify-center">
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => setVisible((v) => Math.min(v + 4, items.length))}
            className="inline-flex items-center justify-center rounded-full bg-[#6EA53A] text-white px-8 py-4 text-base font-medium transition-colors hover:bg-black"
          >
            Load More
          </motion.button>
        </div>
      )}
    </motion.section>
  );
}
