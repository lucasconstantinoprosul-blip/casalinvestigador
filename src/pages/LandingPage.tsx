import { Hero } from "../components/sections/Hero";
import { CasesPreview } from "../components/sections/CasesPreview";
import { WhatYouGet } from "../components/sections/WhatYouGet";
import { HowItWorks } from "../components/sections/HowItWorks";
import { Testimonials } from "../components/sections/Testimonials";
import { Pricing } from "../components/sections/Pricing";
import { FAQ } from "../components/sections/FAQ";
import { Footer } from "../components/sections/Footer";
import { useEffect } from "react";

export function LandingPage() {
  useEffect(() => {
    // Auto-scroll to pricing when landing on the page to make it immediate for payment, 
    // although typical landing pages don't do this, the user explicitly asked for 
    // "quando o usuario esteja nessa pagina ele caia direto para clicar no botao de pagamento"
    const timeout = setTimeout(() => {
      document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-geo-bg text-geo-text selection:bg-geo-red selection:text-white min-h-screen font-serif flex flex-col overflow-x-hidden">
      <Hero />
      <CasesPreview />
      <WhatYouGet />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
