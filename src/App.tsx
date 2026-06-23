import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import About from "./pages/About.tsx";
import OrderTracking from "./pages/OrderTracking.tsx";
import RouteService from "./pages/services/RouteService.tsx";
import OvernightService from "./pages/services/OvernightService.tsx";
import BankDelivery from "./pages/services/BankDelivery.tsx";
import LaboratoryServices from "./pages/services/LaboratoryServices.tsx";
import SameDayDelivery from "./pages/services/SameDayDelivery.tsx";
import MailDelivery from "./pages/services/MailDelivery.tsx";
import LegalDocuments from "./pages/services/LegalDocuments.tsx";
import GovernmentContracts from "./pages/services/GovernmentContracts.tsx";
import AircraftOnGround from "./pages/services/AircraftOnGround.tsx";
import StateFilingDelivery from "./pages/services/StateFilingDelivery.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Blog from "./pages/Blog.tsx";
import Careers from "./pages/Careers.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services/route-delivery" element={<RouteService />} />
          <Route path="/services/overnight-delivery" element={<OvernightService />} />
          <Route path="/services/bank-delivery" element={<BankDelivery />} />
          <Route path="/services/laboratory-services" element={<LaboratoryServices />} />
          <Route path="/services/same-day-delivery" element={<SameDayDelivery />} />
          <Route path="/services/mail-delivery" element={<MailDelivery />} />
          <Route path="/services/legal-documents" element={<LegalDocuments />} />
          <Route path="/services/government-contracts" element={<GovernmentContracts />} />
          <Route path="/services/aircraft-on-ground" element={<AircraftOnGround />} />
          <Route path="/services/state-filing-delivery" element={<StateFilingDelivery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
