import type { Metadata } from "next";
import ShopGrid from "../components/ShopGrid";
import BrandVideo from "../components/BrandVideo";
import RecentWorks from "../components/RecentWorks";
import ShopHero from "../components/ShopHero";
export const metadata: Metadata = {
  title: "Shop | Braid And Beyond",
};

const HERO_IMAGE_URL =
  "https://framerusercontent.com/images/Mvmwy2meoLookZmy5qqLLsuZ9A.png?width=840&height=1200";

export default function ShopPage() {
  return (
    <main className="max-w-[1498px]  mx-auto md:px-6 px-4 pb-16">
      <ShopHero
        title="Shop Braid And Beyond"
        description="Browse our services of skincare essentials crafted for every skin type and concern."
      />
      <ShopGrid />
      <BrandVideo />
      <RecentWorks />
    </main>
  );
}
