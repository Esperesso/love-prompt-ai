import { Card } from "@/components/ui/card";
import { ArrowRight, Upload, Cog, Download } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Input project context",
      description: "Share your requirements, tech stack, team size, and project goals with our AI assistant.",
      details: ["Project requirements", "Technology stack", "Team size & roles", "Timeline & constraints"]
    },
    {
      number: "02", 
      icon: Cog,
      title: "AI generates structured artifacts",
      description: "Our AI creates comprehensive documentation, diagrams, and workflows tailored to your project.",
      details: ["Technical architecture", "Database schemas", "API specifications", "Project roadmaps"]
    },
    {
      number: "03",
      icon: Download,
      title: "Export & start coding faster",
      description: "Share with your team and export to your favorite tools to jumpstart development immediately.",
      details: ["Export to Jira/Linear", "Generate GitHub repos", "Create Slack summaries", "Send to team tools"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How It{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From idea to implementation in three simple steps. No complex setup, no learning curve.
          </p>
        </div>

        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="p-8 bg-card/50 border-border/50 backdrop-blur-sm hover:shadow-glow-subtle transition-all duration-300 reveal h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-glow-primary">
                      {step.number}
                    </div>
                  </div>

                  <div className="pt-6">
                    <div className="w-16 h-16 bg-secondary/50 rounded-2xl flex items-center justify-center mb-6">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>

                {/* Arrow (hidden on mobile, shown on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};