import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Animation/Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:60px_60px]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
              Accelerate Your{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                SDLC
              </span>{" "}
              with AI-Powered Planning & Execution
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl animate-slide-up [animation-delay:0.2s]">
              Your all-in-one AI assistant for project planning, documentation, and development workflows.
              Generate diagrams, PRDs, and accelerate your development process.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up [animation-delay:0.4s]">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 group"
              >
                Join the Beta
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border/50 hover:bg-secondary/20 backdrop-blur-sm"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* 3D Spline Embed */}
          <div className="relative h-[500px] lg:h-[600px] animate-float">
            <div className="absolute inset-0 bg-gradient-primary/10 rounded-3xl blur-3xl" />
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
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};