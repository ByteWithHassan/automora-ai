import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Mail, CheckCircle2, ArrowRight, Sparkles, Inbox, Zap, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Gmail & Email Automation Services | Automora Flow",
  description: "Automate inbox triage, intelligent replies, email classification, data extraction, and CRM integration using custom AI email workflows.",
};

const features = [
  "Automatic Email Replies & Categorization",
  "AI Smart Inbox Triage & Sentiment Analysis",
  "Automated Multi-Touch Follow-up Sequences",
  "Email Data & Invoice PDF Extraction",
  "Seamless Email-to-CRM Data Syncing",
  "Executive Email Summaries & Slack Alerts",
];

export default function GmailAutomationPage() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100">
      <Navbar />
      <main className="pt-32 pb-24">
        <Container>
          {/* Service Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-300 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>Email Intelligence Studio</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
              Gmail & Email{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Workflow Automation.
              </span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Transform your inbox from an operational bottleneck into an automated logic engine. Extract structured data, trigger instant replies, and sync CRM records effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/#contact">
                <Button variant="primary" size="lg" className="gap-2">
                  <span>Automate Your Inbox</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
            {features.map((feat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{feat}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Engineered using secure OAuth authentication and structured AI logic engines.
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA Card */}
          <div className="p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-purple-950/40 border border-purple-500/30 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Ready to Reclaim 15+ Hours Every Week?</h3>
            <p className="text-slate-300 text-sm mb-6 max-w-xl mx-auto">
              Schedule an operational review with our team to map out your custom email automation strategy.
            </p>
            <a href="/#contact">
              <Button variant="primary" size="md">Book Free Strategy Call</Button>
            </a>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}