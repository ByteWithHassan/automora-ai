import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Layers, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "CRM & Sales Pipeline Automation | Automora Flow",
  description: "Automate deal tracking, pipeline updates, contact creation, and sales representative assignment across HubSpot, Salesforce, or Pipedrive.",
};

const features = [
  "Automatic Contact & Deal Creation",
  "Multi-Stage Pipeline Auto-Advancement",
  "Round-Robin Sales Rep Assignment",
  "Stale Deal Alerting & Task Triggering",
  "Bi-Directional Database Synchronization",
  "Executive Pipeline Activity Reports",
];

export default function CRMSalesPage() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100">
      <Navbar />
      <main className="pt-32 pb-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-300 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Revenue Operations Studio</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
              CRM & Sales Pipeline{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Automation.
              </span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Eliminate manual CRM entry. Keep your pipeline 100% updated automatically so your sales reps can focus on closing deals.
            </p>
            <a href="/#contact">
              <Button variant="primary" size="lg" className="gap-2">
                <span>Automate Your CRM</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
            {features.map((feat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{feat}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Integrates cleanly with HubSpot, Salesforce, Pipedrive, and custom PostgreSQL systems.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}