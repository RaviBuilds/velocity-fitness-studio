import type { SocialConfiguration } from "./types";

/**
 * Master social/Instagram data. Curated content only — no live authenticated
 * Instagram API dependency in Factory v1. An empty posts array is valid and
 * renders a "Follow us on Instagram" fallback CTA, never a broken widget.
 *
 * NOTE: `social` below is not currently imported by any component — the live
 * Instagram section (components/sections/Instagram.tsx) reads from
 * lib/instagram.ts. See docs/gym-customization-manifest.md §9.1
 * ("lib/social.ts is orphaned"). Left in sync with lib/instagram.ts for data
 * consistency in case a future section consumes this module; not a live
 * rendering path. `socialLinks` further down IS live (footer icons).
 *
 * VELOCITY FITNESS STUDIO — docs/gym-research.md INSTAGRAM.profile_url is
 * NOT_FOUND and the only handle (@wearecult) is Cult.fit's corporate account,
 * so both fields are empty strings here (the type requires strings). See
 * lib/instagram.ts for the full note.
 */
export const social: SocialConfiguration = {
  instagramHandle: "",
  instagramUrl: "",
  posts: [],
};

/**
 * Footer social icons (Facebook, X) shown next to Instagram.
 *
 * SOURCE-FIRST: no handle or username is invented.
 *  - Facebook / X: the research found no branch-specific profile
 *    (CONTACT.facebook_url NOT_FOUND; corporate-level presence only), so the
 *    icons keep the network homepage (the template's safe fallback) until
 *    the owner supplies real profile URLs.
 *  - Justdial: the research only found Justdial listings for similarly named
 *    but different businesses (Lucknow, Velocity Fitness Zone), which it says
 *    must not be merged into this gym — so no Justdial icon is configured.
 *
 * Instagram is configured separately in lib/instagram.ts (it also drives the
 * Reel embeds) and is not repeated here.
 */
export interface SocialLink {
  id: "facebook" | "justdial" | "x";
  /** Accessible name for the icon, e.g. "Facebook". */
  label: string;
  /** Profile URL. Defaults to the network homepage until the gym's own is set. */
  href: string;
}

export const socialLinks: SocialLink[] = [
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com" },
  { id: "x", label: "X", href: "https://x.com" },
];
