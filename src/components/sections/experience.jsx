import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Accent, Heading, Lead } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/utils/cn";

export function Experience({ reverse = false }) {
  return (
    <section aria-labelledby="experiencia-titulo" className="bg-canvas py-16 lg:py-section">
      <Container
        className={cn(
          "grid gap-10 lg:gap-gutter",
          reverse ? "lg:grid-cols-[641fr_589fr]" : "lg:grid-cols-[589fr_641fr]",
        )}
      >
        <Reveal
          className={cn(
            "relative aspect-4/5 overflow-hidden rounded-media sm:aspect-video lg:aspect-auto",
            reverse && "lg:order-last",
          )}
        >
          <Image
            src="/images/dra-valeria.jpg"
            alt="Dra. Valéria Vallesquino analisando um relatório ao lado de um notebook, diante de um ambiente fabril"
            fill
            sizes="(min-width: 1280px) 589px, (min-width: 1024px) 46vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <div className="flex max-w-160.25 flex-col gap-4">
          <Reveal>
            <Heading id="experiencia-titulo">
              <Accent>Experiência prática</Accent> construída diante de desafios reais
            </Heading>
          </Reveal>
          <Reveal as="figure" delay={0.1} className="flex flex-col gap-4">
            <blockquote>
              <Lead className="max-w-157 italic">
                “A Vallesquino Health nasce para transformar minha experiência de mais de 18 anos em uma atuação prática e
                diferenciada: investigar antes de concluir, diferenciar fatos de versões e construir soluções técnicas
                consistentes para problemas complexos.”
              </Lead>
            </blockquote>
            <figcaption className="flex flex-col gap-2 text-olive">
              <span className="font-display text-title leading-heading font-bold">
                Dra. Valéria Cristiane Galvão Vallesquino
              </span>
              <span className="font-sans text-body-sm">
                Médica do Trabalho | Perícias Médicas | Ergonomia | Medicina do Estilo de Vida
              </span>
            </figcaption>
          </Reveal>
          <Reveal delay={0.2}>
            <Lead className="max-w-157">
              Com vivência sólida no ambiente fabril e na liderança de equipes médicas corporativas, sua trajetória é
              marcada pela busca constante de soluções éticas, tecnicamente fundamentadas e capazes de conciliar
              consistência diagnóstica e responsabilidade social.
            </Lead>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
