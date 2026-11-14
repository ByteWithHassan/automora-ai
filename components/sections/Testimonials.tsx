"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Automora Flow built our entire WhatsApp inquiry routing system. Customer queries that used to sit in a queue for hours are now answered in seconds.",
    author: "Operations Director",
    company: "Regional Logistics Network",
  },
  {
    quote: "Our sales team no longer spends hours entering lead data. Every website lead is qualified and synced into CRM before a rep even opens their laptop.",
    author: "Head of Growth",
    company: "B2B Software Studio",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[#030712] border-t border-slate-800/60 relative">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="down" delay={0.1}>
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 inline-block mb-4">
              Client Feedback
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} preset="blur">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Trusted by Operational{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Leaders.
              </span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-xl flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-purple-400/40 mb-4" />
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/60">
                <h4 className="text-sm font-bold text-white">{t.author}</h4>
                <p className="text-xs text-purple-400 font-mono">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}