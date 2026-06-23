import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Package, MapPin, Clock, CheckCircle, Truck, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const OrderTracking = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderNumber.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSearched(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>

      <section className="section-padding bg-section-alt">
        <div className="container-max">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            ← Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="label-text mb-4 block">Track Your Order</span>
            <h1 className="heading-display mb-6">
              Order <span className="text-primary">Tracking</span>
            </h1>
            <p className="body-large max-w-[50ch] mx-auto mb-10">
              Enter your order number below to track the status of your delivery in real time.
            </p>

            <form onSubmit={handleTrack} className="max-w-xl mx-auto">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={orderNumber}
                    onChange={(e) => { setOrderNumber(e.target.value); setSearched(false); }}
                    placeholder="Enter your order number (e.g. RCS-2024-001)"
                    className="w-full h-14 pl-12 pr-4 rounded-xl bg-card border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-base"
                    style={{ boxShadow: "var(--shadow-md)" }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={!orderNumber.trim() || loading}
                  className="h-14 px-8 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-cobalt-dark transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 flex items-center gap-2"
                  style={{ boxShadow: "var(--shadow-md)" }}
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  ) : (
                    <>
                      <Truck className="w-5 h-5" />
                      Track
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      {searched && (
        <section className="section-padding !py-16">
          <div className="container-max max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="card-surface p-8"
              style={{ boxShadow: "var(--shadow-lg)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-muted-foreground" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Order Not Found</h3>
                  <p className="text-sm text-muted-foreground">
                    We couldn't find an order with number "<span className="font-medium text-foreground">{orderNumber}</span>"
                  </p>
                </div>
              </div>

              <div className="bg-section-alt rounded-lg p-6 mb-6">
                <p className="text-sm text-muted-foreground mb-4">This could mean:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    The order number may be incorrect — please double-check and try again
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    The order may not yet be in our system — it can take a few minutes after placing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    If you continue having issues, please contact us directly
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:8887860080"
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-cobalt-dark transition-all"
                >
                  Call 888-786-0080
                </a>
                <a
                  href="mailto:info@rcsdelivery.com"
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-secondary/80 transition-all"
                >
                  Email Support
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* How tracking works */}
      <section className={`section-padding !py-16 ${searched ? "bg-section-alt" : ""}`}>
        <div className="container-max max-w-3xl">
          <h2 className="heading-section text-center mb-10">How Order Tracking Works</h2>
          <div className="space-y-6">
            {[
              { icon: Package, title: "Order Received", desc: "When you place an order, we assign a unique tracking number for your delivery." },
              { icon: Truck, title: "In Transit", desc: "Our drivers pick up your package and head to the destination. Track real-time GPS location." },
              { icon: MapPin, title: "Out for Delivery", desc: "Your package is on the final leg of its journey, approaching the delivery address." },
              { icon: CheckCircle, title: "Delivered", desc: "Package delivered! You receive confirmation and signature proof of delivery." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
};

export default OrderTracking;
