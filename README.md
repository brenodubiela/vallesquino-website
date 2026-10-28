# Vallesquino Health — Site institucional

## 🤖 REGRAS OBRIGATÓRIAS PARA IA (AI RULES)

1. **Leia o `DESIGN.md` antes de criar ou editar qualquer componente.** Ele é a fonte da verdade.
2. **Server-first:** componentes são Server Components por padrão. `"use client"` só em folhas
   interativas (estado, efeito, evento, APIs do navegador, `localStorage`). Nunca em `page.jsx`/`layout.jsx`
   (única exceção: `/design-system`, ferramenta interna). Texto nunca renderizado só no cliente.
3. **Navegação e mídia:** `next/link` para rotas internas, `next/image` para toda imagem,
   `next/font` para toda fonte.
4. **SEO:** toda página exporta `metadata` ou `generateMetadata`. Um H1 por página.
5. **Reuso:** mapeie `src/components/ui/` e o helper `cn()` antes de criar algo. Proibido recriar
   estilos "na unha". Primitivo faltante vai para `ui/`, é injetado no `/design-system` e
   documentado no `DESIGN.md` e em `memoria/04-COMPONENTES.md` antes de ser usado.
6. **Somente tokens do DS:** paleta (`primary`, `olive`, `forest`, `beige`, `canvas`, `surface`,
   `surface-muted`, `ink`, `muted`, `on-dark`), tipografia (`text-display`, `text-title`,
   `text-lead`, `text-body`…), raios (`rounded-card`, `rounded-media`, `rounded-pill`) e espaços
   nomeados (`py-section`, `gap-gutter`, `max-w-site`). A paleta default do Tailwind está
   desligada. Sistema plano: sem sombras em cards (só `shadow-header`). **Nunca remova o
   `focus-visible:shadow-focus-ring`.**
7. A pasta `.agents/` (kit de agentes) é mantida local via `.git/info/exclude` — **nunca** no
   `.gitignore`.

## Sobre o projeto

Site da **Vallesquino Health**, consultoria de inteligência médico-ocupacional (perícias médicas,
assistência técnica, análise técnica para tomada de decisão, riscos psicossociais NR-1 e atendimento
ocupacional individualizado). Design no Figma: arquivo *Vallesquino Health* (brandbook + Home).

## Tecnologias

- Next.js 16.4 (App Router, Turbopack, Cache Components) · React 19.3
- Tailwind CSS 4.3 (CSS-first, `@tailwindcss/turbopack`)
- lucide-react 1 · clsx + tailwind-merge · lenis 1.3 (smooth scroll)
- ESLint 9 (`eslint-config-next`)

## Estrutura

```
AGENTS.md  POP.md  DESIGN.md  memoria/
public/{brand,icons,images}
src/app/            layout.jsx · (site)/{page,sobre,solucoes,contato} · design-system/ · sitemap · robots · opengraph-image · icon.svg · globals.css · fonts/
src/components/     layout/ · sections/ · ui/
src/data/  src/lib/  src/utils/cn.js
studio/             (Sanity — Fase 5)
```

## Como executar

```bash
npm install
npm run dev      # http://localhost:3000  ·  biblioteca em /design-system
npm run build
npm run start
npm run lint
```

Variável opcional: `NEXT_PUBLIC_SITE_URL` (domínio final, usado no `metadataBase`).
