import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, GitBranch, FileText, ExternalLink } from "lucide-react";

export const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const demos = [
    {
      icon: MessageSquare,
      title: "AI Chat Creating Project Plan",
      description: "Watch how our AI understands your requirements and creates comprehensive project plans in minutes.",
      badge: "Interactive Demo",
      preview: "AI analyzing requirements...\n→ Generating user stories\n→ Creating technical architecture\n→ Setting up milestones"
    },
    {
      icon: GitBranch, 
      title: "Auto-Generated Diagrams",
      description: "See how technical diagrams are automatically generated from your project description.",
      badge: "Visual Generation",
      preview: "Input: 'E-commerce platform with microservices'\n→ C4 Architecture Diagram\n→ Database ERD\n→ API Flow Charts"
    },
    {
      icon: FileText,
      title: "PRD Export to Project Tools",
      description: "Export structured PRDs and documentation directly to your favorite project management tools.", 
      badge: "Integration Ready",
      preview: "Generated PRD exported to:\n→ Jira (User Stories)\n→ Confluence (Documentation)\n→ GitHub (Issues & Roadmap)"
    }
  ];

  return (
    <section className="py-24 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            See It in{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the power of AI-driven SDLC automation with these interactive demonstrations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Preview */}
          <div className="reveal">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20 shadow-glow-subtle h-[400px] relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-primary/20 text-primary">
                  {demos[activeDemo].badge}
                </Badge>
              </div>
              
              <div className="h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                    {(() => {
                      const IconComponent = demos[activeDemo].icon;
                      return <IconComponent className="h-5 w-5 text-primary" />;
                    })()}
                  </div>
                  <h3 className="text-xl font-semibold">{demos[activeDemo].title}</h3>
                </div>

                <div className="flex-1 bg-secondary/20 rounded-lg p-6 font-mono text-sm">
                  <div className="text-accent mb-2">$ sdlc-ai generate --type plan</div>
                  <div className="whitespace-pre-line text-muted-foreground">
                    {demos[activeDemo].preview}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Demo Controls */}
          <div className="space-y-4 reveal">
            {demos.map((demo, index) => {
              const IconComponent = demo.icon;
              return (
                <Card 
                  key={index}
                  className={`p-6 cursor-pointer transition-all duration-300 ${
                    activeDemo === index 
                      ? 'bg-primary/10 border-primary/50 shadow-glow-primary' 
                      : 'bg-card/50 border-border/50 hover:border-primary/30'
                  }`}
                  onClick={() => setActiveDemo(index)}
                >
                  <div className="flex items-start">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 transition-colors ${
                      activeDemo === index ? 'bg-primary/20' : 'bg-secondary/20'
                    }`}>
                      <IconComponent className={`h-6 w-6 ${
                        activeDemo === index ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">{demo.title}</h4>
                      <p className="text-muted-foreground text-sm">{demo.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}

            <Button className="w-full mt-6 bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 group">
              Try in Browser
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};