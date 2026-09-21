"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  Workflow,
  MessageSquare,
  MessageCircle,
  Users,
  FileSearch,
  Bot,
  Layers,
  Building2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";

const servicesList = [
  {
    id: "workflow",
    title: "AI Workflow Automation",
    icon: Workflow,
    summary: "Automate complex, multi-step business processes using tailored AI and smart routing logic.",
    details: [
      "Custom trigger & action rules across platforms",
      "AI exception handling & fallback routes",
      "Zero-code / custom code hybrid orchestration",
      "Real-time processing logs & analytics",
    ],
    diagram: {
      from: "Trigger Event",
      process: "AI Model + Logic",
      to: "Multi-App Output",
    },
  },
  {
    id: "customer-comm",
    title: "Customer Communication",
    icon: MessageSquare,
    summary: "Intelligent automated responses across email, chat, and tickets with full contextual memory.",
    details: [
      "24/7 automated inquiry triage",
      "Sentiment & priority detection",
      "Seamless human escalation triggers",
      "Unified omni-channel support sync",
    ],
    diagram: {
      from: "Inbound Inquiry",
      process: "Intent & Sentiment AI",
      to: "Resolution / Escalation",
    },
  },
  {
    id: "whatsapp",
    title: "WhatsApp Automation",
    icon: MessageCircle,
    summary: "Build intelligent WhatsApp workflows for instant lead qualification, bookings, and operations.",
    details: [
      "Official WhatsApp Business API integration",
      "Interactive button & menu conversational flows",
      "Automated document & invoice dispatch",
      "Real-time CRM contact updating",
    ],
    diagram: {
      from: "WhatsApp Chat",
      process: "Conversational Agent",
      to: "CRM & Instant Reply",
    },
  },
  {
    id: "leads",
    title: "Lead Management",
    icon: Users,
    summary: "Capture, qualify, organize, and follow up with incoming leads automatically.",
    details: [
      "Instant lead enrichment from public data",
      "Automated scoring based on business criteria",
      "Intelligent rep assignment & notifications",
      "Multi-touch automated nurturing sequences",
    ],
    diagram: {
      from: "Form / Ad Click",
      process: "Lead Scoring AI",
      to: "Assigned CRM Deal",
    },
  },
  {
    id: "docs",
    title: "Data & Document Automation",
    icon: FileSearch,
    summary: "Extract, transform, structure, and route information from PDFs, invoices, and forms.",
    details: [
      "OCR + LLM data extraction from unstructured files",
      "Automated validation against system records",
      "Direct ERP/accounting database injection",
      "Error detection & anomaly alerts",
    ],
    diagram: {
      from: "Raw PDF / Invoice",
      process: "OCR & LLM Parser",
      to: "Structured DB Record",
    },
  },
  {
    id: "agents",
    title: "Custom AI Agents",
    icon: Bot,
    summary: "Autonomous AI agents designed to execute domain-specific business operations.",
    details: [
      "RAG architecture with custom business knowledge",
      "Strict security boundaries & tool permissions",
      "Multi-agent collaborative task processing",
      "Continuous feedback loop refinement",
    ],
    diagram: {
      from: "Goal / Prompt",
      process: "Autonomous Agent Execution",
      to: "Completed Task",
    },
  },
  {
    id: "integrations",
    title: "API & App Integration",
    icon: Layers,
    summary: "Bridge isolated software systems into a synchronized, single source of operational truth.",
    details: [
      "Custom REST & GraphQL API webhooks",
      "Legacy system data synchronization",
      "High-throughput queue management",
      "Automated rate-limit & error handling",
    ],
    diagram: {
      from: "Source API A",
      process: "Middleware Transformation",
      to: "Destination API B",
    },
  },
  {
    id: "internal",
    title: "Internal Business Automation",
    icon: Building2,
    summary: "Eliminate internal admin tasks, reporting overhead, and manual employee check-ins.",
    details: [
      "Automated weekly status reporting generation",
      "Employee onboarding & access provisioning",
      "Expense tracking & compliance verification",
      "Cross-department notification feeds",
    ],
    diagram: {
      from: "Admin Event",
      process: "Rule Engine & AI",
      to: "Internal Sync & Report",
    },
  },
];

export function Services() {
  const [selectedService, setSelectedService] = useState(0);
  const activeService = servicesList[selectedService];
  const Icon = activeService.icon;

  return (
    <section id="services" className="py-24 bg-[#080a0f] border-t border-slate-800/60 relative">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="down" delay={0.1}>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 inline-block mb-4">
              Capabilities
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} preset="blur">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Custom Automation Solutions for{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Modern Operations.
              </span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p className="text-slate-400 text-base sm:text-lg">
              Explore our specialized business automation offerings built with resilient integrations and targeted AI logic.
            </p>
          </FadeIn>
        </div>

        {/* Services Navigation Grid & Interactive Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: List of 8 Services */}
          <div className="lg:col-span-5 space-y-2">
            {servicesList.map((service, index) => {
              const ServiceIcon = service.icon;
              const isSelected = selectedService === index;
              return (
                <motion.button
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedService(index)}
                  whileHover={{ x: 4 }}
                  className={cn(
                    "w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 group cursor-pointer",
                    isSelected
                      ? "bg-slate-800/80 border-cyan-500/50 shadow-[0_0_20px_rgba(0,240,255,0.15)] text-white"
                      : "bg-slate-900/30 border-slate-800/60 text-slate-400 hover:bg-slate-800/40 hover:text-slate-200"
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border transition-colors",
                      isSelected
                        ? "bg-cyan-400/20 border-cyan-500/40 text-cyan-400"
                        : "bg-slate-950 border-slate-800 text-slate-500 group-hover:text-slate-300"
                    )}
                  >
                    <ServiceIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold truncate">{service.title}</h3>
                  </div>
                  <ArrowRight
                    className={cn(
                      "w-4 h-4 transition-transform duration-300 shrink-0",
                      isSelected ? "text-cyan-400 translate-x-1" : "text-slate-600 group-hover:translate-x-0.5"
                    )}
                  />
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Active Service Details Panel */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl shadow-2xl relative sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                      Service Module 0{selectedService + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{activeService.title}</h3>
                  </div>
                </div>

                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  {activeService.summary}
                </p>

               {/* Architecture Flow Visual */}
<div className="p-4 rounded-xl bg-slate-950 border border-slate-800 mb-6">
  <span className="text-xs font-mono text-slate-500 uppercase block mb-3">
    System Data Flow Architecture
  </span>
  <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono">
    <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-300 text-center w-full sm:flex-1">
      {activeService.diagram.from}
    </div>
    <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0 animate-pulse rotate-90 sm:rotate-0 my-0.5 sm:my-0" />
    <div className="p-2.5 rounded bg-cyan-950/40 border border-cyan-500/40 text-cyan-400 font-semibold text-center w-full sm:flex-1">
      {activeService.diagram.process}
    </div>
    <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0 animate-pulse rotate-90 sm:rotate-0 my-0.5 sm:my-0" />
    <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-300 text-center w-full sm:flex-1">
      {activeService.diagram.to}
    </div>
  </div>
</div>

                {/* Key Capabilities Bullet Grid */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Key Technical Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct CTA */}
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-lg bg-cyan-400 text-slate-950 font-semibold text-sm hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                >
                  <span>Automate {activeService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}