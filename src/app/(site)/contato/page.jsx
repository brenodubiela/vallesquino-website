import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { JsonLd } from "@/components/seo/json-ld";
import { Accent } from "@/components/ui/heading";
import { heroArt } from "@/data/heroes";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Fale conosco",
  description:
    "Agende uma consultoria inicial gratuita de 30 minutos com a Dra. Valéria Vallesquino e avalie o alinhamento da sua demanda com nossas soluções.",
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Fale conosco", path: "/contato" }])} />
      <Hero
        art={heroArt.contato}
        title={
          <>
            Agende uma <Accent>Consultoria Inicial Gratuita de 30 minutos</Accent> com a Dra. Valéria Vallesquino
          </>
        }
        lead="Nesses minutos iniciais, analisaremos o seu cenário para compreender sua demanda e avaliar o alinhamento com nossas soluções."
      />
      <Contact />
      <Faq />
    </>
  );
}
