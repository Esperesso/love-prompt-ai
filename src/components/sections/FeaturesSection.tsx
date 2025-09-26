import { Card } from "@/components/ui/card";
import { Brain, BarChart3, Zap, Users, Shield, Rocket } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-driven project planning",
      description: "Intelligent planning that understands your project context and generates comprehensive roadmaps.",
      color: "feature-ai"
    },
    {
      icon: BarChart3,
      title: "Auto-generated diagrams",
      description: "C4, ERD, flowcharts, and system diagrams created automatically from your project requirements.",
      color: "feature-diagram"
    },
    {
      icon: Zap,
      title: "Context-aware code & PRD generation",
      description: "Generate production-ready code and detailed PRDs that understand your tech stack and requirements.",
      color: "feature-code"
    },
    {
      icon: Users,
      title: "Team collaboration & knowledge sync",
      description: "Keep everyone aligned with shared knowledge bases and real-time collaboration features.",
      color: "feature-team"
    },
    {
      icon: Shield,
      title: "Secure & private by design",
      description: "Your code and data remain private with enterprise-grade security and compliance standards.",
      color: "feature-secure"
    },
    {
      icon: Rocket,
      title: "Faster time-to-code for any project",
      description: "Reduce planning time by 80% and get to coding faster with AI-generated project foundations.",
      color: "feature-speed"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Makes Us{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Different
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            More than just another development tool - we're your AI-powered SDLC copilot.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-card/50 border-border/50 backdrop-blur-sm hover:shadow-glow-subtle transition-all duration-300 group reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`h-6 w-6 ${feature.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};