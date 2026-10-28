import Image from "next/image";
import { Container } from "@/components/ui/container";
import { FeatureCard } from "@/components/ui/feature-card";
import { Heading, Lead } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/utils/cn";

const columns = {
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 xl:grid-cols-4",
};

export function FeatureBand({ id, heading, headingClassName, lead, leadClassName, items, cols = 3, footnote, footnoteClassName }) {
  return (
    <section aria-labelledby={id} className="relative isolate overflow-hidden bg-olive py-16 lg:py-section">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32.25 left-[calc(50%-1487px)] -z-10 h-246.75 w-451.25"
      >
        <Image src="/brand/symbol-gold-large.svg" alt="" fill sizes="1805px" />
      </div>

      <Container className="flex flex-col items-center gap-12.5">
        <div className="flex flex-col items-center gap-4 text-center">
          <Reveal>
            <Heading id={id} tone="dark" align="center" className={headingClassName}>
              {heading}
            </Heading>
          </Reveal>
          {lead && (
            <Reveal delay={0.1}>
              <Lead tone="dark" align="center" className={leadClassName}>
                {lead}
              </Lead>
            </Reveal>
          )}
        </div>
        <div className={cn("grid w-full gap-5", columns[cols])}>
          {items.map((item, index) => (
            <Reveal key={item.title} delay={0.1 * index} className="h-full">
              <FeatureCard surface="muted" title={item.title} className="h-full">
                {item.text}
              </FeatureCard>
            </Reveal>
          ))}
        </div>
        {footnote && (
          <Reveal>
            <Lead tone="dark" align="center" className={footnoteClassName}>
              {footnote}
            </Lead>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
