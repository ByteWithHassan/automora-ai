import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes = [
    "",
    "/blog",
    "/services/gmail-automation",
    "/services/lead-generation",
    "/services/whatsapp-automation",
    "/services/ai-voice-agents",
    "/services/crm-sales-automation",
    "/services/appointment-booking",
    "/services/ai-customer-support",
    "/services/business-workflow-automation",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}