import { ContactForm } from "@/components/sections/contact-form";
import { Container } from "@/components/ui/container";
import { Accent, Heading, Lead } from "@/components/ui/heading";
import { InfoCard } from "@/components/ui/info-card";
import { Reveal } from "@/components/ui/reveal";
import { SocialLink } from "@/components/ui/social-link";
import { coberturaAtendimento } from "@/data/contato";
import { socialLinks } from "@/data/site";

export function Contact() {
  return (
    <section aria-labelledby="agendamento-titulo" className="bg-canvas py-16 lg:py-section">
      <Container className="grid items-start gap-10 lg:grid-cols-[641fr_589fr] lg:gap-gutter">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Reveal>
              <Heading id="agendamento-titulo" className="text-olive">
                Confirmar Pré-Agendamento da <Accent>Consultoria Gratuita</Accent>
              </Heading>
            </Reveal>
            <Reveal delay={0.1}>
              <Lead className="max-w-157">
                Todas as informações enviadas por meio deste formulário são tratadas sob rigoroso sigilo médico, técnico e
                profissional, em conformidade com as diretrizes da LGPD e com o Código de Ética Médica.
              </Lead>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <InfoCard>{coberturaAtendimento}</InfoCard>
          </Reveal>
          <Reveal delay={0.3}>
            <ul className="flex gap-2.5">
              {socialLinks.map((social) => (
                <li key={social.network}>
                  <SocialLink network={social.network} href={social.href} />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
