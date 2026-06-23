import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-aog.jpg";

const AircraftOnGround = () => (
  <ServicePageLayout
    heroImage={heroImg}
    heroImagePositionMobile="center 30%"
    heroImagePositionDesktop="center 35%"
    label="AOG Delivery"
    title="Aircraft on ground"
    highlight="delivery service."
    description="Our Aircraft on Ground delivery service handles the transportation of critical aviation parts and equipment to repair and maintain aircraft on the ground. These deliveries are typically time-sensitive and require urgent attention due to the impact on flight schedules and passenger safety. RCS Delivery is a leading provider of AOG delivery service, specializing in the rapid transportation of critical aviation parts and equipment. Our team of experts is dedicated to providing quick and efficient service to ensure that your aircraft is back in service as soon as possible."
    features={[
      "24/7 emergency dispatch availability",
      "Rapid turnaround for critical parts",
      "Air & ground transportation options",
      "Experienced aviation parts handlers",
      "Real-time GPS tracking & updates",
      "Temperature-controlled transport available",
      "Chain-of-custody documentation",
      "Direct to tarmac delivery coordination",
      "Nationwide airport coverage",
    ]}
    sections={[
      {
        title: "Benefits of Using AOG Delivery Services",
        content: "Quick Turnaround Time: We understand the importance of speed and efficiency in AOG deliveries, and work hard to ensure that your parts and equipment are delivered as quickly as possible.\n\nReliable and Flexible Transportation Options: We offer a range of transportation options, including air and ground, to ensure that your parts and equipment are delivered safely and on time.\n\nExpertise in Handling Aviation Parts: Our team has years of experience and expertise in handling and transporting aviation parts, ensuring that they are handled with care and delivered in good condition.\n\nCost-Effective Solution: Using RCS Delivery for AOG deliveries can help cut down on downtime and the costs that come with delays and cancellations. This makes it a cost-effective solution for your aviation needs."
      },
      {
        title: "Types of AOG Deliveries",
        content: "AOG shipments can include a wide range of aviation parts and equipment, such as:\n\n• Engine parts\n• Avionics equipment\n• Structural components\n• Landing gear parts\n• Cabin interior parts\n• Navigation & communication systems\n• Hydraulic components\n• Electrical systems & wiring"
      },
      {
        title: "Place an AOG Delivery Order",
        content: "Placing an AOG delivery order is simple and straightforward. Simply give us a call and provide us with the details of your delivery. Our team will then provide you with a quote and work with you to ensure that your parts and equipment are delivered as quickly and efficiently as possible.\n\nOverall, RCS Delivery is the go-to choice for AOG delivery service, offering quick and reliable transportation of critical aviation parts and equipment to repair and maintain aircraft on the ground. Contact us today to get started."
      },
    ]}
  />
);

export default AircraftOnGround;
