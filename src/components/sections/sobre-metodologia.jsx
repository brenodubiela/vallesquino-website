import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Accent, Heading, Lead } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";

export function SobreMetodologia() {
  return (
    <section aria-labelledby="metodologia-titulo" className="bg-canvas py-16 lg:py-section">
      <Container className="grid gap-10 lg:grid-cols-[589fr_641fr] lg:gap-gutter">
        <Reveal className="relative aspect-4/5 overflow-hidden rounded-media sm:aspect-video lg:aspect-auto">
          <Image
            src="/images/sobre-metodologia.jpg"
            alt="Dra. Valéria Vallesquino e profissionais revisando documentos e fotografias de um caso sobre uma mesa"
            fill
            sizes="(min-width: 1280px) 589px, (min-width: 1024px) 46vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <div className="flex max-w-160.25 flex-col gap-4">
          <Reveal>
            <Heading id="metodologia-titulo">
              Transformando experiência acumulada <Accent>em metodologia</Accent>
            </Heading>
          </Reveal>
          <Reveal delay={0.1} className="flex max-w-157 flex-col gap-5.5">
            <Lead>
              A Vallesquino Health ajuda{" "}
              <strong className="font-bold">empresas, escritórios de advocacia e o Poder Judiciário</strong> a
              compreender situações complexas, organizar informações e tomar decisões mais inteligentes.
            </Lead>
            <Lead>
              Entendemos que uma solução aparentemente favorável, mas tecnicamente inadequada ou injusta, representa
              apenas uma <strong className="font-bold">vitória de curto prazo</strong> que pode gerar passivos e
              consequências maiores no futuro. Por isso, acreditamos em soluções tecnicamente fundamentadas, éticas e
              gerenciáveis.
            </Lead>
            <Lead>
              Nossa visão de futuro é consolidar essa forma de pensar em metodologia, formar profissionais e garantir que
              a inteligência médico-ocupacional continue gerando valor para a sociedade e para as organizações.
            </Lead>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
