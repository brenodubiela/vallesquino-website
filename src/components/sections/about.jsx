import Image from "next/image";
import { Container } from "@/components/ui/container";
import { FeatureCard } from "@/components/ui/feature-card";
import { Accent, Heading, Lead } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";

const differentials = [
  {
    title: "Investigação Criteriosa",
    text: "Reconstrução minuciosa de linhas do tempo, histórico clínico-ocupacional e verificação criteriosa dos documentos do processo.",
  },
  {
    title: "Confronto de Hipóteses",
    text: "Análise detalhada das variáveis para avaliar o nexo causal, concausalidade, NTEP e capacidade laborativa com fundamentação técnica.",
  },
  {
    title: "Visão Sistêmica",
    text: "Integração entre evidências clínicas, ergonômicas, operacionais e aspectos regulatórios para uma leitura completa da situação.",
  },
  {
    title: "Independência e Ética",
    text: "Imparcialidade técnica orientada pela verdade dos fatos, oferecendo segurança jurídica e decisões sustentáveis de longo prazo.",
  },
];

export function About() {
  return (
    <section aria-labelledby="sobre-titulo" className="bg-canvas py-16 lg:py-section">
      <Container className="grid gap-10 xl:grid-cols-[589fr_641fr] xl:gap-gutter">
        <Reveal className="relative aspect-4/5 overflow-hidden rounded-media sm:aspect-video xl:aspect-auto">
          <Image
            src="/images/sobre-investigacao.jpg"
            alt="Dois profissionais analisando documentos, fotos e gráficos de um caso em uma mesa de escritório"
            fill
            sizes="(min-width: 1280px) 589px, 100vw"
            className="object-cover"
          />
        </Reveal>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Reveal>
              <Heading id="sobre-titulo">
                Além do laudo convencional, <Accent>investigação integrada para problemas reais</Accent>
              </Heading>
            </Reveal>
            <Reveal delay={0.1} className="flex max-w-157 flex-col gap-5.5">
              <Lead>
                No ambiente de trabalho, uma mesma situação pode revelar diferentes perspectivas: a versão da empresa, a
                percepção do trabalhador e as evidências registradas em documentos, prontuários e postos de trabalho.
              </Lead>
              <Lead>
                A Vallesquino Health atua na interseção entre a Medicina, o Direito e a Operação Corporativa. Nossa
                metodologia não se limita a análises genéricas ou modelos pré-formatados. Investigamos a fundo para
                diferenciar fatos de versões, reconstruir cronologias e oferecer fundamentação técnica inquestionável.
              </Lead>
            </Reveal>
          </div>

          <div className="grid gap-x-5.75 gap-y-5.25 sm:grid-cols-2">
            {differentials.map((item, index) => (
              <Reveal key={item.title} delay={0.1 * index} className="h-full">
                <FeatureCard title={item.title} className="h-full">
                  {item.text}
                </FeatureCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
