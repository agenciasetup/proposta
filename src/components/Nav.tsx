"use client";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[var(--w3)]">
      <div className="content-w flex items-center justify-between py-3.5">
        <Image
          src="/bossa-img.webp"
          alt="Bossa"
          width={100}
          height={37}
          className="h-[28px] w-auto"
          priority
        />
        <span className="text-[10px] tracking-[2px] uppercase text-[var(--ml)]">
          Proposta 2025
        </span>
      </div>
    </nav>
  );
}
