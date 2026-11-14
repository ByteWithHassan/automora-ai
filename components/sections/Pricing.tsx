"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { CheckCircle2, Sparkles, ArrowRight, Layers, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter Automation",
    badge: "Single System",
    price: "Custom Quote",
    desc: "Ideal for businesses looking to eliminate a single high-friction manual bottleneck.",
    features: [
      "1 Custom Integration Pipeline (e.g. Gmail or WhatsApp)",
      "Standard Webhook & API Connection Setup",
      "Error Alerts & Basic Guardrails",
      "Full Code & Logic Ownership",
      "14-Day Post-Deployment Support",
    ],
    highlight: false,
    cta: "Request Single Pipeline Quote",
  },
  {
    name: "Growth Pipeline Studio",
    badge: "Most Popular",
    price: "Custom Project",
    desc: "Complete end-to-end multi-app workflow automation across your entire sales or support stack.",
    features: [
      "Up to 4 Connected Systems (CRM, Email, WhatsApp, AI Agents)",
      "Custom n8n Logic Engine & State Management",
      "AI Prompt Boundaries & Verification Routes",
      "Human Fallback Escalation Protocols",
      "Bi-Directional Database Syncing (PostgreSQL/Supabase)",
      "30-Day Dedicated Handoff & Optimization",
    ],
    highlight: true,
    cta: "Build Custom Multi-App Studio",
  },
  {
    name: "Enterprise Architecture",
    badge: "Full Autopilot",
    price: "Tailored Retainer",
    desc: "Dedicated autonomous system engineering, custom AI voice bots, and continuous optimization.",
    features: [
      "Unlimited Systems & Custom API Engineering",
      "Inbound & Outbound Conversational Voice Agents",
      "Self-Hosted Production n8n Cluster Setup",
      "Dedicated Technical SLA & Real-Time Monitoring",
      "Custom Internal Knowledge Base Training",
      "Ongoing Monthly Support & Iterative Enhancements",
    ],
    highlight: false,
    cta: "Speak with Lead Architect",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#030712] border-t border-slate-800/60 relative">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="down" delay={0.1}>
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 inline-block mb-4">
              Flexible Engineering Tiers
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} preset="blur">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Transparent, Value-Based{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Project Scoping.
              </span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p className="text-slate-300 text-base sm:text-lg">
              Every build is customized to your operational requirements. No monthly user seat markups—you own the systems we build.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`p-8 rounded-3xl backdrop-blur-xl flex flex-col justify-between relative ${
                tier.highlight
                  ? "bg-gradient-to-b from-slate-900 via-slate-900/90 to-purple-950/40 border-2 border-purple-500/60 shadow-[0_0_40px_rgba(168,85,247,0.2)]"
                  : "bg-slate-900/40 border border-slate-800/80"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 text-slate-950 text-[11px] font-bold uppercase tracking-wider shadow-lg">
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  {!tier.highlight && (
                    <span className="text-[10px] font-mono text-purple-400 px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white">{tier.price}</span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-6 border-b border-slate-800/60 pb-6">
                  {tier.desc}
                </p>

                <div className="space-y-3 mb-8">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block mb-2">Included Deliverables</span>
                  {tier.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a href="#book-consultation">
                <Button
                  variant={tier.highlight ? "primary" : "outline"}
                  size="md"
                  className="w-full gap-2"
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}