import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Phone, Shield } from "lucide-react";

export default function RootCanal() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white">Endodontics</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Root Canal Treatment in Rawalpindi
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Save your natural tooth with our gentle root canal treatment. Pain-free procedure with modern techniques.
          </p>
          <Button variant="glass" size="lg" asChild>
            <a href="tel:03334855247">Emergency Call</a>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Root Canal Treatment?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Root canal treatment can save your natural tooth and prevent the need for extraction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Save Your Tooth", desc: "Preserve your natural tooth instead of extraction" },
              { title: "Pain Relief", desc: "Eliminate infection and severe tooth pain" },
              { title: "Cost Effective", desc: "Less expensive than tooth replacement options" }
            ].map((benefit, index) => (
              <Card key={index} className="p-6 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Root Canal Treatment</h3>
            <p className="text-muted-foreground mb-6">Modern, pain-free endodontic therapy</p>
            <div className="text-3xl font-bold text-primary mb-6">Rs 8-15k per tooth</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left max-w-md mx-auto">
              {[
                "Pain-free modern techniques",
                "Save your natural tooth", 
                "Prevent tooth extraction",
                "Expert endodontic care",
                "Follow-up care included",
                "Local anesthesia provided"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <Button variant="medical" size="lg" asChild>
              <a href="tel:03334855247"><Phone className="h-5 w-5 mr-2" />Book Treatment</a>
            </Button>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Experiencing Tooth Pain?</h2>
          <p className="text-white/90 mb-6">Don't wait - early treatment can save your tooth</p>
          <Button variant="glass" size="lg" asChild>
            <a href="tel:03334855247">Emergency Consultation</a>
          </Button>
        </div>
      </section>
    </div>
  );
}