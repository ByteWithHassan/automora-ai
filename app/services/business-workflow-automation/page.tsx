import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Workflow, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Business Workflow Automation | Automora Flow",
  description: "End-to-end multi-app business process automation engineered with n8n, custom webhooks, PostgreSQL, and AI model orchestration.",
};

const features = [
  "Custom n8n & Webhook Architecture",
  "Automated Invoice Parsing & Payment Reminders",
  "Cross-Platform Database Syncing",
  "Document Extraction & Data Pipelines",
  "Error Handling & Alert Guardrails",
  "Full Operational Ownership & Handoff",
];

export default function BusinessWorkflowPage() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100">
      <Navbar />
      <main className="pt-32 pb-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-300 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Workflow className="w-3.5 h-3.5 text-cyan-400" />
              <span>Enterprise Systems Studio</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
              Custom Business{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Workflow Automation.
              </span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Connect your entire software stack. We engineer custom background pipelines that process invoices, sync data, and run administrative work automatically.
            </p>
            <a href="/#contact">
              <Button variant="primary" size="lg" className="gap-2">
                <span>Build Custom Pipeline</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
            {features.map((feat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{feat}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Self-hosted, highly secure, and optimized for maximum speed.
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
