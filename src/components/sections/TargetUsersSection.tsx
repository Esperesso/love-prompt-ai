import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Building2, Users2, GraduationCap } from "lucide-react";

export const TargetUsersSection = () => {
  const userTypes = [
    {
      icon: Zap,
      title: "Startups",
      subtitle: "Launch MVPs faster",
      description: "Get from idea to market quickly with AI-generated project foundations and clear development roadmaps.",
      benefits: ["Rapid prototyping", "Clear technical specs", "Investor-ready documentation"],
      color: "text-green-400",
      bgColor: "bg-green-400/10"
    },
    {
      icon: Building2,
      title: "Agencies",
      subtitle: "Standardized project planning",
      description: "Deliver consistent, professional project planning for clients while reducing overhead and estimation time.",
      benefits: ["Client-ready proposals", "Standardized workflows", "Accurate time estimates"],
      color: "text-blue-400",
      bgColor: "bg-blue-400/10"
    },
    {
      icon: Users2,
      title: "Enterprise Teams",
      subtitle: "Collaborative documentation",
      description: "Scale your development processes with AI-powered documentation and team alignment tools.",
      benefits: ["Cross-team collaboration", "Knowledge management", "Process standardization"],
      color: "text-purple-400", 
      bgColor: "bg-purple-400/10"
    },
    {
      icon: GraduationCap,
      title: "Students & Learners",
      subtitle: "Structured project support",
      description: "Learn best practices through AI-guided project planning and receive mentorship on software architecture.",
      benefits: ["Educational guidance", "Best practice examples", "Skill development"],
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <Badge variant="secondary" className="mb-4 bg-accent/20 text-accent">
            For Every Team
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Built for Every Developer &{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're building your first app or scaling enterprise systems, 
            our AI assistant adapts to your needs and experience level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {userTypes.map((userType, index) => {
            const IconComponent = userType.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card/50 border-border/50 backdrop-blur-sm hover:shadow-glow-subtle transition-all duration-300 group reveal h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className={`w-16 h-16 ${userType.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${userType.color}`} />
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {userType.title}
                  </h3>
                  <p className={`text-sm font-medium ${userType.color} mb-3`}>
                    {userType.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {userType.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {userType.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm">
                      <div className={`w-1.5 h-1.5 ${userType.color} rounded-full mr-3 opacity-60`} />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};