import { getProjectSlugs } from "@/sanity/fetch";
import { MetadataRoute } from "next";

const BASE_URL = "https://edwardcahyadi.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getProjectSlugs();

  const projectRoutes = slugs.map((s) => ({
    url: `${BASE_URL}/projects/${s.slug.current}`,
    lastModified: new Date(),
  }));

  return [
    { url: BASE_URL, lastModified: new Date() },
    { url: `${BASE_URL}/info`, lastModified: new Date() },
    ...projectRoutes,
  ];
}
