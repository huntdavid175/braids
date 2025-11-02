import SkinConcernsClient, { SkinConcernItem } from "./SkinConcernsClient";
import { gqlRequest } from "../lib/wpClient";

type SkinConcernsProps = { title?: string };

type CategoriesQuery = {
  productCategories?: {
    nodes?: Array<{
      name?: string | null;
      image?: { sourceUrl?: string | null } | null;
    }> | null;
  } | null;
};

const QUERY = `
  query NewQuery {
    productCategories {
      nodes {
        image { sourceUrl }
        name
      }
    }
  }
`;

export default async function SkinConcerns({ title }: SkinConcernsProps) {
  let items: SkinConcernItem[] = [];
  try {
    const data = await gqlRequest<CategoriesQuery>(QUERY);
    const nodes = data?.productCategories?.nodes || [];
    items = nodes
      .filter((n) => (n?.name || "").trim())
      .map((n) => ({
        title: n?.name || "",
        imageUrl: n?.image?.sourceUrl || "",
      }))
      .filter((i) => i.title && i.imageUrl);
  } catch (_) {}

  return <SkinConcernsClient title={title} items={items} />;
}
