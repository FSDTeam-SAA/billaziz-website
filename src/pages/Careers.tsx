import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Briefcase, MapPin, Clock, ArrowRight, Phone, CheckCircle, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const backendBaseUrl =
  ((import.meta.env as ImportMetaEnv & { VITE_BACKEND_URL?: string }).VITE_BACKEND_URL ||
    "http://localhost:5001/api/v1").replace(/\/$/, "");

type JobItem = {
  _id: string;
  title: string;
  description: string;
  category?: string;
  location?: string;
  experienceLevel?: string;
  companyName?: string;
  requiredSkills?: string[];
  salaryRange?: string;
  vacancy?: number;
  applicationDeadline?: string;
};

type JobsResponse = {
  data?: JobItem[];
};

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
  const [jobs, setJobs] = useState<JobItem[]>([]);
  const [jobsLoading, setJobsLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  useEffect(() => {
    const controller = new AbortController();

    const loadJobs = async () => {
      try {
        const response = await fetch(`${backendBaseUrl}/jobs/public`, {
          headers: { accept: "*/*" },
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to load jobs");
        }

        const result: JobsResponse = await response.json();
        setJobs(result.data || []);
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return;
        }

        console.error("Jobs fetch error:", error);
        toast({
          title: "Unable to load positions",
          description: "Please refresh the page or call us at 888-786-0080.",
          variant: "destructive",
        });
      } finally {
        setJobsLoading(false);
      }
    };

    loadJobs();

    return () => controller.abort();
  }, [toast]);

  const handlePositionSelect = (position: string) => {
    setForm((prev) => ({ ...prev, position }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.position.trim() ||
      !form.message.trim()
    ) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setSending(true);
    try {
      const res = await fetch(`${backendBaseUrl}/applied-jobs/apply`, {
        method: "POST",
        headers: { "Content-Type": "application/json", accept: "*/*" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          interestedPosition: form.position.trim(),
          tellUsYourself: form.message.trim(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        const msg = data?.message || data?.errors?.[0]?.message || "Submission failed";
        throw new Error(msg);
      }

      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", position: "", message: "" });
    } catch (error) {
      console.error("Job application error:", error);
      toast({
        title: "Something went wrong",
        description:
          error instanceof Error
            ? error.message
            : "Please try again or call us at 888-786-0080.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  const inputClass = "w-full h-12 px-4 rounded-xl bg-background border border-input text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors";
  const isSubmitDisabled = sending || jobsLoading || jobs.length === 0;

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
            {jobsLoading && (
              <div className="bg-card rounded-xl border border-border p-8 flex items-center justify-center gap-3 text-sm text-muted-foreground">
                <Loader2 className="w-4 h-4 animate-spin" />
                Loading open positions...
              </div>
            )}

            {!jobsLoading && jobs.length === 0 && (
              <div className="bg-card rounded-xl border border-border p-8 text-center">
                <h3 className="text-lg font-bold text-foreground mb-2">No open positions right now</h3>
                <p className="text-sm text-muted-foreground">
                  Please check back soon or call 888-786-0080 for hiring updates.
                </p>
              </div>
            )}

            {jobs.map((job) => (
              <div key={job._id} className="bg-card rounded-xl border border-border p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                    {job.companyName && (
                      <p className="text-sm text-muted-foreground mt-1">{job.companyName}</p>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location || "Location not specified"}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {job.category || "Open Role"}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{job.description}</p>

                {(job.experienceLevel || job.salaryRange || job.vacancy) && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {job.experienceLevel && (
                      <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-foreground">
                        {job.experienceLevel}
                      </span>
                    )}
                    {job.salaryRange && (
                      <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-foreground">
                        {job.salaryRange}
                      </span>
                    )}
                    {typeof job.vacancy === "number" && (
                      <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-foreground">
                        {job.vacancy} {job.vacancy > 1 ? "Vacancies" : "Vacancy"}
                      </span>
                    )}
                  </div>
                )}

                <a
                  href="#apply"
                  onClick={() => handlePositionSelect(job.title)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
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
              <select
                value={form.position}
                onChange={(e) => setForm({ ...form, position: e.target.value })}
                className={inputClass}
                disabled={jobsLoading || jobs.length === 0}
              >
                <option value="">Position interested in *</option>
                {jobs.map((job) => (
                  <option key={job._id} value={job.title}>
                    {job.title}
                  </option>
                ))}
              </select>
              <textarea
                placeholder="Tell us about yourself *"
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
                  disabled={isSubmitDisabled}
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
