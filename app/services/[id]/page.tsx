import RecentWorks from "@/app/components/RecentWorks";
import BrandVideo from "@/app/components/BrandVideo";
import ServicesGridClient from "@/app/components/ServicesGridClient";
import ShopHero from "@/app/components/ShopHero";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id?: string }>;
}): Promise<Metadata> {
  const awaited = await params;
  const slug = typeof awaited?.id === "string" ? awaited.id : "";
  const pretty = slug
    ? slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : "Services";
  return { title: `${pretty} | Braid And Beyond` };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ id?: string }>;
}) {
  const awaited = await params;
  const serviceId = typeof awaited?.id === "string" ? awaited.id : "";
  const serviceTitle = serviceId
    ? serviceId
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : "Services";

  return (
    <main className="max-w-[1498px]  mx-auto md:px-6 px-4 pb-16">
      <ShopHero
        title={serviceTitle}
        description="Choose from our selection of professional services and pricing options."
        imageUrl="/assets/images/client_1.jpg"
      />
      <ServicesGridClient serviceId={serviceId} />
      <BrandVideo />
      <RecentWorks />
    </main>
  );
}
