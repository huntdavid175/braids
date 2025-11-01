import Testimonials from "@/app/components/Testimonials";
import BrandVideo from "@/app/components/BrandVideo";
import CollectionGrid from "@/app/components/CollectionGrid";
import CollectionHero from "@/app/components/CollectionHero";

export default function CollectionPage() {
  return (
    <main className="max-w-[1498px]  mx-auto md:px-6 px-4 pb-16">
      <CollectionHero />
      <CollectionGrid />
      <BrandVideo />
      <Testimonials />
    </main>
  );
}
