import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Users, 
  Award, 
  Clock, 
  Heart,
  Shield,
  CheckCircle,
  Phone
} from "lucide-react";
import clinicInterior from "@/assets/clinic-interior.webp";
import dentistTreatment from "@/assets/dentist-treatment.jpg";

const teamValues = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We treat every patient with kindness, understanding, and genuine care."
  },
  {
    icon: Shield,
    title: "Safety First", 
    description: "Strict sterilization protocols and safety measures for your protection."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to providing the highest quality dental treatments and services."
  },
  {
    icon: Users,
    title: "Family Focused",
    description: "Gentle, friendly care for patients of all ages - from kids to seniors."
  }
];

const milestones = [
  {
    year: "2022",
    title: "Dental Land Founded",
    description: "Started our journey to make quality dental care accessible to everyone in Rawalpindi."
  },
  {
    year: "2023", 
    title: "Expanded Services",
    description: "Added advanced treatments like dental implants, orthodontics, and cosmetic dentistry."
  },
  {
    year: "2024",
    title: "Islamabad Branch",
    description: "Opened our second location to serve more families across the twin cities."
  },
  {
    year: "2024",
    title: "1000+ Happy Patients",
    description: "Reached a milestone of over 1000 satisfied patients who trust us with their smiles."
  }
];

export default function AboutUs() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white">Welcome to Dental Land</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Your Family Dentist in Rawalpindi and Islamabad
              </h1>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Welcome to Dental Land Clinic, where every smile matters. Since 2022, we have proudly served the communities of Rawalpindi and Islamabad with kind, gentle, and honest dental care for all ages.
              </p>
              <Button variant="glass" size="lg" asChild>
                <a href="tel:03334855247">Call Now</a>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={clinicInterior} 
                alt="Best Dental Clinic Rawalpindi - Dental Land"
                className="rounded-lg shadow-custom-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Our Story</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Dental Lands started in 2022 with one vision to make quality dental care accessible, affordable, and stress-free for everyone in our community. What began as a single clinic in Rawalpindi has now grown into two trusted branches in Rawalpindi and Islamabad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We understand that visiting a dentist can sometimes feel stressful, so we built our clinics with a warm, welcoming atmosphere. Every detail — from our reception to our treatment rooms is designed to make you feel at ease.
              </p>
              
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                <h3 className="font-semibold text-primary mb-2">Our Mission</h3>
                <p className="text-muted-foreground italic">
                  "To help every patient achieve a healthy, beautiful smile in a safe, friendly, and professional environment."
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Modern equipment and latest dental technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Experienced and caring dental professionals</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Affordable treatment plans for every budget</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Convenient locations in Rawalpindi and Islamabad</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={dentistTreatment} 
                alt="Professional dental treatment at Dental Land"
                className="rounded-lg shadow-custom-xl w-full"
              />
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-custom-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Happy Patients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values guide everything we do, ensuring you receive the best possible dental care experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-custom-lg transition-smooth border-0 bg-gradient-subtle">
                <div className="h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Growth Story
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From a single clinic to serving thousands of patients across Rawalpindi and Islamabad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="p-6 hover:shadow-custom-lg transition-smooth border-0">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary text-white rounded-full font-bold mb-4">
                    {milestone.year}
                  </div>
                  <h3 className="font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground text-sm">{milestone.description}</p>
                </div>
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
              Experience The Dental Land Difference
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join thousands of satisfied patients who trust us with their dental care. Book your appointment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="lg" asChild>
                <a href="tel:03334855247">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: 0333 4855247
                </a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact-us">Visit Our Clinics</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}