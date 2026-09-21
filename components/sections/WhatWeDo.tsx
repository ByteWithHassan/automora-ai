"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { FileText, Cpu, Network, Workflow, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const transformationSteps = [
  {
    id: "manual",
    title: "1. Manual Drag",
    icon: FileText,
    badge: "Input",
    heading: "Unstructured Manual Process",
    description: "Inquiries, forms, and documents arrive via multiple channels and sit in queues waiting for human handling.",
    visual: {
      tag: "Raw Incoming Data",
      items: ["Unread Emails", "Form Submissions", "Support Tickets", "Data Extraction Request"],
      color: "border-amber-500/30 text-amber-400 bg-amber-500/10",
    },
  },
  {
    id: "ai",
    title: "2. AI Processing",
    icon: Cpu,
    badge: "Intelligence",
    heading: "Contextual Extraction & Intent Analysis",
    description: "Custom AI models analyze incoming content, classify urgency, pull key parameters, and decide appropriate action pathways.",
    visual: {
      tag: "Neural Decision Engine",
      items: ["Intent Recognition: 99.4%", "Entity Extraction Active", "Contextual Sentiment Analysis", "Action Route Determined"],
      color: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
    },
  },
  {
    id: "tools",
    title: "3. Tool Integration",
    icon: Network,
    badge: "Connectivity",
    heading: "Orchestrated API Synchronization",
    description: "Connects your existing tech stack—CRM, databases, messaging channels, and internal databases seamlessly.",
    visual: {
      tag: "Connected Ecosystem",
      items: ["CRM Sync (HubSpot / Salesforce)", "Database Write Operation", "Slack / Teams Notification", "WhatsApp Trigger"],
      color: "border-blue-500/30 text-blue-400 bg-blue-500/10",
    },
  },
  {
    id: "workflow",
    title: "4. Automated Execution",
    icon: Workflow,
    badge: "Execution",
    heading: "Autonomous Workflow Engine",
    description: "Tasks execute instantly in parallel, validating outputs and handling exceptions with zero human intervention.",
    visual: {
      tag: "Live Pipeline Execution",
      items: ["Data Transformed & Formatted", "System Rules Applied", "Instant Customer Response", "Logs Updated in Real-Time"],
      color: "border-indigo-500/30 text-indigo-400 bg-indigo-500/10",
    },
  },
  {
    id: "result",
    title: "5. Business Outcome",
    icon: CheckCircle,
    badge: "Value Delivery",
    heading: "Scalable Operations & Zero Latency",
    description: "Response times drop from hours to seconds, error rates disappear, and team focus shifts to high-value strategy.",
    visual: {
      tag: "Verified System Metric",
      items: ["Response Time: < 3 seconds", "Human Error: Reduced to 0%", "24/7 Continuous Operation", "Capacity: Infinite Parallel Runs"],
      color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    },
  },
];

export function WhatWeDo() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="what-we-do" className="py-24 bg-[#080a0f] border-t border-slate-800/60 relative">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="down" delay={0.1}>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 inline-block mb-4">
              System Architecture
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} preset="blur">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              We Build Systems That Work{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                While You Don&apos;t.
              </span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p className="text-slate-400 text-base sm:text-lg">
              Automora AI identifies repetitive business bottlenecks and constructs custom end-to-end autonomous pipelines.
            </p>
          </FadeIn>
        </div>

        {/* Step Selector Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {transformationSteps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <motion.button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 border cursor-pointer",
                  isActive
                    ? "bg-slate-800 text-cyan-400 border-cyan-500/50 shadow-[0_0_20px_rgba(0,240,255,0.15)]"
                    : "bg-slate-900/50 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800/40"
                )}
              >
                <Icon className={cn("w-4 h-4", isActive ? "text-cyan-400" : "text-slate-500")} />
                <span>{step.title}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Display Card for Active Step */}
        <FadeIn direction="up" delay={0.2}>
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                {/* Left Column: Explanation */}
                <div>
                  <span className={cn("inline-block text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-md border mb-4", transformationSteps[activeStep].visual.color)}>
                    {transformationSteps[activeStep].badge}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {transformationSteps[activeStep].heading}
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                    {transformationSteps[activeStep].description}
                  </p>
                  <div className="text-xs text-slate-500 font-mono">
                    Phase {activeStep + 1} of 5 — Interactive Transformation Model
                  </div>
                </div>

                {/* Right Column: Live Simulated Visual Output */}
                <div className="p-6 rounded-xl bg-slate-950 border border-slate-800/90 shadow-inner">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                    <span className="text-xs font-mono text-slate-400">STATUS: ACTIVE</span>
                    <span className={cn("text-xs font-mono px-2 py-0.5 rounded border", transformationSteps[activeStep].visual.color)}>
                      {transformationSteps[activeStep].visual.tag}
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {transformationSteps[activeStep].visual.items.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.3 }}
                        className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/50 text-xs text-slate-300 font-mono"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        <span>{item}</span>
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