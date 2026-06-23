import { motion } from "framer-motion";
import { CheckCircle, Star, Award, Users, Clock, Shield, Truck, Phone, ArrowRight, Target, Heart, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";
import courierAction from "@/assets/courier-action.jpg";

const strengths = [
  "24/7 delivery services",
  "Same-day and overnight delivery",
  "Secure and confidential handling",
  "Real-time tracking",
  "Professional and trained drivers",
  "Reliable and on-time delivery",
];

const howWeWork = [
  { step: "1", title: "Contact Us", description: "Reach us by calling 888-786-0080 or contact us through live chat. We are ready to serve you 24/7." },
  { step: "2", title: "Share Order Details", description: "Share the details of your order, pickup address, delivery address, and the size and weight of the item you want delivered." },
  { step: "3", title: "We Pick Up & Deliver", description: "Our skilled drivers will pick your courier from the pickup address and deliver it safely. We choose minimum traffic routes for fastest delivery." },
  { step: "4", title: "Delivery Confirmation", description: "We keep tracking your order location until it reaches its destination. Once done, you get delivery confirmation and signature." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>

      {/* Hero - full-width dramatic */}
      <section className="relative overflow-hidden bg-accent">
        <div className="absolute inset-0">
          <img src={courierAction} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,25%,14%,0.9)] via-[hsl(215,25%,14%,0.7)] to-[hsl(215,25%,14%,0.4)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(215,25%,14%,0.6)] via-transparent to-transparent" />
        </div>
        <div className="relative container-max px-6 py-24 lg:py-36">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-primary transition-colors mb-8">
            ← Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm font-semibold text-primary mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              About RCS Delivery
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              10 years of delivering <span className="text-primary">trust.</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-[60ch]">
              RCS Delivery has over 10 years of experience providing express courier services across all 50 states nationwide. Our motto: <strong className="text-white">"We Deliver Trust."</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-primary py-8">
        <div className="container-max px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[
              { icon: Clock, end: 10, suffix: "+", label: "Years Experience" },
              { icon: Star, end: 5.0, suffix: "★", label: "Customer Rating", decimals: 1 },
              { icon: Users, end: 500, suffix: "+", label: "Clients Served" },
              { icon: Shield, label: "Available Always", custom: "24/7" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-foreground">
                    {stat.custom ? stat.custom : (
                      <AnimatedCounter end={stat.end!} suffix={stat.suffix} decimals={stat.decimals || 0} duration={2500} />
                    )}
                  </div>
                  <div className="text-xs text-primary-foreground/70 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-20 lg:py-28">
        <div className="container-max max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <span className="label-text mb-4 block">Our Story</span>
              <h2 className="heading-section mb-8">How it all started</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px]">
                <p>
                  RCS Delivery is a trusted courier and logistics company committed to providing fast, secure, and reliable delivery services across the United States. With over a decade of experience in the courier industry, we specialize in time-sensitive deliveries and customized logistics solutions for businesses and individuals. Our mission is simple: to deliver every package safely, on time, and with the highest level of customer satisfaction.
                </p>
                <p>
                  At RCS Delivery, we understand that every shipment is important. That's why we use advanced tracking systems, professional drivers, and strict safety procedures to ensure that every package is handled with care and delivered securely. Our services are available 24 hours a day, 7 days a week, including holidays, so our customers can rely on us whenever they need urgent or scheduled deliveries.
                </p>
                <p>
                  We provide a wide range of courier services including same-day delivery, overnight delivery, medical and laboratory deliveries, legal document delivery, bank deliveries, and scheduled route services. Our team is trained to handle sensitive and confidential items such as medical specimens, legal documents, and financial packages with professionalism and confidentiality.
                </p>
                <p>
                  Our company is built on trust, reliability, and customer service. We believe that strong relationships with our clients are the foundation of our success. That is why we focus on transparency, communication, and dependable service in every delivery we make. Our motto, <strong className="text-foreground">"We Deliver Trust,"</strong> reflects our commitment to excellence and our dedication to meeting and exceeding customer expectations.
                </p>
                <p>
                  At RCS Delivery, our goal is to continue growing and improving our services while maintaining the high standards our customers expect. Whether it's a small package or a critical delivery, we are committed to providing efficient, cost-effective, and dependable courier solutions you can trust.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="card-surface p-8 space-y-4" style={{ boxShadow: "var(--shadow-lg)" }}>
                <h3 className="text-lg font-bold text-foreground mb-6">What Makes Us Different</h3>
                {strengths.map((s, i) => (
                  <motion.div
                    key={s}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{s}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission / Values */}
      <section className="px-6 py-20 lg:py-24 bg-section-alt">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="label-text mb-4 block">What Drives Us</span>
            <h2 className="heading-section">Our Mission & Values</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              { icon: Target, title: "Our Mission", desc: "To provide fast, reliable, and secure delivery services that ensure customer satisfaction and build long-term partnerships through trust, professionalism, and excellent service." },
              { icon: Heart, title: "Our Vision", desc: "To become a leading courier service provider known for reliability, innovation, and customer-focused delivery solutions across the United States." },
              { icon: Zap, title: "Why Choose Us", desc: "24/7 delivery services, same-day and overnight delivery, secure and confidential handling, real-time tracking, professional trained drivers, and reliable on-time delivery." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-surface p-10 hover:shadow-lg transition-shadow duration-300"
                style={{ boxShadow: "var(--shadow-md)" }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="px-6 py-20 lg:py-24">
        <div className="container-max max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="label-text mb-4 block">Our People</span>
            <h2 className="heading-section mb-8">Our Team</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px]">
              <p>
                We have a team of experienced members that are committed to their work. They comfortably understand the customer's needs. These are the valuable assets of this company.
              </p>
              <p>
                We have experienced drivers for the time-to-time delivery of your packages. All the drivers have been trained, well educated, and dedicated to their work. These drivers are experienced and familiar with their areas of operation — ensuring fast, reliable delivery every time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="px-6 py-20 lg:py-24 bg-section-alt">
        <div className="container-max max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="label-text mb-4 block">Our Process</span>
            <h2 className="heading-section mb-14">How We Work</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-8">
            {howWeWork.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-surface p-8"
                style={{ boxShadow: "var(--shadow-md)" }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mb-5">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="relative container-max px-6 py-20 lg:py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-foreground mb-5">
              Your search for the best courier is over.
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-[50ch] mx-auto">
              Contact RCS Delivery today — available 24/7 with the fastest, most reliable service in the country.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#dispatch"
                className="inline-flex items-center justify-center gap-2 h-14 px-10 bg-card text-foreground rounded-xl font-bold hover:bg-secondary transition-all duration-200 active:scale-95"
              >
                Schedule Dispatch <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:8887860080"
                className="inline-flex items-center justify-center gap-2 h-14 px-10 border-2 border-primary-foreground/30 text-primary-foreground rounded-xl font-semibold hover:bg-primary-foreground/10 transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                <span className="tabular-nums">888-786-0080</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
};

export default About;
