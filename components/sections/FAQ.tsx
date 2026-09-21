"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What types of business processes can Automora AI automate?",
    answer:
      "We build custom systems for customer communication triage, official WhatsApp API flows, lead intake & CRM synchronization, document/invoice data extraction, and internal API workflow orchestration.",
  },
  {
    question: "How do you integrate with our existing software stack?",
    answer:
      "We engineer custom webhooks, REST/GraphQL API connections, and automated database syncs that connect directly into your current CRM, ERP, spreadsheets, and messaging platforms without forcing you to switch tools.",
  },
  {
    question: "How do you ensure AI outputs stay reliable and accurate?",
    answer:
      "Every pipeline is built with strict validation logic, structured prompt boundaries, and human fallback routes. If an edge case or low-confidence input occurs, the system automatically flags it for team review instead of guessing.",
  },
  {
    question: "Will our team need technical expertise to run these automations?",
    answer:
      "No. Our core operating philosophy is that automation should remove friction, not add complexity. Your systems run autonomously in the background, and we provide full operational handoff and documentation.",
  },
  {
    question: "How do we get started with an automation project?",
    answer:
      "Reach out via our direct WhatsApp consultation or fill out our inquiry form with details on your manual process bottlenecks. We will evaluate feasibility and outline a practical architecture strategy for your workflow.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#080a0f] border-t border-slate-800/60 relative">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="down" delay={0.1}>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 inline-block mb-4">
              Clear Answers
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} preset="blur">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Questions.
              </span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p className="text-slate-400 text-base sm:text-lg">
              Everything you need to know about our custom engineering approach and technical integrations.
            </p>
          </FadeIn>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={cn(
                  "rounded-xl border transition-colors duration-300 overflow-hidden backdrop-blur-xl",
                  isOpen
                    ? "bg-slate-900/60 border-cyan-500/40 shadow-[0_0_20px_rgba(0,240,255,0.1)]"
                    : "bg-slate-900/30 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 transition-transform duration-300",
                      isOpen
                        ? "bg-cyan-400/20 border-cyan-500/40 text-cyan-400 rotate-180"
                        : "bg-slate-950 border-slate-800 text-slate-400"
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/40 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}