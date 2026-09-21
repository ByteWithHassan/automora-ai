"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Cpu, ShieldCheck, Terminal, Layers } from "lucide-react";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";

const principles = [
  {
    icon: Terminal,
    title: "Practical Engineering First",
    description: "We don't build useless gimmicks. Every automation pipeline is built around clear ROI and measurable time savings.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Operational Complexity",
    description: "Automation should remove friction, not add complexity. Our systems run quietly in the background without overwhelming your team.",
  },
  {
    icon: Layers,
    title: "Seamless Tool Integration",
    description: "We connect directly into your existing software stack, eliminating manual data copying while preserving your current tools.",
  },
  {
    icon: Cpu,
    title: "Robust AI Guardrails",
    description: "We implement strict prompt boundaries, validation checks, and human fallback routes so your systems remain 100% reliable.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-[#080a0f] border-t border-slate-800/60 relative">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="down" delay={0.1}>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 inline-block mb-4">
              About Automora AI
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} preset="blur">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              An AI Automation Studio Focused on{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Practical Systems.
              </span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p className="text-slate-400 text-base sm:text-lg">
              {siteConfig.name} is a modern technology studio dedicated to transforming complex, manual business workflows into automated digital infrastructure.
            </p>
          </FadeIn>
        </div>

        {/* Philosophy Callout Banner */}
        <FadeIn direction="up" delay={0.2} preset="scale">
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-slate-900/60 to-blue-950/30 border border-cyan-500/30 text-center mb-16 backdrop-blur-xl shadow-2xl relative">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">Our Operating Philosophy</span>
            <blockquote className="text-xl sm:text-2xl font-semibold text-white italic">
              &ldquo;Automation should remove friction, not add complexity.&rdquo;
            </blockquote>
          </div>
        </FadeIn>

        {/* Engineering Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -3 }}
                className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}