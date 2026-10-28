import Link from "next/link";
import { LegalHeader, LegalSection } from "@/components/sections/legal";
import { JsonLd } from "@/components/seo/json-ld";
import { Accent } from "@/components/ui/heading";
import { companyData } from "@/data/legal-texts";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Política de Privacidade",
  description:
    "Saiba como a Vallesquino Health coleta, utiliza, armazena e protege os dados pessoais enviados pelo site, em conformidade com a LGPD (Lei 13.709/2018).",
  path: "/politica-de-privacidade",
});

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Política de Privacidade", path: "/politica-de-privacidade" }])} />
      <LegalHeader
        eyebrow="LGPD · Lei 13.709/2018"
        title={
          <>
            Política de <Accent>Privacidade</Accent>
          </>
        }
        updatedAt={companyData.ultimaAtualizacao}
      />

      <LegalSection id="quem-somos" title="1. Quem somos">
        <p>
          A {companyData.razaoSocial}, inscrita no CNPJ {companyData.cnpj}, com sede em {companyData.endereco}, que atua
          sob o nome {companyData.nomeFantasia} (“Vallesquino Health”, “nós”), é a controladora dos dados pessoais
          tratados por meio do site {companyData.site}, nos termos da Lei Geral de Proteção de Dados Pessoais (LGPD — Lei
          nº 13.709/2018).
        </p>
        <p>
          Esta Política explica quais dados coletamos, para quais finalidades, com quem eles podem ser compartilhados,
          por quanto tempo são mantidos e como você pode exercer os seus direitos como titular.
        </p>
      </LegalSection>

      <LegalSection id="dados-coletados" title="2. Quais dados coletamos">
        <p>
          <strong>Dados que você nos informa no formulário de pré-agendamento:</strong>
        </p>
        <ul>
          <li>nome completo, e-mail e número de WhatsApp;</li>
          <li>perfil do solicitante (por exemplo, empresa, departamento jurídico ou Poder Judiciário);</li>
          <li>serviço de interesse e a data e o horário de preferência para a reunião;</li>
          <li>a descrição do objetivo do contato, escrita livremente por você.</li>
        </ul>
        <p>
          <strong>Dados coletados automaticamente:</strong> informações técnicas necessárias ao funcionamento e à
          segurança do site, como endereço IP, data e hora de acesso, tipo de navegador e páginas visitadas, além da
          sua escolha sobre cookies, que fica registrada no armazenamento local do seu navegador.
        </p>
      </LegalSection>

      <LegalSection id="dados-sensiveis" title="3. Dados de saúde e dados sensíveis">
        <p>
          O formulário <strong>não solicita</strong> dados de saúde. Ainda assim, ao descrever o objetivo do contato,
          você pode mencionar informações sobre a sua saúde ou a de terceiros, que são dados pessoais sensíveis (art. 11
          da LGPD). Por isso, pedimos que, neste primeiro contato, envie apenas o necessário para entendermos a demanda,
          sem anexar exames, laudos ou prontuários.
        </p>
        <p>
          Quando dados sensíveis forem informados, eles serão tratados exclusivamente para avaliar e responder à sua
          solicitação, sob sigilo médico e profissional, conforme o Código de Ética Médica.
        </p>
      </LegalSection>

      <LegalSection id="finalidades" title="4. Para que usamos os seus dados e com qual base legal">
        <ul>
          <li>
            <strong>Responder ao seu contato e agendar a consultoria inicial gratuita</strong> — procedimentos
            preliminares relacionados a contrato, a pedido do titular (art. 7º, V, da LGPD).
          </li>
          <li>
            <strong>Prestar os serviços contratados</strong>, quando houver contratação — execução de contrato (art.
            7º, V) e, quando aplicável, tutela da saúde e exercício regular de direitos em processo judicial ou
            administrativo (arts. 7º, VI e VIII, e 11).
          </li>
          <li>
            <strong>Manter a segurança do site e prevenir fraudes e abusos</strong> — legítimo interesse (art. 7º, IX).
          </li>
          <li>
            <strong>Cumprir obrigações legais e regulatórias</strong> — art. 7º, II.
          </li>
          <li>
            <strong>Entender o uso do site por meio de cookies não essenciais</strong>, se forem utilizados — somente com
            o seu consentimento (art. 7º, I), que pode ser revogado a qualquer momento.
          </li>
        </ul>
        <p>Não vendemos dados pessoais e não os utilizamos para finalidades diferentes das descritas aqui.</p>
      </LegalSection>

      <LegalSection id="cookies" title="5. Cookies e tecnologias semelhantes">
        <p>
          Utilizamos o armazenamento local do navegador para registrar a sua escolha sobre cookies. Essa informação é
          estritamente necessária e não identifica você.
        </p>
        <p>
          Cookies de desempenho e análise ou de marketing só serão ativados com o seu consentimento, informado no aviso
          exibido na primeira visita. Você pode rever essa escolha a qualquer momento pelo link “Preferências de
          cookies”, no rodapé do site, ou bloquear e apagar cookies nas configurações do seu navegador.
        </p>
      </LegalSection>

      <LegalSection id="compartilhamento" title="6. Com quem compartilhamos os dados">
        <p>Os dados podem ser compartilhados apenas com:</p>
        <ul>
          <li>
            fornecedores que nos ajudam a operar o site e o atendimento, como hospedagem, ferramentas de automação e
            sistema de gestão de relacionamento (CRM), que tratam os dados em nosso nome e seguindo as nossas
            instruções;
          </li>
          <li>autoridades públicas e órgãos do Poder Judiciário, quando houver obrigação legal ou ordem judicial.</li>
        </ul>
        <p>
          Alguns desses fornecedores podem armazenar dados em servidores fora do Brasil. Nesses casos, a transferência
          internacional ocorre nas hipóteses permitidas pelo art. 33 da LGPD, com garantias adequadas de proteção.
        </p>
      </LegalSection>

      <LegalSection id="retencao" title="7. Por quanto tempo guardamos os dados">
        <p>
          Os dados enviados pelo formulário são mantidos pelo tempo necessário para responder à sua solicitação e, se
          não houver contratação, por até 12 meses, para histórico de atendimento. Havendo contratação, os dados são
          mantidos durante a prestação dos serviços e pelos prazos exigidos por lei ou necessários ao exercício regular
          de direitos. Depois disso, são eliminados ou anonimizados.
        </p>
      </LegalSection>

      <LegalSection id="seguranca" title="8. Como protegemos os dados">
        <p>
          Adotamos medidas técnicas e administrativas para proteger os dados contra acessos não autorizados, perda,
          alteração ou divulgação indevida, como conexão criptografada (HTTPS), acesso restrito às pessoas que precisam
          dos dados para o atendimento e dever de sigilo profissional.
        </p>
      </LegalSection>

      <LegalSection id="direitos" title="9. Os seus direitos como titular">
        <p>Nos termos do art. 18 da LGPD, você pode solicitar, a qualquer momento:</p>
        <ul>
          <li>a confirmação da existência de tratamento e o acesso aos seus dados;</li>
          <li>a correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>a anonimização, o bloqueio ou a eliminação de dados desnecessários ou tratados em desconformidade;</li>
          <li>a portabilidade dos dados a outro fornecedor;</li>
          <li>a eliminação dos dados tratados com base no seu consentimento e a revogação desse consentimento;</li>
          <li>informações sobre com quem os seus dados foram compartilhados.</li>
        </ul>
        <p>
          Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).
        </p>
      </LegalSection>

      <LegalSection id="contato" title="10. Como falar conosco">
        <p>
          Para exercer os seus direitos ou tirar dúvidas sobre esta Política, entre em contato com o encarregado pelo
          tratamento de dados pessoais, {companyData.encarregado}, pelo e-mail {companyData.emailContato} ou pelo
          telefone {companyData.telefone}. Responderemos no prazo previsto na legislação.
        </p>
        <p>
          Para agendar uma consultoria, utilize a página <Link href="/contato">Fale conosco</Link>. As regras de uso do
          site estão nos <Link href="/termos-de-uso">Termos de Uso</Link>.
        </p>
      </LegalSection>

      <LegalSection id="alteracoes" title="11. Alterações desta Política">
        <p>
          Esta Política pode ser atualizada para refletir mudanças no site, nos serviços ou na legislação. A data da
          última atualização está indicada no início deste documento.
        </p>
      </LegalSection>
    </>
  );
}
