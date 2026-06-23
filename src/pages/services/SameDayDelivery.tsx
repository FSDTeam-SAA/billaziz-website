import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-sameday.jpg";

const SameDayDelivery = () => (
  <ServicePageLayout
    heroImage={heroImg}
    heroImagePositionMobile="42% 44%"
    heroImagePositionDesktop="42% 58%"
    label="Same Day Delivery"
    title="Same day delivery"
    highlight="available 24/7."
    description="For shipments that require immediate attention, choose our Same Day Delivery Service. Ideal for emergency documents, reports, packages, and other deliverables that need door-to-door pick up services — available at the cheapest rates."
    features={[
      "Available 24/7/365",
      "Door-to-door service",
      "Emergency documents & reports",
      "Package pick up services",
      "Cheapest rates guaranteed",
      "Real-time GPS tracking",
      "5-star rated service",
      "Fastest routes selected",
      "No holiday surcharges",
    ]}
    sections={[
      {
        title: "Immediate Attention, Every Time",
        content: "RCS Delivery has been understanding the needs of customers for over 10 years and provides the fastest delivery of products on time. We are the number 1 courier service with five-star reviews and satisfied clients.\n\nOur same-day delivery service is ideal for emergency documents, reports, packages, and other deliverables that need door-to-door services. Place your order now with RCS and leave the rest of the job up to us."
      },
      {
        title: "Why Choose Same Day?",
        content: "When time is critical, every minute counts. Our same-day delivery service ensures your package gets picked up and delivered within the same day — no matter what time you call.\n\n• Emergency medical specimens\n• Legal documents with court deadlines\n• Urgent business packages\n• Time-sensitive prescriptions\n• Critical lab results\n\nWe choose the fastest routes with minimum traffic to ensure your package reaches its destination as soon as possible."
      },
    ]}
  />
);

export default SameDayDelivery;
