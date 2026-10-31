import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading, Lead } from "@/components/ui/heading";
import { INTRO_DELAY, Reveal } from "@/components/ui/reveal";
import { cn } from "@/utils/cn";

export function Hero({ art, title, titleClassName, lead, actions = [] }) {
  return (
    <section className="relative isolate flex min-h-205 items-center overflow-hidden bg-olive">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className={cn("absolute inset-0 xl:inset-auto", art.frame)}>
          <Image
            src={art.photo}
            alt={art.alt}
            fill
            preload
            fetchPriority="high"
            sizes={art.sizes}
            className={cn("object-cover object-[70%_center] xl:object-center", art.photoPosition)}
          />
          <div className="absolute inset-0 bg-linear-to-t from-olive via-olive/85 to-olive/40 xl:hidden" />
          <div className={cn("absolute inset-0 hidden xl:block", art.gradient)} />
        </div>
        <div aria-hidden="true" className={cn("absolute hidden h-162.25 w-297 xl:block", art.symbol)}>
          <Image src="/brand/symbol-gold.svg" alt="" fill sizes="1188px" />
        </div>
        <div aria-hidden="true" className={cn("absolute hidden xl:block", art.frame)}>
          <Image
            src={art.cutout}
            alt=""
            fill
            loading="eager"
            sizes={`${art.sizes.split(",")[0]}, 1px`}
            className="object-cover"
          />
        </div>
      </div>

      <Container className="w-full pt-36 pb-16 lg:pt-42.5 lg:pb-18">
        <div className="flex max-w-165 flex-col gap-8">
          <div className="flex flex-col gap-4 pt-3.75">
            <Reveal delay={INTRO_DELAY}>
              <Heading as="h1" tone="dark" className={titleClassName}>
                {title}
              </Heading>
            </Reveal>
            {lead && (
              <Reveal delay={INTRO_DELAY + 0.1}>
                <Lead tone="dark" className="max-w-157">
                  {lead}
                </Lead>
              </Reveal>
            )}
          </div>
          {actions.length > 0 && (
            <Reveal delay={INTRO_DELAY + 0.2} className="flex flex-wrap gap-4">
              {actions.map((action) => (
                <Button key={action.label} href={action.href} variant={action.variant}>
                  {action.label}
                </Button>
              ))}
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
