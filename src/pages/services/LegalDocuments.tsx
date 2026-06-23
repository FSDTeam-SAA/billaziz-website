import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-legal.jpg";

const LegalDocuments = () => (
  <ServicePageLayout
    heroImage={heroImg}
    label="Legal Documents"
    title="Legal courier services"
    highlight="you can trust."
    description="RCS Delivery has been the personal courier service choice for law firms, studios, and businesses for many years. Why? Because we are dedicated to serving our clients according to their standards. We have broadened our horizons and now offer several legal courier and messenger services including court filings, process serving, court research, and document retrieval."
    features={[
      "Archive document retrieval",
      "Courtesy copy prep and delivery",
      "Court filings",
      "Court research",
      "Daily route pickup",
      "Document recording",
      "Forwarding services — all states, nationwide",
      "Ground messenger / courier",
      "Mobile notary",
      "FAX / PDF filings",
      "Locator services / service of process / skip tracing",
      "Rush & same-day delivery available",
    ]}
    sections={[
      {
        title: "Process Services",
        content: "RCS Delivery offers attorneys, businesses, and individuals a variety of legal process services. If you need something done yesterday, we can get it done as quickly as possible. All of our employees are licensed, registered, and insured. We can handle any legal service with ease and are able to serve documents to individuals who may otherwise be unreachable.\n\nAll of these services can be performed at regular delivery rates as part of our daily route, or you can have them rushed or even special delivery. The time frame is up to you. We understand how urgent some legal matters can be."
      },
      {
        title: "Rush Delivery Services",
        content: "For extremely time-sensitive documents, we offer our rush delivery services. When you place your order and provide us with the details, we will create a route that gets your package delivered in the fastest amount of time possible. No matter where you are, we will make sure your documents arrive on time. We have agents strategically located all over the country that specialize in rush deliveries. You won't have to wait long before you receive a signature confirmation."
      },
      {
        title: "Court Research",
        content: "Court research can be extremely time consuming. The dedicated professionals at RCS Delivery are willing to do the work for you so you can take care of the rest of your case. Building a solid case takes hard work and a lot of time. Our staff is extremely knowledgeable when it comes to court paperwork and doing the research is second nature for them. They can find what you need while you are focusing on more important tasks."
      },
      {
        title: "Court Filings",
        content: "Our staff offers a variety of court filings and process services that can help you dramatically. Once you call our office, we will go over your order, look over all of your legal paperwork and begin the process of filing them with the appropriate court. We take court filings seriously and handle them as quickly and efficiently as we can.\n\nIf you need them filed in a hurry, we can put a rush on them just like we do other types of deliveries. When you hire us to handle all of your court filings, we can take the stress out of the situation. We do the legwork, while you continue to work on your case. All of our same-day services are guaranteed and we offer proof that they were filed in the appropriate court system.\n\nAn intricate network of process servers as well as our highly trained office staff is ready to serve our clients in whatever capacity they need. At RCS Delivery, our goal is to provide the best legal services possible. Call us today and speak to one of our dedicated professionals."
      },
    ]}
  />
);

export default LegalDocuments;
