import Link from "next/link";
import { LegalHeader, LegalSection } from "@/components/sections/legal";
import { JsonLd } from "@/components/seo/json-ld";
import { Accent } from "@/components/ui/heading";
import { companyData } from "@/data/legal-texts";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Termos de Uso",
  description:
    "Condições de uso do site da Vallesquino Health: finalidade informativa do conteúdo, consultoria inicial, propriedade intelectual e responsabilidades.",
  path: "/termos-de-uso",
});

export default function TermosDeUsoPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Termos de Uso", path: "/termos-de-uso" }])} />
      <LegalHeader
        eyebrow="Condições de uso do site"
        title={
          <>
            Termos de <Accent>Uso</Accent>
          </>
        }
        updatedAt={companyData.ultimaAtualizacao}
      />

      <LegalSection id="aceitacao" title="1. Aceitação">
        <p>
          Estes Termos regulam o uso do site {companyData.site}, mantido pela {companyData.razaoSocial}, inscrita no CNPJ{" "}
          {companyData.cnpj}, que atua sob o nome {companyData.nomeFantasia}. Ao navegar pelo site ou enviar o formulário
          de pré-agendamento, você declara que leu e concorda com estes Termos e com a nossa{" "}
          <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
        </p>
      </LegalSection>

      <LegalSection id="finalidade" title="2. Finalidade do site">
        <p>
          O site apresenta a Vallesquino Health e os seus serviços de inteligência médico-ocupacional — perícias
          médicas, assistência técnica pericial, análise técnica para tomada de decisão, gestão de riscos psicossociais
          (NR-1) e atendimento médico ocupacional individualizado — e permite solicitar uma consultoria inicial.
        </p>
        <p>
          O conteúdo publicado tem caráter <strong>exclusivamente informativo</strong>. Ele não substitui consulta,
          avaliação médica, laudo, parecer técnico ou orientação jurídica individualizada, e não deve ser usado para
          decisões sem a análise do caso concreto.
        </p>
      </LegalSection>

      <LegalSection id="consultoria-inicial" title="3. Consultoria inicial gratuita">
        <ul>
          <li>
            A consultoria inicial de 30 minutos é gratuita e tem como objetivo compreender a demanda e avaliar a
            viabilidade e o escopo da atuação.
          </li>
          <li>
            Ela não constitui laudo, parecer ou qualquer manifestação técnica conclusiva, e não gera obrigação de
            contratação para nenhuma das partes.
          </li>
          <li>
            A data e o horário indicados no formulário são uma preferência. O agendamento só é confirmado após o nosso
            retorno.
          </li>
          <li>
            O site e o formulário <strong>não se destinam a urgências ou emergências médicas</strong>. Nesses casos,
            procure imediatamente um serviço de saúde ou ligue para o SAMU (192).
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="responsabilidades-usuario" title="4. Responsabilidades de quem usa o site">
        <ul>
          <li>fornecer informações verdadeiras, completas e atualizadas no formulário;</li>
          <li>enviar dados de terceiros apenas quando tiver autorização ou base legal para isso;</li>
          <li>
            não utilizar o site para enviar conteúdo ilícito, ofensivo ou malicioso, nem tentar acessar áreas restritas
            ou comprometer o seu funcionamento.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="propriedade-intelectual" title="5. Propriedade intelectual">
        <p>
          A marca Vallesquino Health, o símbolo, os textos, as imagens, o grafismo e o layout do site são protegidos pela
          legislação de propriedade intelectual. É proibido copiar, reproduzir, modificar ou utilizar esse conteúdo para
          fins comerciais sem autorização prévia e por escrito.
        </p>
      </LegalSection>

      <LegalSection id="limitacao" title="6. Disponibilidade e limitação de responsabilidade">
        <p>
          Empregamos esforços razoáveis para manter o site disponível e com informações corretas, mas ele pode passar
          por interrupções, manutenções ou falhas técnicas. Não nos responsabilizamos por decisões tomadas exclusivamente
          com base no conteúdo informativo do site nem por danos decorrentes de uso indevido.
        </p>
        <p>
          Links para sites de terceiros, como redes sociais, são oferecidos por conveniência. Não controlamos o conteúdo
          nem as práticas de privacidade desses sites.
        </p>
      </LegalSection>

      <LegalSection id="dados-pessoais" title="7. Dados pessoais">
        <p>
          O tratamento dos dados enviados pelo site segue a LGPD (Lei nº 13.709/2018) e está descrito na{" "}
          <Link href="/politica-de-privacidade">Política de Privacidade</Link>, que faz parte destes Termos.
        </p>
      </LegalSection>

      <LegalSection id="alteracoes" title="8. Alterações">
        <p>
          Estes Termos podem ser atualizados a qualquer momento. A versão vigente é sempre a publicada nesta página, com
          a data da última atualização indicada no início.
        </p>
      </LegalSection>

      <LegalSection id="legislacao" title="9. Legislação e foro">
        <p>
          Estes Termos são regidos pela legislação brasileira. Fica eleito o foro da comarca de {companyData.foro} para
          resolver eventuais controvérsias, ressalvados os direitos do consumidor de ajuizar ação em seu domicílio.
        </p>
        <p>
          Dúvidas sobre estes Termos podem ser enviadas para {companyData.emailContato} ou pela página{" "}
          <Link href="/contato">Fale conosco</Link>.
        </p>
      </LegalSection>
    </>
  );
}
