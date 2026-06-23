import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-statefiling.jpg";

const StateFilingDelivery = () => (
  <ServicePageLayout
    label="State Filing Delivery"
    title="State Filing"
    highlight="Delivery Service"
    description="When state filing deadlines are non-negotiable, RCS Delivery is your trusted partner for urgent and secure deliveries. Our 24/7 service ensures that critical state filings, business registrations, and time-sensitive paperwork reach their intended destinations promptly and securely. Whether you need to file with the Secretary of State, county recorder offices, or any other government agency, our specialized couriers handle each filing with precision and urgency."
    heroImage={heroImg}
    heroImagePositionDesktop="center 30%"
    heroImagePositionMobile="center 30%"
    features={[
      "Business Incorporation Filings",
      "Secretary of State Submissions",
      "Corporate Annual Reports",
      "Articles of Incorporation & Amendments",
      "Compliance Filings",
      "Registered Agent Deliveries",
      "Tax & License Filings",
      "Real Estate & Property Record Filings",
      "Government & Regulatory Filings",
    ]}
    sections={[
      {
        title: "Comprehensive State Filing Delivery Services",
        content:
          "We understand that state filings require careful handling, secure transport, and on-time delivery. At RCS Delivery, we provide reliable service that ensures your filings meet strict deadlines and compliance requirements. Whether it's for business registration, corporate filings, tax documentation, or compliance submissions, our team ensures that your paperwork is filed accurately and efficiently.\n\nOur couriers specialize in time-sensitive filing handling and provide confirmation upon successful submission. With years of experience working alongside corporations, professionals, and business owners, we have built a reputation for accuracy, efficiency, and reliability.",
      },
      {
        title: "Why Choose RCS Delivery for State Filing Delivery?",
        content:
          "24/7 Availability — Emergency and same-day filing services available nationwide.\n\nTime-Sensitive Handling — Our team ensures your filings reach government agencies before critical deadlines.\n\nSecure & Confidential — We guarantee safe transport and compliance with all state requirements.\n\nReal-Time Tracking — State-of-the-art technology allows you to track your delivery every step of the way.\n\nExperienced Professionals — Our delivery specialists are trained to handle sensitive state filings with the utmost care.",
      },
      {
        title: "Serving All 50 States",
        content:
          "RCS Delivery provides nationwide coverage, ensuring your state filings reach the appropriate government offices on time. We serve key locations including Los Angeles, San Diego, San Francisco, San Bernardino, Sacramento, New York, Chicago, Houston, and every city in between.\n\nWhen you need a trusted partner for urgent state filing deliveries, RCS Delivery is here to help. Contact us 24/7 for immediate assistance and ensure your filings are delivered securely and on time.",
      },
    ]}
    ctaText="Schedule Filing Delivery"
  />
);

export default StateFilingDelivery;
