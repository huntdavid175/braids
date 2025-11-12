import type { Metadata } from "next";
import ShopHero from "../components/ShopHero";
import ContactForm from "../components/ContactForm";
import ContactMap from "../components/ContactMap";
import OpeningHours from "../components/OpeningHours";

export const metadata: Metadata = {
  title: "Contact Us | Braid And Beyond",
};

export default function ContactPage() {
  return (
    <main className="max-w-[1498px] mx-auto md:px-6 px-4 pb-16">
      <ShopHero
        title="Get In Touch"
        description="Visit us or reach out - we're here to help you look and feel your best."
        imageUrl="/assets/images/client_1.jpg"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-24 items-start">
        <div className="lg:sticky lg:top-24">
          <ContactForm />
        </div>
        <div className="space-y-8">
          <OpeningHours />
          <ContactMap />
        </div>
      </div>
    </main>
  );
}
