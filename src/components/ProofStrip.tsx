import { Shield, Clock, MapPin, Truck, Star, Phone } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const ProofStrip = () => {
  return (
    <section className="bg-accent py-5 sm:py-6">
      <div className="container-max px-4 sm:px-6">
        <div className="grid grid-cols-3 sm:flex sm:flex-wrap sm:justify-center gap-x-6 sm:gap-x-10 gap-y-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0" />
            <div>
              <span className="text-xs sm:text-sm font-bold text-accent-foreground">SINCE 2014</span>
              <span className="text-[10px] sm:text-xs text-accent-foreground/50 ml-1 hidden sm:inline">Serving Since 2014</span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0" />
            <div>
              <span className="text-xs sm:text-sm font-bold text-accent-foreground">HIPAA</span>
              <span className="text-[10px] sm:text-xs text-accent-foreground/50 ml-1 hidden sm:inline">Compliant Transport</span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Star className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0" />
            <div>
              <span className="text-xs sm:text-sm font-bold text-accent-foreground">
                <AnimatedCounter end={5.0} suffix="★" decimals={1} duration={2000} />
              </span>
              <span className="text-[10px] sm:text-xs text-accent-foreground/50 ml-1 hidden sm:inline">Google & Yelp</span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0" />
            <div>
              <span className="text-xs sm:text-sm font-bold text-accent-foreground">50 STATES</span>
              <span className="text-[10px] sm:text-xs text-accent-foreground/50 ml-1 hidden sm:inline">Coverage</span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Truck className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0" />
            <div>
              <span className="text-xs sm:text-sm font-bold text-accent-foreground">
                <AnimatedCounter end={500} suffix="+" duration={2500} />
              </span>
              <span className="text-[10px] sm:text-xs text-accent-foreground/50 ml-1 hidden sm:inline">Clients</span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0" />
            <div>
              <span className="text-xs sm:text-sm font-bold text-accent-foreground">24/7</span>
              <span className="text-[10px] sm:text-xs text-accent-foreground/50 ml-1 hidden sm:inline">Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ProofStrip;