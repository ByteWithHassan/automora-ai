"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Work", href: "#work" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b", isScrolled ? "bg-[#080a0f]/90 backdrop-blur-md border-slate-800/80 py-3 shadow-lg shadow-black/50" : "bg-transparent border-transparent py-4 sm:py-5")}
    >
      <Container className="flex items-center justify-between">
        <Link href="#hero" className="flex items-center gap-2 group" aria-label="Automora AI home">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-slate-950 text-sm shadow-[0_0_15px_rgba(0,240,255,0.3)]">A</div>
          <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">{siteConfig.name}</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1 bg-slate-900/40 border border-slate-800/60 rounded-full px-4 py-1.5 backdrop-blur-sm">
          {navLinks.map((link) => <a key={link.name} href={link.href} className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors rounded-full hover:bg-slate-800/40">{link.name}</a>)}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact"><Button variant="primary" size="sm" className="gap-1.5">Book a Consultation <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" /></Button></a>
        </div>

        <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400" aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={mobileMenuOpen}>
          {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </Container>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "calc(100dvh - 57px)" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="md:hidden fixed inset-x-0 top-[57px] bg-[#0e121a]/98 backdrop-blur-2xl border-b border-slate-800 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
              {navLinks.map((link) => <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-200 hover:text-cyan-400 py-3 transition-colors border-b border-slate-800/50 flex items-center justify-between"><span>{link.name}</span><ArrowUpRight className="w-4 h-4 text-slate-600" aria-hidden="true" /></a>)}
            </nav>
            <div className="pt-6 pb-8"><a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block w-full"><Button variant="primary" size="lg" className="w-full gap-2 py-4">Book a Free Consultation <ArrowUpRight className="w-5 h-5" aria-hidden="true" /></Button></a></div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
