import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function SurgicalProcedures() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white">Oral Surgery</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Dental Surgical Procedures</h1>
          <p className="text-white/90 text-lg mb-8">Expert oral surgery services</p>
          <Button variant="glass" size="lg" asChild>
            <a href="tel:03334855247">Consultation</a>
          </Button>
        </div>
      </section>
    </div>
  );
}