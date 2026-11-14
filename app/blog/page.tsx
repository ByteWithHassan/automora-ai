import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { ArrowRight, BookOpen, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation Insights & Engineering Blog | Automora Flow",
  description: "Technical articles, n8n workflow tutorials, WhatsApp automation guides, and strategies for scaling business operations with AI.",
};

const articles = [
  {
    slug: "n8n-whatsapp-cloud-api-guide",
    category: "n8n Tutorials",
    title: "Building an Autonomous WhatsApp Lead Qualification System with n8n",
    excerpt: "Step-by-step technical guide on configuring custom webhooks, OpenAI prompt boundaries, and PostgreSQL state management in n8n.",
    author: "Hassan Khurshid",
    readTime: "6 min read",
    date: "Oct 24, 2026",
  },
  {
    slug: "gmail-ai-triage-architecture",
    category: "Gmail Automation",
    title: "Eliminating Inbox Fatigue: Engineering Zero-Latency Email Triage",
    excerpt: "How to extract structured JSON data from incoming invoices, classify customer urgency, and route alerts straight to Slack.",
    author: "Hassan Khurshid",
    readTime: "5 min read",
    date: "Oct 18, 2026",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100">
      <Navbar />
      <main className="pt-32 pb-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-300 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>Engineering & Automation Blog</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
              AI Automation &{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Workflow Insights.
              </span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Practical guides, n8n tutorials, and system architectures written for operational leaders and software engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {articles.map((art) => (
              <article key={art.slug} className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl flex flex-col justify-between group hover:border-purple-500/40 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20">{art.category}</span>
                    <span className="flex items-center gap-1 text-slate-500"><Clock className="w-3 h-3" />{art.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {art.title}
                  </h2>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">{art.excerpt}</p>
                </div>

                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-purple-400" />{art.author}</span>
                  <Link href={`/blog/${art.slug}`} className="inline-flex items-center gap-1 text-xs font-semibold text-purple-400 hover:text-cyan-300">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}