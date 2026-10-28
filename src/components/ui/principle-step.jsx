import { NumberTile } from "@/components/ui/number-tile";
import { cn } from "@/utils/cn";

export function PrincipleStep({ number, title, as: Tag = "div", className, children }) {
  return (
    <Tag className={cn("relative flex flex-col items-center gap-10 p-4 text-center", className)}>
      <NumberTile size="lg">{number}</NumberTile>
      <div className="flex max-w-59.75 flex-col items-center gap-3">
        <h3 className="font-display text-title text-primary">{title}</h3>
        <p className="font-sans text-body text-on-dark">{children}</p>
      </div>
    </Tag>
  );
}
