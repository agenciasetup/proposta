import { WHATSAPP, PRICING } from "@/data/pricing";

export type PaymentMode = "avista" | "parcelado";

export interface WhatsAppPayload {
  mode: PaymentMode;
  /** Se parcelado, quantas vezes cada metade */
  parcelaEntrada?: number;
  parcelaFinal?: number;
  /** Order bump: manutenção mensal */
  manutencao: boolean;
}

function formatCurrency(val: number): string {
  return val.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function buildWhatsAppURL(payload: WhatsAppPayload): string {
  const total = PRICING.total;
  const lines: string[] = [
    `Olá, ${WHATSAPP.nomeContato}! Vi a proposta da Bossa Elétrica e gostaria de avançar.`,
    "",
    "📋 *Resumo do pedido:*",
    "",
  ];

  if (payload.mode === "avista") {
    const desconto = total * PRICING.descontoAVista;
    const valorFinal = total - desconto;
    lines.push(`✅ *Pagamento à vista*`);
    lines.push(`Valor: ${formatCurrency(valorFinal)} (${PRICING.descontoAVista * 100}% de desconto)`);
  } else {
    const metade = total / 2;

    // Entrada
    const parcEntrada = PRICING.parcelamento.find((p) => p.vezes === (payload.parcelaEntrada ?? 1));
    const jurosEntrada = parcEntrada?.juros ?? 0;
    const totalEntrada = metade * (1 + jurosEntrada);

    // Final
    const parcFinal = PRICING.parcelamento.find((p) => p.vezes === (payload.parcelaFinal ?? 1));
    const jurosFinal = parcFinal?.juros ?? 0;
    const totalFinal = metade * (1 + jurosFinal);

    lines.push(`✅ *Pagamento 50/50*`);
    lines.push("");

    if ((payload.parcelaEntrada ?? 1) === 1) {
      lines.push(`📌 Entrada: ${formatCurrency(totalEntrada)} à vista`);
    } else {
      lines.push(
        `📌 Entrada: ${payload.parcelaEntrada}× de ${formatCurrency(totalEntrada / (payload.parcelaEntrada ?? 1))} = ${formatCurrency(totalEntrada)}`
      );
    }

    if ((payload.parcelaFinal ?? 1) === 1) {
      lines.push(`📌 Na entrega: ${formatCurrency(totalFinal)} à vista`);
    } else {
      lines.push(
        `📌 Na entrega: ${payload.parcelaFinal}× de ${formatCurrency(totalFinal / (payload.parcelaFinal ?? 1))} = ${formatCurrency(totalFinal)}`
      );
    }

    lines.push(`📌 Total: ${formatCurrency(totalEntrada + totalFinal)}`);
  }

  if (payload.manutencao) {
    lines.push("");
    lines.push(`➕ *Manutenção mensal:* ${formatCurrency(PRICING.manutencao.valor)}/mês`);
    lines.push(`   Inclui: subpáginas regionais + SEO contínuo`);
  }

  lines.push("");
  lines.push("Aguardo os próximos passos! 🚀");

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${WHATSAPP.numero}?text=${text}`;
}
