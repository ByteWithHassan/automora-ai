import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Bot, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Voice Agents & Autonomous Call Bots | Automora Flow",
  description: "Natural conversational inbound and outbound voice agents for scheduling calls, qualifying leads, and handling tier-1 phone inquiries.",
};

const features = [
  "Inbound AI Phone Support Agents",
  "Outbound Lead Qualification Calling",
  "Real-Time Phone Appointment Booking",
  "Call Transcriptions & Sentiment Summaries",
  "Instant CRM Record Auto-Populating",
  "Human Agent Transfer Protocols",
];

export default function VoiceAgentsPage() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100">
      <Navbar />
      <main className="pt-32 pb-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-300 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Bot className="w-3.5 h-3.5 text-cyan-400" />
              <span>Conversational Voice Architecture</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
              AI Voice Agents &{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Phone Automation.
              </span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Deploy human-like conversational voice bots that handle incoming phone support and call prospects to book appointments automatically.
            </p>
            <a href="/#contact">
              <Button variant="primary" size="lg" className="gap-2">
                <span>Explore Voice Agents</span>
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
                  Low-latency voice models with natural inflection and instant context retention.
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