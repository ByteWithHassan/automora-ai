import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Workflow, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Automation Architecture Case Studies | Automora Flow",
  description: "Examine technical automation blueprints and measured business results built by Automora Flow.",
};

const extendedCaseStudies = [
  {
    title: "Official WhatsApp Customer Support & Tracking Engine",
    client: "E-Commerce Logistics Hub",
    challenge: "Managing 300+ daily shipment inquiries manually caused customer response delays exceeding 4 hours.",
    architecture: "n8n Webhook Listener → OpenAI Intent Parser → PostgreSQL Database Lookup → WhatsApp Cloud API Dispatcher",
    results: [
      "Sub-3-second average query response time",
      "Zero manual order lookups required from staff",
      "24/7 autonomous support operation",
    ],
  },
  {
    title: "Instant Multi-Channel Lead Qualification Pipeline",
    client: "B2B SaaS Studio",
    challenge: "Inbound leads sat in web forms for hours before reps copied details manually into HubSpot.",
    architecture: "Web3Forms Endpoint → Clearbit Domain Enrichment → Custom Lead Scoring Engine → Instant Slack Rep Alert",
    results: [
      "100% instant lead qualification under 60 seconds",
      "Direct Slack notifications sent to active reps",
      "Zero lost or dropped sales opportunities",
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100">
      <Navbar />
      <main className="pt-32 pb-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-300 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Workflow className="w-3.5 h-3.5 text-cyan-400" />
              <span>Verified Case Studies</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
              Engineering Blueprints &{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Proven Results.
              </span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Inspect how custom background automation pipelines resolve high-impact business bottlenecks.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto mb-20">
            {extendedCaseStudies.map((cs) => (
              <div key={cs.title} className="p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl">
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-2">{cs.client}</span>
                <h2 className="text-2xl font-bold text-white mb-4">{cs.title}</h2>
                <div className="space-y-4 mb-6">
                  <p className="text-xs text-slate-400 leading-relaxed"><strong className="text-slate-200">Problem:</strong> {cs.challenge}</p>
                  <p className="text-xs text-cyan-300 font-mono p-3 rounded-lg bg-slate-950 border border-slate-800"><strong className="text-slate-400">Architecture:</strong> {cs.architecture}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">Measured Outcomes</span>
                  {cs.results.map((r, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-200 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}