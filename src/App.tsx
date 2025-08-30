import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ServicesPackages from "./pages/ServicesPackages";
import TeethWhitening from "./pages/services/TeethWhitening";
import TeethCleaning from "./pages/services/TeethCleaning";
import Braces from "./pages/services/Braces";
import RootCanal from "./pages/services/RootCanal";
import DentalFillings from "./pages/services/DentalFillings";
import DentalImplants from "./pages/services/DentalImplants";
import ToothCrowns from "./pages/services/ToothCrowns";
import ToothExtraction from "./pages/services/ToothExtraction";
import Dentures from "./pages/services/Dentures";
import ClearAligners from "./pages/services/ClearAligners";
import DentalXrays from "./pages/services/DentalXrays";
import SurgicalProcedures from "./pages/services/SurgicalProcedures";
import RawalPindiClinic from "./pages/locations/RawalPindiClinic";
import IslamabadClinic from "./pages/locations/IslamabadClinic";
import Blogs from "./pages/Blogs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/dental-services-and-packages" element={<ServicesPackages />} />
            
            {/* Service Routes */}
            <Route path="/teeth-whitening" element={<TeethWhitening />} />
            <Route path="/teeth-cleaning" element={<TeethCleaning />} />
            <Route path="/teeth-cleaning-rwp" element={<TeethCleaning />} />
            <Route path="/braces" element={<Braces />} />
            <Route path="/braces-rwp" element={<Braces />} />
            <Route path="/root-canal" element={<RootCanal />} />
            <Route path="/root-canal-treatment" element={<RootCanal />} />
            <Route path="/dental-fillings" element={<DentalFillings />} />
            <Route path="/dental-implants" element={<DentalImplants />} />
            <Route path="/dental-implant" element={<DentalImplants />} />
            <Route path="/tooth-crowns" element={<ToothCrowns />} />
            <Route path="/tooth-extraction" element={<ToothExtraction />} />
            <Route path="/dentures" element={<Dentures />} />
            <Route path="/denture" element={<Dentures />} />
            <Route path="/clear-aligners" element={<ClearAligners />} />
            <Route path="/dental-x-rays" element={<DentalXrays />} />
            <Route path="/dental-surgical-procedures" element={<SurgicalProcedures />} />
            
            {/* Location Routes */}
            <Route path="/dentist-in-rawalpindi" element={<RawalPindiClinic />} />
            <Route path="/dental-clinic-islamabad" element={<IslamabadClinic />} />
            
            {/* Blog Routes */}
            <Route path="/blogs" element={<Blogs />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
