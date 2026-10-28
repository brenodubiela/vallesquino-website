# 🧠 03 — Registro de Decisões (append-only)

## 27/10/2026 — Setup e Design System

1. **App na raiz, sem `frontend/`.** Pedido da agência. Consequências: um só `package.json`, Vercel
   com Root Directory na raiz, `POP.md` atualizado para a v3.
2. **Next.js 16.4.3** (em vez do 15 do PDF), React 19.3.1, Tailwind 4.3.3 — versões estáveis mais
   recentes em 27/10/2026.
3. **`@tailwindcss/turbopack` em vez de `@tailwindcss/postcss`.** É o que o `create-next-app` 16.4
   gera; mesmo Tailwind v4 CSS-first, sem `postcss.config.mjs`.
4. **Mantidos `cacheComponents: true` e `partialPrefetching: true`** do template. Impacto: ISR da
   Fase 6 usa `"use cache"` + `cacheLife` em vez de `export const revalidate`.
5. **ESLint 9** mantido (o template fixa `^9`; o ESLint 10 ainda não é o padrão do `eslint-config-next`).
6. **Paleta, tipografia e sombras default do Tailwind resetadas** (`--color-*`, `--text-*`,
   `--shadow-*: initial`). Garante a lei "nunca usar cor default" em tempo de build.
7. **Montserrat no lugar de Inter/Poppins.** O Figma usa Inter nos textos de card e Poppins em duas
   linhas do footer, mas o brandbook define Montserrat como tipografia de apoio. Padronizado.
8. **Swaraga carregada via `next/font/local`** a partir dos `.ttf` "Swaraga Demo" instalados na
   máquina (pesos 400/500/600/700). ⚠️ Licença comercial pendente.
9. **Variáveis do Figma ignoradas** (`color/action/primary #E62850` etc.): vêm de uma biblioteca
   externa e não aparecem na marca; só o fallback `#34363E` (texto) e `#F9F9F9` (superfície) foram
   aproveitados como `ink` e `surface-muted`.
10. **Tokens derivados** (não existem no Figma): `primary-hover` (mix 88% dourado + olive), `border`
    (= bege da marca), `shadow-focus-ring` e as variantes de botão `outline`/`ghost`. Todos
    construídos a partir das cores da marca.
11. **`text-display` fluido** (`clamp(36px → 54px)`): o Figma só tem desktop; 54px é o máximo exato.
12. **Logo montado em um único SVG** por variante (símbolo + wordmark com o offset exato do Figma) em
    `public/brand/logo-{dark,light}.svg`.
13. **Fotos convertidas de PNG para JPEG (q88)** em `public/images/` (exceto as PNG com transparência
    do Hero) para não versionar arquivos de ~6 MB; o `next/image` otimiza na entrega.
14. **`cn()` com `extendTailwindMerge`** registrando os tokens, para o `tailwind-merge` não descartar
    `text-display` ao combinar com `text-ink`.
15. **Exceção Server-first registrada:** `src/app/design-system/page.jsx` é `"use client"`
    (ferramenta interna, noindex via `layout.jsx`).
16. **`metadataBase` lê `NEXT_PUBLIC_SITE_URL`** (fallback `http://localhost:3000`) enquanto o domínio
    não é definido.

## 27/10/2026 — Fase 3

17. **Route group `(site)`** para Header/Footer em vez do `layout.jsx` raiz: o `/design-system` tem
    tela própria e não pode herdar o header fixo.
18. **Header fixo** (o Figma mostra só a posição sobre o Hero). Mantém o CTA "Fale conosco" sempre
    acessível; fundo `surface/94` + blur já previsto no DS.
19. **Nav ativa via `usePathname`** em `main-nav.jsx` e `mobile-menu.jsx` (Client). O `header.jsx`
    continua Server.
20. **CTA final dentro do Footer**, como no Figma — aparece em todas as páginas.
21. **Item "Atendimento Ocupacional / Individualizado" do footer unificado**: no Figma é uma quebra
    de linha que virou dois itens.
22. **Cards de soluções em grid 2 colunas iguais** (no Figma há 616/648px alternados — diferença de
    desenho, não de intenção). Enquadramento das fotos reproduzido com `object-position` calculado a
    partir do recorte do Figma.
23. **Responsivo inventado com critério** (Figma só tem 1920): `text-display` fluido, `py-16` no
    mobile, Hero mobile com foto de fundo e gradiente vertical, artes ancoradas ao centro da tela.
24. **`preload` em vez de `priority`** no `next/image` (descontinuado no Next 16). Logo do header e
    foto do Hero com `preload`.
25. **`opengraph-image` lendo arquivos no topo do módulo** (padrão da doc do Next 16) para ser gerada
    estaticamente com Cache Components.
26. **`<html data-scroll-behavior="smooth">`**: o Next 16 deixou de desligar o smooth scroll nas
    trocas de rota sozinho.
27. **JSON-LD `MedicalOrganization`** sem endereço/telefone até chegarem os dados reais.
28. **Links sociais e "Trabalhe Conosco" provisórios** (`wa.me/`, `facebook.com/`, `instagram.com/`,
    `/trabalhe-conosco` → 404) até a cliente enviar os destinos.

## 27/10/2026 — Páginas internas (Sobre, Soluções, 5 soluções, Fale conosco)

29. **Rotas das soluções em `/solucoes/[slug]`** (5 páginas, mesmo template) com `generateStaticParams` +
    `notFound()`. O conteúdo da página fica dentro de `<Suspense>` (exigência de navegação instantânea do
    Next 16.4 com Cache Components); as 5 páginas continuam 100% pré-renderizadas no build. Links de
    "Quero saber mais", dropdown e footer passaram de âncoras (`/solucoes#slug`) para as rotas.
30. **Hero genérico com arte por página** (`src/data/heroes.js`): posição/tamanho da foto, gradiente e
    posição do símbolo copiados de cada frame do Figma.
31. **Novos tokens do Figma**: `bronze` (#64562A), `bronze-deep` (#6B4715), `ink-strong` (#202020),
    `hairline` (#E0E0E0), `field-*` e `tag-*` (cores do formulário shadcn do Figma), raios `tag` 8,
    `form` 20, `panel` 24, textos `index`, `index-lg`, `field`, `tag`, `faq`.
32. **`danger` (#B3261E) é derivado**: o Figma não tem estado de erro; necessário para validação acessível.
33. **Fontes do formulário e dos números** (Geist, Instrument Sans, Inter no Figma) padronizadas em
    Montserrat. Consequência: alguns títulos de card quebram linha diferente e a seção escura do NR-1
    ficou ~18px mais alta que no Figma.
34. **Campo de data/hora**: o Figma usa estilo diferente (borda #E8E8E8, rótulo Inter #4A4A4A);
    unificado ao estilo dos outros campos. Abre o seletor nativo (`datetime-local`, passos de 30 min,
    a partir de agora). Não há agenda de disponibilidade real — o horário é uma preferência.
35. **Selects com tag** (`TagSelect`): seleção única com o valor como tag removível, como no Figma.
    Opções conforme as anotações de desenvolvimento do Figma. "Outro" abre o campo "Qual é o seu perfil?".
36. **Validação do formulário** (só "Nome Completo" tem * no Figma): nome obrigatório; e-mail **ou**
    WhatsApp obrigatório (para haver retorno); demais campos opcionais; data precisa ser futura.
37. **`/api/contato`** (Route Handler): revalida no servidor, honeypot, rate limit em memória (5/10 min
    por IP) e encaminha para `N8N_WEBHOOK_URL`. Sem a variável configurada responde 503 e o formulário
    mostra a mensagem de erro — nada é perdido silenciosamente.
38. **Sem checkbox de consentimento LGPD** no formulário, para manter o Figma; o texto ao lado já cita a
    LGPD. Pendente de decisão da agência (o POP pede o checkbox).
39. **FAQ sempre aberto** (sem acordeão), como no Figma, com JSON-LD `FAQPage`.
40. **Footer**: bloco de colunas com altura fixa de 264px a partir de `xl` (como no Figma) e `caption`
    com line-height 1.5 (19px do Figma).
41. **Ordem dos cards de etapa**: cards de uma mesma linha não se esticam (Figma `items-start`).

## 27/10/2026 — Ajustes pós-revisão

42. **Gradiente também no recorte do Hero** em Análise Técnica e Atendimento Individualizado
    (`cutoutGradient` em `data/heroes.js`), como no Figma: esconde a pessoa cortada atrás do texto/botões.
    Nas demais páginas o Figma aplica o gradiente só na foto.
43. **Dropdown "Soluções" não abre mais por foco de clique** (`group-focus-within` → `:focus-visible`):
    antes, clicar no gatilho ou numa opção deixava o foco no link e o menu ficava aberto após o mouse sair.
    Visibilidade abre na hora e fecha com 200ms de atraso para o Tab conseguir entrar nos itens.

## 27/10/2026 — Hero do contato + Fase 4 (LGPD)

44. **Hero do Fale conosco**: o "a" de "Consultoria" (dourado) ficava sobre o "V" dourado (até ~30px de
    sobreposição). Arte (foto, símbolo e recorte) deslocada 60px para a direita e ancorada à coluna do texto
    (`max(2rem, 50% − 640px)`), garantindo ≥33px de respiro de 1024px a 1920px sem expor bordas da foto.
45. **Páginas legais em `(site)/(legal)`** (dentro do grupo do site para herdar header/footer), conteúdo
    real citando a LGPD, com `companyData` em `src/data/legal-texts.js` — placeholders entre colchetes até a
    cliente enviar razão social, CNPJ, endereço, e-mail, telefone, encarregado e comarca.
46. **Consentimento em JSON com categorias** (`necessary`/`analytics`/`marketing` + versão), em vez do
    `"true"` simples do POP: permite "Configurar", revogar e versionar o consentimento.
47. **Botão "Rejeitar opcionais"** dentro de "Configurar" (rejeitar tão fácil quanto aceitar — boa prática
    da ANPD) e link **"Preferências de cookies"** no footer para revogar/alterar — itens fora do Figma.
48. **"Termos de Uso" adicionado à linha legal do footer** (o Figma só tem Política e Trabalhe Conosco;
    o POP exige o link).
49. **Banner no layout `(site)`**, não no root: não aparece no `/design-system`. Leitura do consentimento com
    `useSyncExternalStore` (sem flash nem erro de hidratação; o banner não vai para o HTML do servidor).

## 27/10/2026 — Pré-repositório (SEO, segurança, velocidade, loader, scroll, animações, responsividade)

50. **`motion` removido.** `Reveal` virou Server Component e um único `RevealObserver` anima com
    IntersectionObserver + Web Animations API (sem atributos no DOM, para não divergir da hidratação).
    Cerca de 47KB gz a menos de JS. Banner de cookies e loader passaram a usar animação CSS.
51. **Loader de página em CSS** (`PageLoader` no `(site)/template.jsx`): aparece na carga e em toda troca
    de rota (inclusive no "voltar"), dura 1.35s e some com `prefers-reduced-motion`. O conteúdo acima da
    dobra espera `INTRO_DELAY` (0.85s) para entrar depois dele.
52. **Swaraga em WOFF2** (27–29KB) no lugar do TTF; o TTF ficou só para o `opengraph-image`.
    Imagens em AVIF/WebP; foto do hero com `preload` + `fetchPriority="high"`.
53. **Smooth scroll com Lenis** (só roda/trackpad; toque nativo; desliga com reduced motion). Âncoras
    continuam com o Next + `scroll-margin`, e o clique em link com `#` zera a inércia do Lenis (senão a
    animação antiga vencia a rolagem até a seção).
54. **SEO**: helper `pageMetadata` (canonical + Open Graph + Twitter `summary_large_image` por página; a
    página que define `openGraph` perde a imagem herdada, por isso o helper a inclui), JSON-LD em grafo
    (`MedicalOrganization` + `WebSite`), `BreadcrumbList` nas internas, `Service` nas soluções,
    `apple-icon` 180px e `theme-color`. `medicalSpecialty` saiu (não há valor válido para Medicina do
    Trabalho no schema.org). URL do site: `NEXT_PUBLIC_SITE_URL` → `VERCEL_PROJECT_PRODUCTION_URL` → localhost.
55. **Headers de segurança** em `next.config.mjs`: CSP sem nonce (`'unsafe-inline'` para scripts/estilos,
    pois as páginas são pré-renderizadas e nonce exigiria render dinâmico), HSTS, nosniff, `X-Frame-Options`
    DENY + `frame-ancestors 'none'`, Referrer-Policy, COOP e Permissions-Policy. Ao incluir analytics ou
    pixels, liberar os domínios na CSP.
56. **`/api/contato` endurecida**: recusa outra origem (403), corpo que não é JSON (415) ou maior que 10KB
    (413), timeout de 8s no webhook e limpeza do mapa do rate limit.
57. **Hero desktop a partir de `xl`** e seções imagem + cards (`About`, `Commitments`, `SobrePratica`)
    lado a lado só a partir de `xl`: entre 1024 e 1279px a arte centralizada encostava no texto e os cards
    ficavam com ~150px. Acima de 1280px tudo segue o Figma.
58. **Mantidos como no Figma** (sinalizados à cliente): o conector vertical da linha do tempo dos
    princípios cruza o texto do card 4 e, no hero da Sobre, o botão "Conheça nossas soluções" fica sobre o
    livro branco da foto.
59. **"Trabalhe Conosco" removido** da linha legal do footer: a cliente não terá essa área (o link do
    Figma apontava para uma página inexistente, 404). A linha legal fica com Política, Termos e
    Preferências de cookies.
