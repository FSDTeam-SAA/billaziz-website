import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import rcsLogo from "@/assets/rcs-logo-new.png";

const serviceLinks = [
{ label: "Route Delivery", href: "/services/route-delivery" },
{ label: "Same Day Delivery", href: "/services/same-day-delivery" },
{ label: "Overnight Delivery", href: "/services/overnight-delivery" },
{ label: "Laboratory Services", href: "/services/laboratory-services" },
{ label: "Bank Delivery", href: "/services/bank-delivery" },
{ label: "Mail Pickup & Drop Off", href: "/services/mail-delivery" },
{ label: "Legal Documents", href: "/services/legal-documents" },
{ label: "Government Contracts", href: "/services/government-contracts" },
{ label: "Aircraft On Ground (AOG)", href: "/services/aircraft-on-ground" },
{ label: "State Filing Delivery", href: "/services/state-filing-delivery" }];


const navLinks = [
{ label: "Home", href: "/" },
{ label: "Services", href: "#", children: serviceLinks },
{ label: "About", href: "/about" },
{ label: "Blog", href: "/blog" },
{ label: "Careers", href: "/careers" },
{ label: "Track Order", href: "/order-tracking" }];


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ?
      "bg-accent backdrop-blur-xl border-b border-white/10 shadow-lg" :
      "bg-accent backdrop-blur-lg border-b border-transparent"}`
      }>
      
      <div className="container-max">
        <div className="h-[130px] flex items-center justify-between px-6">
          <Link to="/" className="flex items-center flex-shrink-0">
            <motion.img
              src={rcsLogo}
              alt="RCS Delivery"
              className="h-[120px] w-auto object-contain opacity-100"
              whileHover={{ scale: [1, 1.1, 0.95, 1.06, 1] }}
              transition={{ duration: 0.5, ease: "easeInOut" }} />
            
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) =>
            link.children ?
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}>
              
                  <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-white/10 ${
                location.pathname.startsWith("/services") ?
                "text-primary" :
                "text-white/70 hover:text-white"}`
                }>
                
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {servicesOpen &&
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  
                        <div className="bg-accent rounded-xl border border-white/10 py-2 min-w-[240px]" style={{ boxShadow: "var(--shadow-lg)" }}>
                          {link.children.map((child) =>
                    <Link
                      key={child.label}
                      to={child.href}
                      className={`flex items-center gap-3 px-5 py-3 text-sm transition-colors hover:bg-white/10 ${
                      location.pathname === child.href ? "text-primary font-semibold" : "text-white/70 hover:text-white"}`
                      }>
                      
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                              {child.label}
                            </Link>
                    )}
                        </div>
                      </motion.div>
                }
                  </AnimatePresence>
                </div> :

            <Link
              key={link.label}
              to={link.href}
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-white/10 ${
              location.pathname === link.href ?
              "text-primary" :
              "text-white/70 hover:text-white"}`
              }>
              
                  {link.label}
                </Link>

            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:8887860080"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-primary transition-colors tabular-nums">
              
              <Phone className="w-4 h-4" />
              888-786-0080
            </a>
            <Link
              to="/#dispatch"
              className="inline-flex items-center gap-2 h-10 px-6 rounded-lg text-sm font-bold bg-primary text-primary-foreground hover:bg-brand-hover transition-all active:scale-[0.97]"
              style={{ boxShadow: "0 4px 16px hsl(28 85% 52% / 0.3)" }}>
              
              Get a Quote
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu">
            
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen &&
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-white/10 overflow-hidden">
            
              <div className="px-6 py-4 flex flex-col gap-0.5">
                {navLinks.map((link) =>
              link.children ?
              <div key={link.label}>
                      <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full text-sm font-semibold text-white py-3">
                  
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen &&
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden">
                    
                            <div className="pl-3 pb-2 space-y-0.5 border-l-2 border-primary/30 ml-1">
                              {link.children.map((child) =>
                      <Link
                        key={child.label}
                        to={child.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block text-sm py-2 pl-3 rounded-r-lg transition-colors ${
                        location.pathname === child.href ?
                        "text-primary font-medium bg-primary/10" :
                        "text-white/60 hover:text-primary"}`
                        }>
                        
                                  {child.label}
                                </Link>
                      )}
                            </div>
                          </motion.div>
                  }
                      </AnimatePresence>
                    </div> :

              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-semibold text-white py-3">
                
                      {link.label}
                    </Link>

              )}

                <div className="pt-4 flex flex-col gap-2 border-t border-white/10 mt-2">
                  <a
                  href="tel:8887860080"
                  className="inline-flex items-center justify-center gap-2 h-11 rounded-lg text-sm font-semibold text-white bg-white/10">
                  
                    <Phone className="w-4 h-4" />
                    <span className="tabular-nums">888-786-0080</span>
                  </a>
                  <Link
                  to="/#dispatch"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center gap-2 h-11 rounded-lg text-sm font-bold bg-primary text-primary-foreground">
                  
                    Get a Quote
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </header>);

};

export default Header;