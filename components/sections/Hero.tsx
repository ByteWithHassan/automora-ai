"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/ui/HeroVisual";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none"
      />

      <Container className="relative z-10 text-center">
        <FadeIn direction="down" delay={0.1}>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-6 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" aria-hidden="true" />
            <span>AI automation for growing teams</span>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2} preset="blur">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-[1.1] mb-6">
            Make your business easier to run with
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              practical automation.
            </span>
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            We help service businesses connect their tools, respond to customers, and move information through the right workflow—so their team can focus on work that needs a human.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="#contact" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2">
                {siteConfig.cta.primary}
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </a>
            <a href="#services" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {siteConfig.cta.secondary}
              </Button>
            </a>
          </div>
        </FadeIn>

        <HeroVisual />
      </Container>
    </section>
  );
}
