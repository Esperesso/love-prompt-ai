import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolutionSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { DemoSection } from "@/components/sections/DemoSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ValuePropositionSection } from "@/components/sections/ValuePropositionSection";
import { TargetUsersSection } from "@/components/sections/TargetUsersSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { CTASection } from "@/components/sections/CTASection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <DemoSection />
      <HowItWorksSection />
      <ValuePropositionSection />
      <TargetUsersSection />
      <TestimonialsSection />
      <PricingSection />
      <ComparisonSection />
      <CTASection />
      <FooterSection />
    </main>
  );
};

export default Index;
