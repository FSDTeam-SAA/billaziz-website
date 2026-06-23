import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone } from "lucide-react";

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We serve all 50 states nationwide. Our headquarters is in Irvine, CA with regional hubs in Los Angeles, Fremont, Phoenix, Austin, New York, and Miami. If you're unsure about coverage in your area, give us a call — we've got you covered.",
  },
  {
    q: "How fast can you pick up?",
    a: "For STAT/emergency requests, we can have a driver dispatched within 1 hour. Standard same-day pickups are typically within 2–3 hours. Overnight deliveries arrive by 9:30 AM the next business day.",
  },
  {
    q: "Do you deliver on holidays and weekends?",
    a: "Yes. We operate 24/7/365 including all holidays and weekends. There are no extra charges for holiday deliveries.",
  },
  {
    q: "What types of items do you deliver?",
    a: "We specialize in medical specimens (blood samples, lab cultures), legal documents, bank deposits, pharmacy prescriptions, and general business packages. We have refrigerated vehicles for temperature-sensitive items.",
  },
  {
    q: "Are your drivers background checked?",
    a: "Yes. All of our drivers go through background checks and training, and are familiar with their areas of operation. Many of our drivers have been with us for years and know their client facilities inside and out.",
  },
  {
    q: "How do I track my delivery?",
    a: "Every delivery gets real-time GPS tracking. You can track your order on our website using your order ID, or contact our 24/7 support team at 888-786-0080 for updates.",
  },
  {
    q: "Is RCS HIPAA compliant?",
    a: "Yes. We follow HIPAA compliant transport protocols for all medical deliveries including proper handling, temperature control, and full chain-of-custody documentation.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing depends on distance, urgency, and type of delivery. We offer competitive rates — often lower than larger courier companies. Call us at 888-786-0080 or fill out the quote form for a fast, free estimate.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
          <div>
            <span className="label-text mb-3 block">FAQ</span>
            <h2 className="heading-section mb-4">
              Common <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Can't find what you're looking for? Our team is available 24/7 to help.
            </p>
            <a href="tel:8887860080" className="inline-flex items-center gap-2 h-12 px-6 bg-accent text-accent-foreground rounded-xl font-bold hover:bg-accent/90 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="tabular-nums">888-786-0080</span>
            </a>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="card-surface px-6 border rounded-xl">
                <AccordionTrigger className="text-sm font-bold text-foreground hover:no-underline hover:text-primary transition-colors py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
