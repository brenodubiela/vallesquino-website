import Link from "next/link";
import { cn } from "@/utils/cn";

const variants = {
  primary: "bg-primary text-olive hover:bg-primary-hover",
  soft: "bg-primary/30 text-primary hover:bg-primary/40",
  outline: "border border-primary text-primary hover:bg-primary hover:text-olive",
  ghost: "text-primary hover:bg-primary/10",
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-card px-6 py-3 text-center font-sans text-button uppercase transition-colors duration-200 focus-visible:shadow-focus-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";

export function Button({ href, variant = "primary", className, children, ...props }) {
  const classes = cn(base, variants[variant], className);

  if (!href) {
    return (
      <button type="button" className={classes} {...props}>
        {children}
      </button>
    );
  }

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    );
  }

  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
}
