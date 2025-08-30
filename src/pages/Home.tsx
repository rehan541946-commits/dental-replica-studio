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
        className="relative min-h-[700px] lg:min-h-[800px] bg-cover bg-center bg-no-repeat flex items-center overflow-hidden"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary-dark/80 to-primary/70"></div>
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-glow/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-gradient-accent text-white px-6 py-2 text-base font-semibold shadow-glow">Leading Dental Practice</Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              The Leading <span className="text-shimmer bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">Dental Practice</span> Of Rawalpindi
            </h1>
            <p className="text-xl lg:text-2xl text-white/95 mb-12 leading-relaxed font-medium max-w-2xl">
              At Dental Land, we provide trusted, affordable, and personalized dental care for your whole family in Rawalpindi with cutting-edge technology and expert care.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="premium" size="xl" asChild>
                <a href="tel:03334855247">Call For Appointment</a>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <Link to="/about-us">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-gradient-primary text-white px-6 py-2 text-base font-semibold shadow-custom-md">Best Dentist In Rawalpindi</Badge>
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight">
                Best Dentist In Rawalpindi
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg lg:text-xl">
                Looking for the dentist in Rawalpindi? Visit Dental Land, your trusted dental clinic for complete oral care. We offer modern treatments in a clean and friendly environment. Whether you need a regular check-up, teeth cleaning, braces, or dental implants, our expert dentists are here to provide you the best solution of your dental problem.
              </p>
              <p className="text-muted-foreground mb-10 leading-relaxed text-lg lg:text-xl">
                At Dental Land, we care for kids, adults, and seniors with respect and gentle hands. We treat every patient like family and make sure you feel safe and relaxed during your visit. People from all over Rawalpindi and Islamabad trust us for our honest advice, pain-free treatments, and quality dental work.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-3 bg-gradient-subtle p-4 rounded-xl shadow-custom-sm">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium">Panorama Center, Rawalpindi Stadium Road</span>
                </div>
              </div>
              <Button variant="premium" size="xl" asChild>
                <Link to="/about-us">Learn More</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="card-hover">
                <img 
                  src={clinicInterior} 
                  alt="Best dental clinic in Rawalpindi - Dental Land"
                  className="rounded-3xl shadow-glow w-full"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-gradient-card p-8 rounded-2xl shadow-card backdrop-blur-sm border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">2+ Years</div>
                    <div className="text-muted-foreground font-medium">Serving Community</div>
                  </div>
                </div>
              </div>
              {/* Enhanced decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-primary/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-accent/20 rounded-full blur-xl animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-primary text-white px-6 py-2 text-base font-semibold shadow-custom-md">Why Choose Us</Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight">
              Why Patients Trust Dental Land
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We're committed to providing the highest quality dental care in a comfortable, friendly environment with personalized attention.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-glow transition-spring border-0 bg-gradient-card card-hover group">
                <div className="h-20 w-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-custom-md group-hover:shadow-glow transition-spring group-hover:scale-110">
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-spring">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-primary text-white px-6 py-2 text-base font-semibold shadow-custom-md">Our Services</Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight">
              Our Dental Services
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Comprehensive dental care for your entire family under one roof with modern technology and expert care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-glow transition-spring border-0 overflow-hidden bg-gradient-card card-hover">
                <div className="p-8">
                  <div className="h-20 w-20 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-spring shadow-custom-md group-hover:shadow-glow">
                    <Stethoscope className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 group-hover:text-primary transition-spring">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed text-lg">{service.description}</p>
                  <Button variant="outline" size="lg" asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-spring">
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button variant="premium" size="xl" asChild>
              <Link to="/dental-services-and-packages">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 lg:py-32 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-primary text-white px-6 py-2 text-base font-semibold shadow-custom-md">Patient Reviews</Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight">
              What Our Patients Say
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Real reviews from our satisfied patients who trust us with their dental care and recommend us to their families.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 border-0 bg-gradient-card hover:shadow-glow transition-spring card-hover group">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current group-hover:scale-110 transition-spring" style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                <div className="text-xl font-bold text-primary group-hover:text-primary-dark transition-spring">{testimonial.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-mesh text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-dark/85 to-primary/80"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-glow/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
              Ready to Get the Smile You Deserve?
            </h2>
            <p className="text-xl lg:text-2xl text-white/95 mb-12 leading-relaxed max-w-3xl mx-auto">
              Book your appointment today and experience the difference of quality dental care with our expert team and modern technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="glass" size="xl" className="font-bold tracking-wide" asChild>
                <a href="tel:03334855247">
                  <Phone className="h-6 w-6 mr-3" />
                  Call Now: 0333 4855247
                </a>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary font-bold tracking-wide" asChild>
                <Link to="/contact-us">Get Directions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}