import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone } from "lucide-react";

export default function ToothExtraction() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white">Oral Surgery</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tooth Extraction in Rawalpindi
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Safe and gentle tooth extraction when necessary. We use modern techniques to minimize discomfort and promote healing.
          </p>
          <Button variant="glass" size="lg" asChild>
            <a href="tel:03334855247">Emergency Extraction</a>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Simple Extraction</h3>
              <p className="text-muted-foreground mb-4">For visible teeth that can be removed easily</p>
              <div className="space-y-2 mb-6">
                {["Local anesthesia", "Quick procedure", "Minimal discomfort", "Fast healing"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="text-2xl font-bold text-primary mb-4">Rs 2-5k per tooth</p>
              <Button variant="medical" className="w-full" asChild>
                <a href="tel:03334855247">Book Extraction</a>
              </Button>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Surgical Extraction</h3>
              <p className="text-muted-foreground mb-4">For impacted or broken teeth requiring surgery</p>
              <div className="space-y-2 mb-6">
                {["Expert surgical technique", "Pain management", "Comprehensive aftercare", "Infection prevention"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="text-2xl font-bold text-primary mb-4">Rs 5-12k per tooth</p>
              <Button variant="medical" className="w-full" asChild>
                <a href="tel:03334855247">Book Surgery</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Emergency Tooth Extraction?</h2>
          <Button variant="glass" size="lg" asChild>
            <a href="tel:03334855247"><Phone className="h-5 w-5 mr-2" />Emergency Call: 0333 4855247</a>
          </Button>
        </div>
      </section>
    </div>
  );
}