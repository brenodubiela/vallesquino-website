import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

export function DropdownLink({ title, href, items, active = false, className }) {
  const triggerClasses = cn(
    "inline-flex items-center gap-2 rounded-card font-sans text-nav uppercase transition-colors duration-200 group-hover:text-primary group-has-focus-visible:text-primary focus-visible:shadow-focus-ring focus-visible:outline-none",
    active ? "font-bold text-primary" : "text-muted",
  );
  const chevron = (
    <ChevronDown
      aria-hidden="true"
      className="size-3 transition-transform duration-200 group-hover:rotate-180 group-has-focus-visible:rotate-180"
    />
  );

  return (
    <div className={cn("group relative", className)}>
      {href ? (
        <Link href={href} aria-haspopup="true" className={triggerClasses}>
          {title}
          {chevron}
        </Link>
      ) : (
        <button type="button" aria-haspopup="true" className={triggerClasses}>
          {title}
          {chevron}
        </button>
      )}
      <div className="invisible absolute top-full left-0 z-20 pt-3 opacity-0 [transition:opacity_200ms,visibility_0s_200ms] group-has-focus-visible:visible group-has-focus-visible:opacity-100 group-has-focus-visible:[transition:opacity_200ms,visibility_0s] group-hover:visible group-hover:opacity-100 group-hover:[transition:opacity_200ms,visibility_0s]">
        <ul className="flex min-w-64 flex-col gap-1 rounded-card border border-border bg-canvas p-2 shadow-header">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-card px-4 py-3 font-sans text-footer-link text-ink transition-colors duration-200 hover:bg-primary hover:text-olive focus-visible:bg-primary focus-visible:text-olive focus-visible:outline-none"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
