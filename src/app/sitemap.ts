import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const now = new Date();
  return [
    { url: `${site}/sr`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site}/en`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];
}
