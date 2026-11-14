import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms & Operating Conditions | Automora Flow",
  description: "Terms of service and operational conditions for Automora Flow client engagements.",
};

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100">
      <Navbar />
      <main className="pt-32 pb-24">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-invert">
            <h1 className="text-3xl font-bold text-white mb-6">Terms and Conditions</h1>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Last updated: October 2026. By utilizing Automora Flow's website or services, you agree to these operational terms.
            </p>
            <h2 className="text-xl font-bold text-white mt-8 mb-3">1. Custom Services</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              All automation pipelines, n8n workflows, and custom API connections built by Automora Flow are engineered according to explicit client project scopes.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}