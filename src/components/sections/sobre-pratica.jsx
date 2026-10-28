import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Accent, Heading, Lead } from "@/components/ui/heading";
import { NumberedCard } from "@/components/ui/numbered-card";
import { Reveal } from "@/components/ui/reveal";

const versions = ["A versão da empresa", "A percepção do trabalhador"];

export function SobrePratica() {
  return (
    <section aria-labelledby="pratica-titulo" className="bg-canvas py-16 lg:py-section">
      <Container className="grid gap-10 xl:grid-cols-[532fr_698fr] xl:gap-gutter">
        <Reveal className="relative aspect-4/5 overflow-hidden rounded-media sm:aspect-video xl:aspect-auto">
          <Image
            src="/images/sobre-pratica.jpg"
            alt="Dra. Valéria Vallesquino conversando com trabalhadores de uniforme em um ambiente fabril"
            fill
            sizes="(min-width: 1280px) 532px, 100vw"
            className="object-cover"
          />
        </Reveal>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Reveal>
              <Heading id="pratica-titulo">
                <Accent>Como a prática transformou</Accent> a visão sobre a Medicina do Trabalho
              </Heading>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col gap-5.5">
              <Lead>
                A Medicina do Trabalho não estava nos planos iniciais da Dra. Valéria quando se formou médica. Ela{" "}
                <strong className="font-bold">surgiu anos depois</strong>, a partir do convite de um colega para integrar
                sua equipe em Americana/SP.
              </Lead>
              <Lead>
                Foi dentro das empresas, especialmente no ambiente fabril, que ela descobriu uma área da Medicina capaz
                de mudar sua trajetória. Ali, passou a{" "}
                <strong className="font-bold">
                  enxergar o trabalho como o lugar onde as pessoas passam grande parte da vida
                </strong>
                , constroem histórias, relações, identidade e futuro e onde precisam de saúde para continuar produtivas e
                relevantes.
              </Lead>
              <Lead>No ambiente de trabalho, contudo, uma mesma situação pode revelar diferentes versões:</Lead>
            </Reveal>
          </div>

          <ol className="grid gap-x-5.75 gap-y-10 sm:grid-cols-2">
            {versions.map((version, index) => (
              <Reveal key={version} as="li" delay={0.1 * index}>
                <NumberedCard number={`0${index + 1}`} className="h-full">
                  {version}
                </NumberedCard>
              </Reveal>
            ))}
            <Reveal as="li" delay={0.2} className="sm:col-span-2">
              <NumberedCard number="03">
                As evidências registradas em prontuários, documentos e no posto de trabalho
              </NumberedCard>
            </Reveal>
          </ol>

          <Reveal>
            <Lead>
              Foi justamente a complexidade desse universo que inspirou a criação de uma forma própria de trabalhar,
              investigando antes de concluir, diferenciando fatos de versões e construindo hipóteses técnicas
              fundamentadas.
            </Lead>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
