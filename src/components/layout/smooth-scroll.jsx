"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

// Rolagem suave só para roda do mouse/trackpad; toque continua nativo. Âncoras ficam com o Next (scroll-margin + CSS smooth).
export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true, stopInertiaOnNavigate: true });

    // Zera a inércia antes de o Next rolar até a âncora; senão o Lenis termina a animação antiga por cima.
    const handleClick = (event) => {
      if (event.target instanceof Element && event.target.closest('a[href*="#"]')) lenis.reset();
    };
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
      lenis.destroy();
    };
  }, []);

  return null;
}
