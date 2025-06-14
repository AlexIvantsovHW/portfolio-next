import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "http://localhost:3000";
  return {
    //rules: { userAgent: "*", allow: ["/"], disallow: [] },
    rules: { userAgent: "*", allow: ["/"], disallow: [] },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
