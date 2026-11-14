import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Cpu, ShieldCheck, Zap, Workflow, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Automora Flow | AI Automation & Systems Studio",
  description: "Learn how Automora Flow engineers custom AI workflows, autonomous agents, and enterprise API integrations that scale business operations.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100">
      <Navbar />
      <main className="pt-32 pb-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-300 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>Engineering Philosophy</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
              We Build Infrastructure That{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Scales Without Drag.
              </span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Automora Flow is a specialized AI automation studio. We audit manual operational bottlenecks and build autonomous background systems that handle work 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
                <Workflow className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Custom Architecture</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We don't sell generic brittle Zapier templates. Every system is custom-built with n8n, secure webhooks, and strict data validation logic.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Zero Hallucinations</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                AI agents are scoped with strict prompt boundaries and verification routes. Edge cases escalate automatically to human reps.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Full System Ownership</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                You own your workflows, logic schemas, and database connections. We provide complete operational handoffs with zero lock-in.
              </p>
            </div>
          </div>

          <div className="p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-purple-950/40 border border-purple-500/30 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Ready to Automate Your Operations?</h3>
            <p className="text-slate-300 text-sm mb-6 max-w-xl mx-auto">
              Schedule a strategy assessment with our lead engineering team.
            </p>
            <a href="/#book-consultation">
              <Button variant="primary" size="md">Book Strategy Session</Button>
            </a>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}