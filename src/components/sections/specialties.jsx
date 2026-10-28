import Image from "next/image";
import { Container } from "@/components/ui/container";
import { FeatureCard } from "@/components/ui/feature-card";
import { Heading } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/utils/cn";

export function Specialties({ id = "areas-titulo", heading, items, image, imageAlt, symbolClassName }) {
  return (
    <section aria-labelledby={id} className="relative isolate overflow-hidden bg-olive py-16 lg:py-section">
      <div aria-hidden="true" className={cn("pointer-events-none absolute -z-10", symbolClassName)}>
        <Image src="/brand/symbol-gold-xl.svg" alt="" fill sizes="1979px" />
      </div>

      <Container className="grid gap-10 lg:grid-cols-[532fr_698fr] lg:gap-gutter">
        <Reveal className="relative aspect-4/5 overflow-hidden rounded-media sm:aspect-video lg:aspect-auto">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1280px) 532px, (min-width: 1024px) 42vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <div className="flex flex-col gap-10">
          <Reveal>
            <Heading id={id} tone="dark">
              {heading}
            </Heading>
          </Reveal>
          <div className="grid gap-x-5.75 gap-y-10 sm:grid-cols-2">
            {items.map((item, index) => (
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
