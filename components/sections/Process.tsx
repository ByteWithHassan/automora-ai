"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Search, Compass, Code2, Rocket, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const processSteps = [
  {
    step: "01",
    title: "Discover",
    icon: Search,
    tagline: "Audit & Bottleneck Mapping",
    description: "We analyze your business workflows, pinpoint repetitive manual tasks, and identify key ROI opportunities for automation.",
    deliverables: ["Workflow audit report", "ROI & time-savings forecast", "Tool & API feasibility assessment"],
  },
  {
    step: "02",
    title: "Design",
    icon: Compass,
    tagline: "System Architecture Blueprint",
    description: "We map out the data structures, AI prompts, fallback routes, and integration logic to ensure seamless operational flow.",
    deliverables: ["Data flow diagrams", "AI logic & prompt templates", "Security & access protocol design"],
  },
  {
    step: "03",
    title: "Build",
    icon: Code2,
    tagline: "Integration & Development",
    description: "We engineer custom pipelines, connect system APIs, deploy AI models, and write robust error-handling scripts.",
    deliverables: ["API webhooks & integrations", "Custom AI agent configuration", "Rigorous sandbox testing"],
  },
  {
    step: "04",
    title: "Automate",
    icon: Rocket,
    tagline: "Deployment & Continuous Monitoring",
    description: "We push the system live, conduct real-world validation, provide team handoff training, and set up automated error monitoring.",
    deliverables: ["Production system release", "Live performance dashboard", "Ongoing optimization & updates"],
  },
];

export function Process() {
  const [activeProcess, setActiveProcess] = useState(0);

  return (
    <section id="process" className="py-24 bg-[#080a0f] border-t border-slate-800/60 relative">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="down" delay={0.1}>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 inline-block mb-4">
              Methodology
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} preset="blur">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              How We Build Your{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Automated Future.
              </span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p className="text-slate-400 text-base sm:text-lg">
              A structured, 4-stage engineering journey from initial bottleneck audit to autonomous live operation.
            </p>
          </FadeIn>
        </div>

        {/* Process Progression Tracker */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {processSteps.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeProcess === idx;
            return (
              <motion.button
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => setActiveProcess(idx)}
                whileHover={{ y: -4, scale: 1.02 }}
                className={cn(
                  "p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group cursor-pointer",
                  isActive
                    ? "bg-slate-800/90 border-cyan-500/50 shadow-[0_0_25px_rgba(0,240,255,0.15)]"
                    : "bg-slate-900/40 border-slate-800/80 text-slate-400 hover:bg-slate-800/40 hover:border-slate-700"
                )}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={cn("font-mono text-2xl font-black", isActive ? "text-cyan-400" : "text-slate-600")}>
                    {item.step}
                  </span>
                  <div className={cn("p-2 rounded-lg border", isActive ? "bg-cyan-400/20 border-cyan-500/40 text-cyan-400" : "bg-slate-950 border-slate-800 text-slate-500")}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className={cn("text-base font-bold mb-1", isActive ? "text-white" : "text-slate-300")}>
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-1">{item.tagline}</p>
              </motion.button>
            );
          })}
        </div>

        {/* Active Stage Detailed Display Panel */}
        <FadeIn direction="up" delay={0.2}>
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl shadow-2xl relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProcess}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-4xl font-extrabold text-cyan-400">
                    {processSteps[activeProcess].step}
                  </span>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block">
                      {processSteps[activeProcess].tagline}
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      Stage {processSteps[activeProcess].step}: {processSteps[activeProcess].title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  {processSteps[activeProcess].description}
                </p>

                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                  <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-3">
                    Key Deliverables & Outcomes
                  </h4>
                  <div className="space-y-2">
                    {processSteps[activeProcess].deliverables.map((del, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.3 }}
                        className="flex items-center gap-3 text-xs sm:text-sm text-slate-300"
                      >
                        <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{del}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}