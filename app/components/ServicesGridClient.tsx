"use client";

import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

export type ServiceItem = {
  title: string;
  price: string; // formatted
  imageUrl: string;
  rating: number;
  slug?: string;
};

// Sub-services for each main service
const SUB_SERVICES: Record<string, ServiceItem[]> = {
  braids: [
    {
      title: "Box Braids",
      price: "₵150",
      imageUrl: "/assets/images/client_1.jpg",
      rating: 5,
      slug: "box-braids",
    },
    {
      title: "Cornrows",
      price: "₵120",
      imageUrl: "/assets/images/client_2.jpg",
      rating: 5,
      slug: "cornrows",
    },
    {
      title: "Goddess Braids",
      price: "₵180",
      imageUrl: "/assets/images/client_3.jpg",
      rating: 5,
      slug: "goddess-braids",
    },
    {
      title: "Knotless Braids",
      price: "₵200",
      imageUrl: "/assets/images/client_4.jpg",
      rating: 5,
      slug: "knotless-braids",
    },
    {
      title: "Fulani Braids",
      price: "₵160",
      imageUrl: "/assets/images/client_1.jpg",
      rating: 5,
      slug: "fulani-braids",
    },
    {
      title: "Micro Braids",
      price: "₵250",
      imageUrl: "/assets/images/client_2.jpg",
      rating: 5,
      slug: "micro-braids",
    },
  ],
  "men-braids": [
    {
      title: "Men's Box Braids",
      price: "₵140",
      imageUrl: "/assets/images/client_1.jpg",
      rating: 5,
      slug: "mens-box-braids",
    },
    {
      title: "Men's Cornrows",
      price: "₵110",
      imageUrl: "/assets/images/client_2.jpg",
      rating: 5,
      slug: "mens-cornrows",
    },
    {
      title: "Men's Fade Braids",
      price: "₵130",
      imageUrl: "/assets/images/client_3.jpg",
      rating: 5,
      slug: "mens-fade-braids",
    },
    {
      title: "Men's Twists",
      price: "₵120",
      imageUrl: "/assets/images/client_4.jpg",
      rating: 5,
      slug: "mens-twists",
    },
  ],
  pedicure: [
    {
      title: "Classic Pedicure",
      price: "₵45",
      imageUrl: "/assets/images/client_1.jpg",
      rating: 5,
      slug: "classic-pedicure",
    },
    {
      title: "Spa Pedicure",
      price: "₵65",
      imageUrl: "/assets/images/client_2.jpg",
      rating: 5,
      slug: "spa-pedicure",
    },
    {
      title: "Gel Pedicure",
      price: "₵55",
      imageUrl: "/assets/images/client_3.jpg",
      rating: 5,
      slug: "gel-pedicure",
    },
    {
      title: "Deluxe Pedicure",
      price: "₵85",
      imageUrl: "/assets/images/client_4.jpg",
      rating: 5,
      slug: "deluxe-pedicure",
    },
  ],
  "nail-art": [
    {
      title: "Basic Nail Art",
      price: "₵25",
      imageUrl: "/assets/images/client_1.jpg",
      rating: 5,
      slug: "basic-nail-art",
    },
    {
      title: "Premium Nail Art",
      price: "₵45",
      imageUrl: "/assets/images/client_2.jpg",
      rating: 5,
      slug: "premium-nail-art",
    },
    {
      title: "3D Nail Art",
      price: "₵65",
      imageUrl: "/assets/images/client_3.jpg",
      rating: 5,
      slug: "3d-nail-art",
    },
    {
      title: "Custom Design",
      price: "₵85",
      imageUrl: "/assets/images/client_4.jpg",
      rating: 5,
      slug: "custom-design",
    },
  ],
};

export default function ServicesGridClient({
  serviceId,
}: {
  serviceId?: string;
}) {
  // Get sub-services for the given service ID, or show all if no ID provided
  const services =
    serviceId && SUB_SERVICES[serviceId]
      ? SUB_SERVICES[serviceId]
      : Object.values(SUB_SERVICES).flat();
  const container = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };
  const list = {
    hidden: {},
    visible: { transition: { delayChildren: 0.2, staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65 },
    },
  };

  return (
    <motion.section
      key={serviceId || "all"}
      className="mt-24"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={list}
      >
        {services.map((service) => {
          return (
            <motion.div
              key={`${service.title}-${service.price}`}
              variants={item}
            >
              <ProductCard
                title={service.title}
                price={service.price}
                imageUrl={service.imageUrl}
                rating={service.rating}
                hoverCart={false}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
