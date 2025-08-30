import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Phone, Smile } from "lucide-react";

export default function Braces() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white">Orthodontics</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Braces Treatment in Rawalpindi
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Straighten your teeth with our modern braces options. We offer traditional metal braces and clear aligners for a perfect smile.
          </p>
          <Button variant="glass" size="lg" asChild>
            <a href="tel:03334855247">Get Consultation</a>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Traditional Metal Braces</h3>
              <p className="text-muted-foreground mb-4">Most effective for complex alignment issues</p>
              <div className="space-y-2 mb-6">
                {["Durable and effective", "Most affordable option", "Suitable for all ages", "Predictable results"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="text-2xl font-bold text-primary mb-4">Rs 80-120k</p>
              <Button variant="medical" className="w-full" asChild>
                <a href="tel:03334855247">Book Consultation</a>
              </Button>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Clear Aligners</h3>
              <p className="text-muted-foreground mb-4">Nearly invisible orthodontic treatment</p>
              <div className="space-y-2 mb-6">
                {["Virtually invisible", "Removable for eating", "Comfortable to wear", "Easy to maintain"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="text-2xl font-bold text-primary mb-4">Rs 100-150k</p>
              <Button variant="medical" className="w-full" asChild>
                <a href="tel:03334855247">Book Consultation</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Start Your Smile Journey Today</h2>
          <Button variant="glass" size="lg" asChild>
            <a href="tel:03334855247"><Phone className="h-5 w-5 mr-2" />Call: 0333 4855247</a>
          </Button>
        </div>
      </section>
    </div>
  );
}