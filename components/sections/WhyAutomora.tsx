"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Clock, ShieldAlert, Zap, Network, Scaling, Brain } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Clock,
    title: "Reclaim Operational Hours",
    description: "Eliminate repetitive tasks that consume your team's day, freeing them to focus on revenue-generating strategy and creative problem solving.",
  },
  {
    icon: ShieldAlert,
    title: "Zero Human Error Rate",
    description: "Automated systems execute strict logic rules consistently—eliminating copy-paste slip-ups, missed leads, and data entry mistakes.",
  },
  {
    icon: Zap,
    title: "Instant Response Times",
    description: "Reduce customer and lead response latencies from hours to sub-seconds across WhatsApp, email, forms, and live chat.",
  },
  {
    icon: Network,
    title: "Unified Software Ecosystem",
    description: "Break down data silos by connecting isolated CRMs, databases, communication tools, and internal spreadsheets into a single fluid pipeline.",
  },
  {
    icon: Scaling,
    title: "Seamless Volume Scaling",
    description: "Handle 10x workload spikes during high-growth periods without forcing rapid hiring or expanding administrative overhead.",
  },
  {
    icon: Brain,
    title: "Intelligent Exception Handling",
    description: "Systems process standard workflows automatically while intelligently flagging edge cases for immediate human review.",
  },
];

export function WhyAutomora() {
  return (
    <section id="why-automora" className="py-24 bg-[#080a0f] border-t border-slate-800/60 relative">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="down" delay={0.1}>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 inline-block mb-4">
              Value Proposition
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} preset="blur">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Less Manual Work.{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                More Intelligent Operations.
              </span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p className="text-slate-400 text-base sm:text-lg">
              Why forward-thinking businesses choose engineered automation over manual workforce scaling.
            </p>
          </FadeIn>
        </div>

        {/* Benefits Grid with Staggered Entrance and Micro-Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/40 transition-colors duration-300 group backdrop-blur-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 mb-5 group-hover:bg-cyan-950/30 group-hover:border-cyan-500/40 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}