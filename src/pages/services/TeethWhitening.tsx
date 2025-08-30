import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  Phone, 
  Star,
  Shield,
  Clock,
  Award
} from "lucide-react";

const beforeAfterImages = [
  { before: "/placeholder-before-1.jpg", after: "/placeholder-after-1.jpg" },
  { before: "/placeholder-before-2.jpg", after: "/placeholder-after-2.jpg" },
  { before: "/placeholder-before-3.jpg", after: "/placeholder-after-3.jpg" }
];

const whiteningOptions = [
  {
    title: "ZOOM Whitening",
    description: "Professional in-office treatment using advanced ZOOM technology",
    duration: "1-2 hours",
    results: "Up to 8 shades whiter",
    price: "Rs 25,000"
  },
  {
    title: "Laser Whitening",
    description: "Advanced laser-activated whitening gel for maximum results",
    duration: "1 hour",
    results: "Up to 6 shades whiter", 
    price: "Rs 20,000"
  },
  {
    title: "Custom Tray Whitening",
    description: "Take-home whitening kit with custom-fitted trays",
    duration: "2-3 weeks",
    results: "Up to 4 shades whiter",
    price: "Rs 15,000"
  }
];

export default function TeethWhitening() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white">Cosmetic Dentistry</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Professional Teeth Whitening in Rawalpindi
              </h1>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Get a brighter, whiter smile with our advanced ZOOM and laser whitening treatments. 
                Safe, effective, and clinically proven to deliver stunning results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="glass" size="lg" asChild>
                  <a href="tel:03334855247">Book Consultation</a>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <Link to="/contact-us">Visit Clinic</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="h-96 bg-gradient-subtle rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Why Choose Professional Whitening</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits of Professional Teeth Whitening
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover why professional whitening at Dental Land delivers superior results compared to over-the-counter products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: "Dramatic Results",
                description: "Up to 8 shades whiter in just one session"
              },
              {
                icon: Shield,
                title: "Safe & Effective",
                description: "Professionally supervised treatment with protective measures"
              },
              {
                icon: Clock,
                title: "Quick Treatment",
                description: "Achieve amazing results in just 1-2 hours"
              },
              {
                icon: Award,
                title: "Long-lasting",
                description: "Results typically last 6-12 months with proper care"
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-custom-lg transition-smooth border-0">
                <div className="h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Whitening Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Treatment Options</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Teeth Whitening Options
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of professional whitening treatments designed to meet your needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whiteningOptions.map((option, index) => (
              <Card key={index} className="p-8 hover:shadow-custom-xl transition-smooth border-0 bg-gradient-subtle">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  <div className="text-3xl font-bold text-primary mb-2">{option.price}</div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm">Duration: {option.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm">Results: {option.results}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm">Professional supervision</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm">Follow-up care included</span>
                  </div>
                </div>

                <Button variant="medical" className="w-full" asChild>
                  <a href="tel:03334855247">
                    <Phone className="h-4 w-4 mr-2" />
                    Book Now
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Treatment Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What to Expect During Treatment
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our professional whitening process is designed for your comfort and safety while delivering exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Initial examination and shade assessment to determine the best treatment option for you."
              },
              {
                step: "02", 
                title: "Preparation",
                description: "Thorough cleaning and gum protection to ensure safe and effective treatment."
              },
              {
                step: "03",
                title: "Treatment",
                description: "Application of professional whitening gel with ZOOM or laser activation."
              },
              {
                step: "04",
                title: "Results",
                description: "Immediate shade improvement and aftercare instructions for long-lasting results."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Common Questions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Is teeth whitening safe?",
                answer: "Yes, professional teeth whitening is safe when performed by qualified dentists. We use proven techniques and protective measures to ensure your safety and comfort."
              },
              {
                question: "How long do the results last?",
                answer: "With proper care, professional whitening results typically last 6-12 months. Avoiding staining foods and drinks, regular dental hygiene, and occasional touch-ups help maintain results."
              },
              {
                question: "Will I experience sensitivity?",
                answer: "Some temporary sensitivity is normal but manageable. We use desensitizing agents and provide aftercare instructions to minimize discomfort."
              },
              {
                question: "How many shades whiter can I expect?",
                answer: "Most patients achieve 4-8 shades whiter, depending on the treatment chosen and individual factors. We'll discuss realistic expectations during your consultation."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 border-0 bg-gradient-subtle">
                <h3 className="font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
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
              Ready for a Brighter Smile?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Transform your smile with professional teeth whitening at Dental Land. 
              Book your consultation today and discover the difference professional treatment makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="lg" asChild>
                <a href="tel:03334855247">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: 0333 4855247
                </a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact-us">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}