import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-bank.jpg";

const BankDelivery = () => (
  <ServicePageLayout
    heroImage={heroImg}
    label="Bank Delivery"
    title="Banking & financial courier services"
    highlight="you can count on."
    description="When time is money, delays are not an option. RCS Delivery ensures that your banking and financial deliveries arrive on time, every time. Whether it's urgent payroll deliveries, secure cash exchanges, or sensitive bank deposits, our professional couriers are standing by 24/7 to get the job done. Trusted by banks, credit unions, brokerage firms, and loan centers, we guarantee fast, secure, and confidential service — so you can focus on business while we handle the logistics."
    features={[
      "Delivery of payroll",
      "Bank deposits",
      "Cash exchange",
      "Scheduled route service",
      "Inter-office communications",
      "Daily activity reports to processing centers",
      "Prearranged cash deliveries",
      "Real-time GPS tracking",
      "24/7 availability",
      "Secure & confidential handling",
    ]}
    sections={[
      {
        title: "Your Reliable Solution for Financial Deliveries",
        content: "At RCS Delivery, we recognize the importance of secure and timely deliveries for banking and financial institutions. With years of experience working alongside financial professionals, we have built a reputation for accuracy, efficiency, and reliability. Our couriers specialize in time-sensitive deliveries and provide confirmation upon successful drop-offs."
      },
      {
        title: "Why Choose RCS Delivery for Banking & Financial Deliveries?",
        content: "24/7 Availability — Emergency and scheduled courier services available nationwide.\n\nTime-Sensitive Handling — Our team ensures your financial transactions and documents reach their destination promptly.\n\nSecure & Confidential — We guarantee safe transport and strict confidentiality for all financial deliveries.\n\nReal-Time Tracking — State-of-the-art technology allows you to track your delivery every step of the way.\n\nExperienced Professionals — Our delivery specialists are trained to handle financial transactions with the utmost care."
      },
      {
        title: "Serving All 50 States Nationwide",
        content: "RCS Delivery provides nationwide coverage, ensuring your banking and financial deliveries reach the appropriate destinations on time. We serve key locations including Los Angeles, Fremont, Phoenix, Austin, New York, Miami, and every city in between.\n\nWhen you need a trusted partner for urgent financial deliveries, RCS Delivery is here to help. Contact us 24/7 for immediate assistance and ensure your transactions and reports are delivered securely and on time."
      },
    ]}
  />
);

export default BankDelivery;
