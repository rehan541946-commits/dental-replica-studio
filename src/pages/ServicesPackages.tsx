import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Phone, CheckCircle } from "lucide-react";

const packages = [
  {
    title: "Scaling & Polishing",
    description: "Get your teeth completely clean from yellow patches and hard dirt.",
    price: "Rs 5k",
    period: "One time",
    features: [
      "Makes your teeth feel smooth and look clean",
      "No more bad breath or yellow teeth",
      "Fresh start for your teeth",
      "Regular cleaning keeps your teeth healthy and strong",
      "Experienced dentists ensure comfort throughout"
    ],
    popular: false
  },
  {
    title: "Teeth Whitening",
    description: "Whiten your teeth with our advanced ZOOM and laser whitening treatment.",
    price: "Rs 25k", 
    period: "One time",
    features: [
      "State-of-the-art ZOOM technology",
      "Remove deep stains and discoloration",
      "Safe, effective, and clinically proven",
      "Brighten your smile up to several shades",
      "Results typically last 6-12 months with proper care"
    ],
    popular: true
  },
  {
    title: "Dental Crowns",
    description: "Restore your damaged or broken teeth and bring back your confident smile.",
    price: "Rs 5-25k",
    period: "One Time",
    features: [
      "Custom-made crowns for perfect fit",
      "Natural-looking restoration",
      "Durable and long-lasting",
      "Protects damaged teeth",
      "Multiple material options available"
    ],
    popular: false
  },
  {
    title: "Root Canal Treatment",
    description: "Save your natural tooth with our gentle root canal procedure.",
    price: "Rs 8-15k",
    period: "Per Tooth",
    features: [
      "Modern pain-free techniques",
      "Save your natural tooth",
      "Prevent tooth extraction",
      "Expert endodontic care",
      "Follow-up care included"
    ],
    popular: false
  },
  {
    title: "Dental Implants",
    description: "Replace missing teeth permanently with titanium implants.",
    price: "Rs 80-120k",
    period: "Per Implant",
    features: [
      "Permanent tooth replacement",
      "Natural look and feel",
      "High-quality titanium implants",
      "Comprehensive treatment planning",
      "Long-term warranty"
    ],
    popular: false
  },
  {
    title: "Braces Treatment",
    description: "Straighten your teeth with traditional or clear braces.",
    price: "Rs 80-150k",
    period: "Complete Treatment",
    features: [
      "Traditional metal or clear braces",
      "Regular adjustment visits",
      "Treatment planning included",
      "Retainer after treatment",
      "Monthly follow-ups"
    ],
    popular: false
  }
];

export default function ServicesPackages() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white">Pay Less and Smile More</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Our Dental Services & Packages
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
            At Dental Land, we believe everyone deserves access to quality dental care at affordable prices. 
            That's why we've created special dental packages to meet your needs and budget.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Affordable Dental Clinic for Your Family
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From cleaning and braces to root canals and dentures, our packages are designed to give you the best care at the best prices. 
              With experienced dentists and modern equipment, we ensure every treatment is safe, comfortable, and effective.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you need routine care or advanced procedures, we're here to make your dental journey smooth and stress-free. 
              Take a look at our dental packages below and find the one that's right for you!
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative p-8 hover:shadow-custom-xl transition-smooth border-0 ${pkg.popular ? 'bg-gradient-primary text-white' : 'bg-gradient-subtle'}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent-red text-white">
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-foreground'}`}>
                    {pkg.title}
                  </h3>
                  <p className={`text-sm mb-4 ${pkg.popular ? 'text-white/90' : 'text-muted-foreground'}`}>
                    {pkg.description}
                  </p>
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${pkg.popular ? 'text-white' : 'text-primary'}`}>
                      {pkg.price}
                    </span>
                    <span className={`text-sm block ${pkg.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                      {pkg.period}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className={`h-5 w-5 mt-0.5 flex-shrink-0 ${pkg.popular ? 'text-white' : 'text-success'}`} />
                      <span className={`text-sm ${pkg.popular ? 'text-white/90' : 'text-muted-foreground'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={pkg.popular ? "glass" : "medical"} 
                  className="w-full" 
                  asChild
                >
                  <a href="tel:03334855247">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Additional Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              More Dental Services Available
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive dental care beyond our packages. Contact us for pricing on these additional services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Tooth Extraction", link: "/tooth-extraction" },
              { name: "Dentures", link: "/dentures" },
              { name: "Clear Aligners", link: "/clear-aligners" },
              { name: "Dental X-rays", link: "/dental-x-rays" },
              { name: "Surgical Procedures", link: "/dental-surgical-procedures" },
              { name: "Emergency Care", link: "/contact-us" },
              { name: "Pediatric Dentistry", link: "/contact-us" },
              { name: "Gum Treatment", link: "/contact-us" }
            ].map((service, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-custom-lg transition-smooth border-0">
                <h3 className="font-semibold mb-2">{service.name}</h3>
                <Button variant="outline" size="sm" asChild>
                  <Link to={service.link}>Learn More</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Dental Treatment?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Contact us today to discuss your needs and get a personalized treatment plan that fits your budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="lg" asChild>
                <a href="tel:03334855247">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: 0333 4855247
                </a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact-us">Visit Our Clinic</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}