import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MessageCircle, Rocket, Bot } from "lucide-react";

export const ValuePropositionSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save hours in planning",
      metric: "80%",
      description: "Reduce project planning time from days to hours with AI automation",
      color: "text-green-400"
    },
    {
      icon: MessageCircle,
      title: "Reduce miscommunication",
      metric: "90%",
      description: "Clear documentation and shared understanding across all team members", 
      color: "text-blue-400"
    },
    {
      icon: Rocket,
      title: "Faster time-to-code",
      metric: "5x",
      description: "Jump straight to implementation with comprehensive project foundations",
      color: "text-purple-400"
    },
    {
      icon: Bot,
      title: "True SDLC copilot",
      metric: "24/7",
      description: "More than documentation - an intelligent assistant for your entire workflow",
      color: "text-cyan-400"
    }
  ];

  return (
    <section className="py-24 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI Assistant?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your development workflow with measurable improvements that your team will feel immediately.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card/50 border-border/50 backdrop-blur-sm text-center hover:shadow-glow-subtle transition-all duration-300 group reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-secondary/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`h-8 w-8 ${benefit.color}`} />
                  </div>
                  <div className={`text-4xl font-bold ${benefit.color} mb-2`}>
                    {benefit.metric}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-16 reveal">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to transform your SDLC?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of developers who are already using AI to plan smarter, 
              collaborate better, and ship faster.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>✓ No credit card required</span>
              <span>✓ 14-day free trial</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};