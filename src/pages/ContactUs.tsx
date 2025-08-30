import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Navigation
} from "lucide-react";

const locations = [
  {
    name: "Dental Land - Rawalpindi",
    phone: "0333 4855247",
    email: "dentalland247@gmail.com", 
    whatsapp: "923334855247",
    address: "Panorama Center, Shop No # B-68/A, Rawalpindi Stadium Rd, Rawalpindi, Pakistan",
    mapUrl: "https://www.google.com/maps/place/Dental+Land+Clinic/@33.6516704,73.0723427,19z/data=!3m1!4b1!4m6!3m5!1s0x38df9533f5622fa5:0x51b3f0efe383c385!8m2!3d33.6516693!4d73.0729864!16s%2Fg%2F11t5_0rc66?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D",
    hours: [
      { day: "Monday", time: "12:00 PM to 10:00 PM" },
      { day: "Tuesday", time: "12:00 PM to 10:00 PM" },
      { day: "Wednesday", time: "12:00 PM to 10:00 PM" },
      { day: "Thursday", time: "12:00 PM to 10:00 PM" },
      { day: "Friday", time: "03:00 PM to 10:00 PM" },
      { day: "Saturday", time: "12:00 PM to 10:00 PM" },
      { day: "Sunday", time: "03:00 PM to 10:00 PM" }
    ]
  },
  {
    name: "Dental Land - Islamabad", 
    phone: "0300 4804003",
    email: "dentalland247@gmail.com",
    whatsapp: "923334855247", 
    address: "Islamabad Location - Contact for Details",
    mapUrl: "#",
    hours: [
      { day: "Monday", time: "12:00 PM to 10:00 PM" },
      { day: "Tuesday", time: "12:00 PM to 10:00 PM" },
      { day: "Wednesday", time: "12:00 PM to 10:00 PM" },
      { day: "Thursday", time: "12:00 PM to 10:00 PM" },
      { day: "Friday", time: "03:00 PM to 10:00 PM" },
      { day: "Saturday", time: "12:00 PM to 10:00 PM" },
      { day: "Sunday", time: "03:00 PM to 10:00 PM" }
    ]
  }
];

export default function ContactUs() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white">Get In Touch</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Get In Touch With Our Best Dentists in Rawalpindi and Islamabad
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Ready to schedule your appointment? Contact us today and take the first step towards a healthier, brighter smile.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Where to Find Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Locations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit us at either of our convenient locations in Rawalpindi and Islamabad.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="p-8 hover:shadow-custom-lg transition-smooth border-0">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">{location.name}</h3>
                </div>

                {/* Contact Methods */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Phone */}
                  <div className="text-center">
                    <div className="h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Call</h4>
                    <a href={`tel:${location.phone}`} className="text-primary hover:text-primary-dark transition-smooth">
                      {location.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="text-center">
                    <div className="h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Email</h4>
                    <a href={`mailto:${location.email}`} className="text-primary hover:text-primary-dark transition-smooth">
                      {location.email}
                    </a>
                  </div>

                  {/* WhatsApp */}
                  <div className="text-center">
                    <div className="h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <MessageCircle className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">WhatsApp</h4>
                    <a 
                      href={`https://web.whatsapp.com/send?phone=${location.whatsapp}&text=Hello!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark transition-smooth"
                    >
                      {location.phone}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="mb-6">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-muted-foreground">{location.address}</p>
                    </div>
                  </div>
                  {location.mapUrl !== "#" && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={location.mapUrl} target="_blank" rel="noopener noreferrer">
                        <Navigation className="h-4 w-4 mr-2" />
                        Get Directions
                      </a>
                    </Button>
                  )}
                </div>

                {/* Hours */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">Opening Hours</h4>
                  </div>
                  <div className="space-y-1">
                    {location.hours.map((hour, hourIndex) => (
                      <div key={hourIndex} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{hour.day}</span>
                        <span>{hour.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary">Send Us a Message</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Book Your Appointment
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours to schedule your visit.
              </p>
            </div>

            <Card className="p-8 border-0 shadow-custom-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Your phone number" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service">Preferred Service</Label>
                  <Input id="service" placeholder="e.g. Teeth Cleaning, Dental Implants, etc." />
                </div>

                <div>
                  <Label htmlFor="location">Preferred Location</Label>
                  <Input id="location" placeholder="Rawalpindi or Islamabad" />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your dental concerns or preferred appointment time..."
                    rows={4}
                  />
                </div>

                <Button variant="medical" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Emergency Dental Care?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Dental emergencies don't wait for business hours. Contact us immediately for urgent dental care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="lg" asChild>
                <a href="tel:03334855247">
                  <Phone className="h-5 w-5 mr-2" />
                  Emergency Call: 0333 4855247
                </a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="https://web.whatsapp.com/send?phone=923334855247&text=Emergency!" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Emergency
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}