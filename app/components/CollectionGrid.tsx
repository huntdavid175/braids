"use client";

import { useMemo, useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

type Product = {
  title: string;
  price: string;
  imageUrl: string;
  rating: number;
  tags: string[];
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

export default function CollectionGrid() {
  const params = useParams<{ id?: string }>();
  const current = typeof params?.id === "string" ? params.id : undefined;

  const [visible, setVisible] = useState(8);

  const items = useMemo(() => {
    if (!current || current === "all") return PRODUCTS;
    return PRODUCTS.filter((p) => p.tags.includes(current));
  }, [current]);

  useEffect(() => {
    setVisible(8);
  }, [current]);

  return (
    <motion.section
      className="mt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { delayChildren: 0.1, staggerChildren: 0.15 },
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
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProductCard
                title={p.title}
                price={p.price}
                imageUrl={p.imageUrl}
                rating={p.rating}
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
            onClick={() => setVisible((v) => Math.min(v + 8, items.length))}
            className="inline-flex items-center justify-center rounded-full bg-[#6EA53A] text-white px-8 py-4 text-base font-medium transition-colors hover:bg-black"
          >
            Load More
          </motion.button>
        </div>
      )}
    </motion.section>
  );
}
