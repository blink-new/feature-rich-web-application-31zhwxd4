import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, TrendingUp, Users, Zap, Award } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: Brain,
      title: "AI-Powered Technology",
      description: "Leverage cutting-edge artificial intelligence to personalize learning experiences and optimize talent development pathways.",
      features: ["Adaptive Learning Algorithms", "Predictive Analytics", "Intelligent Content Curation", "Real-time Performance Insights"]
    },
    {
      icon: Target,
      title: "Outcome-Driven Consulting",
      description: "Strategic guidance focused on measurable business results, ensuring your learning investments deliver tangible ROI.",
      features: ["Business Impact Assessment", "ROI Measurement", "Strategic Roadmapping", "Performance Optimization"]
    },
    {
      icon: TrendingUp,
      title: "Tiered Learning Interventions",
      description: "Scalable solutions designed to meet diverse organizational needs, from individual development to enterprise-wide transformation.",
      features: ["Individual Coaching", "Team Development", "Leadership Programs", "Organizational Change"]
    }
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: "Professionals Transformed" },
    { icon: TrendingUp, value: "85%", label: "Performance Improvement" },
    { icon: Award, value: "95%", label: "Client Satisfaction" },
    { icon: Zap, value: "3x", label: "Faster Skill Development" }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header - Spark Style */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Future of Learning Transformation
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Our three-pillar approach combines advanced technology, strategic consulting, and scalable interventions to create sustainable learning ecosystems that drive business growth.
          </p>
        </div>

        {/* Stats Section - Spark Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  {pillar.title}
                </h3>
                
                <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                  {pillar.description}
                </p>
                
                <ul className="space-y-3">
                  {pillar.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Learning Strategy?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join forward-thinking organizations that are already leveraging our proven methodology to drive measurable business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Consultation
              </button>
              <button 
                className="border-2 border-gray-300 hover:border-primary text-gray-700 hover:text-primary font-semibold px-8 py-4 rounded-full transition-all duration-300"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}