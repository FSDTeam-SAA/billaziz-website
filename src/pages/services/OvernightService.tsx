import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-overnight.jpg";

const OvernightService = () => (
  <ServicePageLayout
    heroImage={heroImg}
    label="Overnight Delivery"
    title="Overnight delivery"
    highlight="by 9:30 AM."
    description="If you want a delivery made on time, choose our Overnight Delivery Service — from letters to packages. Overnight deliveries can be delivered next business day by 9:30 a.m. Our team of couriers have the experience and insight you can rely on."
    features={[
      "Next business day by 9:30 AM",
      "Dedicated nationwide premium service",
      "Full road network coverage",
      "Urgent & time-critical packages",
      "Business & personal deliveries",
      "Careful handling guaranteed",
      "Quick online booking",
      "Cross-town or cross-country",
      "24/7 dispatch available",
    ]}
    sections={[
      {
        title: "Reliable Overnight Courier Services",
        content: "Like all of the services we offer, our overnight delivery makes the most of our substantial road networks to ensure your packages arrive on time. The RCS Delivery team of couriers has the knowledge and expertise you can count on to not only handle your overnight delivery with care but see it safely to its destination.\n\nNo matter what the situation and purpose, whether it's a business delivery or you need to send a package at short notice, our overnight couriers will help you out."
      },
      {
        title: "Book Your Overnight Delivery",
        content: "To book our overnight courier service, get in touch or enter your package details in our booking tool to get a quick quote today. If you need any assistance, you can also contact the RCS Delivery team, and we can help you organize your deliveries using these fantastic, trusted overnight services.\n\nIf you need a consignment or package delivered urgently, our Overnight Delivery courier service may be just what you are looking for. RCS Delivery is a dedicated nationwide overnight premium delivery service ready to respond to our customer's sudden or urgent need to get a consignment delivered on time."
      },
    ]}
  />
);

export default OvernightService;
