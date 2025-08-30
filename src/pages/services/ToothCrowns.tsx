import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone } from "lucide-react";

export default function ToothCrowns() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white">Restorative Dentistry</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dental Crowns in Rawalpindi
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Restore damaged or broken teeth with custom-made crowns. Durable, natural-looking protection for your teeth.
          </p>
          <Button variant="glass" size="lg" asChild>
            <a href="tel:03334855247">Get Crown Consultation</a>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Porcelain Crowns</h3>
              <p className="text-muted-foreground mb-4">Natural-looking, stain-resistant</p>
              <p className="text-2xl font-bold text-primary mb-4">Rs 15-25k</p>
              <div className="space-y-2 mb-6">
                {["Most natural appearance", "Stain resistant", "Biocompatible"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button variant="medical" className="w-full" asChild>
                <a href="tel:03334855247">Choose This</a>
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Metal Crowns</h3>
              <p className="text-muted-foreground mb-4">Strongest and most durable</p>
              <p className="text-2xl font-bold text-primary mb-4">Rs 8-15k</p>
              <div className="space-y-2 mb-6">
                {["Extremely durable", "Cost-effective", "Long-lasting"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button variant="medical" className="w-full" asChild>
                <a href="tel:03334855247">Choose This</a>
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Zirconia Crowns</h3>
              <p className="text-muted-foreground mb-4">Strong and natural-looking</p>
              <p className="text-2xl font-bold text-primary mb-4">Rs 12-20k</p>
              <div className="space-y-2 mb-6">
                {["Very strong", "Natural appearance", "Metal-free"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button variant="medical" className="w-full" asChild>
                <a href="tel:03334855247">Choose This</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Restore Your Damaged Teeth</h2>
          <Button variant="glass" size="lg" asChild>
            <a href="tel:03334855247"><Phone className="h-5 w-5 mr-2" />Call: 0333 4855247</a>
          </Button>
        </div>
      </section>
    </div>
  );
}