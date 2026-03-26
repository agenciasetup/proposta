"use client";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[var(--w3)] px-5 py-3.5 flex items-center justify-between">
      <div className="font-serif text-[17px] font-bold text-[var(--k)]">
        <span className="text-[var(--g)]">Bossa</span> Elétrica
      </div>
      <span className="text-[10px] tracking-[2px] uppercase text-[var(--ml)]">
        Proposta 2025
      </span>
    </nav>
  );
}
