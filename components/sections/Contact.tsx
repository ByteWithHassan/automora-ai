"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/config/site";
import { MessageSquare, Mail, Send, CheckCircle2, ArrowUpRight, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    processToAutomate: "",
    message: "",
    botcheck: "", // Honeypot field for spam prevention
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please describe your workflow or inquiry.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Stop execution if validation fails
    if (!validateForm()) return;

    // Silent check for spam bots
    if (formData.botcheck) {
      return;
    }

    setIsSubmitting(true);

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Automora AI Inquiry from ${formData.name}`,
          from_name: "Automora AI Website",
          replyto: formData.email,
          name: formData.name,
          email: formData.email,
          company: formData.company || "Not provided",
          process_to_automate: formData.processToAutomate || "Not specified",
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setIsSubmitting(false);
      } else {
        throw new Error(result.message || "Failed to submit inquiry. Please try again.");
      }
    } catch (error: unknown) {
      setIsSubmitting(false);
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please check your connection and try again.");
      }
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#080a0f] border-t border-slate-800/60 relative">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="down" delay={0.1}>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 inline-block mb-4">
              Get In Touch
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} preset="blur">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Have a Process{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Worth Automating?
              </span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p className="text-slate-400 text-base sm:text-lg">
              Tell us what is slowing your business down. We&apos;ll explore whether custom automation can make it simpler.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Contact Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* WhatsApp Quick Action Card */}
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Direct WhatsApp Consultation</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                Want to brainstorm your ideas instantly? Reach out to us directly on WhatsApp.
              </p>
              <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noreferrer" className="block w-full">
                <Button variant="primary" className="w-full gap-2 bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                  <span>{siteConfig.cta.whatsapp}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </a>
            </motion.div>

            {/* Email Contact Card */}
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Email Inquiry</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-4 leading-relaxed">
                Prefer sending a detailed brief over email?
              </p>
              <a href={`mailto:${siteConfig.contact.email}`} className="text-sm font-mono text-cyan-400 hover:underline">
                {siteConfig.contact.email}
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl shadow-2xl"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-cyan-400/20 border border-cyan-400/40 text-cyan-400 flex items-center justify-center mx-auto mb-4 shadow-[0_0_25px_rgba(0,240,255,0.2)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Inquiry Delivered</h3>
                  <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
                    Thank you for reaching out. Your inquiry has been transmitted successfully. We will review your process details and reply shortly.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        processToAutomate: "",
                        message: "",
                        botcheck: "",
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  noValidate
                >
                  {/* Hidden Honeypot Input for Bot Protection */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: "none" }}
                    checked={!!formData.botcheck}
                    onChange={(e) => setFormData({ ...formData, botcheck: e.target.checked ? "true" : "" })}
                  />

                  {/* Submission Error Banner */}
                  {errorMessage && (
                    <div className="p-3.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        className={`w-full px-4 py-2.5 rounded-lg bg-slate-950 border text-slate-100 text-sm focus:outline-none transition-colors ${
                          errors.name
                            ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                            : "border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                        }`}
                      />
                      {errors.name && <p className="text-rose-400 text-[11px] mt-1 font-mono">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full px-4 py-2.5 rounded-lg bg-slate-950 border text-slate-100 text-sm focus:outline-none transition-colors ${
                          errors.email
                            ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                            : "border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                        }`}
                      />
                      {errors.email && <p className="text-rose-400 text-[11px] mt-1 font-mono">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                        Process to Automate
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Customer Support, Invoices"
                        value={formData.processToAutomate}
                        onChange={(e) => setFormData({ ...formData, processToAutomate: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Tell us about your current workflow *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe the repetitive manual steps you want to eliminate..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      className={`w-full px-4 py-2.5 rounded-lg bg-slate-950 border text-slate-100 text-sm focus:outline-none resize-none transition-colors ${
                        errors.message
                          ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                          : "border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                      }`}
                    />
                    {errors.message && <p className="text-rose-400 text-[11px] mt-1 font-mono">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}