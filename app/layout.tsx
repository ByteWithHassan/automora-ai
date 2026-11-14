import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { SkipToContent } from "@/components/ui/SkipToContent";
import { ChatbotWidget } from "@/components/chat/ChatbotWidget";

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Automora Flow",
    "AI automation agency",
    "business automation",
    "n8n chatbot integration",
    "AI workflow automation",
  ],
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#030712] text-slate-100 antialiased selection:bg-purple-500 selection:text-white overflow-x-hidden">
        <SkipToContent />
        {children}
        <ChatbotWidget />
      </body>
    </html>
  );
}