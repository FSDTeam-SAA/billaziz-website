import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  useEffect(() => {
    const container = document.getElementById("soro-blog");
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    let url = "https://app.trysoro.com/api/embed/db747642-0079-4bd2-971d-34a026ed8bf4";
    if (params.get("post")) {
      url += "?post=" + encodeURIComponent(params.get("post")!);
    }

    const script = document.createElement("script");
    script.src = url;
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container-max px-4 sm:px-6">
          <div id="soro-blog"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
