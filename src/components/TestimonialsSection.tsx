import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Maria S.",
    role: "Lab Manager",
    location: "Dublin, CA",
    text: "We switched to RCS about two years ago and haven't looked back. Pickups are always on time, drivers are professional, and the tracking actually works.",
    source: "Google",
  },
  {
    name: "James T.",
    role: "Office Manager",
    location: "Los Angeles, CA",
    text: "They handle all our bank runs and legal document deliveries. Very reliable, fair pricing, and their customer service picks up the phone immediately.",
    source: "Yelp",
  },
  {
    name: "Dr. Patricia W.",
    role: "Physician",
    location: "Phoenix, AZ",
    text: "RCS handles our specimen transport to the lab every day. They understand the urgency and temperature requirements. Their driver David is basically part of the team now.",
    source: "Google",
  },
  {
    name: "Robert K.",
    role: "Paralegal",
    location: "New York, NY",
    text: "We needed court documents filed same-day and our usual courier couldn't make it. Called RCS at 4 PM and they had it done before close of business.",
    source: "Yelp",
  },
  {
    name: "Sandra L.",
    role: "Pharmacy Technician",
    location: "San Jose, CA",
    text: "Reliable, consistent, and they actually care about getting things right. We do multiple daily pickups with RCS and the drivers are always courteous.",
    source: "Google",
  },
  {
    name: "Ahmed M.",
    role: "Branch Manager",
    location: "Pleasanton, CA",
    text: "RCS does our daily check deposit runs. Rain or shine, they show up. Pricing is straightforward — no hidden fees. Recommended them to three other branches.",
    source: "Google",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="px-6 py-24 lg:py-32 bg-accent text-accent-foreground">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3 block">Testimonials</span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold tracking-tight text-accent-foreground mb-5">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-accent-foreground/60 max-w-[50ch] mx-auto">
            5.0 stars on Google and Yelp. Here's why businesses trust us with their most important deliveries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-accent-foreground/5 border border-accent-foreground/10 rounded-2xl p-8"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-5" />
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-accent-foreground/80 leading-relaxed mb-6">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between pt-5 border-t border-accent-foreground/10">
                <div>
                  <p className="text-sm font-bold text-accent-foreground">{review.name}</p>
                  <p className="text-xs text-accent-foreground/50">{review.role} · {review.location}</p>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-lg bg-primary/15 text-primary">{review.source}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
