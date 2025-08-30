import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { 
    name: "Services", 
    href: "/services",
    submenu: [
      { name: "Teeth Whitening", href: "/teeth-whitening" },
      { name: "Teeth Cleaning", href: "/teeth-cleaning" },
      { name: "Braces", href: "/braces" },
      { name: "Root Canal", href: "/root-canal" },
      { name: "Dental Fillings", href: "/dental-fillings" },
      { name: "Dental Implants", href: "/dental-implants" },
      { name: "Tooth Crowns", href: "/tooth-crowns" },
      { name: "Tooth Extraction", href: "/tooth-extraction" },
      { name: "Dentures", href: "/dentures" },
      { name: "Clear Aligners", href: "/clear-aligners" },
      { name: "Dental X-rays", href: "/dental-x-rays" },
      { name: "Surgical Procedures", href: "/dental-surgical-procedures" },
    ]
  },
  { 
    name: "Locations", 
    href: "/locations",
    submenu: [
      { name: "Rawalpindi Clinic", href: "/dentist-in-rawalpindi" },
      { name: "Islamabad Clinic", href: "/dental-clinic-islamabad" },
    ]
  },
  { name: "Services & Packages", href: "/dental-services-and-packages" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact-us" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>0333 4855247</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Panorama Center, Rawalpindi</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>Follow Us:</span>
            {/* Social icons would go here */}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-custom-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-primary">
                DENTAL LAND
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <div>
                      <button
                        className={cn(
                          "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-smooth",
                          isActive(item.href)
                            ? "text-primary border-b-2 border-primary"
                            : "text-foreground hover:text-primary"
                        )}
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-custom-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth z-50">
                        <div className="py-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-smooth"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={cn(
                        "px-3 py-2 text-sm font-medium transition-smooth",
                        isActive(item.href)
                          ? "text-primary border-b-2 border-primary"
                          : "text-foreground hover:text-primary"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="appointment" asChild>
                <a href="tel:03334855247">Call For Appointment</a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                type="button"
                className="p-2 rounded-md text-foreground hover:text-primary transition-smooth"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-border">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div>
                        <button
                          onClick={() =>
                            setActiveSubmenu(
                              activeSubmenu === item.name ? null : item.name
                            )
                          }
                          className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-smooth"
                        >
                          {item.name}
                          <ChevronDown 
                            className={cn(
                              "h-4 w-4 transition-transform",
                              activeSubmenu === item.name && "rotate-180"
                            )} 
                          />
                        </button>
                        {activeSubmenu === item.name && (
                          <div className="pl-4 space-y-1">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-smooth"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <Button variant="appointment" className="w-full" asChild>
                    <a href="tel:03334855247">Call For Appointment</a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}