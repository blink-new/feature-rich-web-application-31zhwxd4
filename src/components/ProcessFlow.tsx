import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, ArrowRight, CheckCircle } from "lucide-react";

export default function ProcessFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    {
      title: "Discovery & Assessment",
      description: "Comprehensive analysis of your current learning ecosystem, organizational culture, and strategic objectives.",
      details: [
        "Stakeholder interviews and surveys",
        "Learning needs assessment",
        "Skills gap analysis",
        "Technology audit",
        "ROI baseline establishment"
      ],
      duration: "2-3 weeks"
    },
    {
      title: "Strategy Development",
      description: "Creation of a customized learning transformation roadmap aligned with your business goals and success metrics.",
      details: [
        "Learning strategy framework",
        "Technology recommendations",
        "Content curation plan",
        "Implementation timeline",
        "Success metrics definition"
      ],
      duration: "1-2 weeks"
    },
    {
      title: "Solution Design",
      description: "Development of tailored learning interventions, technology integration, and change management protocols.",
      details: [
        "Custom curriculum development",
        "Platform configuration",
        "User experience design",
        "Assessment framework",
        "Communication strategy"
      ],
      duration: "3-4 weeks"
    },
    {
      title: "Implementation",
      description: "Systematic rollout of learning solutions with continuous support, monitoring, and real-time optimization.",
      details: [
        "Phased deployment approach",
        "User training and onboarding",
        "Technical integration",
        "Quality assurance testing",
        "Go-live support"
      ],
      duration: "4-8 weeks"
    },
    {
      title: "Optimization & Scale",
      description: "Continuous improvement through data analysis, feedback integration, and strategic scaling across the organization.",
      details: [
        "Performance analytics review",
        "User feedback integration",
        "Content optimization",
        "Scaling strategy execution",
        "Long-term partnership"
      ],
      duration: "Ongoing"
    }
  ];

  const startAnimation = () => {
    setIsPlaying(true);
    setCurrentStep(0);
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          setIsPlaying(false);
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);
  };

  const resetAnimation = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Proven Methodology
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            A systematic approach to learning transformation that ensures measurable outcomes and sustainable change across your organization.
          </p>
          
          {/* Animation Controls */}
          <div className="flex justify-center gap-4">
            <Button
              onClick={startAnimation}
              disabled={isPlaying}
              className="bg-primary hover:bg-primary/90 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300"
            >
              {isPlaying ? (
                <>
                  <Pause className="mr-2 h-4 w-4" />
                  Playing...
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Watch Process
                </>
              )}
            </Button>
            
            <Button
              onClick={resetAnimation}
              variant="outline"
              className="border-2 border-gray-300 hover:border-primary text-gray-700 hover:text-primary font-semibold px-6 py-3 rounded-full transition-all duration-300"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Progress Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 z-0">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number Circle */}
                <div className="flex justify-center mb-6">
                  <div 
                    className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 ${
                      index <= currentStep
                        ? 'bg-gradient-to-r from-primary to-accent text-white scale-110 shadow-lg'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {index <= currentStep ? (
                      <CheckCircle className="h-8 w-8" />
                    ) : (
                      index + 1
                    )}
                  </div>
                </div>

                {/* Step Card */}
                <Card 
                  className={`transition-all duration-500 cursor-pointer ${
                    index === currentStep
                      ? 'shadow-xl scale-105 ring-2 ring-primary/20'
                      : index < currentStep
                      ? 'shadow-lg'
                      : 'shadow-md hover:shadow-lg'
                  }`}
                  onClick={() => setCurrentStep(index)}
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <div className="text-xs md:text-sm text-primary font-semibold mb-3">
                        {step.duration}
                      </div>
                    </div>
                    
                    <p className="text-xs md:text-sm text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Expandable Details */}
                    {index === currentStep && (
                      <div className="border-t pt-4 mt-4 animate-in slide-in-from-top duration-300">
                        <h4 className="font-semibold text-gray-900 mb-3 text-xs md:text-sm">Key Activities:</h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start text-xs md:text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Transformation Journey?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our methodology has helped organizations achieve an average of 85% improvement in learning effectiveness and 3x faster skill development.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Begin Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}