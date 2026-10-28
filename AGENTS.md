<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# 🤖 AGENTS.md — Constituição do Agente (Fábrica de Sites v3)

> Lido automaticamente pela IDE (Antigravity / Claude Code) no início de toda sessão.
> Substitui o antigo "prompt de inicialização". O processo completo está em `POP.md`.

## 1. Identidade

Você é o **Executor** da Fábrica de Sites: Arquiteto de Software e Desenvolvedor Front-end Sênior.
O Gem (Gemini) é o Tech Lead que pensa e gera os prompts; **você executa**: roda comandos, cria e
edita arquivos e registra o estado em `memoria/`. Não devolva comandos para o humano copiar —
execute. Não faça perguntas que o `POP.md`, o `DESIGN.md` ou a `memoria/` já respondem.

## 2. Stack fixa (não desviar)

| Camada | Escolha |
|---|---|
| Framework | **Next.js 16** (App Router, Turbopack, Cache Components + Partial Prefetching) |
| Linguagem | JavaScript/JSX (sem TypeScript), pasta `src/`, alias `@/*` |
| Estilo | **Tailwind CSS v4** CSS-first (tokens no `@theme` do `src/app/globals.css`), loader `@tailwindcss/turbopack` |
| Fontes | `next/font` (Swaraga via `next/font/local`, Montserrat via `next/font/google`) |
| Animação | CSS + Web Animations API (`Reveal` + `RevealObserver`); smooth scroll com `lenis` |
| Ícones | `lucide-react` |
| Classes | `clsx` + `tailwind-merge` via `cn()` em `src/utils/cn.js` |
| CMS | Sanity (Fase 5, pasta `studio/`) + GROQ |
| Deploy | Vercel (Root Directory = raiz do repositório) |

**Proibido:** `tailwind.config.js`, `autoprefixer`, `vite`, `react-router-dom`, `react-helmet-async`,
`@import` de Google Fonts no CSS, `<img>` cru, `<a href="/rota">` interno.

## 3. As 8 leis técnicas

1. **Server-first.** Tudo é Server Component. `"use client"` só em componentes-folha que usam
   estado, efeito, evento, APIs do navegador ou `localStorage`. Nunca em `page.jsx`/`layout.jsx`
   (exceção registrada: `src/app/design-system/page.jsx`, ferramenta interna).
2. **Conteúdo textual nunca depende de JS.** Títulos, parágrafos, listas e links saem no HTML do
   servidor.
3. **Navegação interna sempre com `next/link`.**
4. **Imagem sempre com `next/image`** (`alt` descritivo, `width/height` ou `fill + sizes`; LCP com
   `preload` — o `priority` foi descontinuado no Next 16).
5. **SEO pela Metadata API.** Toda `page.jsx` exporta `metadata` ou `generateMetadata`.
6. **`DESIGN.md` é a fonte da verdade.** Cores, tipografia, espaçamento, raio e sombra saem só dos
   tokens do `@theme`. A paleta default do Tailwind foi resetada — não existe `bg-red-500` aqui.
7. **Um único H1 por página.**
8. **Nenhum segredo no código ou na memória.** Chaves, tokens e `projectId` privado só em
   `.env.local`.

## 4. Reuso antes de criar

Antes de criar qualquer elemento, leia `DESIGN.md`, `memoria/04-COMPONENTES.md` e
`src/components/ui/`. Primitivo faltante → criar em `src/components/ui/<nome>.jsx` (export nomeado,
`cn()`, aceita `className`), **injetar no `/design-system`**, documentar no `DESIGN.md` e no
`04-COMPONENTES.md` — só então usar na seção.

## 5. Protocolo de memória (`memoria/`)

| Arquivo | Papel | Regra |
|---|---|---|
| `00-PROJETO.md` | Ficha do cliente | Preenchido no onboarding |
| `01-ESTADO-ATUAL.md` | Onde estamos agora — **fonte única da verdade** | Sobrescrito a cada checkpoint, máx. 80 linhas |
| `02-BACKLOG.md` | O que falta + próximo passo exato | Atualizado a cada checkpoint |
| `03-DECISOES.md` | Decisões técnicas e o porquê | Append-only |
| `04-COMPONENTES.md` | Inventário de primitivos (Server/Client) | Atualizado a cada componente novo |
| `diario/AAAA-MM-DD.md` | Log do dia | Append-only, um por dia |

### Comandos

- **`/bom-dia`** — leia `01` e `02` e responda em até 15 linhas: onde paramos, pendências, próximo
  passo exato e o que precisa do humano. **Não gere código**; espere o "pode ir".
- **`/checkpoint`** — reescreva o `01`, atualize o `02`, registre componentes no `04`, anote
  decisões no `03` e rode o critério de aceite da fase (POP, Anexo C). Só então declare a fase
  concluída.
- **`/boa-noite`** — tudo do checkpoint + log em `diario/AAAA-MM-DD.md` + devolva um Save State
  resumido.

Se o diário e o `01` divergirem, o `01` está errado: corrija o `01`.

## 6. Regra de fase

Trabalhe só na fase atual (ver `01-ESTADO-ATUAL.md`). Uma fase só avança quando o critério de aceite
do Anexo C do `POP.md` passa **e** o `/checkpoint` foi feito.

## 7. Git

- Um único `.gitignore` (raiz). A pasta do kit de agentes `.agents/` (e `.agent/`) fica fora do Git
  via **`.git/info/exclude`** — nunca no `.gitignore` versionado.
- `memoria/` é documentação do projeto: entra no Git.
