import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface ServicePageProps {
  label: string;
  title: string;
  highlight: string;
  description: string;
  heroImage?: string;
  heroImagePositionMobile?: string;
  heroImagePositionDesktop?: string;
  features?: string[];
  sections: { title: string; content: string }[];
  ctaText?: string;
}

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const staggerItem = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
};

const ServicePageLayout = ({
  label,
  title,
  highlight,
  description,
  heroImage,
  heroImagePositionMobile = "center",
  heroImagePositionDesktop = "center",
  features,
  sections,
  ctaText = "Get a Quote",
}: ServicePageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>

      {/* ── Hero with integrated title ── */}
      <section className="relative bg-foreground text-background overflow-hidden">
        {/* Background image with overlay */}
        {heroImage && (
          <>
            <img
              src={heroImage}
              alt={`${title} ${highlight}`}
              className="absolute inset-0 w-full h-full object-cover opacity-30 sm:opacity-25"
              style={{ objectPosition: heroImagePositionDesktop }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/40" />
          </>
        )}

        <div className="relative container-max px-4 sm:px-6 pt-20 sm:pt-28 pb-12 sm:pb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm text-white/50 hover:text-primary transition-colors mb-8"
          >
            ← Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3 block">
              {label}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-5">
              {title} <span className="text-primary">{highlight}</span>
            </h1>
            <p className="text-base sm:text-lg text-white/70 max-w-[60ch] leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Features strip ── */}
      {features && features.length > 0 && (
        <section className="bg-primary px-4 sm:px-6 py-8 sm:py-10">
          <div className="container-max">
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="flex items-start gap-2.5 text-primary-foreground"
                >
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-80" />
                  <span className="text-sm font-medium leading-snug">{f}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ── All content sections — single continuous flow ── */}
      <section className="px-4 sm:px-6 py-14 sm:py-20 bg-background">
        <div className="container-max max-w-4xl">
          <div className="space-y-10 sm:space-y-14">
            {sections.map((section, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: 0.05 }}
              >
                <h2 className="heading-section mb-4">{section.title}</h2>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </motion.article>
            ))}
          </div>

          {/* ── CTA — at the very end ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-16 sm:mt-20 rounded-2xl bg-foreground text-background p-8 sm:p-12"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
                  Ready to get started?
                </h2>
                <p className="opacity-60 max-w-[45ch] text-sm sm:text-base">
                  Call us 24/7 or fill out a quick quote form. We Deliver Trust.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
                <Link
                  to="/#dispatch"
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-brand-hover transition-all w-full sm:w-auto"
                  style={{ boxShadow: "0 4px 16px hsl(24 95% 50% / 0.35)" }}
                >
                  {ctaText} <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:8887860080"
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 border-2 border-white/20 rounded-xl font-semibold hover:border-primary hover:text-primary transition-all w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4" />
                  <span className="tabular-nums">888-786-0080</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
};

export default ServicePageLayout;
