import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Users, Clock } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:60px_60px]" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="reveal">
          <Badge variant="secondary" className="mb-6 bg-accent/20 text-accent border-accent/30">
            🚀 Limited Beta Access
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Be Among the First to Transform Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              SDLC with AI
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of forward-thinking developers who are already using AI to plan smarter, 
            collaborate better, and ship faster. Beta spots are filling up quickly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 group text-lg px-8 py-6"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border/50 hover:bg-secondary/20 backdrop-blur-sm text-lg px-8 py-6"
            >
              Book a Demo
            </Button>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/30 text-center">
              <Zap className="h-8 w-8 text-feature-speed mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Instant Impact</h3>
              <p className="text-sm text-muted-foreground">
                Start seeing results from day one with AI-powered planning
              </p>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/30 text-center">
              <Clock className="h-8 w-8 text-feature-ai mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Save 10+ Hours/Week</h3>
              <p className="text-sm text-muted-foreground">
                Automate tedious planning tasks and focus on building
              </p>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/30 text-center">
              <Users className="h-8 w-8 text-feature-team mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Better Team Alignment</h3>
              <p className="text-sm text-muted-foreground">
                Keep everyone on the same page with clear documentation
              </p>
            </Card>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-sm text-muted-foreground">
            <span className="flex items-center">
              ✓ No credit card required
            </span>
            <span className="flex items-center">
              ✓ 14-day free trial
            </span>
            <span className="flex items-center">
              ✓ Cancel anytime
            </span>
            <span className="flex items-center">
              ✓ SOC 2 compliant
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};