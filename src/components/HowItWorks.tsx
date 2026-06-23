import { motion } from "framer-motion";
import { Phone, ClipboardCheck, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "1",
    title: "Call or Submit",
    description: "Call us 24/7 at 888-786-0080 or fill out our quick quote form. We pick up on the first ring.",
  },
  {
    icon: ClipboardCheck,
    step: "2",
    title: "We Confirm Details",
    description: "Our dispatcher confirms pickup, destination, and urgency. You get a price upfront with no hidden fees.",
  },
  {
    icon: Truck,
    step: "3",
    title: "Driver Dispatched",
    description: "A background-checked, uniformed driver is dispatched immediately with real-time GPS tracking.",
  },
  {
    icon: CheckCircle,
    step: "4",
    title: "Delivered & Verified",
    description: "Package delivered with signature confirmation and proof of delivery. You're notified instantly.",
  },
];

const HowItWorks = () => {
  return (
    <section className="px-4 sm:px-6 py-20 lg:py-32">
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-16">
          <span className="label-text mb-3 block">How It Works</span>
          <h2 className="heading-section mb-5">
            Simple, Fast, <span className="text-primary">Reliable</span>
          </h2>
          <p className="body-large max-w-[50ch] mx-auto">
            From your call to confirmed delivery, here's how we get it done.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative text-center"
            >
              <div
                className="w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 sm:mb-6 relative"
                style={{ boxShadow: "0 4px 16px hsl(217 91% 50% / 0.25)" }}
              >
                <s.icon className="w-6 sm:w-8 h-6 sm:h-8" />
                <span className="absolute -top-2 -right-2 w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center">
                  {s.step}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              <h3 className="text-sm sm:text-lg font-bold text-foreground mb-2 sm:mb-3">{s.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-[28ch] mx-auto">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
