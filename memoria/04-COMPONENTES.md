# 🧱 04 — Inventário de Componentes

## Primitivos (`src/components/ui/`)

| Componente | Arquivo | Tipo | Props principais | Origem |
|---|---|---|---|---|
| `Button` | `ui/button.jsx` | Server | `href`, `variant` (`primary`·`soft`·`outline`·`ghost`), `className` | Figma (primary, soft) + derivado |
| `Logo` | `ui/logo.jsx` | Server | `variant` (`dark`·`light`), `href`, `preload` | Figma |
| `Heading` / `Accent` / `Lead` / `Segments` | `ui/heading.jsx` | Server | `as`, `tone`, `align`, `id`; `Segments segments=[{text, accent}]` | Figma |
| `Eyebrow` | `ui/eyebrow.jsx` | Server | `as` | Figma (footer) |
| `IconTile` | `ui/icon-tile.jsx` | Server | `icon` (lucide, padrão `CheckCheck`) | Figma |
| `CheckList` | `ui/check-list.jsx` | Server | `items: string[]` | Figma |
| `FeatureCard` | `ui/feature-card.jsx` | Server | `title`, `surface` (`white`·`muted`), `icon`, `titleAs` | Figma |
| `ServiceCard` | `ui/service-card.jsx` | Server | `image`, `imageAlt`, `title`, `description`, `items`, `cta`, `imageClassName`, `id` | Figma |
| `TextLink` | `ui/text-link.jsx` | Server | `href`, `active` | Figma (nav) |
| `DropdownLink` | `ui/dropdown-link.jsx` | Server (CSS: hover ou foco de teclado) | `title`, `href`, `items[{label, href}]`, `active` | Figma + menu derivado |
| `SocialLink` | `ui/social-link.jsx` | Server | `network` (`whatsapp`·`facebook`·`instagram`), `href` | Figma (footer) |
| `Container` | `ui/container.jsx` | Server | `as`, `className` | Figma (grid 1280) |
| `Reveal` (+ `INTRO_DELAY`) | `ui/reveal.jsx` | Server | `as`, `delay` | POP (animação) |
| `RevealObserver` | `ui/reveal-observer.jsx` | **Client** | — (um só, no layout raiz) | POP (animação) |
| `Badge` | `ui/badge.jsx` | Server | `children` | Figma (páginas de solução) |
| `StepCard` | `ui/step-card.jsx` | Server | `step`, `title`, `titleAs` | Figma (páginas de solução) |
| `NumberTile` | `ui/number-tile.jsx` | Server | `size` (`md`·`lg`) | Figma (Sobre) |
| `NumberedCard` | `ui/numbered-card.jsx` | Server | `number`, `as` | Figma (Sobre) |
| `PrincipleStep` | `ui/principle-step.jsx` | Server | `number`, `title`, `as` | Figma (Sobre — 7 princípios) |
| `InfoCard` | `ui/info-card.jsx` | Server | `icon` | Figma (Fale conosco) |
| `FaqItem` | `ui/faq-item.jsx` | Server | `question` | Figma (Fale conosco) |
| `Field` | `ui/field.jsx` | Server | `id`, `label`, `required`, `error` | Figma (formulário) |
| `Input` / `Textarea` | `ui/input.jsx` | Server | props nativas; exporta `fieldControlClasses` | Figma (formulário) |
| `TagSelect` | `ui/tag-select.jsx` | **Client** | `id`, `options`, `value`, `onChange`, `invalid` | Figma (formulário) |
| `DateTimeField` | `ui/date-time-field.jsx` | **Client** | `id`, `value`, `onChange`, `invalid` | Figma (formulário) |
| `Switch` | `ui/switch.jsx` | Server | `id`, `checked`, `onChange`, `disabled`, `label`, `description`, `tone` | Derivado (LGPD) |
| `CookieBanner` / `CookieBannerPanel` | `ui/cookie-banner.jsx` | **Client** | — / props de estado e ações | POP Fase 4 |
| `CookiePreferencesButton` | `ui/cookie-preferences-button.jsx` | **Client** | `className`, `children` | POP Fase 4 |

## Layout (`src/components/layout/`)

| Componente | Tipo | Observação |
|---|---|---|
| `Header` | Server | Fixo; compõe `Logo`, `MainNav`, `Button`, `MobileMenu` |
| `MainNav` | **Client** | `usePathname` para o estado ativo |
| `MobileMenu` | **Client** | Estado aberto/fechado, Esc, `aria-expanded`/`aria-controls` |
| `Footer` | Server | CTA final + 3 colunas + linha legal + pattern lateral |
| `PageLoader` | Server (CSS) | Loader com o logo; renderizado pelo `(site)/template.jsx` |
| `SmoothScroll` | **Client** | Lenis; montado no `(site)/layout.jsx` |

## Seções (`src/components/sections/`)

| Seção | Usada em |
|---|---|
| `Hero` (genérico, arte por página em `data/heroes.js`) | Todas as páginas |
| `About`, `Commitments` | Home |
| `Solutions` (+ `SolutionsGrid`) | Home, Soluções |
| `FeatureBand` (faixa olive + cards) / `Audiences` | Home, Sobre (18 anos), Soluções (padrão de entrega) |
| `Experience` (`reverse`) | Home, Sobre, Soluções, páginas de solução (invertida) |
| `SobrePratica`, `SobreMetodologia`, `Principles` | Sobre |
| `Steps`, `Specialties` | Páginas de solução |
| `Contact` + `ContactForm` (**Client**), `Faq` | Fale conosco |
| `LegalHeader`, `LegalSection` (`sections/legal.jsx`) | Política de Privacidade, Termos de Uso |

## Client Components (com justificativa)

| Arquivo | Por quê |
|---|---|
| `src/app/design-system/page.jsx` | Busca e troca de categoria com estado; ferramenta interna noindex |
| `src/components/ui/reveal-observer.jsx` | IntersectionObserver + Web Animations API para o `Reveal` |
| `src/components/layout/smooth-scroll.jsx` | Instância do Lenis (rolagem suave) |
| `src/components/layout/main-nav.jsx` | `usePathname` (link ativo) |
| `src/components/layout/mobile-menu.jsx` | Estado do menu, teclado (Esc) |
| `src/components/ui/tag-select.jsx` | Combobox com estado, teclado e clique fora |
| `src/components/ui/date-time-field.jsx` | Abre o seletor nativo (`showPicker`) |
| `src/components/sections/contact-form.jsx` | `react-hook-form`, validação e envio |
| `src/components/ui/cookie-banner.jsx` | `localStorage`, estado das preferências |
| `src/components/ui/cookie-preferences-button.jsx` | Dispara o evento que reabre o banner |

## SEO (`src/components/seo/`, `src/lib/seo.js`)

| Item | Uso |
|---|---|
| `JsonLd` (`seo/json-ld.jsx`) | Server; injeta `application/ld+json` escapando `<` |
| `pageMetadata({ title, description, path })` | Metadata por página: canonical, Open Graph e Twitter com a imagem padrão |
| `breadcrumbJsonLd(items)` | `BreadcrumbList` (Início + itens) nas páginas internas |
| `absoluteUrl`, `organizationId`, `websiteId` | URLs absolutas e `@id` do grafo (`MedicalOrganization` + `WebSite` no layout raiz, `Service` nas soluções) |
