import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Crown, Building } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      icon: Zap,
      price: "$0",
      period: "/month", 
      description: "Perfect for trying out our AI assistant",
      features: [
        "5 AI-generated project plans",
        "Basic diagram generation",
        "Standard templates",
        "Community support",
        "Export to PDF"
      ],
      limitations: [
        "Limited to 5 projects/month",
        "Basic integrations only"
      ],
      cta: "Start Free",
      popular: false,
      color: "text-muted-foreground",
      bgColor: "bg-card/50"
    },
    {
      name: "Pro",
      icon: Crown,
      price: "$19",
      period: "/month",
      description: "For professional developers and teams",
      features: [
        "Unlimited AI generations",
        "Advanced diagram types (C4, ERD, etc.)",
        "Custom templates",
        "Priority support",
        "All integrations (Jira, GitHub, etc.)",
        "Team collaboration",
        "Version history",
        "API access"
      ],
      limitations: [],
      cta: "Start Pro Trial",
      popular: true,
      color: "text-primary",
      bgColor: "bg-primary/5 border-primary/20"
    },
    {
      name: "Enterprise",
      icon: Building,
      price: "Custom",
      period: "",
      description: "For large teams with advanced needs",
      features: [
        "Everything in Pro",
        "Private cloud deployment",
        "SSO & SAML integration",
        "Advanced security & compliance",
        "Custom integrations",
        "Dedicated support",
        "Training & onboarding",
        "Custom SLAs"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false,
      color: "text-accent",
      bgColor: "bg-accent/5 border-accent/20"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary">
            Simple Pricing
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Simple, Transparent{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your team size and needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={index}
                className={`p-8 ${plan.bgColor} backdrop-blur-sm hover:shadow-glow-subtle transition-all duration-300 reveal relative ${
                  plan.popular ? 'shadow-glow-primary' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary">
                    Most Popular
                  </Badge>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary/50 flex items-center justify-center`}>
                    <IconComponent className={`h-8 w-8 ${plan.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>

                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-primary hover:shadow-glow-primary' 
                        : 'variant-outline'
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.limitations.length > 0 && (
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-xs text-muted-foreground mb-2">Limitations:</p>
                      {plan.limitations.map((limitation, limitIndex) => (
                        <div key={limitIndex} className="flex items-start mb-2">
                          <div className="w-2 h-2 bg-muted-foreground/30 rounded-full mr-3 mt-2 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* FAQ/Notes */}
        <div className="text-center mt-16 reveal">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground mb-2">Free Trial</p>
                <p>All paid plans include a 14-day free trial. No credit card required to start.</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-2">Cancel Anytime</p>
                <p>No long-term commitments. Cancel or change your plan at any time.</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-2">Enterprise Support</p>
                <p>Need custom features? Contact us for enterprise solutions and volume discounts.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};