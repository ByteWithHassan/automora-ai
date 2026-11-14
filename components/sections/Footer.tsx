"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

const serviceLinks = [
  { name: "Gmail & Email Automation", href: "/services/gmail-automation" },
  { name: "Lead Generation & Follow-Up", href: "/services/lead-generation" },
  { name: "WhatsApp Business Automation", href: "/services/whatsapp-automation" },
  { name: "AI Voice Agents", href: "/services/ai-voice-agents" },
  { name: "CRM & Sales Automation", href: "/services/crm-sales-automation" },
  { name: "Appointment & Booking", href: "/services/appointment-booking" },
  { name: "AI Customer Support Agents", href: "/services/ai-customer-support" },
  { name: "Business Workflow Automation", href: "/services/business-workflow-automation" },
];

const companyLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog & Insights", href: "/blog" },
  { name: "How It Works", href: "/#process" },
  { name: "Pricing & Tiers", href: "/#pricing" },
  { name: "FAQ", href: "/#faq" },
  { name: "Book Consultation", href: "/#book-consultation" },
];

export function Footer() {
  return (
    <footer className="bg-[#02050b] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 relative overflow-hidden">
      {/* Ambient Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-b from-purple-500/10 via-cyan-500/5 to-transparent blur-[120px] pointer-events-none transform-gpu" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group inline-flex">
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

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              We engineer custom AI workflows, autonomous agents, and seamless API integrations that handle repetitive operations so your business can scale cleanly.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {/* WhatsApp SVG */}
              <a
                href="https://wa.me/message/ST674VPYHIWKI1"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" />
                </svg>
              </a>

              {/* Facebook SVG */}
              <a
                href="https://www.facebook.com/share/14vcXgtZyJf/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Automation Services */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase text-purple-400 tracking-widest font-semibold">
              Automation Solutions
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {serviceLinks.map((s) => (
                <li key={s.name}>
                  <Link
                    href={s.href}
                    className="hover:text-cyan-400 transition-colors text-slate-300 block py-0.5"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-widest font-semibold">
              Company & Resources
            </h4>
            <ul className="space-y-2 text-xs">
              {companyLinks.map((c) => (
                <li key={c.name}>
                  <Link
                    href={c.href}
                    className="hover:text-purple-300 transition-colors text-slate-300 inline-flex items-center gap-1"
                  >
                    <span>{c.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6 font-medium">
            <Link
              href="/privacy-policy"
              className="hover:text-cyan-400 transition-colors text-slate-400 underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-purple-400 transition-colors text-slate-400 underline underline-offset-4"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}