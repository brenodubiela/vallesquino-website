import { CheckCheck } from "lucide-react";
import { cn } from "@/utils/cn";

export function CheckList({ items, className }) {
  return (
    <ul className={cn("flex flex-col gap-4", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-1.5">
          <CheckCheck aria-hidden="true" className="size-4 shrink-0 text-primary" />
          <span className="font-sans text-body text-ink">{item}</span>
        </li>
      ))}
    </ul>
  );
}
