import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";

export const ComparisonSection = () => {
  const features = [
    "AI-powered project planning",
    "Auto-generated diagrams (C4, ERD)",
    "Context-aware documentation",
    "Team collaboration tools",
    "Code & PRD generation",
    "End-to-end SDLC workflow",
    "Smart integrations",
    "Real-time updates"
  ];

  const competitors = [
    {
      name: "Notion",
      description: "Documentation only",
      color: "text-gray-400",
      features: [true, false, true, true, false, false, false, true]
    },
    {
      name: "Jira",
      description: "Project management only", 
      color: "text-blue-400",
      features: [false, false, false, true, false, false, true, true]
    },
    {
      name: "GitHub Copilot",
      description: "Coding assistance only",
      color: "text-green-400", 
      features: [false, false, false, false, true, false, false, false]
    },
    {
      name: "Our AI Assistant",
      description: "Complete SDLC solution",
      color: "text-primary",
      highlight: true,
      features: [true, true, true, true, true, true, true, true]
    }
  ];

  return (
    <section className="py-24 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <Badge variant="secondary" className="mb-4 bg-accent/20 text-accent">
            Why Not Alternatives?
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Not Just Use Notion, Jira, or{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Copilot?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Other tools solve pieces of the puzzle. We solve the entire SDLC workflow with AI.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block reveal">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
            <div className="grid grid-cols-5 gap-4">
              {/* Header */}
              <div className="font-semibold text-muted-foreground">Features</div>
              {competitors.map((competitor, index) => (
                <div 
                  key={index}
                  className={`text-center ${competitor.highlight ? 'bg-primary/10 rounded-lg p-4 -m-2' : ''}`}
                >
                  <div className={`font-bold ${competitor.color} mb-1`}>
                    {competitor.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {competitor.description}
                  </div>
                </div>
              ))}

              {/* Feature Rows */}
              {features.map((feature, featureIndex) => (
                <div key={featureIndex} className="contents">
                  <div className="py-3 text-sm font-medium border-t border-border/20">
                    {feature}
                  </div>
                  {competitors.map((competitor, competitorIndex) => (
                    <div 
                      key={competitorIndex}
                      className={`py-3 text-center border-t border-border/20 ${
                        competitor.highlight ? 'bg-primary/5 rounded-lg -mx-2' : ''
                      }`}
                    >
                      {competitor.features[featureIndex] ? (
                        <Check className={`h-5 w-5 mx-auto ${
                          competitor.highlight ? 'text-primary' : 'text-green-500'
                        }`} />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4 reveal">
          {competitors.map((competitor, index) => (
            <Card 
              key={index}
              className={`p-6 ${
                competitor.highlight 
                  ? 'bg-primary/10 border-primary/30 shadow-glow-primary' 
                  : 'bg-card/50 border-border/50'
              } backdrop-blur-sm`}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className={`font-bold ${competitor.color}`}>
                    {competitor.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {competitor.description}
                  </p>
                </div>
                {competitor.highlight && (
                  <Badge className="bg-gradient-primary">Best Choice</Badge>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2">
                {features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    {competitor.features[featureIndex] ? (
                      <Check className={`h-4 w-4 mr-2 ${
                        competitor.highlight ? 'text-primary' : 'text-green-500'
                      }`} />
                    ) : (
                      <X className="h-4 w-4 text-muted-foreground/50 mr-2" />
                    )}
                    <span className={competitor.features[featureIndex] ? '' : 'text-muted-foreground/50'}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to experience the difference?
            </h3>
            <p className="text-muted-foreground mb-6">
              Stop piecing together multiple tools. Get the complete AI-powered SDLC solution.
            </p>
            <Button className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 group">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};