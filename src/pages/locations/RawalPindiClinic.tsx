import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone } from "lucide-react";

export default function RawalPindiClinic() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white">Rawalpindi Location</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Dentist in Rawalpindi</h1>
          <p className="text-white/90 text-lg mb-8">Panorama Center, Stadium Road</p>
          <Button variant="glass" size="lg" asChild>
            <a href="tel:03334855247"><Phone className="h-5 w-5 mr-2" />Call: 0333 4855247</a>
          </Button>
        </div>
      </section>
    </div>
  );
}