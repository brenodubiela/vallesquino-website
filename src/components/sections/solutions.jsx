import { Container } from "@/components/ui/container";
import { Accent, Heading, Lead } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";
import { ServiceCard } from "@/components/ui/service-card";
import { solutions } from "@/data/site";
import { cn } from "@/utils/cn";

export function SolutionsGrid() {
  return (
    <div className="grid gap-x-4 gap-y-6 md:grid-cols-2">
      {solutions.map((solution, index) => {
        const isLast = index === solutions.length - 1;
        return (
          <Reveal key={solution.slug} delay={0.1 * (index % 2)} className={cn("h-full", isLast && "md:col-span-2")}>
            <ServiceCard
              className="h-full"
              image={solution.image}
              imageAlt={solution.imageAlt}
              imageClassName={solution.imagePosition}
              imageSizes={
                isLast
                  ? "(min-width: 1280px) 1248px, 100vw"
                  : "(min-width: 1280px) 616px, (min-width: 768px) 50vw, 100vw"
              }
              title={solution.title}
              description={solution.description}
              items={solution.items}
              cta={{ label: "Quero saber mais", href: `/solucoes/${solution.slug}` }}
            />
          </Reveal>
        );
      })}
    </div>
  );
}

export function Solutions({
  heading = (
    <>
      <Accent>Soluções fundamentadas</Accent> para situações de alta complexidade
    </>
  ),
  headingClassName = "max-w-256.5",
  lead = "Atuação especializada estruturada para atender magistrados, departamentos jurídicos, gestores de RH e SST com precisão técnica.",
}) {
  return (
    <section id="solucoes" aria-labelledby="solucoes-titulo" className="scroll-mt-24 bg-canvas py-16 lg:py-section">
      <Container className="flex flex-col gap-12.5">
        <div className="mx-auto flex flex-col items-center gap-4 text-center">
          <Reveal>
            <Heading id="solucoes-titulo" align="center" className={headingClassName}>
              {heading}
            </Heading>
          </Reveal>
          {lead && (
            <Reveal delay={0.1}>
              <Lead align="center" className="max-w-157">
                {lead}
              </Lead>
            </Reveal>
          )}
        </div>
        <SolutionsGrid />
      </Container>
    </section>
  );
}
