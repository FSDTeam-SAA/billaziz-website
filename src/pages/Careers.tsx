import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Briefcase, MapPin, Clock, ArrowRight, Phone, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const FORMSPREE_URL = "https://formspree.io/f/xjgaqery";

const openPositions = [
  {
    title: "Courier Driver – Full Time",
    location: "Nationwide",
    type: "Full-Time",
    description:
      "Join our team of professional drivers delivering time-sensitive packages across all 50 states. Must have a clean driving record and reliable vehicle.",
  },
  {
    title: "Courier Driver – Part Time",
    location: "Nationwide",
    type: "Part-Time",
    description:
      "Flexible part-time driving opportunities for motivated individuals. Perfect for those looking for supplemental income with a flexible schedule.",
  },
  {
    title: "Dispatch Coordinator",
    location: "Remote / Office",
    type: "Full-Time",
    description:
      "Coordinate deliveries, manage driver assignments, and ensure on-time performance. Strong communication and organizational skills required.",
  },
];

const benefits = [
  "Competitive pay & bonuses",
  "Flexible scheduling",
  "Growth opportunities",
  "Supportive team environment",
  "Paid training",
  "Vehicle allowance for drivers",
];

const Careers = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", position: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setSending(true);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _replyto: "info@rcsdelivery.com",
          _subject: `Career Application: ${form.position || "General"}`,
          name: form.name,
          email: form.email,
          phone: form.phone,
          position: form.position || "General Application",
          message: form.message || "N/A",
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      toast({ title: "Something went wrong", description: "Please try again or call us at 888-786-0080.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  const inputClass = "w-full h-12 px-4 rounded-xl bg-background border border-input text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>

      {/* Hero */}
      <section className="bg-accent text-accent-foreground py-20 md:py-28">
        <div className="container-max px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Join the <span className="text-primary">RCS Delivery</span> Team
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We're always looking for dedicated, reliable professionals to help us deliver excellence across all 50 states.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 md:py-20">
        <div className="container-max px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Work With <span className="text-primary">Us</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-3 bg-muted rounded-xl px-5 py-4">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container-max px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Open <span className="text-primary">Positions</span>
          </h2>
          <div className="space-y-5 max-w-3xl mx-auto">
            {openPositions.map((pos) => (
              <div key={pos.title} className="bg-card rounded-xl border border-border p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold text-foreground">{pos.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{pos.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{pos.type}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-5">{pos.description}</p>
                <a href="#apply" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                  Apply Now <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-16 md:py-20">
        <div className="container-max px-4 sm:px-6 max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <Briefcase className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Apply Now</h2>
            <p className="text-muted-foreground">Fill out the form below and we'll get back to you shortly.</p>
          </div>

          {submitted ? (
            <div className="card-surface p-10 text-center" style={{ boxShadow: "var(--shadow-lg)" }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Application Received!</h3>
              <p className="text-muted-foreground mb-4">We'll review your application and reach out soon.</p>
              <p className="text-sm text-muted-foreground">
                Questions? Call <a href="tel:8887860080" className="text-primary font-bold tabular-nums">888-786-0080</a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-surface p-7 sm:p-9 space-y-4" style={{ boxShadow: "var(--shadow-lg)" }}>
              <input type="text" placeholder="Full name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input type="email" placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                <input type="tel" placeholder="Phone *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass + " tabular-nums"} />
              </div>
              <select value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} className={inputClass}>
                <option value="">Position interested in (optional)</option>
                <option value="Courier Driver – Full Time">Courier Driver – Full Time</option>
                <option value="Courier Driver – Part Time">Courier Driver – Part Time</option>
                <option value="Dispatch Coordinator">Dispatch Coordinator</option>
                <option value="Other">Other</option>
              </select>
              <textarea
                placeholder="Tell us about yourself..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full h-28 px-4 py-3 rounded-xl bg-background border border-input text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none transition-colors"
              />
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <a href="tel:8887860080" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4" /> 888-786-0080
                </a>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 h-11 px-6 bg-primary text-primary-foreground rounded-xl text-sm font-bold hover:bg-brand-hover transition-all active:scale-[0.97] disabled:opacity-70"
                >
                  {sending ? (<>Sending… <Loader2 className="w-4 h-4 animate-spin" /></>) : (<>Submit Application <ArrowRight className="w-4 h-4" /></>)}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
};

export default Careers;
