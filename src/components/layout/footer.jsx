import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CookiePreferencesButton } from "@/components/ui/cookie-preferences-button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Accent, Heading, Lead } from "@/components/ui/heading";
import { Logo } from "@/components/ui/logo";
import { Reveal } from "@/components/ui/reveal";
import { SocialLink } from "@/components/ui/social-link";
import { footerNav, footerServices, legalNav, siteConfig, socialLinks } from "@/data/site";
import { cn } from "@/utils/cn";

function PatternStrip({ className }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -top-48.25 hidden h-469.25 w-75.5 items-center justify-center lg:flex",
        className,
      )}
    >
      <div className="relative h-75.5 w-469.25 shrink-0 -rotate-90">
        <Image src="/brand/pattern-excellence.svg" alt="" fill sizes="1877px" />
      </div>
    </div>
  );
}

function FooterLinks({ title, links, delay }) {
  return (
    <Reveal delay={delay} className="flex flex-col gap-4.5">
      <Eyebrow as="h2">{title}</Eyebrow>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="rounded-card font-sans text-footer-link text-on-dark/78 transition-colors hover:text-primary focus-visible:shadow-focus-ring focus-visible:outline-none"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-olive pt-16 pb-9 lg:pt-section-footer">
      <PatternStrip className="left-[calc(50%-1043px)]" />
      <PatternStrip className="left-[calc(50%+727px)]" />

      <Container className="flex flex-col gap-12.5">
        <section aria-labelledby="cta-final" className="flex justify-center py-12 lg:py-section">
          <div className="flex max-w-195 flex-col items-center gap-4 pt-1.5 text-center">
            <Reveal>
              <Heading id="cta-final" tone="dark" align="center">
                <Accent>Agende uma Consultoria </Accent>Inicial Gratuita de 30 minutos
              </Heading>
            </Reveal>
            <Reveal delay={0.1}>
              <Lead tone="dark" align="center" className="max-w-166">
                Nesses minutos iniciais, analisaremos o cenário para compreender sua demanda e avaliar se nossos
                serviços são adequados ao seu objetivo.
              </Lead>
            </Reveal>
            <Reveal delay={0.2}>
              <Button href={siteConfig.contactHref}>Agendar Consultoria Gratuita</Button>
            </Reveal>
          </div>
        </section>

        <div>
          <div className="grid gap-12 border-b border-border-on-dark pb-14.25 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-15 xl:h-66">
            <Reveal className="flex flex-col gap-6">
              <Logo variant="light" />
              <div className="flex max-w-77.5 flex-col gap-4 font-sans text-footer text-on-dark/72">
                <p>{siteConfig.tagline}</p>
                <p>
                  <strong className="block font-semibold text-primary">{siteConfig.responsible.name}</strong>
                  {siteConfig.responsible.footerCredentials}
                </p>
              </div>
              <ul className="flex gap-2.5">
                {socialLinks.map((social) => (
                  <li key={social.network}>
                    <SocialLink network={social.network} href={social.href} />
                  </li>
                ))}
              </ul>
            </Reveal>
            <FooterLinks title="Navegação" links={footerNav} delay={0.1} />
            <FooterLinks title="Serviços" links={footerServices} delay={0.2} />
          </div>

          <div className="flex flex-col gap-4 pt-6.5 sm:flex-row sm:flex-wrap sm:justify-between">
            <p className="font-sans text-caption text-on-dark/55">
              © 2026 {siteConfig.name}. Todos os direitos reservados.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-caption">
              {legalNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-card font-sans text-caption text-on-dark/55 transition-colors hover:text-primary focus-visible:shadow-focus-ring focus-visible:outline-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <CookiePreferencesButton />
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
