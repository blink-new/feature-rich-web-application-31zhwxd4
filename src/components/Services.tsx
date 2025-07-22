import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Clock, Target, ArrowRight, CheckCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Customized Workshops",
      subtitle: "Tailored Learning Experiences",
      description: "Bespoke training programs designed specifically for your organization's unique challenges and objectives.",
      duration: "1-3 Days",
      participants: "10-50 People",
      price: "Starting at $15,000",
      features: [
        "Custom curriculum development",
        "Expert facilitator-led sessions",
        "Interactive learning modules",
        "Post-workshop support materials",
        "Performance assessment tools",
        "Follow-up coaching sessions"
      ],
      popular: false,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Learning Series",
      subtitle: "Comprehensive Development Programs",
      description: "Multi-session learning journeys that build capabilities systematically over time for sustained impact.",
      duration: "3-6 Months",
      participants: "20-100 People",
      price: "Starting at $45,000",
      features: [
        "Progressive skill building modules",
        "Blended learning approach",
        "Peer collaboration platforms",
        "Regular progress assessments",
        "Mentorship matching",
        "Certification upon completion"
      ],
      popular: true,
      color: "from-primary to-accent"
    },
    {
      title: "Hi-Po Development",
      subtitle: "Executive Leadership Pipeline",
      description: "Accelerated development programs for high-potential leaders to prepare them for senior executive roles.",
      duration: "6-12 Months",
      participants: "5-25 People",
      price: "Starting at $75,000",
      features: [
        "Executive coaching sessions",
        "360-degree feedback assessments",
        "Strategic project assignments",
        "Board-level presentation training",
        "Cross-functional exposure",
        "Succession planning integration"
      ],
      popular: false,
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Three-Tier Service Offerings
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Choose the right level of engagement for your organization's learning transformation journey. Each tier is designed to deliver measurable outcomes and sustainable growth.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group ${
                service.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-black font-semibold px-4 py-1 text-sm">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className={`w-full h-2 bg-gradient-to-r ${service.color} rounded-t-lg mb-6`} />
                
                <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </CardTitle>
                
                <p className="text-primary font-semibold text-base md:text-lg mb-4">
                  {service.subtitle}
                </p>
                
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Service Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-gray-700">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    {service.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Users className="h-4 w-4 mr-2 text-primary" />
                    {service.participants}
                  </div>
                </div>

                <div className="text-3xl font-bold text-gray-900 mb-6">
                  {service.price}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 mr-3 text-primary flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${
                    service.popular 
                      ? 'bg-primary hover:bg-primary/90 text-black' 
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  } font-semibold py-3 rounded-full transition-all duration-300 group-hover:scale-105`}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <Target className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Not Sure Which Option Is Right for You?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our learning strategists will work with you to assess your organization's needs and recommend the optimal approach for maximum impact.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}