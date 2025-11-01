"use client";

import { useParams } from "next/navigation";
import ShopHero from "./ShopHero";

export default function CollectionHero() {
  const params = useParams<{ id?: string }>();
  const slug = typeof params?.id === "string" ? params.id : "";
  const title = `Collections/${slug}`;
  return <ShopHero title={title} />;
}
