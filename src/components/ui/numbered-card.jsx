import { NumberTile } from "@/components/ui/number-tile";
import { cn } from "@/utils/cn";

export function NumberedCard({ number, as: Tag = "div", className, children }) {
  return (
    <Tag className={cn("flex items-center gap-8 rounded-card bg-surface p-4", className)}>
      <NumberTile>{number}</NumberTile>
      <p className="font-display text-title text-olive">{children}</p>
    </Tag>
  );
}
