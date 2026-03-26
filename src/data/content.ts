// ============================================================
// CONTEÚDO DA PROPOSTA — Edite textos aqui
// ============================================================

export const HERO = {
  pill: "Proposta personalizada",
  titulo: {
    l1: "Um site",
    l2: "à altura",
    l3: "da Bossa.",
  },
  subtitulo:
    "Sua marca tem identidade, personalidade e um público fiel. Seu site vai começar a refletir isso.",
  chips: ["Site completo", "Painel admin", "Integrações", "45 dias"],
  greeting:
    "Preparamos essa proposta com base no briefing que você compartilhou. Entendemos o que a Bossa precisa e o que ficou faltando até agora.",
  tags: [
    "SprintHub integrado",
    "Bling integrado",
    "Google Merchant",
    "Meta Catalog",
    "45 dias de entrega",
    "Mobile-first",
  ],
};

export const STATS = [
  { label: "Investimento", valor: "R$ 15k", sub: "Veja as opções abaixo", highlight: false },
  { label: "Prazo", valor: "45 dias", sub: "Semanal", highlight: true },
  { label: "Manutenção", valor: "R$ 1.000", sub: "Opcional", highlight: false },
  { label: "Suporte pós-entrega", valor: "30 dias", sub: "Incluídos", highlight: false },
];

export const BRIEFING = {
  tag: "Entendemos o que vocês precisam",
  titulo: "O objetivo está",
  tituloDestaque: "claro",
  tituloFim: "pra nós",
  lead: "Vocês não precisam de mais um site genérico. Precisam de algo que fale com o carioca, que a equipe opere sem precisar chamar ninguém, e que a marca apareça como merece.",
  items: [
    {
      icon: "🏖️",
      iconBg: "linear-gradient(135deg,#c8e8f8,#f4f4a0)",
      titulo: "Identidade Carioca",
      subtitulo: "Uma marca do Rio merece um site que mostra isso",
      descricao:
        "O design vai conversar com quem conhece o Rio de verdade. Referências de Copacabana, a paleta da cidade, elementos que fazem sentido com a identidade da Bossa.",
    },
    {
      icon: "🎛️",
      iconBg: "var(--w2)",
      titulo: "Filtros inteligentes",
      subtitulo: "30+ atributos. O cliente chega no modelo certo",
      descricao:
        "Categoria, faixa de preço, autonomia, potência, velocidade, passageiros, peso, dobrável, pedal, bateria removível, NFC, alarme, bluetooth e muito mais.",
    },
    {
      icon: "⚙️",
      iconBg: "var(--gll)",
      titulo: "Autonomia total",
      subtitulo: "Painel simples, sem precisar chamar ninguém",
      descricao:
        "Cadastrar produto, trocar preço, atualizar foto. Tudo em poucos cliques, sem entender de código, sem depender de agência para tarefas simples do dia a dia.",
    },
    {
      icon: "🔗",
      iconBg: "var(--gll)",
      titulo: "SprintHub + Bling integrados",
      subtitulo: "CRM e ERP conectados ao site",
      descricao:
        "Lead no site entra direto no SprintHub. Produto no painel sincroniza com o Bling. Google Merchant e Meta Catalog alimentados automaticamente.",
    },
  ],
};

export const ENTREGAS = {
  tag: "Quatro entregas",
  titulo: "Um produto",
  tituloDestaque: "completo.",
  lead: "Cada bloco foi pensado com base no briefing que vocês compartilharam. Toque para visualizar.",
  items: [
    {
      icon: "🏄",
      titulo: "Site Completo",
      subtitulo: "Design único, mobile-first, SEO e interativo",
      descricao:
        "Home com hero, carrosséis por categoria, quiz \"Encontre sua Bossa Perfeita\", comparativo de modelos, calculadora de economia, agendamento de test drive, blog, localização das lojas, FAQ e formulário de contato.",
      chips: ["Mobile-first", "SEO", "Catálogo 30+ filtros", "Comparativo", "Calculadora", "Blog"],
      colorClass: "green",
    },
    {
      icon: "⚙️",
      titulo: "Painel Administrativo",
      subtitulo: "Exclusivo da Bossa, simples de operar",
      descricao:
        "Painel com as cores e identidade da Bossa. Adicionar produto, atualizar preço, trocar foto, marcar como \"sob encomenda\" ou ativar/desativar. Sem código, sem agência.",
      chips: ["Cadastro de produtos", "Edição de preços", "Upload de fotos", "Gestão de leads"],
      colorClass: "blue",
    },
    {
      icon: "🔗",
      titulo: "SprintHub e Bling",
      subtitulo: "CRM e ERP conectados automaticamente",
      descricao:
        "Lead pelo site entra direto no SprintHub — ele dispara as mensagens de boas-vindas automaticamente. Produto cadastrado no painel sincroniza com o Bling.",
      chips: ["SprintHub", "Bling", "Webhooks", "Automático"],
      colorClass: "yellow",
    },
    {
      icon: "🛒",
      titulo: "Google Merchant e Meta",
      subtitulo: "Seus produtos aparecendo em todo lugar",
      descricao:
        "Produto cadastrado no painel aparece no Google Shopping, Facebook e Instagram automaticamente. Feed sempre atualizado, sem trabalho extra.",
      chips: ["Google Merchant", "Meta Catalog", "Instagram Shopping", "WhatsApp Catalog"],
      colorClass: "pink",
    },
  ],
};

export const TIMELINE = {
  tag: "Como funciona",
  titulo: "Semana a",
  tituloDestaque: "semana",
  lead: "Toque em cada etapa para ver o que acontece naquele momento.",
  etapas: [
    {
      semana: "Semanas 1 e 2",
      titulo: "Design e Identidade",
      descricao: "Visual aprovado antes de escrever uma linha de código.",
      tags: ["Paleta Bossa", "Tipografia", "Layout", "Aprovação"],
    },
    {
      semana: "Semanas 2 e 3",
      titulo: "Site e Catálogo",
      descricao: "Home, filtros, produtos, comparativo e calculadora.",
      tags: ["30+ filtros", "Comparativo", "Calculadora", "Test Drive"],
    },
    {
      semana: "Semana 4",
      titulo: "Painel e Integrações",
      descricao: "Admin, SprintHub, Bling e Google Merchant ativos.",
      tags: ["Painel admin", "SprintHub", "Bling", "Google Merchant"],
    },
    {
      semana: "Semanas 5 e 6",
      titulo: "Testes e Entrega",
      descricao: "Revisão completa, treinamento e lançamento.",
      tags: ["Testes mobile", "Treinamento", "Lançamento", "30d suporte"],
    },
  ],
};

export const CTA = {
  tag: "Pronto para começar",
  titulo: "Vamos construir a",
  tituloDestaque: "nova Bossa?",
  lead: "Toque no botão abaixo. A gente responde em até 24 horas com o contrato e os próximos passos.",
  nota: "Você vai direto para o WhatsApp. Proposta válida por 15 dias.",
};
