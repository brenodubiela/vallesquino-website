import { Suspense } from "react";
import { notFound } from "next/navigation";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Specialties } from "@/components/sections/specialties";
import { Steps } from "@/components/sections/steps";
import { JsonLd } from "@/components/seo/json-ld";
import { Segments } from "@/components/ui/heading";
import { heroArt } from "@/data/heroes";
import { siteConfig } from "@/data/site";
import { solutionPages } from "@/data/solucoes";
import { absoluteUrl, breadcrumbJsonLd, organizationId, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return Object.keys(solutionPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = solutionPages[slug];
  if (!page) return {};

  return pageMetadata({ title: page.metaTitle, description: page.metaDescription, path: `/solucoes/${slug}` });
}

export default function SolucaoPage({ params }) {
  return (
    <Suspense fallback={<section aria-hidden="true" className="min-h-205 bg-olive" />}>
      <SolucaoContent params={params} />
    </Suspense>
  );
}

async function SolucaoContent({ params }) {
  const { slug } = await params;
  const page = solutionPages[slug];
  if (!page) notFound();

  const { hero, steps, areas } = page;
  const path = `/solucoes/${slug}`;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.metaTitle,
    description: page.metaDescription,
    url: absoluteUrl(path),
    provider: { "@id": organizationId },
    areaServed: { "@type": "Country", name: "Brasil" },
    inLanguage: "pt-BR",
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Soluções", path: "/solucoes" },
          { name: page.metaTitle, path },
        ])}
      />
      <Hero
        art={heroArt[slug]}
        title={<Segments segments={hero.title} />}
        titleClassName={hero.titleClassName}
        lead={hero.lead}
        actions={[
          { label: "Agendar Consultoria Gratuita", href: siteConfig.contactHref },
          { label: "Conheça a empresa", href: "/sobre", variant: "soft" },
        ]}
      />
      <Steps
        heading={<Segments segments={steps.heading} />}
        headingClassName={steps.headingClassName}
        items={steps.items}
      />
      <Specialties
        heading={<Segments segments={areas.heading} />}
        items={areas.items}
        image={areas.image}
        imageAlt={areas.imageAlt}
        symbolClassName={areas.symbol}
      />
      <Experience reverse />
    </>
  );
}
