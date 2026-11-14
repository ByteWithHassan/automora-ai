"use client";

import React from "react";
import { Cpu, Zap, GitPullRequest, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  const nodes = [
    { title: "Manual Input", icon: GitPullRequest, desc: "Triggers & Raw Data", accent: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 text-cyan-400" },
    { title: "AI Intelligence", icon: Cpu, desc: "Neural Logic Engine", accent: "from-purple-500/20 to-purple-500/5 border-purple-500/30 text-purple-400" },
    { title: "Connected Flow", icon: Zap, desc: "API Orchestration", accent: "from-blue-500/20 to-blue-500/5 border-blue-500/30 text-blue-400" },
    { title: "Automated Result", icon: CheckCircle2, desc: "Autonomous Execution", accent: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 text-emerald-400" },
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-8 sm:mt-12 lg:mt-16 p-4 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md shadow-2xl overflow-hidden transform-gpu">
      {/* Optimized Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-gradient-to-tr from-cyan-500/15 via-purple-500/15 to-indigo-500/15 blur-[80px] sm:blur-[110px] rounded-full pointer-events-none transform-gpu" />

      {/* Grid of Interactive Flow Nodes */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {nodes.map((node, idx) => {
          const Icon = node.icon;
          return (
            <motion.div
              key={node.title}
              initial={shouldReduceMotion ? { opacity: 1 } : { y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.01 }}
              className="relative flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-purple-500/40 transition-colors duration-200 group shadow-lg will-change-transform"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${node.accent} border flex items-center justify-center mb-2.5 sm:mb-3 transition-transform duration-200 group-hover:scale-105 shadow-md`}>
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest mb-1">
                Phase 0{idx + 1}
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">{node.title}</h4>
              <p className="text-[11px] sm:text-xs text-slate-400">{node.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}