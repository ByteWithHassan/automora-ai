"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Mail, Users, MessageCircle, Bot, Layers, Calendar, HelpCircle, Workflow, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Gmail & Email Automation",
    href: "/services/gmail-automation",
    icon: Mail,
    desc: "Automate inbox triage, intelligent replies, data extraction, and CRM updates directly from incoming emails.",
  },
  {
    title: "Lead Generation & Follow-Up",
    href: "/services/lead-generation",
    icon: Users,
    desc: "Capture website leads, enrich prospect data, score readiness, and trigger immediate follow-up sequences.",
  },
  {
    title: "WhatsApp Business Automation",
    href: "/services/whatsapp-automation",
    icon: MessageCircle,
    desc: "Build official WhatsApp chatbots for instant lead qualification, order updates, and customer support.",
  },
  {
    title: "AI Voice Agents",
    href: "/services/ai-voice-agents",
    icon: Bot,
    desc: "Deploy natural inbound and outbound AI calling agents for appointment scheduling and phone support.",
  },
  {
    title: "CRM & Sales Automation",
    href: "/services/crm-sales-automation",
    icon: Layers,
    desc: "Synchronize deal stages, automatically assign sales reps, and log activity seamlessly across your CRM.",
  },
  {
    title: "Appointment & Booking",
    href: "/services/appointment-booking",
    icon: Calendar,
    desc: "Automate calendar availability checks, instant client bookings, multi-channel reminders, and reschedules.",
  },
  {
    title: "AI Customer Support Agents",
    href: "/services/ai-customer-support",
    icon: HelpCircle,
    desc: "24/7 autonomous support bots that answer inquiries using your knowledge base and escalate edge cases.",
  },
  {
    title: "Business Workflow Automation",
    href: "/services/business-workflow-automation",
    icon: Workflow,
    desc: "Custom end-to-end multi-app pipelines engineered to eliminate manual drag across your entire tech stack.",
  },
];

export function ServicesOverview() {
  return (
    <section id="services" className="py-24 bg-[#030712] border-t border-slate-800/60 relative">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="down" delay={0.1}>
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 inline-block mb-4">
              Core Capabilities
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} preset="blur">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Engineered Automation Services for{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Modern Growth.
              </span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p className="text-slate-300 text-base sm:text-lg">
              Explore our eight specialized automation service modules designed to eliminate manual tasks and scale operations.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group backdrop-blur-xl shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 mb-5 group-hover:bg-purple-950/40 group-hover:border-purple-500/40 group-hover:text-purple-300 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-cyan-300 transition-colors pt-4 border-t border-slate-800/60"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}