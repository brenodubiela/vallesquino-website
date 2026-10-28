import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        "display",
        "title",
        "lead",
        "body",
        "body-sm",
        "button",
        "nav",
        "eyebrow",
        "footer",
        "footer-link",
        "caption",
        "index",
        "index-lg",
        "field",
        "tag",
        "faq",
      ],
      leading: ["heading"],
      radius: ["tag", "card", "media", "form", "panel", "pill"],
      shadow: ["header", "focus-ring"],
      spacing: ["section", "section-footer", "gutter"],
      container: ["site"],
      blur: ["header"],
    },
  },
});

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
