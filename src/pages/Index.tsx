import { Navbar } from "@/components/Navbar";
import { PricingHero } from "@/components/PricingHero";
import { PricingCards } from "@/components/PricingCards";
import { ComparisonTable } from "@/components/ComparisonTable";
import { TrustSection } from "@/components/TrustSection";
import { PricingFAQ } from "@/components/PricingFAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PricingHero />
        <PricingCards />
        <TrustSection />
        <ComparisonTable />
        <PricingFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
