"use client";

import React from "react";
import { Cpu, Zap, GitPullRequest, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function HeroVisual() {
  const nodes = [
    { title: "Manual Input", icon: GitPullRequest, desc: "Triggers & Data", status: "input" },
    { title: "AI Intelligence", icon: Cpu, desc: "Neural Logic Engine", status: "active" },
    { title: "Connected Flow", icon: Zap, desc: "API Integrations", status: "active" },
    { title: "Automated Result", icon: CheckCircle2, desc: "Instant Execution", status: "output" },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-12 lg:mt-16 p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Dynamic Animated Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"
      />

      {/* Grid Layout of Interactive Workflow Nodes */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {nodes.map((node, idx) => {
          const Icon = node.icon;
          return (
            <motion.div
              key={node.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative flex flex-col items-center text-center p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors duration-300 group shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-700/60 flex items-center justify-center mb-3 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-950/30 transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-cyan-400/80 uppercase tracking-wider mb-1">
                0{idx + 1} Step
              </span>
              <h4 className="text-sm font-semibold text-white mb-1">{node.title}</h4>
              <p className="text-xs text-slate-400">{node.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}