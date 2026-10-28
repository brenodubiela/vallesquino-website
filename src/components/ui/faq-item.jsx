import { cn } from "@/utils/cn";

export function FaqItem({ question, className, children }) {
  return (
    <article className={cn("flex flex-col gap-4 rounded-panel bg-surface p-6 ring-1 ring-hairline ring-inset sm:p-8", className)}>
      <h3 className="font-display text-title leading-8 font-bold text-ink-strong">{question}</h3>
      <p className="font-sans text-faq text-ink-strong">{children}</p>
    </article>
  );
}
