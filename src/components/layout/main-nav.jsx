"use client";

import { usePathname } from "next/navigation";
import { DropdownLink } from "@/components/ui/dropdown-link";
import { TextLink } from "@/components/ui/text-link";
import { cn } from "@/utils/cn";

export function MainNav({ items, className }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Navegação principal" className={cn("items-center gap-6.5", className)}>
      {items.map((item) =>
        item.items ? (
          <DropdownLink
            key={item.href}
            title={item.label}
            href={item.href}
            items={item.items}
            active={pathname.startsWith(item.href)}
          />
        ) : (
          <TextLink key={item.href} href={item.href} active={pathname === item.href}>
            {item.label}
          </TextLink>
        ),
      )}
    </nav>
  );
}
