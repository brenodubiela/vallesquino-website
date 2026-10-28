import { Container } from "@/components/ui/container";
import { Accent, Heading } from "@/components/ui/heading";
import { PrincipleStep } from "@/components/ui/principle-step";
import { Reveal } from "@/components/ui/reveal";

const principles = [
  { title: "Anamneses Detalhadas e Linhas do Tempo", text: "Autonomia e isenção analítica em cada avaliação e parecer." },
  { title: "Rigor", text: "Investigação detalhada de fatos, documentos e evidências sem atalhos." },
  { title: "Ética", text: "Compromisso inegociável com a verdade científica e a imparcialidade" },
  {
    title: "Evidência",
    text: "Conclusões embasadas estritamente em critérios técnicos e literatura médica aplicável.",
  },
  {
    title: "Visão Sistêmica",
    text: "Compreensão ampla da integração entre medicina, ergonomia, legislação e operação.",
  },
  {
    title: "Responsabilidade",
    text: "Consciência do impacto de cada parecer para as partes envolvidas e para a Justiça.",
  },
  { title: "Excelência", text: "Redação clara, fundamentação sólida e padrão elevado de entrega." },
];

const firstRow = principles.slice(0, 4);
const secondRow = principles.slice(4);

export function Principles() {
  return (
    <section aria-labelledby="principios-titulo" className="bg-canvas py-16 lg:py-section">
      <Container>
        <div className="flex flex-col items-center gap-8 overflow-hidden rounded-media bg-olive px-4 py-12.5 sm:px-8">
          <Reveal>
            <Heading id="principios-titulo" tone="dark" align="center" className="max-w-197.5">
              Os <Accent>7 princípios</Accent> que sustentam a Vallesquino Health
            </Heading>
          </Reveal>

          <div className="relative flex w-full flex-col gap-8 lg:max-w-304">
            <div aria-hidden="true" className="absolute top-[67.8px] left-[5.35%] hidden h-0.5 w-[89.31%] bg-linear-to-r from-primary to-bronze-deep lg:block" />
            <div aria-hidden="true" className="absolute top-[67.8px] left-[94.66%] hidden h-[343px] w-0.5 bg-linear-to-t from-primary to-bronze-deep lg:block" />
            <div aria-hidden="true" className="absolute top-[410.8px] left-[5.35%] hidden h-0.5 w-[89.31%] bg-linear-to-r from-bronze-deep to-primary lg:block" />

            <ol className="grid gap-8 sm:grid-cols-2 lg:flex lg:justify-center">
              {firstRow.map((principle, index) => (
                <Reveal key={principle.title} as="li" delay={0.1 * index} className="lg:w-67.75">
                  <PrincipleStep number={index + 1} title={principle.title} className="lg:h-77.75">
                    {principle.text}
                  </PrincipleStep>
                </Reveal>
              ))}
            </ol>
            <ol start={5} className="grid gap-8 sm:grid-cols-2 lg:flex lg:flex-row-reverse lg:justify-between">
              {secondRow.map((principle, index) => (
                <Reveal key={principle.title} as="li" delay={0.1 * index} className="lg:w-67.75">
                  <PrincipleStep number={index + 5} title={principle.title} className="lg:h-77.75">
                    {principle.text}
                  </PrincipleStep>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
