import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const aiAndSearchBots = [
    // All crawlers fallback
    "*",
    // Major Search Engines
    "Googlebot",
    "Bingbot",
    "DuckDuckBot",
    "Baiduspider",
    "Yandex",
    // OpenAI Bots (ChatGPT, SearchGPT, GPT-4o, Training)
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    // Anthropic Bots (Claude, Claude Web, Claude-3.5)
    "ClaudeBot",
    "anthropic-ai",
    "Claude-Web",
    // Perplexity AI Search Engine
    "PerplexityBot",
    // Google AI & Gemini Models
    "Google-Extended",
    "GoogleOther",
    // Apple Intelligence & Siri
    "Applebot",
    "Applebot-Extended",
    // Meta AI & Llama
    "Meta-ExternalAgent",
    "FacebookBot",
    // Cohere & Mistral AI
    "cohere-ai",
    "MistralAI",
    // Amazon Bedrock & Alexa
    "Amazonbot",
    // ByteDance & TikTok AI
    "Bytespider",
    // Open Datasets & Knowledge Extractors
    "CCBot",
    "Diffbot",
  ];

  return {
    rules: aiAndSearchBots.map((bot) => ({
      userAgent: bot,
      allow: "/",
    })),
    sitemap: "https://vinayakgund.in/sitemap.xml",
    host: "https://vinayakgund.in",
  };
}
