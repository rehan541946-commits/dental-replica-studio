import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"; 
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Phone, Smile, Shield, Heart } from "lucide-react";

export default function TeethCleaning() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white">Preventive Dentistry</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Professional Teeth Cleaning in Rawalpindi
              </h1>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Keep your smile fresh and healthy with our professional teeth cleaning. We remove plaque, tartar, and stains to help prevent gum disease and cavities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="glass" size="lg" asChild>
                  <a href="tel:03334855247">Book Cleaning - Rs 5k</a>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <Link to="/contact-us">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Professional Cleaning</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Smile, title: "Fresh Breath", desc: "Remove bacteria that cause bad breath" },
              { icon: Shield, title: "Prevent Disease", desc: "Stop gum disease and cavities before they start" },
              { icon: Heart, title: "Overall Health", desc: "Good oral health supports your general well-being" }
            ].map((benefit, index) => (
              <Card key={index} className="p-6 text-center">
                <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready for a Professional Clean?</h2>
          <Button variant="glass" size="lg" asChild>
            <a href="tel:03334855247"><Phone className="h-5 w-5 mr-2" />Book Now: 0333 4855247</a>
          </Button>
        </div>
      </section>
    </div>
  );
}