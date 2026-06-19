import type { MetadataRoute } from "next";
import { SITE_URL } from "@/app/seo";

export const dynamic = "force-static";

const allowedAiCrawlerUserAgents = [
  "Google-Extended",
  "Googlebot",
  "GoogleOther",
  "GoogleOther-Image",
  "GoogleOther-Video",
  "Google-InspectionTool",
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Applebot",
  "Applebot-Extended",
  "Bingbot",
  "BingPreview",
  "DuckAssistBot",
  "YouBot",
  "CCBot",
  "Amazonbot",
  "FacebookBot",
  "Meta-ExternalAgent",
  "anthropic-ai",
  "cohere-ai",
  "Bytespider",
  "Diffbot",
  "MistralAI-User"
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      },
      ...allowedAiCrawlerUserAgents.map((userAgent) => ({
        userAgent,
        allow: "/"
      }))
    ],
    sitemap: `${SITE_URL}/sitemap.xml`
  };
}
