import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { JsonLd } from "@/components/seo/json-ld";
import { RevealObserver } from "@/components/ui/reveal-observer";
import { siteConfig } from "@/data/site";
import { absoluteUrl, organizationId, pageMetadata, websiteId } from "@/lib/seo";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-montserrat",
});

const swaraga = localFont({
  src: [
    { path: "./fonts/SwaragaDemo-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/SwaragaDemo-Bold.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-swaraga",
});

export const metadata = {
  ...pageMetadata(),
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.responsible.name }],
};

export const viewport = {
  themeColor: "#2d3114",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalOrganization",
      "@id": organizationId,
      name: siteConfig.name,
      alternateName: `${siteConfig.name} — ${siteConfig.tagline}`,
      url: absoluteUrl("/"),
      logo: absoluteUrl("/brand/logo-dark.svg"),
      description: siteConfig.description,
      areaServed: { "@type": "Country", name: "Brasil" },
      founder: {
        "@type": "Person",
        name: "Valéria Cristiane Galvão Vallesquino",
        honorificPrefix: "Dra.",
        jobTitle: "Médica do Trabalho",
      },
      knowsAbout: [
        "Perícia médica judicial e extrajudicial",
        "Assistência técnica pericial",
        "Nexo causal e concausalidade",
        "Gestão de riscos psicossociais (NR-1)",
        "Ergonomia",
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: absoluteUrl("/"),
      name: siteConfig.name,
      inLanguage: "pt-BR",
      publisher: { "@id": organizationId },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className={`${montserrat.variable} ${swaraga.variable}`}>
      <body>
        <JsonLd data={structuredData} />
        <noscript>
          <style>{"[data-reveal]{opacity:1!important;translate:none!important}.page-loader{display:none!important}"}</style>
        </noscript>
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
