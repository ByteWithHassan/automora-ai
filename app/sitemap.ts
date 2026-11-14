import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticRoutes = [
    "",
    "/about",
    "/case-studies",
    "/blog",
    "/privacy-policy",
    "/terms",
    "/services/gmail-automation",
    "/services/lead-generation",
    "/services/whatsapp-automation",
    "/services/ai-voice-agents",
    "/services/crm-sales-automation",
    "/services/appointment-booking",
    "/services/ai-customer-support",
    "/services/business-workflow-automation",
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.9 : 0.8,
  }));
}