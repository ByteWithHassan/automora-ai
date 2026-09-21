import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { WorkExamples } from "@/components/sections/WorkExamples";
import { WhyAutomora } from "@/components/sections/WhyAutomora";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#080a0f]">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <WhatWeDo />
        <Services />
        <Process />
        <WorkExamples />
        <WhyAutomora />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}