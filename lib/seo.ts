import type { SEOConfiguration } from "./types";

/**
 * Master SEO configuration. Consumed once, centrally, by app/layout.tsx's
 * Metadata API. Never duplicate these values inside page/section
 * components.
 *
 * VELOCITY FITNESS STUDIO SEO configuration, from docs/gym-research.md
 * (SEO.title_candidate / description_candidate — INFERRED from verified
 * business data). Wording is factual: no ranking claims or superlatives, and
 * the description names only the listed programs.
 *
 * canonical is a placeholder domain pending the client's real production
 * URL: the research found NO own-domain website (the only official web
 * presence is the branch's Cult.fit partner page), so no domain is invented.
 * ogImage is unset until the owner supplies a social-sharing image.
 */
export const seo: SEOConfiguration = {
  title: "Velocity Fitness Studio | Gym and Personal Training in Srinagar Colony, Hyderabad",
  description:
    "Velocity Fitness Studio in Srinagar Colony, Hyderabad lists strength training, HIIT, cycling, kickboxing, personal training and yoga/Pilates. Check the Cult.fit page for current membership and booking details.",
  canonical: "https://example.com",
  ogImage: undefined,
  robots: "index, follow",
};
