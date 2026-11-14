import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: `Building Autonomous AI Systems | Automora Flow Blog`,
    description: "Detailed technical blueprint for designing n8n workflows and AI automation pipelines.",
  };
}

export default function SingleArticlePage({ params }: { params: { slug: string } }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Building Autonomous AI Systems with n8n",
    author: {
      "@type": "Person",
      name: "Hassan Khurshid",
    },
    publisher: {
      "@type": "Organization",
      name: "Automora Flow",
    },
    datePublished: "2026-10-24",
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="pt-32 pb-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:underline mb-8">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Articles
            </Link>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              Building Autonomous AI Systems with n8n & Custom Webhooks
            </h1>

            <div className="flex items-center gap-6 text-xs font-mono text-slate-400 border-b border-slate-800 pb-6 mb-8">
              <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-purple-400" /> Hassan Khurshid</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-cyan-400" /> Oct 24, 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-emerald-400" /> 6 min read</span>
            </div>

            <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-6">
              <p>
                Modern businesses generate vast quantities of unorganized data across web forms, emails, and chat messages. Automating these touchpoints requires strong logic engines capable of validating input schema before triggering downstream actions.
              </p>
              <h2 className="text-xl font-bold text-white pt-4">Architecture Strategy</h2>
              <p>
                By connecting n8n webhooks directly to PostgreSQL database nodes, you maintain state management across multi-turn user interactions while ensuring high data security.
              </p>
            </div>

            <div className="mt-14 p-8 rounded-3xl bg-slate-900/60 border border-purple-500/30 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Want a Similar System Built for Your Business?</h3>
              <p className="text-xs text-slate-400 mb-6">Our team engineers custom n8n pipelines tailored to your operations.</p>
              <a href="/#book-consultation">
                <Button variant="primary" size="md">Book Strategy Session</Button>
              </a>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}