import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">DENTAL LAND</div>
            <p className="text-primary-foreground/80">
              Your trusted dental clinic providing quality, affordable dental care for the whole family in Rawalpindi and Islamabad.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>0333 4855247</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>dentalland247@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about-us" className="block hover:text-accent-red-light transition-smooth">About Us</Link>
              <Link to="/dental-services-and-packages" className="block hover:text-accent-red-light transition-smooth">Services & Packages</Link>
              <Link to="/blogs" className="block hover:text-accent-red-light transition-smooth">Blogs</Link>
              <Link to="/contact-us" className="block hover:text-accent-red-light transition-smooth">Contact Us</Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              <Link to="/teeth-whitening" className="block hover:text-accent-red-light transition-smooth">Teeth Whitening</Link>
              <Link to="/teeth-cleaning" className="block hover:text-accent-red-light transition-smooth">Teeth Cleaning</Link>
              <Link to="/braces" className="block hover:text-accent-red-light transition-smooth">Braces</Link>
              <Link to="/dental-implants" className="block hover:text-accent-red-light transition-smooth">Dental Implants</Link>
              <Link to="/root-canal" className="block hover:text-accent-red-light transition-smooth">Root Canal</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Locations</h3>
            
            {/* Rawalpindi */}
            <div className="space-y-2">
              <h4 className="font-medium text-accent-red-light">Rawalpindi</h4>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">Panorama Center, Shop No # B-68/A, Rawalpindi Stadium Rd, Rawalpindi</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Mon-Thu: 12:00 PM - 10:00 PM</span>
              </div>
            </div>

            {/* Islamabad */}
            <div className="space-y-2">
              <h4 className="font-medium text-accent-red-light">Islamabad</h4>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">0300 4804003</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Dental Land. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Button variant="glass" size="sm" asChild>
                <a href="tel:03334855247">Emergency Call</a>
              </Button>
              <Button variant="glass" size="sm" asChild>
                <a href="https://web.whatsapp.com/send?phone=923334855247&text=Hello!" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}