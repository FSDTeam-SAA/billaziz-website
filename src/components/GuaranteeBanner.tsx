import { motion } from "framer-motion";
import { CheckCircle, Phone } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const GuaranteeBanner = () => {
  return (
    <section className="px-4 sm:px-6 py-14 sm:py-16 bg-accent">
      <div className="container-max">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-accent-foreground mb-2">
                <AnimatedCounter end={100} suffix="%" duration={2000} /> On-Time Delivery Guarantee
              </h3>
              <p className="text-sm text-accent-foreground/60 max-w-[55ch]">
                We guarantee every delivery arrives on time. If we miss a deadline, we make it right. That's the RCS promise.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2.5 text-accent-foreground/80">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Signature confirmation</span>
              </div>
              <div className="flex items-center gap-2.5 text-accent-foreground/80">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Real-time GPS tracking</span>
              </div>
              <div className="flex items-center gap-2.5 text-accent-foreground/80">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Proof of delivery</span>
              </div>
            </div>
            <a
              href="tel:8887860080"
              className="inline-flex items-center gap-2 h-12 px-7 bg-primary text-primary-foreground rounded-xl text-sm font-bold hover:bg-brand-hover transition-all"
            >
              <Phone className="w-4 h-4" />
              <span className="tabular-nums">888-786-0080</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeBanner;
