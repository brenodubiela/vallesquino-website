import { cn } from "@/utils/cn";

export function Eyebrow({ as: Tag = "p", className, children }) {
  return <Tag className={cn("font-sans text-eyebrow uppercase text-primary", className)}>{children}</Tag>;
}
