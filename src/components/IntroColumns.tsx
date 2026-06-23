import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import courierAction from "@/assets/courier-action.jpg";

const IntroColumns = () => {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={courierAction}
              alt="RCS Delivery courier in action"
              className="w-full rounded-2xl object-cover aspect-[4/3]"
              style={{ boxShadow: "var(--shadow-xl)" }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="label-text mb-4 block">Since 2014</span>
            <h2 className="heading-section mb-6">
              RCS Delivery <span className="text-primary">We Deliver Trust.</span>
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                RCS Delivery is a family-owned courier service founded over 10 years ago. We started with one vehicle and a promise to deliver on time, every time. Today we operate across all 50 states with dedicated drivers who treat every package like it matters, because it does.
              </p>
              <p>
                We do more than just deliver your packages. We are an extension of your business, helping your company grow and giving you a competitive edge. Logistics is crucial, that is why it is vital to have a reliable courier service you can count on.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-brand-hover transition-all active:scale-[0.97]"
              >
                About Us <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:8887860080"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 border-2 border-border text-foreground rounded-xl font-semibold hover:border-primary hover:text-primary transition-all"
              >
                Call: 888-786-0080
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroColumns;
