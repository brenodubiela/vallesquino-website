import { siteConfig, solutions } from "@/data/site";

const lastModified = new Date("2026-10-27");

const routes = [
  { path: "/", priority: 1 },
  { path: "/sobre", priority: 0.8 },
  { path: "/solucoes", priority: 0.9 },
  ...solutions.map((solution) => ({ path: `/solucoes/${solution.slug}`, priority: 0.8 })),
  { path: "/contato", priority: 0.7 },
  { path: "/politica-de-privacidade", priority: 0.3 },
  { path: "/termos-de-uso", priority: 0.3 },
];

export default function sitemap() {
  return routes.map((route) => ({
    url: new URL(route.path, siteConfig.url).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
