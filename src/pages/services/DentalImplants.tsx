import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone } from "lucide-react";

export default function DentalImplants() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white">Implant Dentistry</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dental Implants in Rawalpindi
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Replace missing teeth permanently with our high-quality dental implants. Natural look and feel that lasts a lifetime.
          </p>
          <Button variant="glass" size="lg" asChild>
            <a href="tel:03334855247">Free Consultation</a>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Dental Implant Treatment</h3>
            <p className="text-muted-foreground mb-6">Permanent tooth replacement with titanium implants</p>
            <div className="text-3xl font-bold text-primary mb-6">Rs 80-120k per implant</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
              {[
                "Permanent solution",
                "Natural look and feel", 
                "High-quality titanium",
                "Comprehensive planning",
                "Long-term warranty",
                "Expert surgical team"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <Button variant="medical" size="lg" className="w-full" asChild>
              <a href="tel:03334855247"><Phone className="h-5 w-5 mr-2" />Book Consultation</a>
            </Button>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Missing Teeth? Get Your Confidence Back</h2>
          <Button variant="glass" size="lg" asChild>
            <a href="tel:03334855247">Schedule Implant Consultation</a>
          </Button>
        </div>
      </section>
    </div>
  );
}