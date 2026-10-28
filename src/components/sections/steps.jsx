import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";
import { StepCard } from "@/components/ui/step-card";
import { cn } from "@/utils/cn";

export function Steps({ id = "etapas-titulo", heading, headingClassName, items }) {
  return (
    <section aria-labelledby={id} className="bg-canvas py-16 lg:py-section">
      <Container className="flex flex-col items-center gap-12.5">
        <Reveal>
          <Heading id={id} align="center" className={headingClassName}>
            {heading}
          </Heading>
        </Reveal>
        <ol className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-6">
          {items.map((item, index) => (
            <Reveal
              key={item.title}
              as="li"
              delay={0.1 * (index < 3 ? index : index - 3)}
              className={cn(index < 3 ? "lg:col-span-2" : "lg:col-span-3", index === 4 && "md:col-span-2")}
            >
              <StepCard step={`Passo - ${String(index + 1).padStart(2, "0")}`} title={item.title}>
                {item.text}
              </StepCard>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
