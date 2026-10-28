import Link from "next/link";
import { cn } from "@/utils/cn";

export function TextLink({ href, active = false, className, children }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "rounded-card font-sans text-nav uppercase transition-colors duration-200 hover:text-primary focus-visible:shadow-focus-ring focus-visible:outline-none",
        active ? "font-bold text-primary" : "text-muted",
        className,
      )}
    >
      {children}
    </Link>
  );
}
