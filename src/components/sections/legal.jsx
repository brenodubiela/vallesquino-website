import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { INTRO_DELAY, Reveal } from "@/components/ui/reveal";
import { cn } from "@/utils/cn";

export function LegalHeader({ eyebrow, title, updatedAt }) {
  return (
    <Reveal as="header" delay={INTRO_DELAY} className="flex flex-col gap-4 border-b border-border pb-10">
      <Eyebrow>{eyebrow}</Eyebrow>
      <Heading as="h1" className="text-olive">
        {title}
      </Heading>
      <p className="font-sans text-body-sm text-muted">Última atualização: {updatedAt}</p>
    </Reveal>
  );
}

export function LegalSection({ id, title, className, children }) {
  return (
    <Reveal as="section" aria-labelledby={id} className={cn("flex scroll-mt-32 flex-col gap-4", className)}>
      <h2 id={id} className="font-display text-title leading-heading text-olive">
        {title}
      </h2>
      <div className="flex flex-col gap-4 font-sans text-faq text-ink [&_a]:font-medium [&_a]:text-olive [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-primary [&_strong]:font-semibold [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5">
        {children}
      </div>
    </Reveal>
  );
}
