import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import StatsSection from "@/components/StatsSection";
import PortfolioSection from "@/components/PortfolioSection";
import TechSection from "@/components/TechSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <ServicesSection />
      <ProcessSection />
      <StatsSection />
      <PortfolioSection />
      <TechSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
