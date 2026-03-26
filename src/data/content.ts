// ============================================================
// CONTEÚDO DA PROPOSTA — Edite textos aqui
// ============================================================

export const HERO = {
  titulo: {
    l1: "Um site",
    l2: "à altura",
    l3: "da Bossa.",
  },
  subtitulo:
    "A Bossa já tem identidade, público e produto. Falta um site que acompanhe tudo isso.",
  chips: ["Site completo", "Painel admin", "Integrações", "45 dias"],
  greeting:
    "Montamos essa proposta a partir do que vocês nos passaram. Entendemos o que a Bossa precisa e o que ainda não tá funcionando no digital.",
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
  { label: "Prazo", valor: "45 dias", sub: "Acompanhamento semanal", highlight: true },
  { label: "Manutenção", valor: "R$ 1.000", sub: "Opcional", highlight: false },
  { label: "Suporte pós-entrega", valor: "30 dias", sub: "Incluídos", highlight: false },
];

export const BRIEFING = {
  tag: "O que entendemos",
  titulo: "O objetivo está",
  tituloDestaque: "claro",
  tituloFim: "pra nós",
  lead: "Vocês não precisam de mais um site genérico. Precisam de algo que a equipe consiga operar sozinha, que o cliente encontre o modelo certo rápido e que a marca apareça como merece.",
  items: [
    {
      icon: "🏖️",
      iconBg: "linear-gradient(135deg,#c8e8f8,#f4f4a0)",
      titulo: "Identidade da Bossa",
      subtitulo: "O site vai ter a cara da marca",
      descricao:
        "Paleta, tipografia e elementos visuais alinhados com a identidade que vocês já construíram. Nada genérico, nada fora do tom.",
    },
    {
      icon: "🎛️",
      iconBg: "var(--w2)",
      titulo: "Filtros inteligentes",
      subtitulo: "O cliente chega no modelo certo sozinho",
      descricao:
        "Categoria, faixa de preço, autonomia, potência, velocidade, passageiros, peso, dobrável, bateria removível e muito mais.",
    },
    {
      icon: "⚙️",
      iconBg: "var(--gll)",
      titulo: "Autonomia total",
      subtitulo: "Vocês operam tudo sem depender de ninguém",
      descricao:
        "Cadastrar produto, trocar preço, atualizar foto. Tudo em poucos cliques, sem entender de código, sem precisar chamar agência pra coisa simples.",
    },
    {
      icon: "🔗",
      iconBg: "var(--gll)",
      titulo: "SprintHub + Bling",
      subtitulo: "CRM e ERP conectados direto no site",
      descricao:
        "Lead entra pelo site e já cai no SprintHub. Produto cadastrado no painel sincroniza com o Bling. Google Merchant e Meta Catalog alimentados automaticamente.",
    },
  ],
};

export const ENTREGAS = {
  tag: "O que vocês recebem",
  titulo: "Um produto",
  tituloDestaque: "completo.",
  lead: "Cada bloco foi pensado a partir do que vocês nos pediram. Toque pra ver o detalhe.",
  items: [
    {
      icon: "🏄",
      titulo: "Site Completo",
      subtitulo: "Design próprio, mobile-first, SEO e interativo",
      descricao:
        "Home, catálogo com filtros, comparativo de modelos, calculadora de economia, agendamento de test drive, blog, localização das lojas, FAQ e formulário de contato.",
      chips: ["Mobile-first", "SEO", "Catálogo com filtros", "Comparativo", "Calculadora", "Blog"],
      colorClass: "green",
    },
    {
      icon: "⚙️",
      titulo: "Painel Administrativo",
      subtitulo: "Com a identidade da Bossa, simples de usar",
      descricao:
        "Painel com as cores da marca. Adicionar produto, atualizar preço, trocar foto, marcar como \"sob encomenda\" ou desativar. Sem código, sem agência.",
      chips: ["Cadastro de produtos", "Edição de preços", "Upload de fotos", "Gestão de leads"],
      colorClass: "blue",
    },
    {
      icon: "🔗",
      titulo: "SprintHub e Bling",
      subtitulo: "CRM e ERP conectados automaticamente",
      descricao:
        "Lead entra pelo site e vai direto pro SprintHub. Produto cadastrado no painel já sincroniza com o Bling. Sem trabalho manual.",
      chips: ["SprintHub", "Bling", "Webhooks", "Automático"],
      colorClass: "yellow",
    },
    {
      icon: "🛒",
      titulo: "Google Merchant e Meta",
      subtitulo: "Produtos aparecendo onde o cliente procura",
      descricao:
        "Produto cadastrado no painel aparece no Google Shopping, Facebook e Instagram automaticamente. Feed sempre atualizado.",
      chips: ["Google Merchant", "Meta Catalog", "Instagram Shopping", "WhatsApp Catalog"],
      colorClass: "pink",
    },
  ],
};

export const TIMELINE = {
  tag: "Como funciona",
  titulo: "Semana a",
  tituloDestaque: "semana",
  lead: "Toque em cada etapa pra ver o que acontece.",
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
      tags: ["Filtros", "Comparativo", "Calculadora", "Test Drive"],
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
      descricao: "Revisão, treinamento da equipe e lançamento.",
      tags: ["Testes mobile", "Treinamento", "Lançamento", "30d suporte"],
    },
  ],
};

export const CTA = {
  tag: "Próximo passo",
  titulo: "Vamos construir a",
  tituloDestaque: "nova Bossa?",
  lead: "Toque no botão abaixo. Respondemos em até 24 horas com o contrato e os próximos passos.",
  nota: "Você vai direto para o WhatsApp. Proposta válida por 15 dias.",
};
