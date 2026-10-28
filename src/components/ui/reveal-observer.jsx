"use client";

import { useEffect } from "react";

const KEYFRAMES = [
  { opacity: 0, translate: "0 24px" },
  { opacity: 1, translate: "0 0" },
];

// Anima pela Web Animations API em vez de marcar atributos: o observer pode rodar antes de o React
// hidratar a página, e um atributo extra no DOM geraria divergência de hidratação.
function reveal(element) {
  const delay = Number.parseFloat(getComputedStyle(element).getPropertyValue("--reveal-delay")) || 0;
  element.animate(KEYFRAMES, {
    duration: 600,
    delay: delay * 1000,
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    fill: "forwards",
  });
}

export function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handled = new WeakSet();
    const intersection = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          intersection.unobserve(entry.target);
          reveal(entry.target);
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );

    const observeWithin = (root) => {
      const elements = root.matches?.("[data-reveal]") ? [root] : [];
      root.querySelectorAll?.("[data-reveal]").forEach((element) => elements.push(element));
      for (const element of elements) {
        if (handled.has(element)) continue;
        handled.add(element);
        intersection.observe(element);
      }
    };

    observeWithin(document.body);

    const mutation = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) observeWithin(node);
        });
      }
    });
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      intersection.disconnect();
      mutation.disconnect();
    };
  }, []);

  return null;
}
