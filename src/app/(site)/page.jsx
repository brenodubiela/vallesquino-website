import { About } from "@/components/sections/about";
import { Audiences } from "@/components/sections/audiences";
import { Commitments } from "@/components/sections/commitments";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Solutions } from "@/components/sections/solutions";
import { Accent } from "@/components/ui/heading";
import { heroArt } from "@/data/heroes";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ path: "/" });

export default function HomePage() {
  return (
    <>
      <Hero
        art={heroArt.home}
        title={
          <>
            <Accent>Decisões médico-ocupacionais</Accent> complexas exigem Inteligência Ocupacional
          </>
        }
        lead="Receba investigação médica independente, análise fundamentada e rigor metodológico para subsidiar decisões complexas em Saúde Ocupacional e Direito Médico."
        actions={[
          { label: "Agendar Consultoria Gratuita", href: siteConfig.contactHref },
          { label: "Conheça Nossas Soluções", href: "/#solucoes", variant: "soft" },
        ]}
      />
      <About />
      <Solutions />
      <Audiences />
      <Experience />
      <Commitments />
    </>
  );
}
