import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HelpCircle, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Customer Support Agents & Bots | Automora Flow",
  description: "24/7 autonomous support bots trained on your company documentation, capable of instant inquiry resolution and agent handoff.",
};

const features = [
  "Knowledge Base & Document Training",
  "Sub-Second Multi-Turn Conversation",
  "Automated Support Ticket Tagging",
  "Human Escalation & Live Chat Hand-Off",
  "Multi-Lingual Support Capability",
  "Sentiment Monitoring & Escalation",
];

export default function CustomerSupportPage() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100">
      <Navbar />
      <main className="pt-32 pb-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-300 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
              <span>Autonomous Support Engine</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
              AI Customer Support{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Agents.
              </span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Resolve up to 80% of customer support inquiries instantly. Provide accurate, 24/7 answers trained directly on your documentation.
            </p>
            <a href="/#contact">
              <Button variant="primary" size="lg" className="gap-2">
                <span>Deploy Support AI</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
            {features.map((feat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{feat}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Strict prompt boundaries ensure zero hallucinated responses.
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