import { Experience } from "@/components/sections/experience";
import { FeatureBand } from "@/components/sections/feature-band";
import { Hero } from "@/components/sections/hero";
import { Principles } from "@/components/sections/principles";
import { SobreMetodologia } from "@/components/sections/sobre-metodologia";
import { SobrePratica } from "@/components/sections/sobre-pratica";
import { JsonLd } from "@/components/seo/json-ld";
import { Accent } from "@/components/ui/heading";
import { heroArt } from "@/data/heroes";
import { siteConfig } from "@/data/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sobre a Vallesquino Health",
  description:
    "A Vallesquino Health nasce da convicção de que questões médico-ocupacionais complexas exigem método, ética e inteligência técnica. Conheça a trajetória da Dra. Valéria Vallesquino.",
  path: "/sobre",
});

const trajectory = [
  {
    title: "Anamneses Detalhadas e Linhas do Tempo",
    text: "Construção criteriosa do histórico clínico-ocupacional para compreender a real relação entre trabalho, saúde e fatores externos.",
  },
  {
    title: "Gestão de Casos Complexos",
    text: "Análise individualizada para situações de absenteísmo, presenteísmo, benefícios previdenciários, restrições e reabilitação profissional.",
  },
  {
    title: "Interface Corporativa e Jurídica",
    text: "Liderança de equipes, desenvolvimento de protocolos e atuação em casos de alta complexidade (avaliação de nexo causal, NTEP, estudos de acidentes e processos trabalhistas).",
  },
];

export default function SobrePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Sobre", path: "/sobre" }])} />
      <Hero
        art={heroArt.sobre}
        title={
          <>
            A <Accent>Vallesquino Health</Accent> nasce da convicção de que questões médico-ocupacionais complexas exigem
            método, ética e inteligência técnica
          </>
        }
        actions={[
          { label: "Agendar Consultoria Gratuita", href: siteConfig.contactHref },
          { label: "Conheça Nossas Soluções", href: "/solucoes", variant: "soft" },
        ]}
      />
      <SobrePratica />
      <FeatureBand
        id="trajetoria-titulo"
        headingClassName="max-w-249"
        heading={
          <>
            São <Accent>18 anos de atuação</Accent> na interface entre Medicina, Operação e Direito
          </>
        }
        lead="Ao longo de quase duas décadas de atuação em Saúde Ocupacional, a Dra. Valéria Vallesquino desenvolveu uma análise criteriosa para enfrentar cenários desafiadores:"
        leadClassName="max-w-228 text-on-dark"
        items={trajectory}
        footnote={
          <>
            Essa bagagem prática motivou a especialização contínua em{" "}
            <strong className="font-bold">
              Ergonomia, Perícias Médicas e Áreas da Saúde e Medicina do Estilo de Vida,
            </strong>{" "}
            ampliando a capacidade de entregar análises profundas e resolutivas.
          </>
        }
        footnoteClassName="max-w-246 text-on-dark"
      />
      <SobreMetodologia />
      <Principles />
      <Experience />
    </>
  );
}
