import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@pinaki360.com",
      description: "Get in touch for inquiries and support"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Speak directly with our team"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "San Francisco, CA",
      description: "Schedule an in-person consultation"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Transform Your Learning Strategy
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Ready to unlock your organization's potential? Our learning transformation experts are here to help you create measurable impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl md:text-2xl font-bold text-gray-900">
                Schedule Your Free Consultation
              </CardTitle>
              <p className="text-sm md:text-base text-gray-600">
                Tell us about your learning challenges and we'll show you how our proven methodology can drive results.
              </p>
            </CardHeader>
            
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-12 w-12 md:h-16 md:w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-6">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                  <div className="flex items-center justify-center text-xs md:text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    Response time: Within 24 hours
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                        className="border-gray-300 focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className="border-gray-300 focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        required
                        className="border-gray-300 focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="border-gray-300 focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tell us about your learning challenges *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your current learning challenges, goals, and what you'd like to achieve..."
                      rows={5}
                      required
                      className="border-gray-300 focus:border-primary focus:ring-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-black font-semibold py-4 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-base md:text-lg font-semibold text-primary mb-1">{info.details}</p>
                        <p className="text-xs md:text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Information */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Free 30-minute consultation call</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Custom learning assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Tailored solution recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">ROI projections and timeline</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Trusted by Industry Leaders
                </h3>
                <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                  <div>Fortune 500</div>
                  <div>Tech Startups</div>
                  <div>Global Enterprises</div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Join 500+ organizations that have transformed their learning strategies with Pinaki360
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}