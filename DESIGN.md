---
name: Vallesquino Health
version: 1.0.0
source:
  brandbook: https://www.figma.com/design/g9RVfZnaeiqZZjnEC0OTKg/Vallesquino-Health?node-id=18153-51
  home: https://www.figma.com/design/g9RVfZnaeiqZZjnEC0OTKg/Vallesquino-Health?node-id=22045-144
colors:
  primary: "#E5AC5E"         # Dourado — inteligência e excelência (CTA, destaques, ícones)
  primary-hover: "mix(primary 88%, olive)"  # derivado — hover do CTA (não existe no Figma)
  olive: "#2D3114"           # Verde oliva — segurança e estrutura (fundos escuros, títulos de card)
  forest: "#0B3C2D"          # Verde floresta — cor institucional secundária (brandbook)
  beige: "#F4E9D4"           # Bege — clareza e elegância (wordmark claro, hairlines)
  canvas: "#FDF9F2"          # Fundo das seções claras da Home
  surface: "#FFFFFF"         # Cards sobre o canvas (seção "Além do laudo")
  surface-muted: "#F9F9F9"   # Cards de soluções/públicos
  surface-dark: "{colors.olive}"
  ink: "#34363E"             # Texto principal e títulos sobre claro
  muted: "#555555"           # Links de navegação inativos
  on-dark: "#FFFFFF"         # Texto sobre olive (usar /92, /78, /72, /55)
  on-dark-muted: "rgba(255,255,255,0.78)"
  border: "{colors.beige}"   # Hairline sobre claro (derivado)
  border-on-dark: "rgba(255,255,255,0.18)"
  bronze: "#64562A"          # Tile numérico dos 7 princípios (Sobre)
  bronze-deep: "#6B4715"     # Ponta escura da linha gradiente dos princípios
  ink-strong: "#202020"      # Texto do FAQ
  hairline: "#E0E0E0"        # Contorno (inset) dos cards do FAQ
  field-border: "#E2E8F0"    # Borda de campos e do card do formulário
  field-label: "#18213C"     # Rótulo dos campos
  field-placeholder: "#A1A1AA"
  tag-border: "#E8E8E8"
  tag-text: "#4A4A4A"
  danger: "#B3261E"          # derivado — mensagens de erro de formulário
typography:
  families:
    display: "Swaraga (Swaraga Demo no Figma) — 400/500/600/700, next/font/local"
    sans: "Montserrat — next/font/google"
  display:     { family: display, size: "clamp(36px → 54px)", line-height: 1.2,  weight: 700 }
  title:       { family: display, size: 24px, line-height: 1,      weight: 600 }
  lead:        { family: sans,    size: 18px, line-height: 1.2,    weight: 400 }
  body:        { family: sans,    size: 18px, line-height: 1,      weight: 400 }
  body-sm:     { family: sans,    size: 16px, line-height: 1.2,    weight: 400 }
  button:      { family: sans,    size: 13.5px, line-height: normal, weight: 700, letter-spacing: 0.04em, transform: uppercase }
  nav:         { family: sans,    size: 13px, line-height: normal, weight: 500, letter-spacing: 0.05em, transform: uppercase }
  eyebrow:     { family: sans,    size: 11px, line-height: normal, weight: 700, letter-spacing: 0.12em, transform: uppercase }
  footer:      { family: sans,    size: 15.5px, line-height: 1.26, weight: 400 }
  footer-link: { family: sans,    size: 14.5px, line-height: normal, weight: 400 }
  caption:     { family: sans,    size: 12.5px, line-height: 1.5,    weight: 400 }
  index:       { family: sans,    size: 24px, line-height: 1,      weight: 600, letter-spacing: -0.07em }
  index-lg:    { family: sans,    size: 62px, line-height: 1,      weight: 600, letter-spacing: -0.027em }
  field:       { family: sans,    size: 14px, line-height: 20px,   weight: 400 }
  tag:         { family: sans,    size: 12px, line-height: normal, weight: 500 }
  faq:         { family: sans,    size: 16px, line-height: 24.75px, weight: 400 }
radius:
  tag: 8px       # tag de valor selecionado
  card: 10px     # botões, cards, header, icon tile, imagem do card, campos
  media: 16px    # fotos grandes das seções
  form: 20px     # card do formulário
  panel: 24px    # cards do FAQ
  pill: 999px    # botões sociais
spacing:
  section: 96px          # padding vertical das seções
  section-footer: 80px   # padding superior do footer
  gutter: 50px           # gap entre colunas (imagem × texto)
  container: 1280px      # largura útil (Figma: 1920 − 2×320)
shadows:
  header: "0 10px 40px 0 rgba(6,89,41,0.14)"
  focus-ring: "0 0 0 3px {colors.primary}/55%"   # derivado — acessibilidade
blur:
  header: 7px
---

# Vallesquino Health — DESIGN.md

> **Fonte única da verdade.** Toda cor, fonte, tamanho, raio, espaçamento e sombra do código sai
> dos tokens `@theme` em `src/app/globals.css`, que traduzem este arquivo. Proibido inventar valor
> ou usar paleta/escala default do Tailwind (as cores, fontes e sombras default foram **resetadas**
> no `@theme` — uma classe como `bg-red-500` simplesmente não existe neste projeto).

## 1. Marca

- **Conceito:** consultoria de inteligência médico-ocupacional. Ponte entre a medicina do trabalho e
  a segurança corporativa/jurídica.
- **Personalidade:** Analítica · Elegante · Moderna.
- **Arquétipos:** O Sábio (verdade, evidência, rigor) + O Governante (ordem, premium, controle).
- **Público:** gestores de RH e SST, médicos do trabalho, departamentos jurídicos, escritórios de
  advocacia e magistrados.
- **Tom visual:** afastar-se do visual clínico tradicional. Nada de branco hospitalar e azul de
  saúde: base bege/creme, verdes profundos e o dourado como "ponto de luz".

## 2. Cores

| Token | Hex | Papel |
|---|---|---|
| `primary` | `#E5AC5E` | Dourado. CTA principal, palavra de destaque nos títulos, ícones, link ativo |
| `olive` / `surface-dark` | `#2D3114` | Verde oliva. Hero, seção "Respostas técnicas", footer, icon tile, títulos de card |
| `forest` | `#0B3C2D` | Verde floresta. Cor institucional do brandbook (papelaria, aplicações). Ainda não usada na Home |
| `beige` | `#F4E9D4` | Bege da marca. Wordmark sobre escuro e hairline (`border`) sobre claro |
| `canvas` | `#FDF9F2` | Fundo de todas as seções claras |
| `surface` | `#FFFFFF` | Cards sobre o canvas |
| `surface-muted` | `#F9F9F9` | Cards de soluções e de públicos |
| `ink` | `#34363E` | Texto e títulos sobre claro |
| `muted` | `#555555` | Link de navegação inativo |
| `on-dark` | `#FFFFFF` | Texto sobre olive. Opacidades do Figma: `/92` (lead), `/78` (links), `/72` (texto footer), `/55` (legal) |
| `border-on-dark` | `rgba(255,255,255,.18)` | Divisória do footer |

**Regras**
- Títulos de seção usam **duas cores**: o trecho de destaque em `primary` e o restante em `ink`
  (sobre claro) ou `on-dark` (sobre olive). Use `<Accent>` dentro de `<Heading>`.
- Dourado nunca vira fundo de seção inteira; ele é ponto de luz (botão, ícone, destaque, grafismo).
- **Derivados** (não existem no Figma, criados por necessidade de estado/acessibilidade e sempre a
  partir de tokens da marca): `primary-hover` (mix do dourado com 12% de olive), `border` (= beige) e
  `focus-ring`.

## 3. Tipografia

- **Display — Swaraga** (`font-display`). Títulos de seção (Bold 700) e títulos de card
  (SemiBold 600). Carregada via `next/font/local` a partir de `src/app/fonts/`.
  ⚠️ O Figma usa **"Swaraga Demo"**. Fontes "Demo" normalmente têm licença só para uso pessoal —
  **confirmar/adquirir a licença comercial** antes de publicar e substituir os `.ttf`.
- **Sans — Montserrat** (`font-sans`). Todo texto corrido, botões, navegação e footer.
  O Figma usa Inter nos textos de card e Poppins em 2 linhas do footer; padronizamos em Montserrat,
  que é a tipografia de apoio oficial do brandbook (ver `memoria/03-DECISOES.md`).

| Token (`text-*`) | Fonte | Tamanho | Line-height | Peso | Extra | Uso |
|---|---|---|---|---|---|---|
| `display` | display | 36→54px (clamp) | 1.2 | 700 | — | H1/H2 de seção |
| `title` | display | 24px | 1 | 600 | — | Título de card |
| `lead` | sans | 18px | 1.2 | 400 | — | Parágrafo de apoio de seção |
| `body` | sans | 18px | 1 | 400 | — | Texto de card, itens de checklist |
| `body-sm` | sans | 16px | 1.2 | 400 | — | Credenciais, legendas longas |
| `button` | sans | 13.5px | normal | 700 | `tracking 0.04em`, uppercase | Botões |
| `nav` | sans | 13px | normal | 500 | `tracking 0.05em`, uppercase | Menu (ativo = 700) |
| `eyebrow` | sans | 11px | normal | 700 | `tracking 0.12em`, uppercase | Rótulo/coluna do footer |
| `footer` | sans | 15.5px | 1.26 | 400 | — | Texto institucional do footer |
| `footer-link` | sans | 14.5px | normal | 400 | — | Links do footer |
| `caption` | sans | 12.5px | 1.5 | 400 | — | Copyright e links legais |
| `index` | sans | 24px | 1 | 600 | `tracking −0.07em` | "Passo - 01", números 01–03 |
| `index-lg` | sans | 62px | 1 | 600 | `tracking −0.027em` | Números dos 7 princípios |
| `field` | sans | 14px | 20px | 400 (rótulo 500) | — | Campos e rótulos do formulário |
| `tag` | sans | 12px | normal | 500 | — | Tag do valor selecionado |
| `faq` | sans | 16px | 24.75px | 400 | — | Resposta do FAQ |

Os números ("Passo - 01", 1–7) e os campos do formulário usam Inter/Geist/Instrument Sans no Figma;
padronizados em Montserrat (mesma decisão dos textos de card).

`leading-heading` (1.2) existe para títulos display em tamanho `title` (ex.: nome da Dra. Valéria).

## 4. Raios, espaçamento, elevação

- `rounded-card` 10px · `rounded-media` 16px · `rounded-pill` 999px.
- `py-section` 96px · `pt-section-footer` 80px · `gap-gutter` 50px · `max-w-site` 1280px.
- Grid interno em múltiplos de 4px (escala nativa do Tailwind: `gap-4` 16px, `gap-6` 24px,
  `gap-8` 32px, `p-4` 16px, `min-h-12` 48px).
- **Elevação:** o sistema é plano. Cards não têm sombra — a separação vem do contraste
  `surface`/`surface-muted` sobre `canvas`. A **única** sombra de UI é `shadow-header`
  (header flutuante, com `backdrop-blur-header` e fundo `surface/94`).
- **Foco:** todo elemento interativo usa `focus-visible:shadow-focus-ring`. Nunca remover.

## 5. Grafismo e imagens

- **Símbolo** (`public/brand/symbol-gold.svg`): monograma V + H com a estrela central ("ponto de
  luz"). Usado grande, vazado atrás da foto do Hero e com opacidade na seção de públicos
  (`symbol-gold-large.svg`).
- **Pattern "O padrão da excelência"** (`public/brand/pattern-excellence.svg`): repetição da
  estrela; usado nas laterais do footer/CTA final.
- **Logos:** `logo-dark.svg` (sobre claro: símbolo dourado + wordmark olive) e `logo-light.svg`
  (sobre escuro: wordmark bege). Sempre via `<Logo variant="dark|light" />`.
- **Fotos:** corporativas, fotorrealistas, luz quente, ambientes de escritório com madeira e verde.
  Sempre via `next/image` com `alt` descritivo.

## 6. Componentes (`src/components/ui/`)

### button
- Altura mínima 48px (`min-h-12`), `px-6 py-3`, `rounded-card`, tipografia `text-button`.
- `primary` (Figma): fundo `{colors.primary}`, texto `{colors.olive}`; hover `primary-hover`.
- `soft` (Figma, CTA secundário sobre olive): fundo `{colors.primary}/30`, texto `{colors.primary}`.
- `outline` (derivado, uso futuro — ex. banner LGPD): borda 1px `primary`, texto `primary`.
- `ghost` (derivado): só texto `primary`, fundo `primary/10` no hover.
- `href` interno → `next/link`; externo (`http`) → `<a target="_blank">`; sem `href` → `<button>`.

### logo
- `variant="dark"` 164×33 · `variant="light"` 209×42 (tamanhos do Figma). Link para `/` por padrão.

### heading / accent / lead
- `<Heading as="h1|h2" tone="light|dark" align="left|center">` → `font-display text-display`.
- `<Accent>` pinta o trecho em `primary`.
- `<Lead tone>` → `text-lead`, cor `ink` (claro) ou `on-dark/92` (escuro).

### eyebrow
- `text-eyebrow` uppercase em `primary` (rótulos e títulos de coluna do footer).

### icon-tile
- 40×40, `rounded-card`, fundo `olive`, ícone lucide 16px em `primary` (padrão `CheckCheck`).

### check-list
- Lista com `CheckCheck` 16px `primary` + texto `text-body ink`, gap 16px entre itens e 6px ícone/texto.

### feature-card
- `p-4`, `gap-8`, `rounded-card`. Fundo `surface` (padrão) ou `surface-muted`.
- `IconTile` + título `text-title olive` + texto `text-body ink` (gap 6px).

### service-card
- `p-4`, `gap-8`, `rounded-card`, fundo `surface-muted`.
- Imagem 188px de altura, `rounded-card`, `object-cover`.
- Título `text-title olive`, descrição `text-body ink` (gap 16px), `CheckList`, botão `primary`
  "Quero saber mais".

### navbar-link (`text-link.jsx`)
- Normal: `text-nav` em `{colors.muted}`, peso 500.
- Hover: texto `{colors.primary}`. Active (`aria-current="page"`): `{colors.primary}`, peso 700.

### dropdown-menu (`dropdown-link.jsx`)
- Gatilho com o mesmo estilo do navbar-link + `ChevronDown`.
- Menu (derivado): fundo `{colors.canvas}`, borda `{colors.border}`, `shadow-header`,
  `rounded-card`, itens `text-footer-link ink`; hover do item: fundo `{colors.primary}`, texto
  `{colors.olive}`. Abre no hover do mouse ou com foco **de teclado** (`:focus-visible`), nunca por
  foco de clique — assim fecha quando o mouse sai, mesmo após clicar em uma opção. Abre na hora e fecha
  com 200ms de atraso (fade), tempo que permite ao Tab passar do gatilho para os itens. CSS puro → Server Component.

### social-link
- Círculo 38px (`size-9.5`), `rounded-pill`, fundo `primary/10` (hover `primary/20`), ícone SVG
  dourado da pasta `public/icons/`.

### container
- `mx-auto box-content max-w-site px-4 sm:px-8`: conteúdo de no máximo 1280px + gutter lateral.
  Toda seção usa `<Container>`.

### reveal (server) + reveal-observer (client)
- `Reveal` só marca o elemento (`data-reveal`, `--reveal-delay`); o CSS deixa-o em `opacity 0` +
  `translate 0 24px`. Um único `RevealObserver` (no layout raiz) usa IntersectionObserver
  (`rootMargin -80px` embaixo) e anima com a Web Animations API: `opacity 0→1` + `translate 24px→0`,
  0.6s, ease `cubic-bezier(0.22, 1, 0.36, 1)`, uma vez só, `delay` em passos de 0.1s para cascata.
- Conteúdo acima da dobra (hero, cabeçalho das páginas legais) usa `INTRO_DELAY` (0.85s) para entrar
  depois do loader. Com `prefers-reduced-motion` ou sem JS (`<noscript>`) tudo aparece sem animação.

### badge / step-card
- `Badge`: `bg-primary/30`, `p-3`, `rounded-card`, `text-index` em `primary` ("Passo - 01").
- `StepCard`: `surface-muted`, `p-4`, `gap-8`; Badge + título `text-title olive` + texto `text-body ink`
  (gap 16px). Os cards de uma linha **não** se esticam (Figma `items-start`).

### number-tile / numbered-card
- `NumberTile md`: `bg-olive p-3 rounded-card`, número `text-index primary`.
- `NumberTile lg`: 98×98 `bg-bronze`, número `text-index-lg primary`.
- `NumberedCard`: card branco horizontal (`gap-8 p-4`) com NumberTile md + texto `text-title olive`.

### principle-step
- Coluna centralizada (`gap-10 p-4`, 271×311 no desktop): NumberTile lg, título `text-title primary`,
  texto `text-body on-dark` (gap 12px). Linha do tempo: 4 itens + 3 itens (ordem 7·6·5 da esquerda
  para a direita), linhas de 2px em gradiente `primary ↔ bronze-deep` com conector vertical à direita.

### info-card
- Card branco horizontal `items-start gap-8 p-4`: IconTile + texto `text-body ink`.

### faq-item
- `rounded-panel` (24px), fundo `surface`, contorno `ring-1 ring-inset hairline`, `p-8 gap-4`.
- Pergunta: display 700, 24px, line-height 32px, `ink-strong`. Resposta: `text-faq ink-strong`.
- Sempre aberto (o Figma não mostra acordeão) + JSON-LD `FAQPage`.

### field / input / textarea / tag-select / date-time-field (formulário)
- Card do formulário: `surface`, borda `field-border`, `rounded-form`, conteúdo `p-6 gap-4`, botão
  `primary` em largura total (20px acima e abaixo).
- `Field`: rótulo `text-field` 500 `field-label` (gap 8px), mensagem de erro `caption danger`.
- Controle: `rounded-card`, borda `field-border`, `px-3 py-2.5`, `text-field ink`, placeholder
  `field-placeholder`; foco: borda `primary` + `shadow-focus-ring`; erro: borda `danger`.
  Input 40px · Select 43px · Textarea 162px · Data/hora 44px com ícone calendário.
- `TagSelect`: valor exibido como tag (`rounded-tag`, borda `tag-border`, `text-tag tag-text`, ×) e
  ícone `ChevronsUpDown`; lista suspensa (derivada) `surface`, borda `field-border`, `shadow-header`,
  item ativo `primary/15`, selecionado com ✓.

### switch
- Checkbox nativo com `role="switch"`: trilho 44×24 `rounded-pill` (`on-dark/20` no escuro, `field-border`
  no claro), ativo `primary`, bolinha `surface` 16px; foco `shadow-focus-ring`; desabilitado 60%.

### cookie-banner (LGPD)
- Faixa fixa no rodapé da tela, `bg-surface-dark` + borda `border-on-dark`, sobe com animação CSS
  (`cookie-in`: `translate 100% → 0`) e desce ao decidir (300ms).
- Título `text-title on-dark`, texto `text-body-sm on-dark/92` com link para a Política em `primary`.
- Botões: `outline` "Configurar" + `primary` "Aceitar todos". Em "Configurar": 3 categorias com Switch
  (Necessários — sempre ativo —, Desempenho e análise, Marketing) e botões `ghost` "Rejeitar opcionais",
  `outline` "Salvar preferências", `primary` "Aceitar todos".
- Escolha salva em `localStorage["vallesquino_cookie_consent"]` como JSON
  `{ version, necessary, analytics, marketing, updatedAt }`. Reabre pelo botão "Preferências de cookies" do
  footer. Scripts de análise/marketing só podem carregar se `hasConsent("analytics" | "marketing")`
  (`src/lib/consent.js`) retornar `true`.

### page-loader (`layout/page-loader.jsx`)
- Tela `olive` em tela cheia com o logo claro: o "V" desce, o traço entra, a estrela gira e brilha e o
  wordmark desliza; barra fina `primary` enche em 1s. Some com fade aos ~1s (total 1.35s), só CSS.
- Renderizado pelo `template.jsx` do grupo `(site)`: aparece em toda carga e troca de página.
  Oculto com `prefers-reduced-motion` (`motion-reduce:hidden`) e sem JS.

### smooth scroll (`layout/smooth-scroll.jsx`)
- Lenis (`autoRaf`, `stopInertiaOnNavigate`) só para roda do mouse/trackpad; toque continua nativo e
  `prefers-reduced-motion` desliga a suavização. Âncoras ficam com o Next (`scroll-margin` + CSS smooth);
  a inércia é zerada ao clicar em link com `#`. Listas roláveis levam `data-lenis-prevent`.

### páginas legais
- Route group `(legal)`: coluna de leitura `max-w-3xl`, cabeçalho com Eyebrow + H1 (`olive` + Accent) + data
  de atualização; seções com H2 `text-title olive` e corpo `text-faq ink` (16px/24.75px), listas com marcador.

## 7. Layout (implementado na Fase 3)

- Desktop 1920 com container de 1280 centralizado. Seções claras em `canvas`, escuras em `olive`.
- Padding vertical das seções: `py-16` no mobile, `py-section` (96px) a partir de `lg`.
- Artes posicionadas em relação ao centro da tela (`left-[calc(50%±Npx)]`), reproduzindo as
  coordenadas do frame de 1920: em telas menores elas saem pelas bordas sem invadir o conteúdo.
- **Header** fixo (não só absoluto) para ficar disponível durante a rolagem; abaixo de `lg` vira
  logo + botão de menu (`mobile-menu.jsx`).
- **Hero do Fale conosco**: arte deslocada 60px para a direita e ancorada à coluna do texto
  (`calc(max(2rem,50%-640px)+…)`) para o trecho dourado do título não encostar no símbolo dourado.
- **Hero por página**: mesma estrutura em todas as páginas (foto + gradiente + símbolo + recorte),
  com posição/tamanho da foto, gradiente e posição do símbolo vindos de `src/data/heroes.js`
  (valores exatos de cada frame do Figma).
- **Template das soluções** (`/solucoes/[slug]`): Hero → Steps ("Passo") → Specialties (olive, foto
  532 + 4 cards, símbolo XL) → Experiência invertida (texto à esquerda). Conteúdo em
  `src/data/solucoes.js`.
- **Hero mobile/tablet** (não existe no Figma): foto em tela cheia com gradiente vertical
  `olive → olive/85 → olive/40`; símbolo e recorte só a partir de `xl` (1280px). Entre 1024 e 1279px a
  arte centralizada encostava no texto (o dourado do título sumia sobre o símbolo), então essa faixa
  também usa o tratamento mobile. O foco horizontal da foto nessa faixa é `object-[70%_center]`, ajustável
  por página em `photoPosition` (`src/data/heroes.js`).
- **Seções com imagem + cards em 2 colunas** (`About`, `Commitments`, `SobrePratica`): lado a lado só a
  partir de `xl`; até 1279px empilham (imagem `aspect-video` + conteúdo em largura total) para os cards
  não ficarem com ~150px de largura.
- **Header** flutuante a 28px do topo, 68px de altura, `surface/94` + blur 7px + `shadow-header`,
  `rounded-card`; logo à esquerda, nav central (gap 26px), CTA "Fale conosco" à direita.
- **Hero** olive, foto à direita com gradiente `269deg, olive 0% → 80% → 100%` (51% / 67% / 100%),
  símbolo dourado atrás da pessoa (foto recortada por cima), título display com destaque, lead
  `on-dark/92`, CTAs `primary` + `soft`.
- **Footer** olive com pattern dourado nas laterais, CTA final centralizado, grid 1.3fr/1fr/1fr,
  divisória `border-on-dark`, linha legal em `caption on-dark/55`.
