import { Card } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";

export const ProblemSolutionSection = () => {
  const problems = [
    "Endless documentation that slows teams down",
    "Misaligned planning between devs, PMs, and stakeholders", 
    "Constant context switching across tools"
  ];

  const solutions = [
    "Smart automation for project requirements",
    "Auto-generated diagrams & docs",
    "One tool for planning, documenting, and execution"
  ];

  return (
    <section className="py-24 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            From SDLC Chaos to AI-Powered{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Clarity
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional development workflows are broken. We're fixing them with AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problem */}
          <Card className="p-8 bg-card/50 border-destructive/20 backdrop-blur-sm reveal">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center mr-4">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-destructive">The Problem with Traditional SDLC</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-3 mr-4 flex-shrink-0" />
                  <span className="text-muted-foreground text-lg">{problem}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Arrow */}
          <div className="flex justify-center lg:justify-start reveal">
            <ArrowRight className="h-12 w-12 text-primary animate-pulse" />
          </div>
        </div>

        <div className="mt-8">
          {/* Solution */}
          <Card className="p-8 bg-card/50 border-accent/20 backdrop-blur-sm glow-accent reveal">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                <CheckCircle className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-accent">The AI-Powered Solution</h3>
            </div>
            <ul className="space-y-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0" />
                  <span className="text-foreground text-lg font-medium">{solution}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};