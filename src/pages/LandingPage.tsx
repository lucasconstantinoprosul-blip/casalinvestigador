import { Hero } from "../components/sections/Hero";
import { CasesPreview } from "../components/sections/CasesPreview";
import { WhatYouGet } from "../components/sections/WhatYouGet";
import { HowItWorks } from "../components/sections/HowItWorks";
import { Testimonials } from "../components/sections/Testimonials";
import { Pricing } from "../components/sections/Pricing";
import { FAQ } from "../components/sections/FAQ";
import { Footer } from "../components/sections/Footer";

export function LandingPage() {
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
