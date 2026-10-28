"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";

export function MobileMenu({ items, ctaHref, ctaLabel, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const linkClasses = (active) =>
    cn(
      "block rounded-card px-3 py-3 font-sans text-nav uppercase transition-colors hover:text-primary focus-visible:shadow-focus-ring focus-visible:outline-none",
      active ? "font-bold text-primary" : "text-muted",
    );

  return (
    <div className={className}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex size-12 items-center justify-center rounded-card text-olive transition-colors hover:bg-primary/10 focus-visible:shadow-focus-ring focus-visible:outline-none"
      >
        {isOpen ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
      </button>

      <div
        id={panelId}
        hidden={!isOpen}
        data-lenis-prevent=""
        className="absolute inset-x-0 top-full mt-2 max-h-[calc(100svh-7rem)] overflow-y-auto rounded-card bg-surface p-4 shadow-header"
      >
        <nav aria-label="Navegação principal (mobile)">
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={linkClasses(pathname === item.href)}
                >
                  {item.label}
                </Link>
                {item.items && (
                  <ul className="mb-2 ml-3 flex flex-col border-l border-border pl-3">
                    {item.items.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={close}
                          className="block rounded-card px-3 py-2 font-sans text-footer-link text-ink transition-colors hover:text-primary focus-visible:shadow-focus-ring focus-visible:outline-none"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <Button href={ctaHref} onClick={close} className="mt-4 w-full">
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
