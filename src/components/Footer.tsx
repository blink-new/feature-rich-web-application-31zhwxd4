import { Mail, Phone, MapPin, Linkedin, Twitter, Globe } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Our Process', id: 'process' },
    { name: 'Contact', id: 'contact' }
  ];

  const services = [
    'Customized Workshops',
    'Learning Series',
    'Hi-Po Development',
    'Strategic Consulting',
    'Technology Integration',
    'Change Management'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-base md:text-lg">P</span>
              </div>
              <div>
                <div className="font-bold text-lg md:text-xl text-white">Pinaki360</div>
                <div className="text-xs md:text-sm text-gray-400">Learning Transformation</div>
              </div>
            </div>
            
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              A sentient approach to scalable talent systems that drives measurable business outcomes through AI-powered learning transformation.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base md:text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm md:text-base text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-base md:text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-sm md:text-base text-gray-300 hover:text-primary transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-base md:text-lg mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm md:text-base text-gray-300">hello@pinaki360.com</p>
                  <p className="text-xs md:text-sm text-gray-400">General inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm md:text-base text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-xs md:text-sm text-gray-400">Business hours: 9AM - 6PM PST</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm md:text-base text-gray-300">San Francisco, CA</p>
                  <p className="text-xs md:text-sm text-gray-400">Schedule a visit</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Start Your Journey
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Pinaki360. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}