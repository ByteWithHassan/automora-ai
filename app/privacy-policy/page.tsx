import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy | Automora Flow",
  description: "Automora Flow privacy policy detailing lead data handling, encryption standards, and transmission practices.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100">
      <Navbar />
      <main className="pt-32 pb-24">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-invert">
            <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Last updated: October 2026. Automora Flow ("we", "our", or "us") respects your privacy. This policy outlines our data processing standards.
            </p>
            <h2 className="text-xl font-bold text-white mt-8 mb-3">1. Information We Collect</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              We collect information submitted directly through our strategy assessment forms, contact fields, and n8n chatbot widget, including name, business email, company details, and workflow descriptions.
            </p>
            <h2 className="text-xl font-bold text-white mt-8 mb-3">2. How We Use Data</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Collected information is used exclusively to evaluate business automation scope, respond to inquiries, and engineer custom workflow pipelines. We never sell customer data to third parties.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}