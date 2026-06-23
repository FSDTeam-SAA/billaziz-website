import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import rcsLogo from "@/assets/rcs-logo-new.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-accent text-accent-foreground section-padding !pb-8">
      <div className="container-max">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            

            <div className="flex gap-3">
              <a
                href="https://instagram.com/rcsdelivery1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/rcsdelivery"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://share.google/7msZFj4eF8Kibiwyr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Google My Business">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-primary">Services</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><a href="/services/same-day-delivery" className="hover:text-primary transition-colors">Same Day Delivery</a></li>
              <li><a href="/services/overnight-delivery" className="hover:text-primary transition-colors">Overnight Delivery</a></li>
              <li><a href="/services/route-delivery" className="hover:text-primary transition-colors">Route Delivery</a></li>
              <li><a href="/services/laboratory-services" className="hover:text-primary transition-colors">Lab Courier</a></li>
              <li><a href="/services/bank-delivery" className="hover:text-primary transition-colors">Bank Delivery</a></li>
              <li><a href="/services/legal-documents" className="hover:text-primary transition-colors">Legal Documents</a></li>
              <li><a href="/services/government-contracts" className="hover:text-primary transition-colors">Government Contracts</a></li>
              <li><a href="/services/aircraft-on-ground" className="hover:text-primary transition-colors">Aircraft On Ground</a></li>
              <li><a href="/services/state-filing-delivery" className="hover:text-primary transition-colors">State Filing Delivery</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-primary">Company</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/order-tracking" className="hover:text-primary transition-colors">Track Order</a></li>
              <li><a href="#dispatch" className="hover:text-primary transition-colors">Get a Quote</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-primary">Contact</h4>
            <div className="space-y-3 text-sm text-white/60">
              <a href="tel:8887860080" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="tabular-nums">888-786-0080</span>
              </a>
              <a href="mailto:info@rcsdelivery.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@rcsdelivery.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Serving All 50 States Nationwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} RCS Delivery. All rights reserved.</p>
          <p>24/7 Dispatch Available</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
