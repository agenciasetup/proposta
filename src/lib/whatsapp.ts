import { WHATSAPP, PRICING } from "@/data/pricing";

export type PaymentMode = "avista" | "parcelado";

export interface WhatsAppPayload {
  mode: PaymentMode;
  /** Order bump: manutenção mensal */
  manutencao: boolean;
}

function formatCurrency(val: number): string {
  return val.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function buildWhatsAppURL(payload: WhatsAppPayload): string {
  const total = PRICING.total;
  const lines: string[] = [
    `Oi ${WHATSAPP.nomeContato}, vi a proposta do site da Bossa e quero seguir em frente.`,
    "",
    "📋 *Resumo:*",
    "",
  ];

  if (payload.mode === "avista") {
    const desconto = total * PRICING.descontoAVista;
    const valorFinal = total - desconto;
    lines.push(`✅ *Pagamento à vista*`);
    lines.push(`Valor: ${formatCurrency(valorFinal)} (${PRICING.descontoAVista * 100}% de desconto)`);
  } else {
    const metade = total / 2;
    lines.push(`✅ *Pagamento 50/50*`);
    lines.push(`📌 Entrada: ${formatCurrency(metade)}`);
    lines.push(`📌 Na entrega: ${formatCurrency(metade)}`);
    lines.push(`📌 Total: ${formatCurrency(total)}`);
    lines.push(`(parcelamento em até 12×, juros a consultar)`);
  }

  if (payload.manutencao) {
    lines.push("");
    lines.push(`➕ *Manutenção mensal:* ${formatCurrency(PRICING.manutencao.valor)}/mês`);
  }

  lines.push("");
  lines.push("Aguardo os próximos passos!");

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${WHATSAPP.numero}?text=${text}`;
}
