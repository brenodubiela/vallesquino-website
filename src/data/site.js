export const siteConfig = {
  name: "Vallesquino Health",
  tagline: "Inteligência Ocupacional",
  description:
    "Investigação médica independente, análise fundamentada e rigor metodológico para subsidiar decisões complexas em Saúde Ocupacional e Direito Médico.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  responsible: {
    name: "Dra. Valéria Cristiane Galvão Vallesquino",
    footerCredentials: "Médica do Trabalho | Perícias Médicas e Áreas da Saúde | Ergonomia",
  },
  contactHref: "/contato",
};

export const solutions = [
  {
    slug: "pericias-medicas",
    navLabel: "Perícias Médicas",
    title: "Perícias Médicas Judicial e Extrajudicial",
    description:
      "Atuação imparcial e técnica para subsidiar órgãos julgadores na elucidação de questões médico-ocupacionais complexas.",
    items: [
      "Estudo criterioso dos autos e análise detalhada da documentação médica",
      "Exame médico-pericial rigoroso e reconstrução da linha do tempo",
      "Avaliação fundamentada de nexo causal, concausalidade e capacidade laboral",
      "Laudos claros, imparciais e objetivamente fundamentados para o Juízo",
    ],
    image: "/images/solucao-pericias-medicas.jpg",
    imageAlt: "Médica perita analisando documentos de um processo ao lado de um notebook com gráficos",
    imagePosition: "object-[50%_39.5%]",
  },
  {
    slug: "assistencia-tecnica",
    navLabel: "Assistência Técnica Pericial",
    title: "Assistência Técnica para Empresas e Jurídico",
    description:
      "Suporte técnico-estratégico completo para a defesa de empresas em processos trabalhistas e cíveis.",
    items: [
      "Análise prévia da viabilidade técnica e estudo do histórico do trabalhador",
      "Elaboração de quesitos periciais estratégicos e acompanhamento de diligências",
      "Avaliação rigorosa de nexo causal, NTEP e riscos do posto de trabalho",
      "Emissão de pareceres técnicos conclusivos e fundamentação de impugnações",
    ],
    image: "/images/solucao-assistencia-tecnica.jpg",
    imageAlt: "Médica e advogado conversando em um escritório corporativo",
    imagePosition: "object-[50%_37.6%]",
  },
  {
    slug: "analise-tecnica",
    navLabel: "Análise Técnica e Suporte à Decisão",
    title: "Análise Técnica e Suporte à Tomada de Decisão",
    description: "Suporte consultivo a gestores para a tomada de decisões em casos médico-ocupacionais críticos.",
    items: [
      "Gestão técnica de afastamentos, absenteísmo e casos de alta complexidade",
      "Avaliação de restrições funcionais, reabilitação profissional e mútua adequação",
      "Alinhamento e mediação na interface entre Medicina, RH, Operação e Jurídico",
    ],
    image: "/images/solucao-analise-tecnica.jpg",
    imageAlt: "Consultora apresentando indicadores em uma tela para gestores em pé",
    imagePosition: "object-center",
  },
  {
    slug: "riscos-psicossociais",
    navLabel: "Gestão de Riscos Psicossociais (NR-1)",
    title: "Gestão de Riscos Psicossociais (NR-1)",
    description:
      "Mapeamento e gestão estratégica de fatores psicossociais no ambiente de trabalho em conformidade com a NR-1.",
    items: [
      "Identificação e avaliação estruturada de riscos psicossociais ocupacionais",
      "Elaboração de planos de ação práticos e gerenciáveis para compliance",
      "Mitigação de passivos e promoção da sustentabilidade na saúde organizacional",
    ],
    image: "/images/solucao-riscos-psicossociais.jpg",
    imageAlt: "Reunião de equipe em uma sala de estar corporativa com quadro de anotações",
    imagePosition: "object-center",
  },
  {
    slug: "atendimento-individualizado",
    navLabel: "Atendimento Ocupacional Individualizado",
    title: "Atendimento Médico Ocupacional Individualizado",
    description:
      "Avaliação médica pontual para investigação aprofundada da relação entre histórico clínico e capacidade laborativa.",
    items: [
      "Anamnese detalhada e avaliação funcional individualizada",
      "Investigação minuciosa do nexo entre saúde e condições de trabalho",
    ],
    image: "/images/solucao-atendimento-individualizado.jpg",
    imageAlt: "Médica do trabalho ouvindo um paciente durante uma consulta",
    imagePosition: "object-[50%_33.3%]",
  },
];

export const mainNav = [
  { label: "Início", href: "/" },
  { label: "Sobre nós", href: "/sobre" },
  {
    label: "Soluções",
    href: "/solucoes",
    items: solutions.map((solution) => ({ label: solution.navLabel, href: `/solucoes/${solution.slug}` })),
  },
];

export const footerNav = [
  { label: "Início", href: "/" },
  { label: "Sobre a Vallesquino Health", href: "/sobre" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Fale conosco", href: "/contato" },
];

export const footerServices = [
  { label: "Perícias Médicas", href: "/solucoes/pericias-medicas" },
  { label: "Assistência Técnica Pericial", href: "/solucoes/assistencia-tecnica" },
  { label: "Análise Técnica e Suporte à Decisão", href: "/solucoes/analise-tecnica" },
  { label: "Gestão de Riscos Psicossociais (NR-1)", href: "/solucoes/riscos-psicossociais" },
  { label: "Atendimento Ocupacional Individualizado", href: "/solucoes/atendimento-individualizado" },
];

export const legalNav = [
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  { label: "Termos de Uso", href: "/termos-de-uso" },
];

export const socialLinks = [
  { network: "whatsapp", href: "https://wa.me/" },
  { network: "facebook", href: "https://www.facebook.com/" },
  { network: "instagram", href: "https://www.instagram.com/" },
];
