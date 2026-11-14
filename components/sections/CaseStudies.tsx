"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { CheckCircle2, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const caseStudies = [
  {
    client: "E-Commerce Logistics Hub",
    challenge: "Managing 300+ daily WhatsApp shipment inquiries manually caused customer response delays of over 4 hours.",
    solution: "Built an official WhatsApp Business API workflow integrated with PostgreSQL order tracking.",
    results: ["Sub-3-second response latency", "Zero manual tracking lookups", "24/7 autonomous support"],
  },
  {
    client: "B2B SaaS Sales Team",
    challenge: "Inbound leads sat in web forms for hours before sales reps manually copied details into HubSpot.",
    solution: "Engineered real-time lead qualification, instant domain enrichment, and direct Slack rep notifications.",
    results: ["100% instant lead qualification", "Immediate rep alerting", "Zero dropped leads"],
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-[#030712] border-t border-slate-800/60 relative">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="down" delay={0.1}>
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 inline-block mb-4">
              Proven Architecture
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} preset="blur">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Real Workflows.{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Measurable Impact.
              </span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p className="text-slate-300 text-base sm:text-lg">
              Examine how custom automation pipelines resolve real operational bottlenecks.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {caseStudies.map((cs, idx) => (
            <motion.div
              key={cs.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider mb-4">
                  <Workflow className="w-4 h-4 text-cyan-400" />
                  <span>Verified System Architecture</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{cs.client}</h3>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed"><strong className="text-slate-200">Challenge:</strong> {cs.challenge}</p>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed"><strong className="text-purple-300">Solution:</strong> {cs.solution}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 space-y-2">
                <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">Measured Outcomes</span>
                {cs.results.map((r, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-200 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}