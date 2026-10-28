import { siteConfig } from "@/data/site";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/design-system",
    },
    sitemap: new URL("/sitemap.xml", siteConfig.url).toString(),
  };
}
