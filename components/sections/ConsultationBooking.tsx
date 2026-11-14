"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Calendar, CheckCircle2, AlertCircle, Loader2, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const serviceOptions = [
  "Gmail & Email Automation",
  "Lead Generation & Follow-Up",
  "WhatsApp Business Automation",
  "AI Voice Agents",
  "CRM & Sales Automation",
  "Appointment & Booking",
  "AI Customer Support Agents",
  "Business Workflow Automation",
];

export function ConsultationBooking() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    websiteUrl: "",
    serviceRequired: serviceOptions[0],
    businessProblem: "",
    additionalDetails: "",
    botcheck: "",
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; problem?: string }>({});

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; problem?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your business email.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.businessProblem.trim()) {
      newErrors.problem = "Please describe the process bottleneck you want to automate.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!validateForm()) return;
    if (formData.botcheck) return;

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
          subject: `Automora Flow Strategy Session Request from ${formData.name}`,
          from_name: "Automora Flow Booking Portal",
          replyto: formData.email,
          name: formData.name,
          email: formData.email,
          company: formData.company || "Not provided",
          website: formData.websiteUrl || "Not provided",
          service_required: formData.serviceRequired,
          business_problem: formData.businessProblem,
          additional_details: formData.additionalDetails || "None",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setIsSubmitting(false);
      } else {
        throw new Error(result.message || "Submission failed. Please try again.");
      }
    } catch (error: unknown) {
      setIsSubmitting(false);
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unexpected network error occurred. Please try again.");
      }
    }
  };

  return (
    <section id="book-consultation" className="py-24 bg-[#030712] border-t border-slate-800/60 relative">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="down" delay={0.1}>
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 inline-block mb-4">
              Strategy Consultation
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} preset="blur">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Book a Free{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Automation Assessment.
              </span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p className="text-slate-300 text-base sm:text-lg">
              Share your operational goals and let our automation architects design a custom roadmap for your business.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-3xl mx-auto p-6 sm:p-10 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-2xl shadow-2xl">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-400 flex items-center justify-center mx-auto mb-4 shadow-[0_0_25px_rgba(168,85,247,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Strategy Request Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                  Thank you for submitting your workflow details. Our technical team will review your business requirements and reply within 24 hours.
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
                      websiteUrl: "",
                      serviceRequired: serviceOptions[0],
                      businessProblem: "",
                      additionalDetails: "",
                      botcheck: "",
                    });
                  }}
                >
                  Submit Another Assessment Request
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="booking-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-4"
                noValidate
              >
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  checked={!!formData.botcheck}
                  onChange={(e) => setFormData({ ...formData, botcheck: e.target.checked ? "true" : "" })}
                />

                {errorMessage && (
                  <div className="p-3.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Alex Morgan"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className={`w-full px-4 py-2.5 rounded-lg bg-slate-950 border text-slate-100 text-sm focus:outline-none transition-colors ${
                        errors.name
                          ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                          : "border-slate-800 focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                      }`}
                    />
                    {errors.name && <p className="text-rose-400 text-[11px] mt-1 font-mono">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Business Email *
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
                          : "border-slate-800 focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                      }`}
                    />
                    {errors.email && <p className="text-rose-400 text-[11px] mt-1 font-mono">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Systems Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Website URL (Optional)
                    </label>
                    <input
                      type="url"
                      placeholder="https://company.com"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Primary Service Required *
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-purple-400 transition-colors cursor-pointer"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Process Bottleneck / Business Problem *
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe the repetitive task, response lag, or manual work you need resolved..."
                    value={formData.businessProblem}
                    onChange={(e) => {
                      setFormData({ ...formData, businessProblem: e.target.value });
                      if (errors.problem) setErrors({ ...errors, problem: undefined });
                    }}
                    className={`w-full px-4 py-2.5 rounded-lg bg-slate-950 border text-slate-100 text-sm focus:outline-none resize-none transition-colors ${
                      errors.problem
                        ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                        : "border-slate-800 focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                    }`}
                  />
                  {errors.problem && <p className="text-rose-400 text-[11px] mt-1 font-mono">{errors.problem}</p>}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full gap-2 mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Details...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Strategy Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}