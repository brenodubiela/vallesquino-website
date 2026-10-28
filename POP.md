# 🤖 POP — Fábrica de Sites v3 (Next.js 16, app na raiz)

> Versão atualizada do "Manual do Agente e POP: Fábrica de Sites — v2 (Next.js)".
> **O que mudou da v2 para a v3:**
>
> | v2 (PDF) | v3 (este documento) | Por quê |
> |---|---|---|
> | Next.js 15 | **Next.js 16.4** (Turbopack padrão em dev e build) | Versão estável mais recente |
> | App dentro de `frontend/` | **App na raiz do repositório** | Decisão da agência: um único `package.json`, sem subpasta |
> | `@tailwindcss/postcss` + `postcss.config.mjs` | **`@tailwindcss/turbopack`** declarado em `next.config.mjs` | Padrão atual do `create-next-app` 16.4 (mesmo Tailwind v4 CSS-first) |
> | ISR com `export const revalidate = 60` | **Cache Components**: `"use cache"` + `cacheLife()` | `cacheComponents: true` é o padrão do template 16.4 |
> | `next lint` | `eslint` direto (flat config `eslint.config.mjs`) | `next lint` foi removido no Next 16 |
> | Vercel Root Directory = `frontend` | **Root Directory = raiz (`./`)** | Consequência do app na raiz |
>
> Todo o resto (Server-first, Metadata API, `next/image`, `next/font`, `DESIGN.md` como fonte da
> verdade, memória viva em `memoria/`) continua igual.

---

## 📏 Cartilha Next.js (as leis do projeto)

1. **Server-first.** `"use client"` só em componentes-folha com estado/efeito/evento/APIs do navegador/
   `localStorage`. Nunca no topo de `page.jsx`/`layout.jsx`.
2. **Conteúdo textual nunca depende de JS.** Se está dentro de `useEffect`, o Google não vê.
3. **Navegação interna com `next/link`.**
4. **Imagem com `next/image`** (`alt`, `width/height` ou `fill + sizes`; Hero com `preload` — `priority` foi descontinuado no Next 16).
5. **SEO pela Metadata API** (`metadata` / `generateMetadata`). Zero Helmet, zero `document.title`.
6. **`DESIGN.md` é a fonte da verdade.** Só tokens do `@theme`. A paleta default do Tailwind está
   resetada no projeto (`--color-*: initial`).
7. **Um H1 por página.**
8. **Segredos só em `.env.local`.**

---

## 🌳 Arquitetura de pastas (v3 — raiz)

```
/ (Raiz)
├── .gitignore            # ÚNICO no projeto
├── AGENTS.md             # constituição do agente (+ bloco que o `next dev` mantém)
├── POP.md                # este documento
├── DESIGN.md             # exclusivo do cliente — fonte da verdade
├── README.md             # começa com 🤖 REGRAS OBRIGATÓRIAS PARA IA
├── memoria/              # 00..04 + diario/
├── public/
│   ├── brand/            # logos, símbolo, pattern (SVG)
│   ├── icons/            # ícones de marca (redes sociais)
│   └── images/           # fotos (servidas via next/image)
├── src/
│   ├── app/
│   │   ├── layout.jsx    # <html>, fontes (next/font), metadata base
│   │   ├── page.jsx      # Home
│   │   ├── not-found.jsx # 404
│   │   ├── globals.css   # @import "tailwindcss" + @theme (tokens do DS)
│   │   ├── fonts/        # fontes locais (next/font/local)
│   │   └── design-system/ # biblioteca interna (noindex)
│   ├── components/
│   │   ├── layout/       # Header, Footer, MobileMenu
│   │   ├── sections/     # blocos completos de conteúdo
│   │   └── ui/           # primitivos
│   ├── data/             # textos legais, arrays de conteúdo
│   ├── lib/              # configs de terceiros (Sanity)
│   └── utils/cn.js
├── studio/               # Sanity CMS (Fase 5) — vazio até lá
├── next.config.mjs  eslint.config.mjs  jsconfig.json  package.json
```

---

## FASE 1 — Fundação & Setup ✅ (Vallesquino: concluída em 27/10/2026)

**Comando de criação (referência):**
```bash
npx create-next-app@latest <nome-em-minusculas> --js --app --src-dir --tailwind --eslint --import-alias "@/*" --use-npm --turbopack --disable-git --yes
```
O nome do pacote npm não aceita maiúsculas: crie em uma pasta temporária com nome minúsculo e mova
o conteúdo para a raiz do repositório (sem `node_modules`/`.next`; rode `npm install` na raiz).

**Dependências de runtime:** `lucide-react`, `clsx`, `tailwind-merge`, `lenis` (smooth scroll).

**Tokenização (`src/app/globals.css`):**
1. `@import "tailwindcss";`
2. `@theme` com `--color-*: initial`, `--text-*: initial`, `--shadow-*: initial` (reset dos
   defaults) e os tokens do `DESIGN.md`: `--color-<nome>`, `--text-<token>` (+ `--line-height`,
   `--letter-spacing`, `--font-weight`), `--radius-<nome>`, `--spacing-<nome>`, `--shadow-<nome>`
   (incluindo `--shadow-focus-ring`).
3. `@theme inline` com as famílias apontando para as variáveis do `next/font`
   (`--font-sans: var(--font-montserrat), …`).
4. `@layer base`: `body { @apply bg-canvas font-sans text-ink antialiased }` + `scroll-behavior`.

**Fontes:** `next/font/google` / `next/font/local` com `display: "swap"` e `variable`, classes no
`<html>`. Proibido `@import` de Google Fonts.

**`cn()`:** usar `extendTailwindMerge` registrando os tokens customizados (`text`, `radius`,
`shadow`, `spacing`, `container`, `leading`, `blur`) — sem isso o `tailwind-merge` confunde
`text-display` (tamanho) com `text-ink` (cor) e apaga uma das duas.

**Git:** `git init -b main`; um único `.gitignore` na raiz; `.agents/` e `.agent/` em
`.git/info/exclude`.

**Verificação:** `npm run build` sem erro · `npm run start` + `curl -s localhost:3000 | grep "<h1"`
· rotas `○ (Static)` no output · utilitários dos tokens no CSS compilado · `git status` limpo
(nada de `.agents/`, `node_modules/`, `.next/`).

---

## FASE 2 — Componentização Base ✅ (Vallesquino: biblioteca criada em 27/10/2026)

- Biblioteca interna em **`src/app/design-system/page.jsx`** (`"use client"` — exceção justificada)
  + `src/app/design-system/layout.jsx` exportando `metadata = { title: "Design System", robots:
  { index: false, follow: false } }`.
- Estrutura: sidebar `w-72` (marca + "Design System Library", busca, navegação, versão no rodapé),
  título dinâmico, `LibraryComponentItem` (preview + `CodeBlock` com copiar) e empty state para
  categorias vazias.
- Categorias: **Fundamentos** (Cores, Tipografia, Raios/Espaço/Sombra, Marca) + **Componentes**
  (`Buttons`, `Navigation`, `Eyebrow & Lists`, `Cards`, `Forms`).
- Padrão de primitivo: `src/components/ui/<nome>.jsx`, export nomeado, Server por padrão, `href`
  interno → `next/link`, imagem → `next/image`, `cn()` + `className` externo.

**Prompt padrão para novos componentes a partir do Figma:** ler os nós via MCP, atualizar o
`DESIGN.md` (seção 6), criar o componente em `ui/`, injetar no `/design-system` com
`LibraryComponentItem` e registrar no `memoria/04-COMPONENTES.md`.

**Aceite:** `/design-system` responde 200 com `noindex`, busca filtra, troca de categoria atualiza o
título, nenhuma cor fora da paleta.

---

## FASE 3 — Rotas, Layouts & SEO ✅ (Vallesquino: concluída em 27/10/2026)

1. **Layouts:** o `src/app/layout.jsx` raiz cuida de `<html>`, fontes, `metadata` (com
   `metadataBase`, `title.template`, `description`, `openGraph`, `alternates.canonical`) e JSON-LD.
   `<Header />` + `<main id="conteudo">` + `<Footer />` ficam no **route group
   `src/app/(site)/layout.jsx`** (Server) — assim o `/design-system`, que tem tela própria, não
   herda header/footer. Todas as páginas públicas vivem dentro de `(site)/`.
   `<html data-scroll-behavior="smooth">` (Next 16): rolagem suave nas âncoras, troca de rota
   sem animação.
2. **Rotas por pasta:** `src/app/sobre/page.jsx`, `src/app/solucoes/page.jsx`,
   `src/app/contato/page.jsx` (ajustar ao escopo real). Cada uma com `metadata` própria.
3. **`<Reveal>`** em `src/components/ui/reveal.jsx` (Server: só marca `data-reveal` e o `delay` da
   cascata) + um único `RevealObserver` (Client, no layout raiz) que anima com IntersectionObserver e
   Web Animations API, uma vez só, respeitando `prefers-reduced-motion`. Seções continuam Server.
4. **Header** (Server) + `mobile-menu.jsx` (Client, só o botão/drawer). **Footer** (Server).
5. **SEO técnico:** `src/app/sitemap.js`, `src/app/robots.js` (bloqueia `/design-system`), ícones
   e `opengraph-image`, JSON-LD (`Organization`/`LocalBusiness`/`MedicalBusiness`) no layout.
6. **Home seção por seção** a partir do Figma (MCP), com as 6 diretrizes: reuso extremo, exceção
   para peça nova (criar → biblioteca → DESIGN.md → usar), Server-first, cascata com `<Reveal>`,
   `next/image` com `alt`/`preload`/`sizes`, responsividade total.

**Aceite:** build sem erro, todas as rotas `○`, `robots.txt` e `sitemap.xml` respondendo, H1 no HTML
do servidor.

---

## FASE 4 — Módulos Legais + LGPD ✅ (Vallesquino: estrutura pronta em 27/10/2026; dados legais pendentes)

- `src/data/legal-texts.js` com `companyData` (razão social, CNPJ, endereço, e-mail, telefone, site,
  última atualização).
- Route Group `src/app/(legal)/` com `layout.jsx` de leitura (`max-w-3xl`) e as páginas
  `politica-de-privacidade` e `termos-de-uso` (Server, `metadata`, texto real citando a LGPD — Lei
  13.709/2018).
- `src/components/ui/cookie-banner.jsx` (`"use client"`, animação CSS, `localStorage`
  `vallesquino_cookie_consent`, fundo `surface-dark`, botões `outline` "Configurar" e `primary`
  "Aceitar todos"). Renderizado no `layout.jsx`. Links legais no footer e no sitemap.

**Aceite:** páginas legais no HTML, banner persiste o consentimento.

---

## FASE 5 — Sanity (se houver blog)

`npm create sanity@latest` dentro de `studio/` (dataset `production`, template "Clean project").
Schema `post` (title, slug, publishedAt, category, mainImage com `alt` obrigatório, excerpt ≤ 200,
body Portable Text, seoTitle, seoDescription). CORS: `npx sanity cors add http://localhost:3000
--credentials`. Dois posts reais de exemplo.

---

## FASE 6 — Integração Sanity × Next (Cache Components)

```bash
npm install next-sanity @sanity/image-url @portabletext/react
```
- `.env.local`: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET=production`,
  `NEXT_PUBLIC_SANITY_API_VERSION` (data atual). `.env.example` versionado sem valores.
- `src/lib/sanity.js` (`createClient`, `urlFor`) e `src/lib/queries.js` (`POSTS_QUERY`,
  `POST_QUERY`, `SLUGS_QUERY`).
- `next.config.mjs`: `images.remotePatterns` para `cdn.sanity.io`.
- **Cache:** com `cacheComponents: true`, **não** use `export const revalidate`. Envolva as funções
  de busca com `"use cache"` + `cacheLife("minutes")` (ou `cacheLife({ revalidate: 60 })`) e use
  `cacheTag` se for revalidar por webhook. Ler `node_modules/next/dist/docs/01-app/02-guides/
  incremental-static-regeneration-cache-components.md` antes de implementar.
- `/blog/[slug]`: `const { slug } = await params`, `generateStaticParams`, `generateMetadata`,
  `notFound()`, `PortableText` com componentes do DS, JSON-LD `Article`. Sitemap dinâmico.

---

## FASE 7 — Formulário de Contato

`react-hook-form` em `src/components/sections/contact-form.jsx` (Client) com validação, honeypot,
consentimento LGPD e estados idle/enviando/sucesso/erro. Route Handler
`src/app/api/contato/route.js` revalidando no servidor, rate limit simples e encaminhando para
`process.env.N8N_WEBHOOK_URL` (sem `NEXT_PUBLIC_`). Fallback WhatsApp em `ui/`.
**Aceite:** lead de teste chegando no n8n e `grep -r "N8N_WEBHOOK" .next/static` vazio.

---

## FASE 8 — Deploy & Handover

1. README revisado, commit inicial.
2. Vercel: **Root Directory = raiz** do repositório. Variáveis: `NEXT_PUBLIC_SITE_URL`,
   `NEXT_PUBLIC_SANITY_*`, `N8N_WEBHOOK_URL`. Confirmar `metadataBase` no domínio final.
3. `npx sanity deploy` (studio) + CORS do domínio final.
4. Domínio do cliente na Vercel com HTTPS e redirect www.

**Checklist de SEO:** H1/textos/links no `view-source:` · title/description/canonical únicos ·
`robots.txt` bloqueando `/design-system` · `sitemap.xml` no Search Console · imagens com `alt` via
`next/image` · JSON-LD válido · Lighthouse ≥ 90 (Performance, SEO, Acessibilidade — mobile).

---

## 📎 Anexo B — Armadilhas

1. `"use client"` no topo da página. 2. Buscar dados no `useEffect`. 3. `window`/`localStorage` fora
de `useEffect`. 4. `next/image` sem `remotePatterns`. 5. `export const revalidate` com Cache
Components ligado (use `"use cache"` + `cacheLife`). 6. Criar `tailwind.config.js`. 7.
`metadataBase` ausente. 8. `<a href="/rota">` interno. 9. Dois H1. 10. Usar `cn()` sem registrar
tokens customizados no `tailwind-merge`.

## 📎 Anexo C — Critério de aceite por fase

| Fase | Só avança quando… |
|---|---|
| 1 | `npm run build` passa, `curl` mostra o H1, `git status` limpo |
| 2 | `/design-system` roda com `noindex` e os primitivos estão injetados |
| 3 | Todas as rotas estáticas, sitemap e robots respondendo |
| 4 | Páginas legais no HTML e banner persistindo o consentimento |
| 5 | Studio rodando com 2 posts reais e CORS configurado |
| 6 | `/blog/[slug]` gerado estaticamente e revalidação validada |
| 7 | Lead de teste no n8n e webhook fora do bundle |
| 8 | Checklist de SEO 100% |

Toda fase só é concluída após o `/checkpoint`.
