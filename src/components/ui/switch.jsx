import { cn } from "@/utils/cn";

export function Switch({ id, checked, onChange, disabled = false, label, description, tone = "dark", className }) {
  return (
    <label
      htmlFor={id}
      className={cn("flex items-start justify-between gap-4", disabled ? "cursor-not-allowed" : "cursor-pointer", className)}
    >
      <span className="flex flex-col gap-1">
        <span className={cn("font-sans text-body-sm font-semibold", tone === "dark" ? "text-on-dark" : "text-ink")}>
          {label}
        </span>
        {description && (
          <span className={cn("font-sans text-caption", tone === "dark" ? "text-on-dark/72" : "text-muted")}>
            {description}
          </span>
        )}
      </span>
      <span className="relative inline-flex shrink-0">
        <input
          id={id}
          type="checkbox"
          role="switch"
          checked={checked}
          disabled={disabled}
          onChange={(event) => onChange?.(event.target.checked)}
          className="peer sr-only"
        />
        <span
          aria-hidden="true"
          className={cn(
            "h-6 w-11 rounded-pill transition-colors duration-200 peer-checked:bg-primary peer-focus-visible:shadow-focus-ring peer-disabled:opacity-60",
            tone === "dark" ? "bg-on-dark/20" : "bg-field-border",
          )}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1 left-1 size-4 rounded-pill bg-surface transition-transform duration-200 peer-checked:translate-x-5"
        />
      </span>
    </label>
  );
}
