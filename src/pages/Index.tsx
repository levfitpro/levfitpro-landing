import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { VIPSection } from "@/components/landing/VIPSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { EngagementSection } from "@/components/landing/EngagementSection";
import { VisionSection } from "@/components/landing/VisionSection";
import { CountdownSection } from "@/components/landing/CountdownSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: "hsl(var(--background))" }}>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <VIPSection />
        <BenefitsSection />
        <EngagementSection />
        <VisionSection />
        <CountdownSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};
export default Index;
