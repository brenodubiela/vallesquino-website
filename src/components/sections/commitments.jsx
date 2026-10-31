import Image from "next/image";
import { Container } from "@/components/ui/container";
import { FeatureCard } from "@/components/ui/feature-card";
import { Accent, Heading } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";

const commitments = [
  {
    title: "Independência Técnica:",
    text: "Avaliações isentas de viés, pautadas exclusivamente pela verdade científica e factual.",
  },
  {
    title: "Rigor e Excelência:",
    text: "Investigação minuciosa e laudos elaborados com alto padrão técnico e clareza de redação.",
  },
  {
    title: "Visão Sistêmica:",
    text: "Compreensão integrada entre o indivíduo, a medicina, a legislação e a dinâmica organizacional.",
  },
  {
    title: "Ética e Responsabilidade:",
    text: "Decisões fundamentadas para gerar segurança jurídica e resultados justos de longo prazo.",
  },
];

export function Commitments() {
  return (
    <section aria-labelledby="compromissos-titulo" className="bg-canvas py-16 lg:py-section">
      <Container className="grid gap-10 xl:grid-cols-[641fr_589fr] xl:gap-gutter">
        <div className="flex flex-col gap-10">
          <Reveal>
            <Heading id="compromissos-titulo">
              Os <Accent>compromissos</Accent> que orientam nossa atuação
            </Heading>
          </Reveal>
          <div className="grid gap-x-5.75 gap-y-5.25 sm:grid-cols-2">
            {commitments.map((item, index) => (
              <Reveal key={item.title} delay={0.1 * index} className="h-full">
                <FeatureCard surface="muted" title={item.title} className="h-full">
                  {item.text}
                </FeatureCard>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="relative aspect-4/5 overflow-hidden rounded-media sm:aspect-video xl:aspect-auto">
          <Image
            src="/images/compromissos-evento.jpg"
            alt="Médica e um colega lado a lado em um estande de congresso"
            fill
            sizes="(min-width: 1280px) 589px, 100vw"
            className="object-cover object-[50%_15%] xl:object-center"
          />
        </Reveal>
      </Container>
    </section>
  );
}
