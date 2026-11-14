"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/ui/HeroVisual";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 flex flex-col justify-center overflow-hidden">
      {/* GPU-Accelerated Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-cyan-500/10 blur-[110px] sm:blur-[140px] rounded-full pointer-events-none transform-gpu" />
      <div className="absolute top-1/3 right-1/3 translate-x-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-purple-500/15 blur-[120px] sm:blur-[150px] rounded-full pointer-events-none transform-gpu" />

      <Container className="relative z-10 text-center">
        {/* Subtitle Badge */}
        <FadeIn direction="down" delay={0.05}>
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-purple-300 px-3.5 sm:px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>{siteConfig.name} — Intelligent Automation Agency</span>
          </div>
        </FadeIn>

        {/* Main Headline */}
        <FadeIn direction="up" delay={0.1}>
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-5xl mx-auto leading-[1.12] mb-6">
            Turn Your Business Into an{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Automated Growth Machine.
            </span>
          </h1>
        </FadeIn>

        {/* Supporting Description */}
        <FadeIn direction="up" delay={0.15}>
          <p className="text-sm sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal px-2 sm:px-0">
            We build intelligent AI agents and business automation systems that handle repetitive work, capture opportunities, and help businesses grow around the clock.
          </p>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn direction="up" delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-10 sm:mb-12 px-4 sm:px-0">
            <a href="#services" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2">
                {siteConfig.cta.primary}
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </a>
            <Link href="/#book-consultation" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {siteConfig.cta.secondary}
              </Button>
            </Link>
          </div>
        </FadeIn>

        {/* Hero Interactive Visual */}
        <HeroVisual />
      </Container>
    </section>
  );
}