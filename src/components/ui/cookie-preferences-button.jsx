"use client";

import { openCookiePreferences } from "@/lib/consent";
import { cn } from "@/utils/cn";

export function CookiePreferencesButton({ className, children = "Preferências de cookies" }) {
  return (
    <button
      type="button"
      onClick={openCookiePreferences}
      className={cn(
        "rounded-card font-sans text-caption text-on-dark/55 transition-colors hover:text-primary focus-visible:shadow-focus-ring focus-visible:outline-none",
        className,
      )}
    >
      {children}
    </button>
  );
}
