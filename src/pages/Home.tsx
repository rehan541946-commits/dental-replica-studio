import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Smile, 
  Shield, 
  Users, 
  Award,
  Star,
  Phone,
  MapPin,
  CheckCircle,
  Clock,
  Heart,
  Stethoscope
} from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";
import clinicInterior from "@/assets/clinic-interior.webp";
import dentistTreatment from "@/assets/dentist-treatment.jpg";

const services = [
  {
    title: "Teeth Cleaning",
    description: "Keep your smile fresh and healthy with our professional teeth cleaning. We remove plaque, tartar, and stains to help prevent gum disease and cavities.",
    icon: "tooth-insurance.png",
    link: "/teeth-cleaning"
  },
  {
    title: "Teeth Whitening", 
    description: "Get a brighter, whiter smile with our advanced whitening treatments. Safe, effective, and long-lasting results.",
    icon: "tooth-whitening.png",
    link: "/teeth-whitening"
  },
  {
    title: "Braces",
    description: "Straighten your teeth with our modern braces options. We offer traditional metal braces and clear aligners.",
    icon: "braces.png", 
    link: "/braces"
  },
  {
    title: "Root Canal",
    description: "Save your natural tooth with our gentle root canal treatment. Pain-free procedure with modern techniques.",
    icon: "root-canal.png",
    link: "/root-canal"
  },
  {
    title: "Dental Implants",
    description: "Replace missing teeth permanently with our high-quality dental implants. Natural look and feel.",
    icon: "dental-implant.png",
    link: "/dental-implants"
  },
  {
    title: "Dental Crowns",
    description: "Restore damaged teeth with custom-made crowns. Durable, natural-looking protection for your teeth.",
    icon: "crown.png",
    link: "/tooth-crowns"
  }
];

const features = [
  {
    icon: Shield,
    title: "Safe & Sterile",
    description: "We follow strict sterilization protocols to ensure your safety."
  },
  {
    icon: Users,
    title: "Family Friendly", 
    description: "We provide gentle care for patients of all ages."
  },
  {
    icon: Award,
    title: "Expert Dentists",
    description: "Our experienced team delivers quality dental care."
  },
  {
    icon: Heart,
    title: "Gentle Care",
    description: "We make your dental visit comfortable and pain-free."
  }
];

const testimonials = [
  {
    name: "Sarah Ahmed",
    text: "The best dental clinic in Rawalpindi! The staff is very professional and the treatment was painless.",
    rating: 5
  },
  {
    name: "Ali Hassan", 
    text: "I was scared of dental treatment but the doctors here made me feel comfortable. Highly recommended!",
    rating: 5
  },
  {
    name: "Fatima Khan",
    text: "Clean clinic, modern equipment, and affordable prices. Great experience overall.",
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative min-h-[600px] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-accent-red text-white">Leading Dental Practice</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              The Leading Dental Practice Of Rawalpindi
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              At Dental Land, we provide trusted, affordable, and personalized dental care for your whole family in Rawalpindi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:03334855247">Call For Appointment</a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/about-us">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">Best Dentist In Rawalpindi</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Best Dentist In Rawalpindi
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Looking for the dentist in Rawalpindi? Visit Dental Land, your trusted dental clinic for complete oral care. We offer modern treatments in a clean and friendly environment. Whether you need a regular check-up, teeth cleaning, braces, or dental implants, our expert dentists are here to provide you the best solution of your dental problem.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                At Dental Land, we care for kids, adults, and seniors with respect and gentle hands. We treat every patient like family and make sure you feel safe and relaxed during your visit. People from all over Rawalpindi and Islamabad trust us for our honest advice, pain-free treatments, and quality dental work.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm">Panorama Center, Rawalpindi Stadium Road</span>
                </div>
              </div>
              <Button variant="medical" asChild>
                <Link to="/about-us">Learn More</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={clinicInterior} 
                alt="Best dental clinic in Rawalpindi - Dental Land"
                className="rounded-lg shadow-custom-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-custom-lg">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">2+ Years</div>
                    <div className="text-sm text-muted-foreground">Serving Community</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Patients Trust Dental Land
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the highest quality dental care in a comfortable, friendly environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-custom-lg transition-smooth border-0 bg-gradient-subtle">
                <div className="h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Dental Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive dental care for your entire family under one roof.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-custom-xl transition-smooth border-0 overflow-hidden">
                <div className="p-6">
                  <div className="h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce">
                    <Stethoscope className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{service.description}</p>
                  <Button variant="outline" size="sm" asChild className="group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="medical" size="lg" asChild>
              <Link to="/dental-services-and-packages">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Patient Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Patients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real reviews from our satisfied patients who trust us with their dental care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-0 bg-gradient-subtle hover:shadow-custom-lg transition-smooth">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-primary">{testimonial.name}</div>
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
              Ready to Get the Smile You Deserve?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Book your appointment today and experience the difference of quality dental care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="lg" asChild>
                <a href="tel:03334855247">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: 0333 4855247
                </a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact-us">Get Directions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}