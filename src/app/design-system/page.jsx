"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Check,
  Component,
  Copy,
  Eye,
  FileCode,
  Info,
  Layers,
  LayoutGrid,
  Palette,
  Ruler,
  Search,
  Shapes,
  Type,
} from "lucide-react";
import { PageLoader } from "@/components/layout/page-loader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckList } from "@/components/ui/check-list";
import { Container } from "@/components/ui/container";
import { CookieBannerPanel } from "@/components/ui/cookie-banner";
import { DateTimeField } from "@/components/ui/date-time-field";
import { DropdownLink } from "@/components/ui/dropdown-link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FaqItem } from "@/components/ui/faq-item";
import { FeatureCard } from "@/components/ui/feature-card";
import { Field } from "@/components/ui/field";
import { Accent, Heading, Lead } from "@/components/ui/heading";
import { IconTile } from "@/components/ui/icon-tile";
import { InfoCard } from "@/components/ui/info-card";
import { Input, Textarea } from "@/components/ui/input";
import { Logo } from "@/components/ui/logo";
import { NumberTile } from "@/components/ui/number-tile";
import { NumberedCard } from "@/components/ui/numbered-card";
import { PrincipleStep } from "@/components/ui/principle-step";
import { Reveal } from "@/components/ui/reveal";
import { ServiceCard } from "@/components/ui/service-card";
import { SocialLink } from "@/components/ui/social-link";
import { StepCard } from "@/components/ui/step-card";
import { Switch } from "@/components/ui/switch";
import { TagSelect } from "@/components/ui/tag-select";
import { TextLink } from "@/components/ui/text-link";
import { perfis, servicosDeInteresse } from "@/data/contato";
import { cn } from "@/utils/cn";

const navGroups = [
  {
    label: "Fundamentos",
    items: [
      { id: "colors", label: "Cores", icon: Palette },
      { id: "typography", label: "Tipografia", icon: Type },
      { id: "tokens", label: "Raios, Espaço & Sombra", icon: Ruler },
      { id: "brand", label: "Marca & Grafismo", icon: Shapes },
    ],
  },
  {
    label: "Componentes",
    items: [
      { id: "buttons", label: "Buttons", icon: Component },
      { id: "navigation", label: "Navigation", icon: LayoutGrid },
      { id: "eyebrow-lists", label: "Eyebrow & Lists", icon: Layers },
      { id: "cards", label: "Cards", icon: Layers },
      { id: "forms", label: "Forms", icon: FileCode },
    ],
  },
];

const pageCopy = {
  colors: "Paleta oficial do brandbook e superfícies extraídas da Home no Figma.",
  typography: "Swaraga para títulos, Montserrat para leitura. Cada estilo é um token text-*.",
  tokens: "Raios, espaçamentos nomeados e a única sombra de UI do sistema.",
  brand: "Logos, símbolo V + H e o pattern “O padrão da excelência”.",
  buttons: "CTAs do Figma (primary e soft) e variações derivadas para estados futuros.",
  navigation: "Links do header, dropdown de soluções e links sociais do footer.",
  "eyebrow-lists": "Rótulos, títulos com destaque, parágrafos de apoio e checklists.",
  cards: "Cards de diferenciais, públicos, soluções, etapas, números, princípios, informação e FAQ.",
  forms: "Campos do formulário de pré-agendamento, switch e o banner de cookies (LGPD).",
};

const colors = [
  { token: "primary", hex: "#E5AC5E", swatch: "bg-primary", role: "Dourado · CTA, destaques, ícones" },
  { token: "primary-hover", hex: "mix 88% primary + olive", swatch: "bg-primary-hover", role: "Derivado · hover do CTA" },
  { token: "olive · surface-dark", hex: "#2D3114", swatch: "bg-olive", role: "Verde oliva · seções escuras, títulos de card" },
  { token: "forest", hex: "#0B3C2D", swatch: "bg-forest", role: "Verde floresta · institucional (brandbook)" },
  { token: "beige · border", hex: "#F4E9D4", swatch: "bg-beige", role: "Bege · wordmark claro e hairlines" },
  { token: "canvas", hex: "#FDF9F2", swatch: "bg-canvas", role: "Fundo das seções claras" },
  { token: "surface", hex: "#FFFFFF", swatch: "bg-surface", role: "Cards sobre o canvas" },
  { token: "surface-muted", hex: "#F9F9F9", swatch: "bg-surface-muted", role: "Cards de soluções e públicos" },
  { token: "ink", hex: "#34363E", swatch: "bg-ink", role: "Texto e títulos sobre claro" },
  { token: "muted", hex: "#555555", swatch: "bg-muted", role: "Link de navegação inativo" },
  { token: "bronze", hex: "#64562A", swatch: "bg-bronze", role: "Tile numérico dos 7 princípios" },
  { token: "bronze-deep", hex: "#6B4715", swatch: "bg-bronze-deep", role: "Ponta escura da linha dos princípios" },
  { token: "ink-strong", hex: "#202020", swatch: "bg-ink-strong", role: "Texto do FAQ" },
  { token: "hairline", hex: "#E0E0E0", swatch: "bg-hairline", role: "Contorno dos cards do FAQ" },
  { token: "field-border", hex: "#E2E8F0", swatch: "bg-field-border", role: "Borda de campos e do card do formulário" },
  { token: "field-label", hex: "#18213C", swatch: "bg-field-label", role: "Rótulo dos campos" },
  { token: "field-placeholder", hex: "#A1A1AA", swatch: "bg-field-placeholder", role: "Placeholder e ícones dos campos" },
  { token: "tag-border · tag-text", hex: "#E8E8E8 · #4A4A4A", swatch: "bg-tag-border", role: "Tag do valor selecionado" },
  { token: "danger", hex: "#B3261E", swatch: "bg-danger", role: "Derivado · mensagens de erro" },
];

const onDarkOpacities = [
  { label: "on-dark", className: "text-on-dark", usage: "Títulos" },
  { label: "on-dark/92", className: "text-on-dark/92", usage: "Lead" },
  { label: "on-dark/78", className: "text-on-dark/78", usage: "Links do footer" },
  { label: "on-dark/72", className: "text-on-dark/72", usage: "Texto do footer" },
  { label: "on-dark/55", className: "text-on-dark/55", usage: "Linha legal" },
];

const typeScale = [
  { token: "text-display", spec: "Swaraga 700 · 36→54px · 1.2", className: "font-display text-display", sample: "Inteligência Ocupacional" },
  { token: "text-title", spec: "Swaraga 600 · 24px · 1", className: "font-display text-title text-olive", sample: "Perícias Médicas Judicial e Extrajudicial" },
  { token: "text-lead", spec: "Montserrat 400 · 18px · 1.2", className: "font-sans text-lead", sample: "Investigação médica independente e rigor metodológico." },
  { token: "text-body", spec: "Montserrat 400 · 18px · 1", className: "font-sans text-body", sample: "Reconstrução minuciosa de linhas do tempo e histórico clínico-ocupacional." },
  { token: "text-body-sm", spec: "Montserrat 400 · 16px · 1.2", className: "font-sans text-body-sm", sample: "Médica do Trabalho | Perícias Médicas | Ergonomia" },
  { token: "text-button", spec: "Montserrat 700 · 13.5px · +0.04em · CAPS", className: "font-sans text-button uppercase", sample: "Agendar consultoria gratuita" },
  { token: "text-nav", spec: "Montserrat 500 · 13px · +0.05em · CAPS", className: "font-sans text-nav uppercase text-muted", sample: "Sobre nós" },
  { token: "text-eyebrow", spec: "Montserrat 700 · 11px · +0.12em · CAPS", className: "font-sans text-eyebrow uppercase text-primary", sample: "Navegação" },
  { token: "text-footer", spec: "Montserrat 400 · 15.5px · 1.26", className: "font-sans text-footer", sample: "Inteligência Ocupacional" },
  { token: "text-footer-link", spec: "Montserrat 400 · 14.5px", className: "font-sans text-footer-link", sample: "Sobre a Vallesquino Health" },
  { token: "text-caption", spec: "Montserrat 400 · 12.5px", className: "font-sans text-caption", sample: "© 2026 Vallesquino Health. Todos os direitos reservados." },
  { token: "text-index", spec: "Montserrat 600 · 24px · 1 · −0.07em", className: "font-sans text-index text-primary", sample: "Passo - 01" },
  { token: "text-index-lg", spec: "Montserrat 600 · 62px · 1", className: "font-sans text-index-lg text-primary", sample: "1 2 3" },
  { token: "text-field", spec: "Montserrat 400 · 14px · 20px", className: "font-sans text-field text-field-label", sample: "Nome Completo*" },
  { token: "text-tag", spec: "Montserrat 500 · 12px", className: "font-sans text-tag text-tag-text", sample: "Empresa / Gestor de RH ou SST" },
  { token: "text-faq", spec: "Montserrat 400 · 16px · 24.75px", className: "font-sans text-faq text-ink-strong", sample: "Não. A reunião inicial de 30 minutos é totalmente gratuita." },
];

const solutionItems = [
  { label: "Perícias Médicas", href: "/solucoes/pericias-medicas" },
  { label: "Assistência Técnica Pericial", href: "/solucoes/assistencia-tecnica" },
  { label: "Gestão de Riscos Psicossociais (NR-1)", href: "/solucoes/riscos-psicossociais" },
];

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="overflow-hidden rounded-none bg-surface-dark">
      <div className="flex items-center justify-between border-b border-on-dark/10 px-4 py-2">
        <span className="flex items-center gap-2 font-mono text-caption text-on-dark-muted">
          <FileCode aria-hidden="true" className="size-3.5" />
          JSX
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 font-mono text-caption text-on-dark-muted transition-colors hover:text-on-dark focus-visible:text-primary focus-visible:outline-none"
        >
          {copied ? <Check aria-hidden="true" className="size-3.5 text-primary" /> : <Copy aria-hidden="true" className="size-3.5" />}
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-caption text-on-dark/92">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function LibraryComponentItem({ title, description, path, code, dark = false, previewClassName, children }) {
  return (
    <section className="flex flex-col border border-border bg-surface">
      <header className="flex flex-col gap-1 border-b border-border px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-display text-title text-olive">{title}</h3>
          {path && <code className="font-mono text-caption text-muted">{path}</code>}
        </div>
        {description && <p className="font-sans text-body-sm text-muted">{description}</p>}
      </header>
      <div className="flex items-center gap-2 px-6 pt-4 font-sans text-eyebrow uppercase text-muted">
        <Eye aria-hidden="true" className="size-3.5" />
        Preview
      </div>
      <div
        className={cn(
          "m-6 mt-3 flex flex-wrap items-center gap-6 p-8",
          dark ? "bg-surface-dark" : "bg-canvas",
          previewClassName,
        )}
      >
        {children}
      </div>
      {code && <CodeBlock code={code} />}
    </section>
  );
}

function EmptyState() {
  return (
    <div className="flex min-h-80 flex-col items-center justify-center gap-3 border border-dashed border-border bg-surface px-6 text-center">
      <span className="inline-flex size-12 items-center justify-center bg-surface-muted">
        <Info aria-hidden="true" className="size-5 text-primary" />
      </span>
      <p className="font-display text-title text-olive">Nenhum componente cadastrado nesta categoria ainda.</p>
      <p className="max-w-md font-sans text-body-sm text-muted">
        Os primitivos serão injetados aqui conforme as próximas fases avançam (formulário de contato na Fase 7).
      </p>
    </div>
  );
}

function ColorsSection() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {colors.map((color) => (
          <figure key={color.token} className="flex flex-col border border-border bg-surface">
            <div className={cn("h-24 border-b border-border", color.swatch)} />
            <figcaption className="flex flex-col gap-1 p-3">
              <span className="font-mono text-caption text-olive">{color.token}</span>
              <span className="font-mono text-caption text-muted">{color.hex}</span>
              <span className="font-sans text-caption text-ink">{color.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <LibraryComponentItem
        title="Texto sobre escuro"
        description="Opacidades do branco usadas no Figma sobre o verde oliva."
        dark
        previewClassName="flex-col items-start gap-3"
      >
        {onDarkOpacities.map((item) => (
          <p key={item.label} className={cn("font-sans text-lead", item.className)}>
            <span className="font-mono text-caption">{item.label}</span> — {item.usage}
          </p>
        ))}
      </LibraryComponentItem>
    </div>
  );
}

function TypographySection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2 border border-border bg-surface p-6">
          <Eyebrow>Display · next/font/local</Eyebrow>
          <p className="font-display text-display text-olive">Swaraga</p>
          <p className="font-display text-title text-ink">AaBbCcDdEe 0123456789</p>
          <p className="font-sans text-body-sm text-muted">Autoridade, confiança e peso institucional.</p>
        </div>
        <div className="flex flex-col gap-2 border border-border bg-surface p-6">
          <Eyebrow>Sans · next/font/google</Eyebrow>
          <p className="font-sans text-display font-bold text-olive">Montserrat</p>
          <p className="font-sans text-title text-ink">AaBbCcDdEe 0123456789</p>
          <p className="font-sans text-body-sm text-muted">Clareza e legibilidade para relatórios e laudos.</p>
        </div>
      </div>
      <div className="flex flex-col border border-border bg-surface">
        {typeScale.map((type) => (
          <div
            key={type.token}
            className="grid gap-2 border-b border-border px-6 py-5 last:border-b-0 md:grid-cols-[14rem_1fr] md:items-center"
          >
            <div className="flex flex-col gap-1">
              <code className="font-mono text-caption text-olive">{type.token}</code>
              <span className="font-sans text-caption text-muted">{type.spec}</span>
            </div>
            <p className={type.className}>{type.sample}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TokensSection() {
  return (
    <div className="flex flex-col gap-6">
      <LibraryComponentItem title="Raios" description="rounded-tag 8px · rounded-card 10px · rounded-media 16px · rounded-form 20px · rounded-panel 24px · rounded-pill 999px">
        {[
          ["rounded-tag", "size-24 rounded-tag"],
          ["rounded-card", "size-24 rounded-card"],
          ["rounded-media", "size-24 rounded-media"],
          ["rounded-form", "size-24 rounded-form"],
          ["rounded-panel", "size-24 rounded-panel"],
          ["rounded-pill", "h-12 w-32 rounded-pill"],
        ].map(([label, className]) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <div className={cn("bg-olive", className)} />
            <code className="font-mono text-caption text-muted">{label}</code>
          </div>
        ))}
      </LibraryComponentItem>
      <LibraryComponentItem
        title="Espaçamentos nomeados"
        description="Medidas do Figma que não caem na escala de 4px; o resto usa a escala nativa."
        previewClassName="flex-col items-start gap-4"
      >
        {[
          ["py-section", "96px", "w-24"],
          ["pt-section-footer", "80px", "w-20"],
          ["gap-gutter", "50px", "w-12.5"],
          ["max-w-site", "1280px", "w-full"],
        ].map(([label, value, width]) => (
          <div key={label} className="flex w-full items-center gap-4">
            <code className="w-40 shrink-0 font-mono text-caption text-olive">{label}</code>
            <div className={cn("h-3 bg-primary", width)} />
            <span className="shrink-0 font-mono text-caption text-muted">{value}</span>
          </div>
        ))}
      </LibraryComponentItem>
      <LibraryComponentItem
        title="Container"
        description="Largura útil de 1280px (box-content) com gutter lateral de 16/32px. Base de todas as seções."
        path="src/components/ui/container.jsx"
        previewClassName="block p-0"
        code={`<Container className="grid gap-10 lg:grid-cols-[589fr_641fr] lg:gap-gutter">...</Container>`}
      >
        <Container className="bg-primary/20 py-6 text-center font-mono text-caption text-olive">max-w-site · px-4 sm:px-8</Container>
      </LibraryComponentItem>
      <LibraryComponentItem
        title="Reveal"
        description="Fade + slide-up ao entrar na tela (CSS + um único IntersectionObserver em reveal-observer.jsx). Server Component: o texto sai no HTML; delay para cascata; respeita prefers-reduced-motion e funciona sem JS (noscript)."
        path="src/components/ui/reveal.jsx"
        previewClassName="items-start"
        code={`<Reveal><Heading>...</Heading></Reveal>\n<Reveal delay={0.1}><Lead>...</Lead></Reveal>\n<Reveal delay={0.2}><Button>...</Button></Reveal>`}
      >
        <Reveal>
          <IconTile />
        </Reveal>
        <Reveal delay={0.1}>
          <IconTile />
        </Reveal>
        <Reveal delay={0.2}>
          <IconTile />
        </Reveal>
      </LibraryComponentItem>
      <LibraryComponentItem
        title="Elevação & foco"
        description="Sistema plano: shadow-header é a única sombra de UI. O focus-ring é obrigatório em tudo que é interativo."
        code={`<div className="rounded-card bg-surface/94 shadow-header backdrop-blur-header" />\n<button className="focus-visible:shadow-focus-ring focus-visible:outline-none" />`}
      >
        <div className="flex h-17 w-72 items-center justify-center rounded-card bg-surface/94 font-sans text-caption text-muted shadow-header backdrop-blur-header">
          shadow-header
        </div>
        <div className="flex h-12 w-48 items-center justify-center rounded-card bg-surface font-sans text-caption text-muted shadow-focus-ring">
          shadow-focus-ring
        </div>
      </LibraryComponentItem>
    </div>
  );
}

function BrandSection() {
  const [loaderRun, setLoaderRun] = useState(0);

  return (
    <div className="flex flex-col gap-6">
      <LibraryComponentItem
        title="Logo"
        description="variant dark (sobre claro) e light (sobre escuro)."
        path="src/components/ui/logo.jsx"
        code={`<Logo />\n<Logo variant="light" />`}
      >
        <Logo href={null} />
      </LibraryComponentItem>
      <LibraryComponentItem title="Logo · light" dark>
        <Logo variant="light" href={null} />
      </LibraryComponentItem>
      <div className="grid gap-6 md:grid-cols-2">
        <LibraryComponentItem title="Símbolo V + H" description="public/brand/symbol-gold.svg" dark>
          <Image src="/brand/symbol-gold.svg" alt="Símbolo Vallesquino Health" width={320} height={175} className="h-auto w-full max-w-80" />
        </LibraryComponentItem>
        <LibraryComponentItem title="Pattern “O padrão da excelência”" description="public/brand/pattern-excellence.svg" dark>
          <Image src="/brand/pattern-excellence.svg" alt="Pattern de estrelas da marca" width={469} height={75} className="h-auto w-full" />
        </LibraryComponentItem>
      </div>
      <LibraryComponentItem
        title="PageLoader"
        description="Loader com o logo em toda carga e troca de página (1.35s, só CSS). Some com prefers-reduced-motion."
        path="src/components/layout/page-loader.jsx · src/app/(site)/template.jsx"
        dark
        previewClassName="block"
        code={`// src/app/(site)/template.jsx\n<PageLoader />\n{children}`}
      >
        <div className="relative h-72 overflow-hidden rounded-card">
          <PageLoader key={loaderRun} className="absolute z-0" />
        </div>
        <Button variant="outline" className="mt-4" onClick={() => setLoaderRun((run) => run + 1)}>
          Reproduzir
        </Button>
      </LibraryComponentItem>
    </div>
  );
}

function ButtonsSection() {
  return (
    <div className="flex flex-col gap-6">
      <LibraryComponentItem
        title="Button · primary"
        description="CTA principal do Figma. href interno → next/link."
        path="src/components/ui/button.jsx"
        code={`<Button href="/contato">Agendar consultoria gratuita</Button>`}
      >
        <Button href="#">Agendar consultoria gratuita</Button>
        <Button>Quero saber mais</Button>
        <Button disabled>Desabilitado</Button>
      </LibraryComponentItem>
      <LibraryComponentItem
        title="Button · soft"
        description="CTA secundário do Hero, sobre o verde oliva."
        code={`<Button href="/solucoes" variant="soft">Conheça nossas soluções</Button>`}
        dark
      >
        <Button href="#">Agendar consultoria gratuita</Button>
        <Button href="#" variant="soft">
          Conheça nossas soluções
        </Button>
      </LibraryComponentItem>
      <LibraryComponentItem
        title="Button · outline & ghost"
        description="Variações derivadas (não existem no Figma) para estados futuros, como o banner LGPD."
        code={`<Button variant="outline">Configurar</Button>\n<Button variant="ghost">Agora não</Button>`}
        dark
      >
        <Button variant="outline">Configurar</Button>
        <Button variant="ghost">Agora não</Button>
      </LibraryComponentItem>
    </div>
  );
}

function NavigationSection() {
  return (
    <div className="flex flex-col gap-6">
      <LibraryComponentItem
        title="TextLink"
        description="Link do menu. Ativo = dourado + bold (aria-current='page')."
        path="src/components/ui/text-link.jsx"
        code={`<TextLink href="/" active>Início</TextLink>\n<TextLink href="/sobre">Sobre nós</TextLink>`}
      >
        <TextLink href="#" active>
          Início
        </TextLink>
        <TextLink href="#">Sobre nós</TextLink>
      </LibraryComponentItem>
      <LibraryComponentItem
        title="DropdownLink"
        description="Abre no hover ou com foco de teclado (focus-visible) e fecha ao tirar o mouse, inclusive depois de um clique. CSS puro, continua Server Component."
        path="src/components/ui/dropdown-link.jsx"
        previewClassName="min-h-64 items-start"
        code={`<DropdownLink\n  title="Soluções"\n  href="/solucoes"\n  items={[{ label: "Perícias Médicas", href: "/solucoes#pericias-medicas" }]}\n/>`}
      >
        <DropdownLink title="Soluções" href="#" items={solutionItems} />
      </LibraryComponentItem>
      <LibraryComponentItem
        title="Composição do header"
        description="Mesma composição do Header real (src/components/layout/header.jsx), aqui sem o position fixed."
        previewClassName="min-h-64 items-start bg-olive"
      >
        <div className="flex w-full flex-wrap items-center justify-between gap-6 rounded-card bg-surface/94 py-2.5 pr-3 pl-7.5 shadow-header backdrop-blur-header">
          <Logo href={null} />
          <nav aria-label="Exemplo de navegação" className="flex items-center gap-6.5">
            <TextLink href="#" active>
              Início
            </TextLink>
            <TextLink href="#">Sobre nós</TextLink>
            <DropdownLink title="Soluções" items={solutionItems} />
          </nav>
          <Button href="#">Fale conosco</Button>
        </div>
      </LibraryComponentItem>
      <LibraryComponentItem
        title="SocialLink"
        description="Círculo 38px com ícones do Figma (public/icons)."
        path="src/components/ui/social-link.jsx"
        code={`<SocialLink network="whatsapp" href="https://wa.me/55..." />`}
        dark
      >
        <SocialLink network="whatsapp" href="https://wa.me/" />
        <SocialLink network="facebook" href="https://facebook.com/" />
        <SocialLink network="instagram" href="https://instagram.com/" />
      </LibraryComponentItem>
    </div>
  );
}

function EyebrowListsSection() {
  return (
    <div className="flex flex-col gap-6">
      <LibraryComponentItem
        title="Eyebrow"
        path="src/components/ui/eyebrow.jsx"
        code={`<Eyebrow>Navegação</Eyebrow>`}
        dark
      >
        <Eyebrow>Navegação</Eyebrow>
        <Eyebrow>Serviços</Eyebrow>
      </LibraryComponentItem>
      <LibraryComponentItem
        title="Heading + Accent + Lead"
        description="Títulos em duas cores: trecho de destaque em primary."
        path="src/components/ui/heading.jsx"
        previewClassName="flex-col items-start gap-4"
        code={`<Heading>\n  Além do laudo convencional, <Accent>investigação integrada para problemas reais</Accent>\n</Heading>\n<Lead>No ambiente de trabalho...</Lead>`}
      >
        <Heading className="max-w-160">
          Além do laudo convencional, <Accent>investigação integrada para problemas reais</Accent>
        </Heading>
        <Lead className="max-w-157">
          No ambiente de trabalho, uma mesma situação pode revelar diferentes perspectivas: a versão da empresa, a
          percepção do trabalhador e as evidências registradas em documentos, prontuários e postos de trabalho.
        </Lead>
      </LibraryComponentItem>
      <LibraryComponentItem
        title="Heading · tone dark · center"
        dark
        previewClassName="flex-col items-center"
        code={`<Heading tone="dark" align="center">\n  Respostas técnicas <Accent>ajustadas à sua necessidade</Accent>\n</Heading>`}
      >
        <Heading tone="dark" align="center" className="max-w-195">
          Respostas técnicas <Accent>ajustadas à sua necessidade</Accent>
        </Heading>
        <Lead tone="dark" align="center" className="max-w-166">
          Nesses minutos iniciais, analisaremos o cenário para compreender sua demanda e avaliar se nossos serviços são
          adequados ao seu objetivo.
        </Lead>
      </LibraryComponentItem>
      <LibraryComponentItem
        title="CheckList & IconTile"
        path="src/components/ui/check-list.jsx"
        previewClassName="items-start"
        code={`<IconTile />\n<CheckList items={["Exame médico-pericial rigoroso e reconstrução da linha do tempo"]} />`}
      >
        <IconTile />
        <CheckList
          className="max-w-146"
          items={[
            "Estudo criterioso dos autos e análise detalhada da documentação médica",
            "Exame médico-pericial rigoroso e reconstrução da linha do tempo",
            "Avaliação fundamentada de nexo causal, concausalidade e capacidade laboral",
          ]}
        />
      </LibraryComponentItem>
    </div>
  );
}

function CardsSection() {
  return (
    <div className="flex flex-col gap-6">
      <LibraryComponentItem
        title="FeatureCard · surface white"
        description="Diferenciais da seção “Além do laudo convencional”."
        path="src/components/ui/feature-card.jsx"
        previewClassName="grid items-stretch sm:grid-cols-2"
        code={`<FeatureCard title="Investigação Criteriosa">\n  Reconstrução minuciosa de linhas do tempo...\n</FeatureCard>`}
      >
        <FeatureCard title="Investigação Criteriosa">
          Reconstrução minuciosa de linhas do tempo, histórico clínico-ocupacional e verificação criteriosa dos
          documentos do processo.
        </FeatureCard>
        <FeatureCard title="Confronto de Hipóteses">
          Análise detalhada das variáveis para avaliar o nexo causal, concausalidade, NTEP e capacidade laborativa com
          fundamentação técnica.
        </FeatureCard>
      </LibraryComponentItem>
      <LibraryComponentItem
        title="FeatureCard · surface muted"
        description="Cards de públicos sobre o verde oliva."
        dark
        previewClassName="grid items-stretch md:grid-cols-3"
        code={`<FeatureCard surface="muted" title="Para Magistrados e Poder Judiciário:">...</FeatureCard>`}
      >
        <FeatureCard surface="muted" title="Para Magistrados e Poder Judiciário:">
          Auxílio técnico imparcial com laudos claros, concisos e fundamentados.
        </FeatureCard>
        <FeatureCard surface="muted" title="Para Departamentos Jurídicos e Advogados:">
          Fundamentação técnica sólida para sustentação de teses defensivas ou acusatórias.
        </FeatureCard>
        <FeatureCard surface="muted" title="Para Empresas e Gestores de RH / SST:">
          Inteligência preventiva e decisória para gestão de afastamentos.
        </FeatureCard>
      </LibraryComponentItem>
      <LibraryComponentItem
        title="ServiceCard"
        description="Card de solução: imagem 188px, título, descrição, checklist e CTA."
        path="src/components/ui/service-card.jsx"
        previewClassName="block"
        code={`<ServiceCard\n  image="/images/solucao-pericias-medicas.jpg"\n  imageAlt="Médica perita analisando documentos"\n  title="Perícias Médicas Judicial e Extrajudicial"\n  description="Atuação imparcial e técnica..."\n  items={[...]}\n  cta={{ label: "Quero saber mais", href: "/solucoes#pericias-medicas" }}\n/>`}
      >
        <ServiceCard
          className="max-w-154"
          image="/images/solucao-pericias-medicas.jpg"
          imageAlt="Médica perita analisando documentos e gráficos em um notebook"
          imageClassName="object-[50%_39%]"
          title="Perícias Médicas Judicial e Extrajudicial"
          description="Atuação imparcial e técnica para subsidiar órgãos julgadores na elucidação de questões médico-ocupacionais complexas."
          items={[
            "Estudo criterioso dos autos e análise detalhada da documentação médica",
            "Exame médico-pericial rigoroso e reconstrução da linha do tempo",
            "Avaliação fundamentada de nexo causal, concausalidade e capacidade laboral",
            "Laudos claros, imparciais e objetivamente fundamentados para o Juízo",
          ]}
          cta={{ label: "Quero saber mais", href: "#" }}
        />
      </LibraryComponentItem>
      <LibraryComponentItem
        title="StepCard + Badge"
        description="Etapas das páginas de solução: badge “Passo - 0X” (primary/30), título e texto."
        path="src/components/ui/step-card.jsx"
        previewClassName="grid items-start md:grid-cols-2"
        code={`<StepCard step="Passo - 01" title="Estudo Criterioso dos Autos">\n  Exame detalhado das petições...\n</StepCard>`}
      >
        <StepCard step="Passo - 01" title="Estudo Criterioso dos Autos">
          Exame detalhado das petições, contestação, documentos ocupacionais (PGR, PCMSO, LTCAT), exames complementares e
          histórico clínico do periciando.
        </StepCard>
        <div className="flex flex-col items-start gap-3">
          <Badge>Passo - 02</Badge>
          <code className="font-mono text-caption text-muted">src/components/ui/badge.jsx</code>
        </div>
      </LibraryComponentItem>
      <LibraryComponentItem
        title="NumberedCard + NumberTile"
        description="Lista numerada da página Sobre. NumberTile md (olive) e lg (bronze, 98px)."
        path="src/components/ui/numbered-card.jsx"
        previewClassName="grid items-start md:grid-cols-2"
        code={`<NumberedCard number="01">A versão da empresa</NumberedCard>\n<NumberTile size="lg">1</NumberTile>`}
      >
        <NumberedCard number="01">A versão da empresa</NumberedCard>
        <NumberedCard number="02">A percepção do trabalhador</NumberedCard>
        <div className="flex items-center gap-4 bg-olive p-4">
          <NumberTile>03</NumberTile>
          <NumberTile size="lg">7</NumberTile>
        </div>
      </LibraryComponentItem>
      <LibraryComponentItem
        title="PrincipleStep"
        description="Item da linha do tempo dos 7 princípios (Sobre). A linha dourada → bronze fica na seção."
        path="src/components/ui/principle-step.jsx"
        dark
        previewClassName="justify-center"
        code={`<PrincipleStep number={2} title="Rigor">\n  Investigação detalhada de fatos, documentos e evidências sem atalhos.\n</PrincipleStep>`}
      >
        <PrincipleStep number={2} title="Rigor" className="w-67.75">
          Investigação detalhada de fatos, documentos e evidências sem atalhos.
        </PrincipleStep>
        <PrincipleStep number={3} title="Ética" className="w-67.75">
          Compromisso inegociável com a verdade científica e a imparcialidade
        </PrincipleStep>
      </LibraryComponentItem>
      <LibraryComponentItem
        title="InfoCard"
        description="Card horizontal de informação (Fale conosco): IconTile + texto."
        path="src/components/ui/info-card.jsx"
        code={`<InfoCard>Atendimento presencial e remoto sob agendamento prévio...</InfoCard>`}
      >
        <InfoCard className="max-w-160.25">
          Atendimento presencial e remoto sob agendamento prévio. Cobertura de atuação em Americana/SP, Região
          Metropolitana de Campinas e atuação pericial/consultiva em âmbito nacional.
        </InfoCard>
      </LibraryComponentItem>
      <LibraryComponentItem
        title="FaqItem"
        description="Pergunta e resposta do FAQ: rounded-panel 24px, contorno hairline, sempre aberto (como no Figma)."
        path="src/components/ui/faq-item.jsx"
        previewClassName="block"
        code={`<FaqItem question="A consultoria de 30 minutos possui algum custo?">\n  Não. A reunião inicial...\n</FaqItem>`}
      >
        <FaqItem question="A consultoria de 30 minutos possui algum custo?">
          Não. A reunião inicial de 30 minutos é totalmente gratuita e serve para avaliarmos a viabilidade do projeto, o
          escopo da atuação e o alinhamento entre as necessidades do cliente/processo e as soluções da Vallesquino Health.
        </FaqItem>
      </LibraryComponentItem>
    </div>
  );
}

function FormsSection() {
  const [perfil, setPerfil] = useState("Empresa / Gestor de RH ou SST");
  const [servico, setServico] = useState("");
  const [dataHorario, setDataHorario] = useState("");
  const [analytics, setAnalytics] = useState(true);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({ analytics: false, marketing: false });

  return (
    <div className="flex flex-col gap-6">
      <LibraryComponentItem
        title="Field + Input / Textarea"
        description="Rótulo text-field 500 field-label, campo 40px com borda field-border, foco dourado e erro em danger."
        path="src/components/ui/field.jsx · input.jsx"
        previewClassName="grid items-start md:grid-cols-2"
        code={`<Field id="nome" label="Nome Completo" required error={erro}>\n  <Input id="nome" placeholder="Pedro Dutra" />\n</Field>`}
      >
        <Field id="ds-nome" label="Nome Completo" required>
          <Input id="ds-nome" placeholder="Pedro Dutra" />
        </Field>
        <Field id="ds-email" label="E-mail:" error="Informe um e-mail válido.">
          <Input id="ds-email" placeholder="Pedro.Duarte@gmail.com" defaultValue="pedro@" aria-invalid />
        </Field>
        <Field id="ds-objetivo" label="Objetivo do Contato:" className="md:col-span-2">
          <Textarea
            id="ds-objetivo"
            placeholder="Descreva brevemente a situação atual, o contexto do caso ou o objetivo da consultoria."
          />
        </Field>
      </LibraryComponentItem>
      <LibraryComponentItem
        title="TagSelect"
        description="Seleção única com o valor exibido como tag removível (×) e ícone chevrons-up-down. Combobox acessível: setas, Enter, Esc."
        path="src/components/ui/tag-select.jsx"
        previewClassName="grid min-h-96 items-start md:grid-cols-2"
        code={`<TagSelect id="perfil" options={perfis} value={valor} onChange={setValor} />`}
      >
        <Field id="ds-perfil" label="Perfil do Solicitante:">
          <TagSelect id="ds-perfil" options={perfis} value={perfil} onChange={setPerfil} />
        </Field>
        <Field id="ds-servico" label="Serviço de Interesse:">
          <TagSelect id="ds-servico" options={servicosDeInteresse} value={servico} onChange={setServico} />
        </Field>
      </LibraryComponentItem>
      <LibraryComponentItem
        title="DateTimeField"
        description="Abre o seletor nativo de data e hora (intervalos de 30 min, a partir de agora) e exibe o valor formatado em pt-BR."
        path="src/components/ui/date-time-field.jsx"
        previewClassName="block"
        code={`<DateTimeField id="dataHorario" value={valor} onChange={setValor} />`}
      >
        <Field id="ds-data" label="Selecione a Data e o Horário para a Reunião (30 min):" className="max-w-135.25">
          <DateTimeField id="ds-data" value={dataHorario} onChange={setDataHorario} />
        </Field>
      </LibraryComponentItem>
      <LibraryComponentItem
        title="Switch"
        description="Checkbox nativo com role=switch (acessível por teclado). Tons dark (banner) e light."
        path="src/components/ui/switch.jsx"
        previewClassName="grid items-start md:grid-cols-2"
        code={`<Switch id="analytics" label="Desempenho e análise" checked={valor} onChange={setValor} />`}
      >
        <div className="bg-surface-dark p-6">
          <Switch
            id="ds-switch-dark"
            label="Desempenho e análise"
            description="Ajudam a entender como o site é utilizado."
            checked={analytics}
            onChange={setAnalytics}
          />
        </div>
        <div className="flex flex-col gap-4 bg-surface p-6">
          <Switch id="ds-switch-light" tone="light" label="Necessários" description="Sempre ativos." checked disabled />
          <Switch id="ds-switch-light-2" tone="light" label="Marketing" checked={analytics} onChange={setAnalytics} />
        </div>
      </LibraryComponentItem>
      <LibraryComponentItem
        title="CookieBanner (LGPD)"
        description="Banner fixo no rodapé, sobe com animação CSS e grava a escolha em localStorage (vallesquino_cookie_consent). “Configurar” abre as categorias. Reabre pelo link “Preferências de cookies” do footer."
        path="src/components/ui/cookie-banner.jsx · src/lib/consent.js"
        dark
        previewClassName="block"
        code={`// já renderizado em src/app/(site)/layout.jsx\n<CookieBanner />\n\n// antes de carregar uma ferramenta de análise:\nimport { hasConsent } from "@/lib/consent";\nif (hasConsent("analytics")) { /* carregar script */ }`}
      >
        <CookieBannerPanel
          titleId="ds-cookie"
          showPreferences={showPreferences}
          preferences={preferences}
          onPreferencesChange={setPreferences}
          onConfigure={() => setShowPreferences(true)}
          onAcceptAll={() => setShowPreferences(false)}
          onRejectOptional={() => setShowPreferences(false)}
          onSave={() => setShowPreferences(false)}
        />
      </LibraryComponentItem>
    </div>
  );
}

const sections = {
  colors: ColorsSection,
  typography: TypographySection,
  tokens: TokensSection,
  brand: BrandSection,
  buttons: ButtonsSection,
  navigation: NavigationSection,
  "eyebrow-lists": EyebrowListsSection,
  cards: CardsSection,
  forms: FormsSection,
};

export default function DesignSystemPage() {
  const [activeComponent, setActiveComponent] = useState("colors");
  const [query, setQuery] = useState("");

  const filteredGroups = useMemo(() => {
    const term = query.trim().toLowerCase();
    return navGroups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => item.label.toLowerCase().includes(term)),
      }))
      .filter((group) => group.items.length > 0);
  }, [query]);

  const activeItem = navGroups.flatMap((group) => group.items).find((item) => item.id === activeComponent);
  const ActiveSection = sections[activeComponent];

  return (
    <div className="flex min-h-svh flex-col bg-canvas font-sans lg:flex-row">
      <aside className="flex w-full shrink-0 flex-col rounded-none bg-surface-dark lg:sticky lg:top-0 lg:h-svh lg:w-72">
        <div className="flex flex-col gap-3 border-b border-border-on-dark px-6 py-6">
          <Logo variant="light" href="/" />
          <div>
            <p className="font-display text-title text-on-dark">Vallesquino Health</p>
            <p className="font-sans text-caption text-on-dark-muted">Design System Library</p>
          </div>
        </div>
        <div className="px-4 py-4">
          <label className="flex items-center gap-2 border border-border-on-dark px-3 py-2 focus-within:border-primary">
            <Search aria-hidden="true" className="size-4 text-on-dark-muted" />
            <span className="sr-only">Buscar categoria</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar..."
              className="w-full rounded-none bg-transparent font-sans text-footer-link text-on-dark placeholder:text-on-dark/55 focus:outline-none"
            />
          </label>
        </div>
        <nav aria-label="Categorias do Design System" className="flex-1 overflow-y-auto px-2 pb-4">
          {filteredGroups.map((group) => (
            <div key={group.label} className="mb-4">
              <p className="px-4 pb-2 font-sans text-eyebrow uppercase text-on-dark/55">{group.label}</p>
              <ul className="flex flex-col">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = item.id === activeComponent;
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => setActiveComponent(item.id)}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-none border-l-2 px-4 py-2.5 text-left font-sans text-footer-link transition-colors focus-visible:bg-on-dark/10 focus-visible:outline-none",
                          isActive
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-transparent text-on-dark-muted hover:bg-on-dark/5 hover:text-on-dark",
                        )}
                      >
                        <Icon aria-hidden="true" className="size-4 shrink-0" />
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
          {filteredGroups.length === 0 && (
            <p className="px-4 font-sans text-caption text-on-dark/55">Nenhuma categoria encontrada.</p>
          )}
        </nav>
        <div className="border-t border-border-on-dark px-6 py-4 font-mono text-caption text-on-dark/55">
          v1.0.0 · Next.js 16 · Tailwind v4
        </div>
      </aside>

      <main className="min-w-0 flex-1 px-4 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-site flex-col gap-8">
          <header className="flex flex-col gap-2 border-b border-border pb-6">
            <Eyebrow>Design System · Vallesquino Health</Eyebrow>
            <h1 className="font-display text-display text-olive">{activeItem?.label}</h1>
            <p className="font-sans text-lead text-muted">{pageCopy[activeComponent]}</p>
          </header>
          <ActiveSection />
        </div>
      </main>
    </div>
  );
}
