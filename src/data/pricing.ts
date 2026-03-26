// ============================================================
// DADOS DE PREÇO — Edite aqui para atualizar toda a proposta
// ============================================================

export const PRICING = {
  /** Valor total do projeto */
  total: 15000,

  /** Desconto à vista (decimal) */
  descontoAVista: 0.10, // 10%

  /** Texto do parcelamento */
  parcelamentoTexto: "Parcelamento em até 12×",
  parcelamentoNota: "* juros de parcelamento a consultar",

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
