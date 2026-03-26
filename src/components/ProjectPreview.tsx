"use client";
import { useState } from "react";
import Image from "next/image";

const MOTO_PHOTOS = [
  { src: "/Bossa-Hero-fundo-branco-Photoroom.jpg", alt: "Bossa Hero" },
  { src: "/Bossa-Neo-Branca-fundo-branco-Photoroom.jpg", alt: "Bossa Neo Branca" },
  { src: "/Bossa-VIP-marrom.webp", alt: "Bossa VIP" },
];

/* ─────────────────────────────────────────────
   Miniatura interativa do site da Bossa
   Mostra hero, catálogo com filtros, produto,
   admin panel e integrações — tudo minimalista
   ───────────────────────────────────────────── */

export default function ProjectPreview({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Home", "Catálogo", "Produto", "Admin"];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[var(--k)]/50 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[var(--w)] rounded-3xl overflow-hidden shadow-2xl animate-[slideUp_.4s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header — warm sand */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--k)]/5 bg-[var(--off)]">
          <div>
            <p className="text-[9px] tracking-[2px] uppercase text-[var(--k)]/40 font-semibold">Prévia do projeto</p>
            <h3 className="font-serif text-lg font-bold text-[var(--k)]">Como o site vai ficar</h3>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-full bg-[var(--k)]/5 flex items-center justify-center text-[var(--k)] hover:bg-[var(--k)]/10 transition-colors cursor-pointer text-lg">×</button>
        </div>

        {/* Tab bar */}
        <div className="flex gap-1 px-6 pt-4 pb-2 bg-[var(--off)] border-b border-[var(--k)]/5">
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-lg text-[12px] font-semibold transition-all cursor-pointer ${activeTab === i ? "bg-[var(--k)] text-[var(--bossa)]" : "text-[var(--ml)] hover:bg-[var(--sand)]"}`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-140px)] p-6">
          {activeTab === 0 && <HomePreview />}
          {activeTab === 1 && <CatalogoPreview />}
          {activeTab === 2 && <ProdutoPreview />}
          {activeTab === 3 && <AdminPreview />}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px) scale(.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}

/* ════════════════════════════════════════════════
   HOME PREVIEW
   ════════════════════════════════════════════════ */
function HomePreview() {
  return (
    <div className="space-y-5">

      {/* ── Intro note ── */}
      <div className="bg-[var(--bossa)]/15 border border-[var(--bossa)]/40 rounded-xl p-4 text-center">
        <p className="text-[11px] text-[var(--k)] leading-relaxed">
          Isso aqui é só um exemplo dos <b>elementos que teremos na página</b>, pensando nas cores da marca e na comunicação carioca. Não é o layout final — é a <b>direção visual</b>.
        </p>
      </div>

      {/* ── Paleta de cores + praia HTML ── */}
      <SectionLabel label="Paleta do site" desc="As cores que vão guiar todo o design" />
      <div className="rounded-xl overflow-hidden border border-[var(--sand-dark)]/30">
        {/* Mini beach scene with the 3 colors */}
        <div className="h-28 relative" style={{ background: "linear-gradient(180deg, #f7f5ef 0%, #f0eee0 30%, var(--bossa) 50%, var(--bossa-dark) 65%, var(--sand) 80%, var(--sand-dark) 100%)" }}>
          <div className="absolute top-3 right-6 w-10 h-10 rounded-full bg-[var(--bossa)] shadow-[0_0_30px_rgba(229,229,67,.5)]" />
          {/* Cristo */}
          <svg className="absolute bottom-8 left-[20%] opacity-20" width="40" height="55" viewBox="0 0 40 55">
            <circle cx="20" cy="5" r="3" fill="white" />
            <line x1="20" y1="8" x2="20" y2="32" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="8" y1="16" x2="32" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M12,55 Q20,30 28,55Z" fill="white" />
          </svg>
          {/* Palm */}
          <svg className="absolute bottom-0 right-4 opacity-25" width="35" height="50" viewBox="0 0 35 50">
            <path d="M15,50 Q14,30 17,12" stroke="var(--k)" strokeWidth="2" fill="none" />
            <path d="M17,12 Q5,6 1,10" stroke="var(--k)" strokeWidth="1.5" fill="none" />
            <path d="M17,12 Q10,2 4,0" stroke="var(--k)" strokeWidth="1.5" fill="none" />
            <path d="M17,12 Q27,4 33,8" stroke="var(--k)" strokeWidth="1.5" fill="none" />
          </svg>
          {/* Waves */}
          <svg className="absolute bottom-[38%] left-0 right-0 h-3 opacity-30" viewBox="0 0 400 12" preserveAspectRatio="none">
            <path d="M0,6 Q20,0 40,6 Q60,12 80,6 Q100,0 120,6 Q140,12 160,6 Q180,0 200,6 Q220,12 240,6 Q260,0 280,6 Q300,12 320,6 Q340,0 360,6 Q380,12 400,6" fill="none" stroke="white" strokeWidth="1.5" />
          </svg>
          {/* Copacabana sidewalk */}
          <svg className="absolute bottom-0 left-0 right-0 h-4 opacity-15" viewBox="0 0 200 10" preserveAspectRatio="none">
            <pattern id="copa-pal" width="20" height="10" patternUnits="userSpaceOnUse">
              <path d="M0,5 Q5,0 10,5 Q15,10 20,5" fill="none" stroke="var(--k)" strokeWidth="1" />
            </pattern>
            <rect width="200" height="10" fill="url(#copa-pal)" />
          </svg>
        </div>
        {/* Color swatches */}
        <div className="grid grid-cols-3 bg-white">
          <div className="p-3 text-center border-r border-[var(--sand-dark)]/20">
            <div className="w-8 h-8 rounded-full bg-[var(--bossa)] mx-auto mb-1.5 shadow-sm" />
            <p className="text-[8px] font-bold text-[var(--k)]">Verde Bossa</p>
            <p className="text-[7px] text-[var(--ml)]">#E5E543</p>
          </div>
          <div className="p-3 text-center border-r border-[var(--sand-dark)]/20">
            <div className="w-8 h-8 rounded-full bg-[var(--k)] mx-auto mb-1.5 shadow-sm" />
            <p className="text-[8px] font-bold text-[var(--k)]">Preto Bossa</p>
            <p className="text-[7px] text-[var(--ml)]">#141410</p>
          </div>
          <div className="p-3 text-center">
            <div className="w-8 h-8 rounded-full bg-[var(--sand)] mx-auto mb-1.5 shadow-sm border border-[var(--sand-dark)]/30" />
            <p className="text-[8px] font-bold text-[var(--k)]">Off-white / Areia</p>
            <p className="text-[7px] text-[var(--ml)]">#F5E6C8</p>
          </div>
        </div>
      </div>

      {/* ── HERO concept ── */}
      <SectionLabel label="Hero — Banner principal" desc="Primeira coisa que o visitante vê. Praia, marca e CTA." />
      <div className="rounded-xl overflow-hidden border border-[var(--k)]/10 relative">
        <div className="h-48 relative bg-[var(--off)] overflow-hidden">
          {/* Bossa green glow top-right */}
          <div className="absolute -top-6 -right-6 w-44 h-44 rounded-full opacity-20" style={{ background: "radial-gradient(circle, var(--bossa) 0%, transparent 70%)" }} />
          {/* Sand gradient at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-12" style={{ background: "linear-gradient(to top, var(--sand) 0%, transparent 100%)" }} />
          {/* Cristo silhouette */}
          <svg className="absolute bottom-8 left-[12%] opacity-[.07]" width="50" height="75" viewBox="0 0 50 75">
            <circle cx="25" cy="6" r="3.5" fill="var(--k)" />
            <line x1="25" y1="10" x2="25" y2="40" stroke="var(--k)" strokeWidth="3" strokeLinecap="round" />
            <line x1="10" y1="20" x2="40" y2="20" stroke="var(--k)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M16,75 Q25,38 34,75Z" fill="var(--k)" />
          </svg>
          {/* Palm silhouette */}
          <svg className="absolute bottom-0 right-4 opacity-[.06]" width="40" height="60" viewBox="0 0 40 60">
            <path d="M18,60 Q16,35 20,15" stroke="var(--k)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M20,15 Q7,8 2,14" stroke="var(--k)" strokeWidth="1.5" fill="none" />
            <path d="M20,15 Q12,2 5,0" stroke="var(--k)" strokeWidth="1.5" fill="none" />
            <path d="M20,15 Q30,3 38,6" stroke="var(--k)" strokeWidth="1.5" fill="none" />
          </svg>
          {/* Copacabana wave pattern */}
          <svg className="absolute bottom-2 left-0 right-0 h-4 opacity-[.05]" viewBox="0 0 200 10" preserveAspectRatio="none">
            <pattern id="copa-hero" width="20" height="10" patternUnits="userSpaceOnUse">
              <path d="M0,5 Q5,0 10,5 Q15,10 20,5" fill="none" stroke="var(--k)" strokeWidth="1" />
            </pattern>
            <rect width="200" height="10" fill="url(#copa-hero)" />
          </svg>
          {/* Content */}
          <div className="relative z-10 px-5 pt-8">
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--bossa)]" style={{ animation: "blink 1.5s infinite" }} />
              <span className="text-[7px] tracking-[2px] uppercase text-[var(--k)]/40 font-semibold">Menos trânsito, mais pôr do sol</span>
            </div>
            <h2 className="font-serif text-[24px] md:text-[32px] font-bold leading-[.9] tracking-[-1px] mb-2">
              <span className="text-[var(--k)] block">Liberdade</span>
              <span className="text-[var(--bossa)] italic block">Elétrica.</span>
            </h2>
            <p className="text-[9px] text-[var(--k)]/40 max-w-[180px] leading-relaxed mb-3">Criada no Rio, para os cariocas.</p>
            <div className="flex gap-2">
              <div className="bg-[var(--bossa)] text-[var(--k)] text-[8px] font-bold px-2.5 py-1.5 rounded-lg">Encontre sua Bossa →</div>
              <div className="border border-[var(--k)]/15 text-[var(--k)]/50 text-[8px] px-2.5 py-1.5 rounded-lg">Test Drive</div>
            </div>
          </div>
        </div>
        <ConceptTag>Fundo off-white da marca. Verde Bossa e preto como destaque. Silhuetas de Copacabana, Cristo, palmeiras. Também pode ser um slide com fotos REAIS da Bossa.</ConceptTag>
      </div>

      {/* ── PRODUTOS em Polaroids ── */}
      <SectionLabel label="Produtos — Polaroids com fita" desc="Cada modelo vai aparecer como uma foto polaroid, com rotação e fita adesiva." />
      <div className="bg-gradient-to-b from-[var(--sand)] to-[var(--sand-light)] rounded-xl p-5 border border-[var(--sand-dark)]/30">
        <div className="grid grid-cols-4 gap-3 pt-1">
          {[
            { name: "Bossa Hero", price: "12× R$ 770", cat: "500W", img: MOTO_PHOTOS[0].src },
            { name: "Bossa Vip", price: "12× R$ 880", cat: "1000W", img: MOTO_PHOTOS[2].src },
            { name: "Bossa Neo", price: "12× R$ 1.075", cat: "1000W", img: MOTO_PHOTOS[1].src },
            { name: "Bossa Pro", price: "12× R$ 905", cat: "1000W", img: MOTO_PHOTOS[0].src },
          ].map((p, i) => (
            <PolaroidCard key={p.name} {...p} index={i} />
          ))}
        </div>
        <ConceptTag>Produtos reais da Bossa. Fotos de verdade no lugar dos emojis. Hover com rotação e zoom.</ConceptTag>
      </div>

      {/* ── CALCULADORA DE ECONOMIA ── */}
      <SectionLabel label="Calculadora de Economia" desc="O visitante descobre quanto economiza saindo da gasolina." />
      <div className="rounded-xl overflow-hidden border border-[var(--bossa)]/30 bg-gradient-to-br from-[var(--bossa)]/10 via-white to-[var(--bossa-light)]/20">
        <div className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-[var(--bossa)]/20 flex items-center justify-center text-sm">⚡</div>
            <div>
              <p className="text-[11px] font-bold text-[var(--k)]">Quanto você economiza?</p>
              <p className="text-[8px] text-[var(--ml)]">Compare gasolina vs elétrica</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2.5 mb-3">
            <div className="bg-white rounded-xl p-3 text-center shadow-sm border border-[var(--k)]/20">
              <p className="text-[7px] text-[var(--ml)] mb-1">Gasolina/mês</p>
              <p className="text-[16px] font-bold text-[var(--k)]">R$ 480</p>
              <div className="w-full h-1 rounded-full bg-[var(--k)]/20 mt-1.5"><div className="w-[85%] h-full rounded-full bg-[var(--k)]" /></div>
            </div>
            <div className="bg-white rounded-xl p-3 text-center shadow-sm border border-[var(--bossa)]/30">
              <p className="text-[7px] text-[var(--ml)] mb-1">Elétrica/mês</p>
              <p className="text-[16px] font-bold text-[var(--gd)]">R$ 35</p>
              <div className="w-full h-1 rounded-full bg-[var(--gd)]/20 mt-1.5"><div className="w-[7%] h-full rounded-full bg-[var(--gd)]" /></div>
            </div>
            <div className="bg-[var(--k)] rounded-xl p-3 text-center shadow-sm">
              <p className="text-[7px] text-[var(--off)]/50 mb-1">Economia/ano</p>
              <p className="text-[16px] font-bold text-[var(--bossa)]">R$ 5.340</p>
              <p className="text-[7px] text-[var(--bossa)] font-bold mt-1">93% menos!</p>
            </div>
          </div>
        </div>
        <ConceptTag>Interativo: o visitante coloca o km/dia e vê a economia real. Visual com barras comparativas.</ConceptTag>
      </div>

      {/* ── SOBRE A MARCA ── */}
      <SectionLabel label="Sobre a Bossa" desc="Seção contando a história da marca, com fotos das motos na praia." />
      <div className="rounded-xl overflow-hidden border border-[var(--sand-dark)]/30 bg-[var(--sand-light)]">
        <div className="md:flex">
          <div className="md:w-1/2 bg-gradient-to-br from-[var(--bossa-light)]/40 to-[var(--sand)] p-5 flex items-center justify-center min-h-[120px] relative">
            {/* Polaroid-style photo */}
            <div className="bg-white p-2 pb-5 shadow-[3px_4px_14px_rgba(139,94,60,.15)] rotate-[-2deg]">
              <div className="w-28 h-28 rounded-md overflow-hidden bg-white flex items-center justify-center p-1">
                <Image src={MOTO_PHOTOS[2].src} alt="Bossa VIP" width={200} height={200} className="w-full h-full object-contain" />
              </div>
              <p className="text-[7px] text-center text-[var(--k)] mt-1 font-serif italic">Bossa na orla</p>
            </div>
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-3 bg-[var(--bossa)]/40 rounded-sm" />
          </div>
          <div className="md:w-1/2 p-5">
            <p className="text-[8px] text-[var(--bossa)] font-bold tracking-[2px] uppercase mb-1">Desde 2021</p>
            <p className="font-serif text-[16px] font-bold text-[var(--k)] leading-tight mb-2">O que torna a <i className="text-[var(--k)]">Bossa</i> única?</p>
            <p className="text-[9px] text-[var(--m)] leading-relaxed">
              Nascida em Copacabana com DNA carioca. A primeira marca de bikes elétricas que entende o Rio de verdade.
            </p>
            <div className="flex gap-2 mt-3">
              <div className="bg-[var(--bossa)]/15 rounded-lg px-2 py-1 text-[7px] font-bold text-[var(--k)]">Rio de Janeiro</div>
              <div className="bg-[var(--bossa-light)]/40 rounded-lg px-2 py-1 text-[7px] font-bold text-[var(--k)]">Copacabana</div>
              <div className="bg-[var(--sand)] rounded-lg px-2 py-1 text-[7px] font-bold text-[var(--k)]">Desde 2021</div>
            </div>
          </div>
        </div>
        <ConceptTag>Fotos reais da equipe e das motos na praia. Storytelling carioca. Identidade visual do Rio.</ConceptTag>
      </div>

      {/* ── DEPOIMENTOS ── */}
      <SectionLabel label="Depoimentos" desc="Feedback real de quem já comprou. Gera confiança." />
      <div className="grid grid-cols-2 gap-3">
        {[
          { name: "Marina R.", local: "Copacabana", texto: "Melhor compra que fiz! Uso todo dia pra ir trabalhar na Zona Sul.", stars: 5 },
          { name: "Carlos F.", local: "Ipanema", texto: "Economizei mais de R$ 400/mês de gasolina. Não volto mais.", stars: 5 },
        ].map((d) => (
          <div key={d.name} className="bg-white rounded-xl p-3.5 border border-[var(--sand-dark)]/25 shadow-sm">
            <div className="flex gap-1 mb-2">
              {Array.from({ length: d.stars }).map((_, i) => (
                <span key={i} className="text-[10px] text-[var(--bossa)]">★</span>
              ))}
            </div>
            <p className="text-[9px] text-[var(--m)] leading-relaxed mb-2 italic">&ldquo;{d.texto}&rdquo;</p>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[var(--bossa-light)] flex items-center justify-center text-[7px] font-bold text-[var(--k)]">{d.name[0]}</div>
              <div>
                <p className="text-[8px] font-bold text-[var(--k)]">{d.name}</p>
                <p className="text-[7px] text-[var(--ml)]">{d.local}</p>
              </div>
            </div>
          </div>
        ))}
        <ConceptTag className="col-span-2">Depoimentos reais com foto, nome e bairro. Carrossel com animação suave.</ConceptTag>
      </div>

      {/* ── AUTORIDADE — números e notícias ── */}
      <SectionLabel label="Autoridade" desc="Números da marca, notícias, parceiros. Gera credibilidade." />
      <div className="rounded-xl overflow-hidden border border-[var(--sand-dark)]/30">
        {/* Numbers */}
        <div className="grid grid-cols-4 gap-0 bg-[var(--k)]">
          {[
            { num: "2.500+", label: "Bikes vendidas" },
            { num: "4.8", label: "Nota Google" },
            { num: "6", label: "Modelos" },
            { num: "2021", label: "Fundação" },
          ].map((n) => (
            <div key={n.label} className="p-3 text-center border-r border-white/10 last:border-0">
              <p className="text-[14px] font-bold text-[var(--bossa)]">{n.num}</p>
              <p className="text-[7px] text-white/60">{n.label}</p>
            </div>
          ))}
        </div>
        {/* News / press */}
        <div className="p-4 bg-white">
          <p className="text-[8px] text-[var(--ml)] font-semibold mb-2">Na mídia</p>
          <div className="flex gap-2">
            {["Globo", "Veja Rio", "TechTudo"].map((m) => (
              <div key={m} className="flex-1 bg-[var(--sand-light)] rounded-lg p-2 text-center border border-[var(--sand-dark)]/20">
                <p className="text-[9px] font-bold text-[var(--k)]">{m}</p>
                <p className="text-[7px] text-[var(--ml)]">Matéria publicada</p>
              </div>
            ))}
          </div>
        </div>
        <ConceptTag>Números reais da Bossa + logos de mídia/parceiros. Seção para gerar autoridade e confiança.</ConceptTag>
      </div>

      {/* ── Blog preview ── */}
      <SectionLabel label="Blog Bossa" desc="Conteúdo para SEO e engajamento. Lifestyle carioca + mobilidade." />
      <div className="grid grid-cols-3 gap-2">
        {[
          { title: "5 trilhas elétricas no Rio", tag: "Lifestyle" },
          { title: "Guia: como escolher sua bike", tag: "Guia" },
          { title: "Manutenção: cuidados básicos", tag: "Dica" },
        ].map((post) => (
          <div key={post.title} className="bg-white rounded-xl overflow-hidden border border-[var(--sand-dark)]/25 shadow-sm">
            <div className="h-14 bg-gradient-to-br from-[var(--bossa-light)]/50 to-[var(--sand)]/60 flex items-center justify-center">
              <span className="text-[18px]">📝</span>
            </div>
            <div className="p-2">
              <span className="text-[6px] font-bold px-1.5 py-0.5 rounded bg-[var(--bossa)]/20 text-[var(--k)]">{post.tag}</span>
              <p className="text-[8px] font-bold text-[var(--k)] mt-1 leading-snug">{post.title}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

/* ════════════════════════════════════════════════
   CATÁLOGO PREVIEW
   ════════════════════════════════════════════════ */
function CatalogoPreview() {
  return (
    <BrowserFrame url="bossaeletricas.com.br/modelos">
      <MiniNav active="Modelos" />

      <div className="flex">
        {/* Sidebar filters */}
        <div className="w-44 bg-[var(--sand-light)] border-r border-[var(--sand-dark)]/30 p-3 hidden md:block">
          <p className="text-[9px] font-bold text-[var(--k)] mb-3">Filtros</p>

          <FilterGroup title="Categoria" options={["Scooter", "E-Bike", "Cargo"]} active={[0]} />
          <FilterGroup title="Preço" options={["Até R$ 8k", "R$ 8k–12k", "Acima de R$ 12k"]} active={[1]} />
          <FilterGroup title="Autonomia" options={["Até 40km", "40–80km", "80km+"]} active={[2]} />
          <FilterGroup title="Características" options={["Dobrável", "Bat. removível", "NFC", "Bluetooth"]} active={[0, 3]} />

          <div className="mt-3 pt-3 border-t border-[var(--sand-dark)]/30">
            <p className="text-[7px] text-[var(--ml)]">30+ filtros disponíveis</p>
            <p className="text-[7px] text-[var(--k)] font-semibold">Ver todos os filtros ↓</p>
          </div>
        </div>

        {/* Products grid */}
        <div className="flex-1 p-4 bg-gradient-to-b from-white to-[var(--sand-light)]">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[9px] text-[var(--ml)]">Mostrando <b className="text-[var(--k)]">8 modelos</b></p>
            <div className="flex gap-1">
              <span className="text-[8px] px-2 py-1 rounded-md bg-[var(--bossa-dark)] text-white font-semibold">Scooter</span>
              <span className="text-[8px] px-2 py-1 rounded-md bg-[var(--sand)] text-[var(--k)]">Dobrável</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
            {[
              { name: "Prime T", price: "R$ 12.990", parcela: "12× R$ 1.249", img: MOTO_PHOTOS[0].src, badge: null },
              { name: "Bossa Neo", price: "R$ 9.990", parcela: "12× R$ 949", img: MOTO_PHOTOS[1].src, badge: null },
              { name: "Bossa Grid", price: "R$ 7.990", parcela: "12× R$ 749", img: MOTO_PHOTOS[2].src, badge: null },
              { name: "Bossa Cargo", price: "R$ 14.990", parcela: "12× R$ 1.399", img: MOTO_PHOTOS[0].src, badge: null },
              { name: "Bossa Fold", price: "R$ 6.490", parcela: "12× R$ 599", img: MOTO_PHOTOS[1].src, badge: "Dobrável" },
              { name: "Bossa X", price: "R$ 18.990", parcela: "12× R$ 1.749", img: MOTO_PHOTOS[2].src, badge: "Sob encomenda" },
            ].map((p) => (
              <CatalogCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

/* ════════════════════════════════════════════════
   PRODUTO PREVIEW
   ════════════════════════════════════════════════ */
function ProdutoPreview() {
  const [tab, setTab] = useState(0);

  return (
    <BrowserFrame url="bossaeletricas.com.br/modelos/prime-t">
      <MiniNav active="Modelos" />

      <div className="md:flex">
        {/* Image carousel — sand/sky background */}
        <div className="md:w-1/2 bg-gradient-to-br from-[var(--bossa-light)]/50 to-[var(--sand)] p-8 flex items-center justify-center min-h-[200px] relative">
          <Image src={MOTO_PHOTOS[0].src} alt="Bossa Prime T" width={300} height={300} className="w-full h-auto object-contain rounded-xl" />
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
            {[0, 1, 2, 3].map((d) => (
              <div key={d} className={`w-2 h-2 rounded-full ${d === 0 ? "bg-[var(--bossa-dark)]" : "bg-[var(--sand-dark)]"}`} />
            ))}
          </div>
          {/* Polaroid frame */}
          <div className="absolute top-3 left-3 rotate-[-3deg] bg-white p-1.5 shadow-[2px_3px_10px_rgba(139,94,60,.15)] rounded-sm">
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-5 h-2.5 bg-[var(--bossa)]/40 rounded-sm z-10" />
            <div className="w-12 h-12 rounded-md overflow-hidden bg-white flex items-center justify-center p-0.5">
              <Image src={MOTO_PHOTOS[1].src} alt="Bossa Neo" width={80} height={80} className="w-full h-full object-contain" />
            </div>
            <p className="text-[5px] text-center text-[var(--k)] mt-0.5 font-serif italic">Prime T</p>
          </div>
        </div>

        {/* Product info */}
        <div className="md:w-1/2 p-5 bg-[var(--sand-light)]">
          <p className="text-[8px] text-[var(--k)] font-semibold mb-1">SCOOTER ELÉTRICA</p>
          <h3 className="font-serif text-[24px] font-bold text-[var(--k)] leading-tight mb-2">Bossa Prime T</h3>

          <div className="flex items-baseline gap-3 mb-4">
            <div>
              <p className="text-[8px] text-[var(--k)] font-semibold">PIX</p>
              <p className="font-serif text-[22px] font-bold text-[var(--k)]">R$ 12.490</p>
            </div>
            <div>
              <p className="text-[8px] text-[var(--ml)]">OU</p>
              <p className="text-[14px] font-bold text-[var(--k)]">12× R$ 1.249</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mb-3 border-b border-[var(--sand-dark)]/30">
            {["Descrição", "Especificações", "Agendar"].map((t, i) => (
              <button key={t} onClick={() => setTab(i)} className={`px-3 py-2 text-[9px] font-semibold cursor-pointer border-b-2 transition-colors ${tab === i ? "border-[var(--k)]/20 text-[var(--k)]" : "border-transparent text-[var(--ml)]"}`}>{t}</button>
            ))}
          </div>

          {tab === 0 && (
            <p className="text-[10px] text-[var(--m)] leading-relaxed">
              A Bossa Prime T é a scooter elétrica mais completa da linha. Design premium com NFC, bluetooth, alarme e bateria removível. Perfeita para o trânsito do Rio.
            </p>
          )}

          {tab === 1 && (
            <div className="grid grid-cols-2 gap-1.5">
              {[
                ["Autonomia", "80km"],
                ["Velocidade", "45km/h"],
                ["Potência", "2000W"],
                ["Bateria", "72V 30Ah"],
                ["Peso suportado", "150kg"],
                ["Passageiros", "2"],
                ["Freio", "Disco"],
                ["NFC", "Sim"],
              ].map(([k, v]) => (
                <div key={k} className="bg-white rounded-md px-2 py-1.5 border border-[var(--sand-dark)]/30">
                  <p className="text-[7px] text-[var(--ml)]">{k}</p>
                  <p className="text-[10px] font-semibold text-[var(--k)]">{v}</p>
                </div>
              ))}
            </div>
          )}

          {tab === 2 && (
            <div className="space-y-2">
              <div className="bg-[var(--bossa)] text-[var(--k)] text-center py-2.5 rounded-lg text-[10px] font-bold">Agendar Test Drive</div>
              <div className="border border-[var(--k)]/20 text-[var(--k)] text-center py-2.5 rounded-lg text-[10px] font-bold">Reservar / Encomendar</div>
            </div>
          )}

          {/* Related */}
          <div className="mt-5 pt-4 border-t border-[var(--sand-dark)]/30">
            <p className="text-[8px] text-[var(--k)] font-semibold mb-2">Você também pode gostar</p>
            <div className="flex gap-2">
              {[{ name: "Bossa Neo", img: MOTO_PHOTOS[1].src }, { name: "Bossa VIP", img: MOTO_PHOTOS[2].src }].map((r) => (
                <div key={r.name} className="flex-1 bg-white rounded-xl p-2 text-center border border-[var(--sand-dark)]/30">
                  <div className="h-14 flex items-center justify-center p-1">
                    <Image src={r.img} alt={r.name} width={80} height={80} className="w-full h-full object-contain" />
                  </div>
                  <p className="text-[8px] font-semibold text-[var(--k)] mt-1">{r.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

/* ════════════════════════════════════════════════
   ADMIN PREVIEW
   ════════════════════════════════════════════════ */
function AdminPreview() {
  return (
    <BrowserFrame url="admin.bossaeletricas.com.br">
      <div className="flex min-h-[350px]">
        {/* Sidebar — Bossa preto + verde */}
        <div className="w-14 md:w-44 bg-[var(--k)] flex flex-col border-r border-white/10">
          <div className="px-3 py-4 hidden md:block">
            <span className="font-serif text-[12px] text-[var(--bossa)] italic font-bold">Bossa Admin</span>
          </div>
          <div className="flex flex-col gap-1 px-2 mt-2 md:mt-0">
            {[
              { icon: "🏠", label: "Dashboard", active: true },
              { icon: "🛵", label: "Produtos", active: false },
              { icon: "💬", label: "Leads", active: false },
              { icon: "📊", label: "Analytics", active: false },
              { icon: "📝", label: "Blog", active: false },
              { icon: "⚙️", label: "Config", active: false },
            ].map((item) => (
              <div key={item.label} className={`flex items-center gap-2 px-2 py-2 rounded-lg text-[10px] ${item.active ? "bg-[var(--bossa)] text-[var(--k)] font-bold" : "text-white/40"}`}>
                <span className="text-sm">{item.icon}</span>
                <span className="hidden md:inline">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main */}
        <div className="flex-1 p-4 bg-[var(--sand-light)]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[8px] text-[var(--ml)]">Bem-vinda de volta!</p>
              <h4 className="text-[14px] font-bold text-[var(--k)]">Dashboard</h4>
            </div>
            <div className="bg-[var(--bossa)] text-[var(--k)] text-[8px] font-bold px-3 py-1.5 rounded-lg">+ Novo produto</div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
            {[
              { label: "Produtos ativos", value: "24", color: "text-[var(--gd)]" },
              { label: "Leads hoje", value: "7", color: "text-[var(--k)]" },
              { label: "Test drives agendados", value: "3", color: "text-[var(--k)]" },
              { label: "Visitas/mês", value: "2.4k", color: "text-[var(--k)]" },
            ].map((kpi) => (
              <div key={kpi.label} className="bg-white rounded-xl p-3 border border-[var(--sand-dark)]/30">
                <p className="text-[7px] text-[var(--ml)] mb-1">{kpi.label}</p>
                <p className={`text-[18px] font-bold ${kpi.color}`}>{kpi.value}</p>
              </div>
            ))}
          </div>

          {/* Products table */}
          <div className="bg-white rounded-xl border border-[var(--sand-dark)]/30 overflow-hidden">
            <div className="px-3 py-2 border-b border-[var(--sand-dark)]/20 flex items-center justify-between">
              <p className="text-[9px] font-bold text-[var(--k)]">Produtos recentes</p>
              <p className="text-[8px] text-[var(--k)] font-semibold">Ver todos →</p>
            </div>
            {[
              { name: "Bossa Prime T", price: "R$ 12.990", status: "Ativo", img: MOTO_PHOTOS[0].src },
              { name: "Bossa Neo", price: "R$ 9.990", status: "Ativo", img: MOTO_PHOTOS[1].src },
              { name: "Bossa VIP", price: "R$ 7.990", status: "Ativo", img: MOTO_PHOTOS[2].src },
              { name: "Bossa X", price: "R$ 18.990", status: "Sob encomenda", img: MOTO_PHOTOS[0].src },
            ].map((row) => (
              <div key={row.name} className="px-3 py-2 flex items-center gap-3 border-b border-[var(--sand-dark)]/15 last:border-0 hover:bg-[var(--sand-light)] transition-colors">
                <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 bg-white flex items-center justify-center p-0.5 border border-[var(--sand-dark)]/20"><Image src={row.img} alt={row.name} width={40} height={40} className="w-full h-full object-contain" /></div>
                <span className="text-[10px] font-medium text-[var(--k)] flex-1">{row.name}</span>
                <span className="text-[10px] text-[var(--k)] font-semibold">{row.price}</span>
                <span className={`text-[7px] font-bold px-2 py-0.5 rounded-md ${row.status === "Ativo" ? "bg-[var(--gll)] text-[var(--gd)] border border-[var(--gl)]" : "bg-[var(--bossa-light)]/40 text-[var(--k)] border border-[var(--bossa-light)]"}`}>{row.status}</span>
                <span className="text-[8px] text-[var(--k)] font-semibold">Editar</span>
              </div>
            ))}
          </div>

          {/* Sync status */}
          <div className="mt-3 flex items-center gap-2 px-3 py-2 bg-[var(--bossa-light)]/30 rounded-xl border border-[var(--bossa-light)]">
            <div className="w-2 h-2 rounded-full bg-[var(--bossa-dark)]" style={{ animation: "pls 1.5s infinite" }} />
            <p className="text-[9px] text-[var(--k)] font-semibold">SprintHub + Bling sincronizados</p>
            <span className="text-[8px] text-[var(--ml)] ml-auto">Última sync: agora</span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

/* ════════════════════════════════════════════════
   SHARED COMPONENTS
   ════════════════════════════════════════════════ */

function BrowserFrame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden border border-[var(--w3)] shadow-lg bg-white">
      {/* Browser bar */}
      <div className="bg-[var(--w2)] px-3 py-2 flex items-center gap-2 border-b border-[var(--w3)]">
        <div className="flex gap-1.5">
          <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#ffbd2e]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#28ca41]" />
        </div>
        <div className="flex-1 bg-white rounded-md px-3 py-1 text-[9px] text-[var(--ml)] text-center border border-[var(--w3)]">
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}

function MiniNav({ active }: { active: string }) {
  return (
    <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--off)] border-b border-[var(--k)]/5">
      <span className="font-serif text-[13px] font-bold text-[var(--k)] italic">Bossa</span>
      <div className="flex gap-4">
        {["Modelos", "Test Drive", "Comparar", "Blog", "Contato"].map((l) => (
          <span key={l} className={`text-[8px] ${l === active ? "text-[var(--k)] font-semibold" : "text-[var(--ml)]"}`}>{l}</span>
        ))}
      </div>
    </div>
  );
}

const polaroidRotations = ["rotate-[-3deg]", "rotate-[2deg]", "rotate-[-1deg]", "rotate-[3deg]"];

function PolaroidCard({ name, price, img, cat, index = 0 }: { name: string; price: string; img?: string; cat: string; index?: number }) {
  const rot = polaroidRotations[index % polaroidRotations.length];
  return (
    <div className={`bg-white rounded-sm p-1.5 pb-3 shadow-[2px_3px_12px_rgba(139,94,60,.15)] ${rot} hover:rotate-0 hover:scale-110 transition-all duration-200 cursor-pointer relative`}>
      {/* Tape */}
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-6 h-3 bg-[var(--bossa)]/40 rounded-sm z-10" />
      <div className="bg-white rounded-md mb-1.5 border border-[var(--w3)] overflow-hidden aspect-square flex items-center justify-center p-1">
        {img ? (
          <Image src={img} alt={name} width={120} height={120} className="w-full h-full object-contain" />
        ) : (
          <span className="text-[24px] drop-shadow-sm">🚲</span>
        )}
      </div>
      <p className="text-[8px] font-serif font-bold text-[var(--k)] italic text-center">{name}</p>
      <p className="text-[7px] text-[var(--ml)] text-center">{cat}</p>
      <p className="text-[9px] text-[var(--k)] font-bold text-center">{price}</p>
    </div>
  );
}

function CatalogCard({ name, price, parcela, img, badge }: { name: string; price: string; parcela: string; img?: string; badge: string | null }) {
  return (
    <div className="bg-white rounded-xl border border-[var(--sand-dark)]/30 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
      <div className="bg-white h-24 flex items-center justify-center relative overflow-hidden p-2">
        {img ? (
          <Image src={img} alt={name} width={160} height={160} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
        ) : (
          <span className="text-[28px] group-hover:scale-110 transition-transform">🛵</span>
        )}
        {badge && (
          <span className={`absolute top-1.5 left-1.5 text-[6px] font-bold px-1.5 py-0.5 rounded-md ${badge === "Sob encomenda" ? "bg-[var(--bossa-light)] text-[var(--k)]" : "bg-[var(--bossa)] text-[var(--k)]"}`}>
            {badge}
          </span>
        )}
      </div>
      <div className="p-2">
        <p className="text-[9px] font-bold text-[var(--k)]">{name}</p>
        <p className="text-[10px] font-bold text-[var(--k)]">{price}</p>
        <p className="text-[7px] text-[var(--ml)]">{parcela}</p>
        <div className="flex gap-1 mt-2">
          <div className="flex-1 bg-[var(--bossa)] text-[var(--k)] text-[7px] font-bold text-center py-1 rounded-md">Test Drive</div>
          <div className="flex-1 border border-[var(--k)]/20/30 text-[var(--k)] text-[7px] font-bold text-center py-1 rounded-md">Comparar</div>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ label, desc }: { label: string; desc: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-[var(--bossa)]" />
      <div>
        <p className="text-[10px] font-bold text-[var(--k)]">{label}</p>
        <p className="text-[8px] text-[var(--ml)]">{desc}</p>
      </div>
    </div>
  );
}

function ConceptTag({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`px-4 py-2 bg-[var(--bossa)]/8 border-t border-[var(--bossa)]/20 ${className}`}>
      <p className="text-[8px] text-[var(--k)]/70 italic leading-relaxed">{children}</p>
    </div>
  );
}

function FilterGroup({ title, options, active }: { title: string; options: string[]; active: number[] }) {
  return (
    <div className="mb-3">
      <p className="text-[8px] font-bold text-[var(--k)] mb-1.5">{title}</p>
      <div className="flex flex-col gap-1">
        {options.map((opt, i) => (
          <label key={opt} className="flex items-center gap-1.5 cursor-pointer">
            <div className={`w-3 h-3 rounded border flex items-center justify-center ${active.includes(i) ? "bg-[var(--g)] border-[var(--g)]" : "border-[var(--w4)]"}`}>
              {active.includes(i) && <span className="text-white text-[6px]">✓</span>}
            </div>
            <span className={`text-[8px] ${active.includes(i) ? "text-[var(--k)] font-semibold" : "text-[var(--ml)]"}`}>{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
