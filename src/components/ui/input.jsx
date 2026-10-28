import { cn } from "@/utils/cn";

export const fieldControlClasses =
  "w-full rounded-card border border-field-border bg-surface px-3 py-2.5 font-sans text-field text-ink transition-colors placeholder:text-field-placeholder focus-visible:border-primary focus-visible:shadow-focus-ring focus-visible:outline-none aria-invalid:border-danger";

export function Input({ className, ...props }) {
  return <input className={cn(fieldControlClasses, "h-10", className)} {...props} />;
}

export function Textarea({ className, ...props }) {
  return <textarea className={cn(fieldControlClasses, "h-40.5 resize-y", className)} {...props} />;
}
