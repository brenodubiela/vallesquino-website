import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { FaqItem } from "@/components/ui/faq-item";
import { Heading } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";
import { faqs } from "@/data/contato";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export function Faq() {
  return (
    <section aria-labelledby="faq-titulo" className="bg-canvas pb-16 lg:pb-section">
      <JsonLd data={faqJsonLd} />
      <Container className="flex flex-col items-center gap-12.5">
        <Reveal>
          <Heading id="faq-titulo" align="center">
            Dúvidas Frequentes (FAQ)
          </Heading>
        </Reveal>
        <div className="flex w-full flex-col gap-6">
          {faqs.map((faq) => (
            <Reveal key={faq.question}>
              <FaqItem question={faq.question}>{faq.answer}</FaqItem>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
