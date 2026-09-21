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
      {/* Ambient Pulsing Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none"
      />

      <Container className="relative z-10 text-center">
        {/* Subtitle Badge */}
        <FadeIn direction="down" delay={0.1}>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(0,240,255,0.1)]">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Intelligent Systems Studio</span>
          </div>
        </FadeIn>

        {/* Core Headline */}
        <FadeIn direction="up" delay={0.2} preset="blur">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-[1.1] mb-6">
            Turn Repetitive Work Into{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              Intelligent Systems.
            </span>
          </h1>
        </FadeIn>

        {/* Supporting Copy */}
        <FadeIn direction="up" delay={0.3}>
          <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            {siteConfig.description} We engineer custom workflows, AI agents, and API integrations that eliminate manual drag and let your operations scale cleanly.
          </p>
        </FadeIn>

        {/* Primary CTAs */}
        <FadeIn direction="up" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2">
                {siteConfig.cta.primary}
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="#work" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {siteConfig.cta.secondary}
              </Button>
            </a>
          </div>
        </FadeIn>

        {/* Hero Interactive Workflow Visual */}
        <HeroVisual />
      </Container>
    </section>
  );
}