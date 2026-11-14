import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "WhatsApp Business Automation & AI Chatbots | Automora Flow",
  description: "Official WhatsApp Cloud API automation, AI conversational chatbots, instant lead qualification, and customer notifications.",
};

const features = [
  "Official WhatsApp Cloud API Integration",
  "AI-Powered WhatsApp Chatbots",
  "Instant Lead Qualification & FAQs",
  "Automated Shipment & Order Alerts",
  "Smooth Human Agent Escalation Routes",
  "Broadcast Multi-Channel Messaging",
];

export default function WhatsAppAutomationPage() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100">
      <Navbar />
      <main className="pt-32 pb-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-300 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Cloud API Studio</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
              WhatsApp Business{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI Automation.
              </span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Engage customers where they live. Build 24/7 intelligent WhatsApp workflows for inquiries, appointments, and CRM updates.
            </p>
            <a href="/#contact">
              <Button variant="primary" size="lg" className="gap-2">
                <span>Deploy WhatsApp AI</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
            {features.map((feat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{feat}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Fully compliant with WhatsApp messaging policies and consent guidelines.
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