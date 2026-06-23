import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-route.jpg";

const RouteService = () => (
  <ServicePageLayout
    heroImage={heroImg}
    label="Route Delivery"
    title="Customized route delivery"
    highlight="built for your business."
    description="A route delivery service is a customized delivery service for a client. When a client selects a customized service, they get a separate dedicated driver and customized route — comparatively faster than scheduled services."
    features={[
      "Dedicated driver assigned to your account",
      "Customized efficient routes",
      "Real-time parcel tracking",
      "Business-to-business deliveries",
      "Pharmacy & hospital routes",
      "Blood bank & lab pickups",
      "Bank delivery integration",
      "Overnight delivery options",
      "Legal document delivery",
    ]}
    sections={[
      {
        title: "Deliveries We Cater",
        content: "Are you looking for a service to make multiple deliveries to various marketplaces? RCS Route Delivery Service has got your back. We care for customer satisfaction and convenience — providing urgent and rushed deliveries for business to business, pharmacies, labs, hospitals, medical centers, and blood banks.\n\nAt RCS, we offer our customers many benefits, including bank delivery, overnight delivery services, laboratory services, and delivery of legal documents."
      },
      {
        title: "Why Are We The Best?",
        content: "You must be thinking there are many courier services, but why choose us? The simple answer — we are the best, and here's why:\n\n• Swift deliveries\n• Reliable and safe\n• Low-cost services\n• Cooperative team\n• 24/7 customer service\n• We choose the fastest route with minimum traffic\n• We provide overnight deliveries\n• Deliveries on vacations and public holidays\n• Experienced, well-trained, and educated drivers\n• We serve a wide range of industries"
      },
      {
        title: "Where Do We Deliver?",
        content: "Over the past decade, we've expanded our operations to cover all 50 states nationwide. We offer fast and customized courier services coast to coast — from California to New York, Texas to Washington, and everywhere in between.\n\nMany industries like restaurants, florists, the food and paper industry, landscaping, gardening, and security patrols benefit from our fast and reliable route delivery services."
      },
    ]}
  />
);

export default RouteService;
