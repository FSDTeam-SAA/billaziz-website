import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-government.jpg";

const GovernmentContracts = () => (
  <ServicePageLayout
    heroImage={heroImg}
    heroImagePositionMobile="center 35%"
    heroImagePositionDesktop="center 40%"
    label="Government Contracts"
    title="Secure and timely delivery services for"
    highlight="prisons, state universities, and more."
    description="Welcome to RCS Delivery, your trusted partner for government contract deliveries. We specialize in providing secure and reliable courier services for a wide range of government agencies and institutions throughout all 50 states nationwide."
    features={[
      "Federal & military base deliveries",
      "State prison & corrections facilities",
      "VA hospital & medical center deliveries",
      "IRS & post office courier services",
      "Secretary of State filings",
      "State university deliveries",
      "Confidential document handling",
      "Background-checked & trained drivers",
      "Real-time GPS tracking on all deliveries",
      "COVID-19 related deliveries",
      "Dedicated live dispatch 24/7",
    ]}
    sections={[
      {
        title: "Our Government Courier Services Include Deliveries for State and Federal Contracts",
        content: "We handle deliveries for state and federal contracts across a wide range of agencies and institutions.\n\nFederal & Military:\n• Federal Prisons\n• Hospitals\n• IRS\n• Post Office\n• Military Bases\n• VA Hospitals\n• Coast Guard\n• Naval Bases\n\nState:\n• State Prisons\n• Secretary of State\n• State Filings\n• State Laboratories\n• Department of Corrections\n• State Universities\n• COVID-19 Related Deliveries"
      },
      {
        title: "Benefits of Using Our Government Contract Delivery Service",
        content: "Reliability: With RCS Delivery, you can trust that your deliveries will be made on time, every time. We understand the importance of timely delivery for government contracts and take great care to ensure all deliveries are made exactly on schedule.\n\nSecurity: The safety and security of your deliveries is our top priority. In order to guarantee the safe and secure transportation of your deliveries, our team of seasoned couriers uses the most up-to-date technology and is trained to handle sensitive and confidential materials.\n\nFlexibility: We are aware that each government institution and agency has specific needs. That's why we offer a wide range of services and are able to customize them to meet the specific needs of each client.\n\nTracking: Real-time tracking and updates allow you to stay up to date on the progress of your delivery. This gives you the assurance that your deliveries are on time and on their way.\n\nDedicated Live Dispatch: Our live dispatch is available around-the-clock to respond to any inquiries you may have and to help with any unique needs or requests. This ensures that you have a smooth and hassle-free experience when using our service."
      },
      {
        title: "Why Choose RCS Delivery for Government Contracts?",
        content: "You can be sure that RCS Delivery will handle your deliveries with the utmost care and security. In order to guarantee the safe and secure transportation of your deliveries, our team of seasoned couriers is trained to handle sensitive and confidential materials and is outfitted with cutting-edge technology.\n\nWe pride ourselves on meeting each client's unique needs and delivering government documents and materials securely and in a timely manner.\n\nChoose RCS Delivery for all your government contract delivery needs. Contact us today to learn more about our services and to request a quote."
      },
    ]}
  />
);

export default GovernmentContracts;
