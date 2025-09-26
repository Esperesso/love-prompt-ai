import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Lead Developer",
      company: "TechStart Inc.",
      avatar: "/placeholder.svg",
      rating: 5,
      quote: "This tool cut our project planning time from weeks to hours. The AI-generated diagrams are incredibly accurate."
    },
    {
      name: "Marcus Rodriguez", 
      role: "Engineering Manager",
      company: "Scale Co.",
      avatar: "/placeholder.svg",
      rating: 5,
      quote: "Finally, a tool that bridges the gap between planning and execution. Our team alignment has never been better."
    },
    {
      name: "Elena Petrov",
      role: "Product Manager",
      company: "Innovation Labs",
      avatar: "/placeholder.svg", 
      rating: 5,
      quote: "The auto-generated PRDs are so comprehensive, they've become our new standard for project kickoffs."
    }
  ];

  const stats = [
    { number: "500+", label: "Beta Users", subtext: "Active developers" },
    { number: "2,000+", label: "Projects Planned", subtext: "AI-generated" },
    { number: "80%", label: "Time Saved", subtext: "Average reduction" },
    { number: "4.9★", label: "User Rating", subtext: "From beta feedback" }
  ];

  return (
    <section className="py-24 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary">
            Loved by Developers
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Join Hundreds of Developers Using{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI to Plan Smarter
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what beta users are saying about transforming their development workflows.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 reveal">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 border-border/50 backdrop-blur-sm hover:shadow-glow-subtle transition-all duration-300 reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="bg-primary/20 text-primary">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Join CTA */}
        <div className="text-center mt-16 reveal">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to join them?
            </h3>
            <p className="text-muted-foreground mb-6">
              Be among the first to experience the future of AI-powered SDLC planning.
            </p>
            <Badge variant="outline" className="border-accent/50 text-accent">
              🚀 Beta spots filling fast
            </Badge>
          </Card>
        </div>
      </div>
    </section>
  );
};