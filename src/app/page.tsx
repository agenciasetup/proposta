import Nav from "@/components/Nav";
import ProgressBar from "@/components/ProgressBar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Briefing from "@/components/Briefing";
import Entregas from "@/components/Entregas";
import Prazo from "@/components/Prazo";
import Timeline from "@/components/Timeline";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="wrapper">
      <ProgressBar />
      <Nav />
      <Hero />
      <Stats />
      <Briefing />
      <div className="h-px bg-[var(--w3)] mx-6" />
      <Entregas />
      <Prazo />
      <Timeline />
      <Pricing />
      <Footer />
    </div>
  );
}
