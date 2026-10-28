import { CheckCheck } from "lucide-react";
import { cn } from "@/utils/cn";

export function IconTile({ icon: Icon = CheckCheck, className }) {
  return (
    <span className={cn("inline-flex size-10 shrink-0 items-center justify-center rounded-card bg-olive", className)}>
      <Icon aria-hidden="true" className="size-4 text-primary" />
    </span>
  );
}
