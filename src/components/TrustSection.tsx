import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import trustDriver from "@/assets/trust-driver.jpg";

const points = [
"HIPAA compliant transport",
"Real-time GPS tracking",
"Temperature-controlled vehicles",
"Background-checked drivers",
"24/7/365 dispatch",
"No holiday surcharges",
"Same day & overnight",
"5-star rated service"];


const TrustSection = () => {
  return (
    <section id="about" className="px-6 py-20 lg:py-28">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            
            <span className="label-text mb-4 block">Why Choose RCS</span>
            <h2 className="heading-section mb-6">
              Over <span className="text-primary"><AnimatedCounter end={10} suffix="+" duration={2000} /></span> Years of Delivering Trust
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">Founded in 2014, RCS Delivery started with one vehicle and a simple promise: deliver on time, every time. A decade later, we operate across 50 states with over 500 satisfied clients.

            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              We serve hospitals, labs, law firms, banks, pharmacies, and businesses that depend on us daily. Our motto says it all: <strong className="text-foreground">"We Deliver Trust."</strong>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {points.map((point, i) =>
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-3">
                
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{point}</span>
                </motion.div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#dispatch"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-brand-hover transition-all active:scale-[0.97]"
                style={{ boxShadow: "0 4px 16px hsl(28 85% 52% / 0.3)" }}>
                
                Get Started <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 border-2 border-border text-foreground rounded-xl font-semibold hover:border-primary hover:text-primary transition-all">
                
                Read More About Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            
            <div className="relative">
              <img
                src={trustDriver}
                alt="RCS Delivery driver with clipboard next to van"
                className="w-full aspect-[4/3] object-cover rounded-2xl"
                style={{ boxShadow: "var(--shadow-xl)" }} />
              
              <div className="absolute -bottom-5 -left-5 bg-primary text-primary-foreground rounded-2xl p-6" style={{ boxShadow: "var(--shadow-lg)" }}>
                <div className="text-4xl font-extrabold">
                  <AnimatedCounter end={10} suffix="+" duration={2500} />
                </div>
                <div className="text-sm font-semibold text-primary-foreground/80">Years of Service</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default TrustSection;