import { siteConfig } from "@/data/site";

export const absoluteUrl = (path = "/") => new URL(path, siteConfig.url).toString();

export const organizationId = absoluteUrl("/#organizacao");
export const websiteId = absoluteUrl("/#site");

const defaultTitle = `${siteConfig.name} | ${siteConfig.tagline}`;

const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — ${siteConfig.tagline}`,
};

// A página que define openGraph substitui o objeto herdado inteiro, então a imagem precisa ir junto.
export function pageMetadata({ title, description = siteConfig.description, path } = {}) {
  const socialTitle = title ?? defaultTitle;

  return {
    ...(title && { title }),
    description,
    ...(path && { alternates: { canonical: path } }),
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: siteConfig.name,
      ...(path && { url: path }),
      title: socialTitle,
      description,
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [shareImage],
    },
  };
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Início", path: "/" }, ...items].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
