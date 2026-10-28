# 📍 01 — Estado Atual

**Atualizado em:** 27/10/2026 · **Fase atual:** 4 concluída (estrutura) → próxima: **Fase 7** (webhook) / Fase 8

## Onde estamos
- Fases 1–3 ✅ e todas as páginas do Figma montadas (Home, Sobre, Soluções, 5 soluções, Fale conosco).
- Fase 4 ✅ (estrutura): `/politica-de-privacidade` e `/termos-de-uso` com texto real citando a LGPD;
  banner de cookies com categorias e "Preferências de cookies" no footer; `src/lib/consent.js`
  (`hasConsent`) para qualquer script de análise/marketing futuro.
- Formulário + `/api/contato` prontos; falta `N8N_WEBHOOK_URL` (sem ela a API responde 503).
- Ajustes de revisão aplicados: degradê no recorte (Análise/Atendimento), dropdown fecha ao tirar o mouse,
  contraste do título no hero do Fale conosco.
- Pré-repositório ✅: SEO por página (OG/Twitter/canonical + JSON-LD), headers de segurança + API
  endurecida, `motion` removido, loader com o logo, smooth scroll (Lenis), animação de entrada em 100%
  das seções, responsividade revisada de 360 a 1920px.

## Verificação da última entrega
- Lighthouse mobile (build de produção): Home 91 · Sobre 89 · Perícias 90 · Contato 89; desktop 97.
  Acessibilidade, boas práticas e SEO em 100 em todas. Antes: Home 66 · Perícias 84.
- Chrome headless: 11 páginas × 7 larguras sem rolagem horizontal; todas as seções animam ao rolar;
  âncora `/#solucoes` para em 96px do topo mesmo durante a inércia; sem erros no console.
- API: outra origem 403, sem JSON 415, corpo grande 413, honeypot/inválido 400; 0 vulnerabilidades no
  `npm audit`; nenhum segredo no bundle do cliente.
- `npm run build` ✅ (páginas legais estáticas) · `npm run lint` ✅ · sitemap com 11 URLs.
- Banner testado: aparece na 1ª visita, "Configurar → Salvar" grava as categorias, não reaparece após
  reload, reabre pelo footer com a escolha salva, "Aceitar todos" grava tudo; mobile sem overflow.

## Pendências abertas (precisam do cliente/agência)
- **Dados legais** em `src/data/legal-texts.js` (hoje entre colchetes nas páginas): razão social, CNPJ,
  endereço, e-mail, telefone, encarregado (DPO) e comarca do foro.
- `N8N_WEBHOOK_URL` e decisão sobre checkbox de consentimento no formulário.
- Licença comercial da fonte Swaraga · domínio final · links das redes.

## Próximo passo exato
Preencher os dados legais e o webhook assim que chegarem; depois Fase 8 (deploy na Vercel, Root Directory
= raiz, `NEXT_PUBLIC_SITE_URL` e `N8N_WEBHOOK_URL` nas variáveis de ambiente). O commit inicial aguarda
aprovação.
