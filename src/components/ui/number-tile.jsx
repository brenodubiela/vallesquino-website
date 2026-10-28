import { cn } from "@/utils/cn";

const sizes = {
  md: "rounded-card bg-olive p-3 text-index",
  lg: "size-24.5 rounded-card bg-bronze p-3 text-index-lg",
};

export function NumberTile({ size = "md", className, children }) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-flex shrink-0 items-center justify-center font-sans text-primary", sizes[size], className)}
    >
      {children}
    </span>
  );
}
