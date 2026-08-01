import { Hero } from "@/components/Hero";
import { StreamingSection } from "@/components/StreamingSection";
import { CdSection } from "@/components/CdSection";
import { DonateSection } from "@/components/DonateSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <StreamingSection />
      <CdSection />
      <DonateSection />
      <Footer />
    </main>
  );
}
