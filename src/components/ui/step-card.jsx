import { Badge } from "@/components/ui/badge";
import { cn } from "@/utils/cn";

export function StepCard({ step, title, titleAs: Title = "h3", className, children }) {
  return (
    <article className={cn("flex flex-col items-start gap-8 rounded-card bg-surface-muted p-4", className)}>
      <Badge>{step}</Badge>
      <div className="flex flex-col gap-4">
        <Title className="font-display text-title text-olive">{title}</Title>
        <p className="font-sans text-body text-ink">{children}</p>
      </div>
    </article>
  );
}
