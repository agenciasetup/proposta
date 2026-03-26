// ============================================================
// DADOS DE PREÇO — Edite aqui para atualizar toda a proposta
// ============================================================

export const PRICING = {
  /** Valor total do projeto */
  total: 15000,

  /** Desconto à vista (decimal) */
  descontoAVista: 0.10, // 10%

  /** Parcelas disponíveis para cada metade (50/50) */
  parcelamento: [
    { vezes: 1, label: "À vista",   juros: 0 },
    { vezes: 2, label: "2× sem juros", juros: 0 },
    { vezes: 3, label: "3× sem juros", juros: 0 },
    { vezes: 4, label: "4× s/ juros",  juros: 0 },
    { vezes: 6, label: "6×",           juros: 0.05 },
    { vezes: 10, label: "10×",         juros: 0.10 },
    { vezes: 12, label: "12×",         juros: 0.15 },
  ],

  /** Manutenção mensal (order bump) */
  manutencao: {
    valor: 1000,
    descricao: "Manutenção mensal",
    beneficios: [
      "Hospedagem e monitoramento 24/7",
      "Até 4h de ajustes por mês",
      "Subpáginas regionais (SEO local)",
      "Otimização SEO contínua",
      "Relatórios mensais de desempenho",
      "Suporte prioritário via WhatsApp",
    ],
  },
} as const;

export const WHATSAPP = {
  numero: "5511932597969",
  /** Nome que aparece na mensagem */
  nomeContato: "Filipe",
} as const;
