"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { MessageSquare, FileText, Calendar, Mail, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";

const concepts = [
  {
    id: "whatsapp-support",
    title: "WhatsApp Customer Support & Escalation",
    category: "Communication",
    icon: MessageSquare,
    description: "Automated triage of customer inquiries via official WhatsApp API. Resolves standard questions instantly using business documentation and routes edge cases to human agents with full context.",
    pipeline: [
      { step: "Trigger", desc: "Inbound WhatsApp Message" },
      { step: "AI Analysis", desc: "Intent & Sentiment Classification" },
      { step: "Knowledge Lookup", desc: "Vector DB Query" },
      { step: "Action", desc: "Instant Reply or Human Escalation" },
    ],
  },
  {
    id: "invoice-processing",
    title: "Automated Invoice & Document Extraction",
    category: "Data Extraction",
    icon: FileText,
    description: "Monitors incoming emails for vendor invoices, extracts line items using OCR + LLMs, validates totals against ERP purchase orders, and pushes structured entries into accounting software.",
    pipeline: [
      { step: "Trigger", desc: "Email Attachment (PDF/Image)" },
      { step: "OCR Parser", desc: "Text & Field Extraction" },
      { step: "Validation", desc: "Match PO & Verify Calculations" },
      { step: "Execution", desc: "Push to QuickBooks / Xero" },
    ],
  },
  {
    id: "lead-qualification",
    title: "Instant Lead Qualification & CRM Sync",
    category: "Lead Handling",
    icon: Mail,
    description: "Captures form submissions, enriches prospect data automatically using public domain lookups, scores lead readiness, and routes top-tier leads to sales reps within seconds.",
    pipeline: [
      { step: "Trigger", desc: "Website Form Submission" },
      { step: "Enrichment", desc: "Company Data & Tech Stack Lookup" },
      { step: "Scoring", desc: "ICP Match Algorithm" },
      { step: "Delivery", desc: "CRM Entry + Slack Alert to Rep" },
    ],
  },
  {
    id: "appointment-booking",
    title: "Intelligent Appointment Scheduling Flow",
    category: "Operations",
    icon: Calendar,
    description: "Conversational scheduling bot that handles client time preferences, verifies staff calendar availability, collects pre-meeting requirements, and sends multi-channel reminders.",
    pipeline: [
      { step: "Trigger", desc: "Client Booking Request" },
      { step: "Conflict Check", desc: "Google Calendar / Outlook Sync" },
      { step: "Confirmation", desc: "Calendar Invite + SMS Reminder" },
      { step: "Follow-up", desc: "Pre-meeting Data Intake Form" },
    ],
  },
];

export function WorkExamples() {
  const [activeConcept, setActiveConcept] = useState(0);
  const current = concepts[activeConcept];

  return (
    <section id="work" className="py-24 bg-[#080a0f] border-t border-slate-800/60 relative">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="down" delay={0.1}>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 inline-block mb-4">
              Proof of Capability
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} preset="blur">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              What We Can{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Automate.
              </span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p className="text-slate-400 text-base sm:text-lg">
              Real-world automation architecture blueprints designed to eliminate daily operational drag.
            </p>
          </FadeIn>
        </div>

        {/* Concept Switcher */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {concepts.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeConcept === idx;
            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => setActiveConcept(idx)}
                whileHover={{ y: -4, scale: 1.02 }}
                className={cn(
                  "p-5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between group cursor-pointer",
                  isActive
                    ? "bg-slate-800/90 border-cyan-500/50 shadow-[0_0_20px_rgba(0,240,255,0.15)] text-white"
                    : "bg-slate-900/40 border-slate-800 text-slate-400 hover:bg-slate-800/40 hover:text-slate-200"
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={cn("p-2 rounded-lg border", isActive ? "bg-cyan-400/20 border-cyan-500/40 text-cyan-400" : "bg-slate-950 border-slate-800 text-slate-500")}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                      Concept
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                </div>
                <span className="text-xs text-cyan-400/80 font-mono mt-4 block">{item.category}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Detailed Workflow Blueprint Display */}
        <FadeIn direction="up" delay={0.2}>
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl shadow-2xl relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeConcept}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase px-3 py-1 rounded bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    Automation Concept Blueprint
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Category: {current.category}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{current.title}</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">{current.description}</p>

                {/* Workflow Pipeline Diagram */}
                <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 mb-8">
                  <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-4">Workflow Execution Sequence</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative">
                    {current.pipeline.map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.3 }}
                        className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-xs flex flex-col justify-between"
                      >
                        <span className="text-[10px] font-mono text-cyan-400 uppercase mb-1">Step 0{i + 1} • {step.step}</span>
                        <span className="font-medium text-slate-200">{step.desc}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noreferrer" className="block w-full">
                  <div className="w-full py-3 px-5 rounded-lg bg-cyan-400 text-slate-950 font-semibold text-sm hover:bg-cyan-300 transition-colors text-center flex items-center justify-center gap-2">
                    <span>Request a Custom Build Like This</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}