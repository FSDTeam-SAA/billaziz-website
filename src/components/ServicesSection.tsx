import { motion } from "framer-motion";
import { Microscope, FileText, Package, Clock, Truck, Mail, ArrowRight, Scale, Building2, Shield, Plane, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Microscope,
    title: "Medical Courier",
    description: "On-Demand Medical Courier Delivery Services. Blood samples, specimens, lab results. HIPAA compliant.",
    link: "/services/laboratory-services",
  },
  {
    icon: FileText,
    title: "Legal Court Documents Filing",
    description: "Same Day & Rush Court Filings. Time-stamped proof of delivery for every deadline.",
    link: "/services/legal-documents",
  },
  {
    icon: Package,
    title: "Bank & Financial Delivery",
    description: "Check deposits, payroll pick-ups, branch deliveries, and confidential financial transactions.",
    link: "/services/bank-delivery",
  },
  {
    icon: Clock,
    title: "Same Day & Rush Delivery",
    description: "Emergency same-hour pickups with direct drive. Available 24/7/365 including holidays.",
    link: "/services/same-day-delivery",
  },
  {
    icon: Truck,
    title: "Route & Scheduled Delivery",
    description: "Customized daily or weekly routes with dedicated drivers for hospitals, labs, and clinics.",
    link: "/services/route-delivery",
  },
  {
    icon: Mail,
    title: "Mail Pickup & Drop Off",
    description: "Letters, packages, important documents. Overnight, scheduled, and multi-stop deliveries.",
    link: "/services/mail-delivery",
  },
  {
    icon: Scale,
    title: "Overnight Delivery",
    description: "Next-morning delivery by 9:30 AM. Signature confirmation included on every package.",
    link: "/services/overnight-delivery",
  },
  {
    icon: Shield,
    title: "Government Contracts",
    description: "Secure deliveries for federal, military, state prisons, VA hospitals, and government agencies.",
    link: "/services/government-contracts",
  },
  {
    icon: Plane,
    title: "Aircraft On Ground (AOG)",
    description: "Emergency aviation parts delivery. 24/7 dispatch to get grounded aircraft back in service fast.",
    link: "/services/aircraft-on-ground",
  },
  {
    icon: FileCheck,
    title: "State Filing Delivery",
    description: "Urgent state filings, business registrations, and compliance submissions delivered on time, every time.",
    link: "/services/state-filing-delivery",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="px-4 sm:px-6 py-20 lg:py-32 bg-section-alt">
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-16">
          <span className="label-text mb-3 block">Our Delivery Services</span>
          <h2 className="heading-display mb-5">
            What We <span className="text-primary">Deliver</span>
          </h2>
          <p className="body-large max-w-[60ch] mx-auto">
            Multiple options to meet your budget needs. All services available 24/7 with no holiday surcharges.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                to={service.link}
                className="card-surface p-6 sm:p-8 block group hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 sm:w-7 h-6 sm:h-7 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 sm:mb-6">{service.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
