import { motion } from "framer-motion";
import { MapPin, ArrowRight, Phone, Star, Globe } from "lucide-react";

const regions = [
  {
    region: "West Coast",
    hubs: [
      { city: "Irvine, CA", label: "Headquarters", serves: "Orange County & Southern California" },
      { city: "Los Angeles, CA", label: "SoCal Hub", serves: "Greater LA, Inland Empire & San Diego" },
      { city: "Fremont, CA", label: "NorCal Hub", serves: "Bay Area, Sacramento & Northern California" },
    ],
  },
  {
    region: "Southwest",
    hubs: [
      { city: "Phoenix, AZ", label: "Southwest Hub", serves: "Arizona, Nevada & New Mexico" },
      { city: "Austin, TX", label: "Texas Hub", serves: "Texas, Oklahoma & Louisiana" },
    ],
  },
  {
    region: "East Coast",
    hubs: [
      { city: "New York, NY", label: "Northeast Hub", serves: "NY, NJ, CT & Tri-State Area" },
      { city: "Miami, FL", label: "Southeast Hub", serves: "Florida, Georgia & The Carolinas" },
    ],
  },
];

const LocationsSection = () => {
  return (
    <section id="locations" className="px-4 sm:px-6 py-20 lg:py-32 bg-section-alt">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <span className="label-text mb-3 block">Nationwide Coverage</span>
          <h2 className="heading-section mb-5">
            Delivering Across the <span className="text-primary">Entire United States</span>
          </h2>
          <p className="body-large max-w-[60ch] mx-auto">
            7 strategic hubs coast-to-coast — from California to Florida, Texas to New York. Wherever you need us, we're there.
          </p>
        </div>

        {/* National badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="card-surface p-6 sm:p-8 mb-10 sm:mb-14 text-center"
          style={{ boxShadow: "var(--shadow-md)" }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Globe className="w-7 h-7 text-primary" />
            <span className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">All 50 States Covered</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-[50ch] mx-auto">
            No matter where your delivery needs to go — same day, overnight, or scheduled routes — RCS Delivery has you covered nationwide.
          </p>
        </motion.div>

        {/* Regions */}
        <div className="space-y-10 sm:space-y-14 mb-10 sm:mb-14">
          {regions.map((region, ri) => (
            <div key={region.region}>
              <motion.h3
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-5 sm:mb-6"
              >
                {region.region}
              </motion.h3>
              <div className={`grid gap-4 sm:gap-6 ${region.hubs.length === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : region.hubs.length === 2 ? 'sm:grid-cols-2' : ''}`}>
                {region.hubs.map((hub, i) => (
                  <motion.div
                    key={hub.city}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className={`card-surface p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300 ${hub.label === "Headquarters" ? "ring-2 ring-primary/30 relative" : ""}`}
                  >
                    {hub.label === "Headquarters" && (
                      <span className="absolute -top-3 left-6 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                        HQ
                      </span>
                    )}
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-1">{hub.city}</h4>
                    <p className="text-xs font-semibold text-primary mb-3">{hub.label}</p>
                    <p className="text-sm text-muted-foreground mb-5">Serves: {hub.serves}</p>

                    <div className="flex items-center gap-1.5 pt-4 border-t border-border">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-foreground">5.0</span>
                    </div>

                    <a href="tel:8887860080" className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-primary hover:underline">
                      <Phone className="w-3 h-3" />
                      <span className="tabular-nums">888-786-0080</span>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="card-surface p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6" style={{ boxShadow: "var(--shadow-md)" }}>
          <div>
            <p className="text-lg font-bold text-foreground mb-2">Need a delivery anywhere in the U.S.?</p>
            <p className="text-sm text-muted-foreground">We cover all 50 states. Call us 24/7 or request a quote online.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto flex-shrink-0">
            <a href="tel:8887860080" className="inline-flex items-center justify-center gap-2 h-12 px-6 border-2 border-border rounded-xl text-sm font-semibold text-foreground hover:border-primary transition-colors w-full sm:w-auto">
              <Phone className="w-4 h-4" />
              <span className="tabular-nums">888-786-0080</span>
            </a>
            <a href="#dispatch" className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-primary text-primary-foreground rounded-xl text-sm font-bold hover:bg-brand-hover transition-colors w-full sm:w-auto">
              Get a Quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
