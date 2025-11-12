import React from "react";
import type { Metadata } from "next";
import BrandVideo from "../components/BrandVideo";
import Testimonials from "../components/Testimonials";
import ShopHero from "../components/ShopHero";
import SkinConcerns from "../components/SkinConcerns";

export const metadata: Metadata = {
  title: "Services | Braind And Beyond",
};

const page = async () => {
  return (
    <main className="max-w-[1498px]  mx-auto md:px-6 px-4 pb-16">
      <ShopHero
        title="Our Services"
        description="Discover our range of professional braiding services designed to enhance your natural beauty."
        imageUrl="/assets/images/client_1.jpg"
      />
      <SkinConcerns title="Our Top Braiding Services" />
      <BrandVideo />
      <Testimonials />
    </main>
  );
};

export default page;
