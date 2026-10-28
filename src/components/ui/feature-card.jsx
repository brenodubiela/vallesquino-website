import { IconTile } from "@/components/ui/icon-tile";
import { cn } from "@/utils/cn";

const surfaces = {
  white: "bg-surface",
  muted: "bg-surface-muted",
};

export function FeatureCard({ icon, title, titleAs: Title = "h3", surface = "white", className, children }) {
  return (
    <article className={cn("flex flex-col gap-8 rounded-card p-4", surfaces[surface], className)}>
      <IconTile icon={icon} />
      <div className="flex flex-col gap-1.5">
        <Title className="font-display text-title text-olive">{title}</Title>
        <p className="font-sans text-body text-ink">{children}</p>
      </div>
    </article>
  );
}
