import { FeatureBand } from "@/components/sections/feature-band";
import { Accent } from "@/components/ui/heading";

const audiences = [
  {
    title: "Para Magistrados e Poder Judiciário:",
    text: "Auxílio técnico imparcial com laudos claros, concisos e fundamentados, elaborados para sanar dúvidas complexas sobre capacidade laboral, nexo causal e ergonomia.",
  },
  {
    title: "Para Departamentos Jurídicos e Advogados:",
    text: "Fundamentação técnica sólida para sustentação de teses defensivas ou acusatórias, formulando quesitos estratégicos e pareceres alinhados às evidências reais.",
  },
  {
    title: "Para Empresas e Gestores de RH / SST:",
    text: "Inteligência preventiva e decisória para gestão de afastamentos, mitigação de riscos ocupacionais e adequação às exigências normativas com visão sistêmica.",
  },
];

export function Audiences() {
  return (
    <FeatureBand
      id="publicos-titulo"
      headingClassName="max-w-195"
      heading={
        <>
          Respostas técnicas <Accent>ajustadas à sua necessidade</Accent>
        </>
      }
      items={audiences}
    />
  );
}
