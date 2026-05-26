import { MetadataRoute } from "next";
import { resumeData } from "../lib/data";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = resumeData.personal.links.portfolio;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
