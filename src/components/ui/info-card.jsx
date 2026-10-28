import { IconTile } from "@/components/ui/icon-tile";
import { cn } from "@/utils/cn";

export function InfoCard({ icon, className, children }) {
  return (
    <div className={cn("flex items-start gap-8 rounded-card bg-surface p-4", className)}>
      <IconTile icon={icon} />
      <p className="font-sans text-body text-ink">{children}</p>
    </div>
  );
}
