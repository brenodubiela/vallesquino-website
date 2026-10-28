import { Experience } from "@/components/sections/experience";
import { FeatureBand } from "@/components/sections/feature-band";
import { Hero } from "@/components/sections/hero";
import { Solutions } from "@/components/sections/solutions";
import { JsonLd } from "@/components/seo/json-ld";
import { Accent } from "@/components/ui/heading";
import { heroArt } from "@/data/heroes";
import { siteConfig } from "@/data/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Soluções",
  description:
    "Perícias médicas, assistência técnica pericial, análise técnica para tomada de decisão, gestão de riscos psicossociais (NR-1) e atendimento médico ocupacional individualizado.",
  path: "/solucoes",
});

const deliveryStandard = [
  {
    title: "Acolhimento e Entendimento da Demanda",
    text: "Análise inicial do cenário e definição clara do escopo do trabalho.",
  },
  {
    title: "Levantamento e Análise Documental",
    text: "Exame minucioso de prontuários, laudos, exames, PPRA/PGR, PCMSO e documentos dos autos.",
  },
  {
    title: "Investigação Técnica e de Campo",
    text: "Exames periciais, inspeções de postos de trabalho e reconstrução das rotinas operacionais.",
  },
  {
    title: "Síntese e Emissão do Documento Técnico",
    text: "Elaboração de laudos, pareceres ou relatórios com linguagem clara, rigor metodológico e conclusão respaldada.",
  },
];

export default function SolucoesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Soluções", path: "/solucoes" }])} />
      <Hero
        art={heroArt.solucoes}
        title={
          <>
            Inteligência médico-ocupacional aplicada a <Accent>decisões estratégicas e judiciais</Accent>
          </>
        }
        titleClassName="lg:max-w-147.25"
        lead="Receba investigação médica independente, análise fundamentada e rigor metodológico para subsidiar decisões complexas em Saúde Ocupacional e Direito Médico."
        actions={[
          { label: "Agendar Consultoria Gratuita", href: siteConfig.contactHref },
          { label: "Conheça a empresa", href: "/sobre", variant: "soft" },
        ]}
      />
      <Solutions heading="Conheça nossas soluções especializadas" headingClassName="max-w-263.75" lead={null} />
      <FeatureBand
        id="padrao-titulo"
        headingClassName="max-w-195"
        heading={
          <>
            O padrão de entrega <Accent>Vallesquino Health</Accent>
          </>
        }
        items={deliveryStandard}
        cols={4}
      />
      <Experience />
    </>
  );
}
