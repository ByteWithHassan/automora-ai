"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ChevronDown, Workflow, Mail, MessageCircle, Bot, Users, Calendar, HelpCircle, Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const serviceDropdownItems = [
  { name: "Gmail & Email Automation", href: "/services/gmail-automation", icon: Mail, desc: "Smart inbox triage & sequences" },
  { name: "Lead Generation & Follow-Up", href: "/services/lead-generation", icon: Users, desc: "Instant qualification & CRM sync" },
  { name: "WhatsApp Business Automation", href: "/services/whatsapp-automation", icon: MessageCircle, desc: "Automated chat & notifications" },
  { name: "AI Voice Agents", href: "/services/ai-voice-agents", icon: Bot, desc: "Inbound & outbound voice bots" },
  { name: "CRM & Sales Automation", href: "/services/crm-sales-automation", icon: Layers, desc: "Pipeline & record auto-updates" },
  { name: "Appointment & Booking", href: "/services/appointment-booking", icon: Calendar, desc: "Calendar sync & reminders" },
  { name: "AI Customer Support Agents", href: "/services/ai-customer-support", icon: HelpCircle, desc: "24/7 autonomous support bots" },
  { name: "Business Workflow Automation", href: "/services/business-workflow-automation", icon: Workflow, desc: "Custom end-to-end pipelines" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b will-change-transform",
        isScrolled
          ? "bg-[#030712]/90 backdrop-blur-md border-slate-800/80 py-3 shadow-xl shadow-black/60"
          : "bg-transparent border-transparent py-4 sm:py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-purple-600 flex items-center justify-center font-bold text-slate-950 text-base shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-transform duration-300 group-hover:scale-105">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              {siteConfig.name}
            </span>
            <span className="text-[10px] font-mono text-purple-400 tracking-wider -mt-1">
              AI AUTOMATION STUDIO
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
          <Link href="/" className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors rounded-full hover:bg-slate-800/40">
            Home
          </Link>

          {/* Services Dropdown Trigger */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              type="button"
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors rounded-full hover:bg-slate-800/40 flex items-center gap-1 cursor-pointer"
            >
              <span>Services</span>
              <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", servicesDropdownOpen && "rotate-180 text-cyan-400")} />
            </button>

            {/* Services Dropdown Panel */}
            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[540px] p-3 rounded-2xl bg-[#090d16] border border-slate-800 shadow-2xl backdrop-blur-2xl grid grid-cols-2 gap-1.5 z-50"
                >
                  {serviceDropdownItems.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="p-2.5 rounded-xl hover:bg-slate-800/60 transition-colors flex items-start gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/60 flex items-center justify-center text-cyan-400 group-hover:bg-purple-950/40 group-hover:border-purple-500/40 group-hover:text-purple-300 transition-colors shrink-0 mt-0.5">
                          <ItemIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-white group-hover:text-cyan-400 transition-colors">{item.name}</h4>
                          <p className="text-[11px] text-slate-400 line-clamp-1">{item.desc}</p>
                        </div>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/#process" className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors rounded-full hover:bg-slate-800/40">
            How It Works
          </Link>
          <Link href="/about" className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors rounded-full hover:bg-slate-800/40">
            About
          </Link>
          <Link href="/blog" className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors rounded-full hover:bg-slate-800/40">
            Blog
          </Link>
          <Link href="/#book-consultation" className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors rounded-full hover:bg-slate-800/40">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/#book-consultation">
            <Button variant="primary" size="sm" className="gap-1.5">
              Get Started
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 57px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden fixed inset-x-0 top-[57px] bg-[#070a12]/98 backdrop-blur-2xl border-b border-slate-800 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto"
          >
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white py-2 border-b border-slate-800/50"
              >
                Home
              </Link>
              <div className="py-2 border-b border-slate-800/50">
                <span className="text-xs font-mono uppercase text-purple-400 tracking-wider block mb-2">Services</span>
                <div className="grid grid-cols-1 gap-2 pl-2">
                  {serviceDropdownItems.map((s) => (
                    <Link
                      key={s.name}
                      href={s.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs text-slate-300 hover:text-cyan-400 py-1"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/#process" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-300 py-2 border-b border-slate-800/50">How It Works</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-300 py-2 border-b border-slate-800/50">About</Link>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-300 py-2 border-b border-slate-800/50">Blog</Link>
              <Link href="/#book-consultation" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-300 py-2 border-b border-slate-800/50">Contact</Link>
            </nav>

            <div className="pt-6 pb-8">
              <Link href="/#book-consultation" onClick={() => setMobileMenuOpen(false)} className="block w-full">
                <Button variant="primary" size="lg" className="w-full gap-2 py-4">
                  Get Started
                  <ArrowUpRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}