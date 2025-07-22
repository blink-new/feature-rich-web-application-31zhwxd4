import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-background/95 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Main Headline - Spark Advisors Style */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-white">Transform Your</span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Learning Systems
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A sentient approach to scalable talent systems that drives measurable business outcomes through AI-powered learning transformation.
            </p>
          </div>

          {/* CTA Buttons - Clean Spark Style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-black font-semibold px-6 py-3 text-base md:px-8 md:py-4 md:text-lg rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/20 text-white hover:bg-white/10 font-semibold px-6 py-3 text-base md:px-8 md:py-4 md:text-lg rounded-full transition-all duration-300"
              onClick={() => scrollToSection('process')}
            >
              <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              See How It Works
            </Button>
          </div>

          {/* Trust Indicators - Spark Style */}
          <div className="pt-16 space-y-4">
            <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">
              Trusted by Leading Organizations
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-white">Fortune 500</div>
              <div className="w-px h-8 bg-white/20" />
              <div className="text-2xl font-bold text-white">Global Enterprises</div>
              <div className="w-px h-8 bg-white/20" />
              <div className="text-2xl font-bold text-white">Scale-ups</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}