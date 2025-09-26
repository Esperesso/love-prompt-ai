import * as React from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ArrowRight, Play, Zap, Users, Clock, Code, Brain, Sparkles } from "lucide-react";

export const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  
  const rotatingWords = ["Accelerate", "Transform", "Revolutionize", "Supercharge"];
  const betaUsers = [
    { name: "Alex M.", avatar: "AM", role: "Senior Dev" },
    { name: "Sarah K.", avatar: "SK", role: "Tech Lead" },
    { name: "Mike R.", avatar: "MR", role: "DevOps" },
    { name: "Lisa P.", avatar: "LP", role: "Full Stack" },
  ];

  React.useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);

    return () => {
      clearInterval(wordInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:60px_60px]" />
        
        {/* Circuit Flow Animation */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-circuit-flow" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-circuit-flow [animation-delay:1s]" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-circuit-flow [animation-delay:2s]" />
      </div>

      {/* Neural Network Nodes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-neural-pulse" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full animate-neural-pulse [animation-delay:0.5s]" />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-primary rounded-full animate-neural-pulse [animation-delay:1s]" />
        <div className="absolute bottom-60 right-1/4 w-2 h-2 bg-accent rounded-full animate-neural-pulse [animation-delay:1.5s]" />
      </div>

      {/* Theme Toggle */}
      <div className="absolute top-8 right-8 z-50">
        <ThemeToggle />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Animated Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-slide-up">
                <span className="inline-block">
                  {rotatingWords.map((word, index) => (
                    <span
                      key={word}
                      className={`absolute transition-all duration-500 ${
                        index === currentWordIndex
                          ? "opacity-100 transform-none"
                          : "opacity-0 transform -translate-y-4"
                      }`}
                    >
                      <span className="bg-gradient-primary bg-clip-text text-transparent">
                        {word}
                      </span>
                    </span>
                  ))}
                  <span className="invisible">{rotatingWords[0]}</span>
                </span>{" "}
                Your{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  SDLC
                </span>{" "}
                with AI-Powered Planning & Execution
              </h1>
              
              {/* Value Highlight */}
              <div className="flex items-center justify-center lg:justify-start space-x-2 animate-slide-up [animation-delay:0.2s]">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-lg font-medium text-accent">
                  Saving Developers <AnimatedCounter from={0} to={15} suffix="h+" /> per project
                </span>
              </div>
            </div>

            <p className="text-xl text-muted-foreground max-w-2xl animate-slide-up [animation-delay:0.4s]">
              Your all-in-one AI assistant for project planning, documentation, and development workflows.
              Generate diagrams, PRDs, and accelerate your development process.
            </p>

            {/* Progress Indicator */}
            <div className="space-y-2 animate-slide-up [animation-delay:0.6s]">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Development Speed</span>
                <span className="text-primary font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up [animation-delay:0.8s]">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 group animate-pulse-glow"
              >
                <Brain className="mr-2 h-5 w-5" />
                Join the Beta
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border/50 hover:bg-secondary/20 backdrop-blur-sm group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof - Beta Users */}
            <div className="space-y-3 animate-slide-up [animation-delay:1s]">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Trusted by developers at</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                {betaUsers.map((user, index) => (
                  <div key={user.name} className="flex items-center space-x-2 animate-avatar-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                    <Avatar className="w-8 h-8 border-2 border-primary/20">
                      <AvatarFallback className="text-xs bg-primary/10 text-primary">
                        {user.avatar}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                ))}
                <Badge variant="secondary" className="ml-2">
                  +<AnimatedCounter from={0} to={247} /> more
                </Badge>
              </div>
            </div>
          </div>

          {/* 3D Spline Embed with Enhancements */}
          <div className="relative h-[500px] lg:h-[700px] animate-float">
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-primary/10 rounded-3xl blur-3xl animate-pulse-glow" />
            
            {/* Tech Icons Floating Around */}
            <div className="absolute -top-4 -left-4 p-3 bg-card/80 backdrop-blur-sm rounded-xl border border-border/20 animate-float [animation-delay:0.5s]">
              <Code className="w-6 h-6 text-feature-code" />
            </div>
            <div className="absolute -top-4 -right-4 p-3 bg-card/80 backdrop-blur-sm rounded-xl border border-border/20 animate-float [animation-delay:1s]">
              <Brain className="w-6 h-6 text-feature-ai" />
            </div>
            <div className="absolute -bottom-4 -left-4 p-3 bg-card/80 backdrop-blur-sm rounded-xl border border-border/20 animate-float [animation-delay:1.5s]">
              <Sparkles className="w-6 h-6 text-feature-speed" />
            </div>
            <div className="absolute -bottom-4 -right-4 p-3 bg-card/80 backdrop-blur-sm rounded-xl border border-border/20 animate-float [animation-delay:2s]">
              <Clock className="w-6 h-6 text-accent" />
            </div>

            {/* Main Spline Container */}
            <div className="relative h-full rounded-2xl overflow-hidden border border-border/20 shadow-glow-subtle">
              <iframe 
                src='https://my.spline.design/boxeshover-KVsi7n7LVIdzNuVVzbofWuck/' 
                frameBorder='0' 
                width='100%' 
                height='100%'
                className="w-full h-full"
                title="AI SDLC Assistant 3D Animation"
              />
            </div>
          </div>
        </div>

        {/* Stats Ribbon */}
        <div className="absolute bottom-20 left-0 right-0 z-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-card/80 backdrop-blur-sm border border-border/20 rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="animate-stats-slide">
                  <div className="text-2xl font-bold text-primary">
                    <AnimatedCounter from={0} to={100} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground">Teams in Beta</div>
                </div>
                <div className="animate-stats-slide [animation-delay:0.2s]">
                  <div className="text-2xl font-bold text-accent">
                    <AnimatedCounter from={0} to={500} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground">Projects Generated</div>
                </div>
                <div className="animate-stats-slide [animation-delay:0.4s]">
                  <div className="text-2xl font-bold text-feature-speed">
                    <AnimatedCounter from={0} to={85} suffix="%" />
                  </div>
                  <div className="text-sm text-muted-foreground">Faster Planning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};