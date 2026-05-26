import { MetadataRoute } from "next";
import { resumeData } from "../lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = resumeData.personal.links.portfolio;
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
