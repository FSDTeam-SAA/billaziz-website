import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import heroVehicle from "@/assets/hero-vehicle.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative w-full min-h-[65vh] sm:min-h-[75vh] lg:min-h-[90vh]">
        <img
          src={heroVehicle}
          alt="RCS Delivery courier van driving at sunset"
          className="w-full h-full absolute inset-0 object-cover" />
        
        <div className="absolute inset-0 bg-[hsl(220,30%,8%,0.45)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,30%,8%,0.75)] via-[hsl(220,30%,8%,0.4)] to-[hsl(220,30%,8%,0.15)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,30%,8%,0.5)] via-transparent to-[hsl(220,30%,8%,0.2)]" />

        <div className="relative container-max px-5 sm:px-6 h-full min-h-[65vh] sm:min-h-[75vh] lg:min-h-[90vh] flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl py-20 sm:py-24 lg:py-36">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-white/90">Open 24/7 — Delivering Nationwide</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-5 sm:mb-6">
              On-Demand Same Day
              <br />
              <span className="text-primary">Delivery & Courier</span>
              <br />
              Service.
            </h1>

            <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-6 sm:mb-8 max-w-[52ch]">We cover 50 states with same day, overnight, and scheduled route delivery to securely deliver your package, every time.

            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/30 mb-8 sm:mb-10">
              <span className="text-xs sm:text-sm font-bold text-primary">100% On-Time Delivery Guarantee</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#dispatch"
                className="inline-flex items-center justify-center gap-2 h-13 sm:h-14 px-8 sm:px-10 bg-primary text-primary-foreground rounded-xl font-bold text-base hover:bg-brand-hover transition-all active:scale-[0.97]"
                style={{ boxShadow: "0 4px 24px hsl(28 85% 52% / 0.4)" }}>
                
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:8887860080"
                className="inline-flex items-center justify-center gap-2 h-13 sm:h-14 px-8 sm:px-10 bg-white/10 backdrop-blur-sm border-2 border-white/25 text-white rounded-xl font-semibold hover:bg-white/20 transition-all">
                
                <Phone className="w-5 h-5" />
                <span className="tabular-nums">888-786-0080</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default HeroSection;