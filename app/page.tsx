import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import BestSellers from "./components/BestSellers";
import SkinConcerns from "./components/SkinConcerns";
import BrandVideo from "./components/BrandVideo";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="max-w-[1498px]  mx-auto md:px-6 px-4 pb-16">
      <Hero />
      <Benefits />
      <BestSellers />
      <SkinConcerns title="Shop by Skin Concerns" />
      <BrandVideo />
      <Testimonials />
    </main>
  );
}
