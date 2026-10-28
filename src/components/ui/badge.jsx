import { cn } from "@/utils/cn";

export function Badge({ className, children }) {
  return (
    <span className={cn("inline-flex rounded-card bg-primary/30 p-3 font-sans text-index whitespace-nowrap text-primary", className)}>
      {children}
    </span>
  );
}
