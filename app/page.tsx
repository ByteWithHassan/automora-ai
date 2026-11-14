import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhyAutomora } from "@/components/sections/WhyAutomora";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Process } from "@/components/sections/Process";
import { WorkExamples } from "@/components/sections/WorkExamples";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { Pricing } from "@/components/sections/Pricing";
import { ConsultationBooking } from "@/components/sections/ConsultationBooking";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030712]">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <WhyAutomora />
        <ServicesOverview />
        <WhatWeDo />
        <Process />
        <WorkExamples />
        <CaseStudies />
        <Testimonials />
        <About />
        <FAQ />
        <Pricing />
        <ConsultationBooking />
      </main>
      <Footer />
    </div>
  );
}