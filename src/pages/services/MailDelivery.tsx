import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-mail.jpg";

const MailDelivery = () => (
  <ServicePageLayout
    heroImage={heroImg}
    label="Mail Pickup & Drop Off"
    title="Priority mail delivery"
    highlight="fast & secure."
    description="If you want to send a priority courier, RCS Delivery should be your choice. We offer highly reliable and fast door-to-door mail service in the shortest possible time — covering all 50 US states."
    features={[
      "Important documents",
      "Business records",
      "Time-sensitive letters",
      "Merchandise & postcards",
      "Packages of any size",
      "No size or weight limitations",
      "Guaranteed overnight scheduled delivery",
      "Proper handling of packages",
      "Incredibly affordable rates",
      "Complete confidentiality",
      "Order tracking until delivery",
      "Exceptional customer service",
    ]}
    sections={[
      {
        title: "Types Of Mail Deliveries We Offer",
        content: "Overnight Deliveries — For urgent mail, packages, couriers, and important letter deliveries, our overnight service is run by professional staff and well-trained drivers who choose the shortest route with minimum traffic and deliver your mails in just one night.\n\nScheduled Deliveries — Best for regular daily and weekly mails. When you place an order, we tell you its expected delivery date, and your mail reaches its destination on that date or even before.\n\nMultiple Deliveries — Yes, you read that right — we can pick up mails for different addresses and drop them off at different addresses. This service is available for everyone."
      },
      {
        title: "Why Choose RCS Mail Delivery?",
        content: "RCS Delivery is one of the best mail delivery services for all the right reasons:\n\n• No size or weight limitations on delivery packages\n• Guaranteed overnight scheduled delivery to most locations\n• Your important documents won't get damaged\n• We promise proper handling of your packages\n• Our services are incredibly affordable\n• Any package remains confidential\n• Your parcels get to their destination fast and safely\n• We offer overnight deliveries for urgent packages\n• We keep tracking your order until it reaches its destination"
      },
    ]}
  />
);

export default MailDelivery;
