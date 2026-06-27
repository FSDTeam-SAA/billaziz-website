import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Step = 1 | 2 | 3;

const backendBaseUrl =
  ((import.meta.env as ImportMetaEnv & { VITE_BACKEND_URL?: string }).VITE_BACKEND_URL ||
    "http://localhost:5001/api/v1").replace(/\/$/, "");

const DispatchForm = () => {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", company: "",
    pickupAddress: "", dropoffAddress: "",
    itemType: "", urgency: "", notes: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const [errors, setErrors] = useState<string[]>([]);

  const validateStep = (s: Step): string[] => {
    const errs: string[] = [];
    if (s === 1) {
      if (!formData.name.trim()) errs.push("Name is required");
      if (!formData.phone.trim()) errs.push("Phone is required");
      if (!formData.email.trim()) errs.push("Email is required");
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.push("Please enter a valid email address");
    } else if (s === 2) {
      if (!formData.pickupAddress.trim()) errs.push("Pickup address is required");
      if (!formData.dropoffAddress.trim()) errs.push("Drop-off address is required");
      if (!formData.itemType) errs.push("Please select an item type");
    } else if (s === 3) {
      if (!formData.urgency) errs.push("Please select urgency level");
    }
    return errs;
  };

  const handleNext = () => {
    const errs = validateStep(step);
    setErrors(errs);
    if (errs.length > 0) return;
    if (step === 3) {
      handleSubmit();
    } else {
      setStep((step + 1) as Step);
    }
  };

  const handleSubmit = async () => {
    setSending(true);
    try {
      const response = await fetch(`${backendBaseUrl}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json", accept: "*/*" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: formData.company.trim() || "N/A",
          pickupAddress: formData.pickupAddress.trim(),
          dropoffAddress: formData.dropoffAddress.trim(),
          itemType: formData.itemType,
          urgency: formData.urgency,
          formNotes: formData.notes.trim() || "None",
          source: "Website Form",
          status: "New",
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const msg = data?.message || data?.errors?.[0]?.message || "Form submission failed";
        throw new Error(msg);
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Lead submission error:", error);
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Please try again or call us directly at 888-786-0080.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  const inputClass = "w-full h-12 px-4 rounded-xl bg-background border border-input text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors";
  const selectClass = "w-full h-12 px-4 rounded-xl bg-background border border-input text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors";

  if (submitted) {
    return (
      <section id="dispatch" className="section-padding bg-section-alt">
        <div className="container-max max-w-lg text-center">
          <div className="card-surface p-10" style={{ boxShadow: "var(--shadow-lg)" }}>
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Request Received!</h3>
            <p className="text-muted-foreground mb-4">We'll call you shortly to confirm pickup details.</p>
            <p className="text-sm text-muted-foreground">
              Need it now? Call <a href="tel:8887860080" className="text-primary font-bold tabular-nums">888-786-0080</a>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="dispatch" className="section-padding bg-section-alt">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="label-text mb-3 block">Contact Us</span>
            <h2 className="heading-section mb-4">
              Get a <span className="text-primary">Free Quote</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-[45ch]">
              Fill out the form and we'll get back to you within minutes — or call us directly. We pick up on the first ring.
            </p>

            <div className="space-y-4 mb-8">
              <a href="tel:8887860080" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold tabular-nums">888-786-0080</div>
                  <div className="text-xs text-muted-foreground">Available 24/7</div>
                </div>
              </a>
              <a href="mailto:info@rcsdelivery.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold">info@rcsdelivery.com</div>
                  <div className="text-xs text-muted-foreground">Send us an email</div>
                </div>
              </a>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold">Irvine, CA (HQ)</div>
                  <div className="text-xs text-muted-foreground">Serving All 50 States</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-surface p-7 sm:p-9" style={{ boxShadow: "var(--shadow-lg)" }}>
            <div className="flex items-center gap-2 mb-6">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    s === step ? "bg-primary text-primary-foreground" :
                    s < step ? "bg-primary/20 text-primary" :
                    "bg-secondary text-muted-foreground"
                  }`}>
                    {s < step ? "✓" : s}
                  </div>
                  {s < 3 && <div className={`w-8 h-0.5 ${s < step ? "bg-primary/40" : "bg-border"}`} />}
                </div>
              ))}
              <span className="text-xs text-muted-foreground ml-auto">Step {step}/3</span>
            </div>

            {errors.length > 0 && (
              <div className="mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                {errors.map((err, i) => (
                  <p key={i} className="text-sm text-destructive font-medium">{err}</p>
                ))}
              </div>
            )}

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                  <h3 className="text-lg font-bold mb-2">Your Information</h3>
                  <input type="text" placeholder="Full name *" value={formData.name} onChange={(e) => updateField("name", e.target.value)} className={inputClass} />
                  <input type="text" placeholder="Company name (optional)" value={formData.company} onChange={(e) => updateField("company", e.target.value)} className={inputClass} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="tel" placeholder="Phone *" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} className={inputClass + " tabular-nums"} />
                    <input type="email" placeholder="Email *" value={formData.email} onChange={(e) => updateField("email", e.target.value)} className={inputClass} />
                  </div>
                </motion.div>
              )}
              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                  <h3 className="text-lg font-bold mb-2">Pickup & Delivery</h3>
                  <input type="text" placeholder="Pickup address or ZIP code *" value={formData.pickupAddress} onChange={(e) => updateField("pickupAddress", e.target.value)} className={inputClass} />
                  <input type="text" placeholder="Drop-off address or ZIP code *" value={formData.dropoffAddress} onChange={(e) => updateField("dropoffAddress", e.target.value)} className={inputClass} />
                  <select value={formData.itemType} onChange={(e) => updateField("itemType", e.target.value)} className={selectClass}>
                    <option value="">What are we picking up? *</option>
                    <option value="Lab Specimen / Medical">Lab Specimen / Medical</option>
                    <option value="Legal Documents">Legal Documents</option>
                    <option value="Bank / Financial">Bank / Financial</option>
                    <option value="Pharmacy / Rx">Pharmacy / Rx</option>
                    <option value="Mail / Letters / Packages">Mail / Letters / Packages</option>
                    <option value="Other">Other</option>
                  </select>
                </motion.div>
              )}
              {step === 3 && (
                <motion.div key="s3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                  <h3 className="text-lg font-bold mb-2">Urgency & Details</h3>
                  <select value={formData.urgency} onChange={(e) => updateField("urgency", e.target.value)} className={selectClass}>
                    <option value="">How urgent? *</option>
                    <option value="STAT - pickup within 1 hour">STAT — pickup within 1 hour</option>
                    <option value="Same day delivery">Same day delivery</option>
                    <option value="Overnight (by 9:30 AM)">Overnight (by 9:30 AM)</option>
                    <option value="Scheduled / Recurring">Scheduled / Recurring</option>
                  </select>
                  <textarea
                    placeholder="Special instructions (temperature requirements, loading dock, etc.)"
                    value={formData.notes}
                    onChange={(e) => updateField("notes", e.target.value)}
                    className="w-full h-28 px-4 py-3 rounded-xl bg-background border border-input text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none transition-colors"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center justify-between mt-6 pt-5 border-t border-border">
              {step > 1 ? (
                <button onClick={() => setStep((step - 1) as Step)} className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              ) : <div />}
              <button
                onClick={handleNext}
                disabled={sending}
                className="inline-flex items-center gap-2 h-11 px-6 bg-primary text-primary-foreground rounded-xl text-sm font-bold hover:bg-brand-hover transition-all active:scale-[0.97] disabled:opacity-70"
                style={{ boxShadow: "0 4px 16px hsl(217 91% 50% / 0.3)" }}
              >
                {sending ? (
                  <>Sending… <Loader2 className="w-4 h-4 animate-spin" /></>
                ) : (
                  <>{step === 3 ? "Submit Request" : "Continue"} <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DispatchForm;
