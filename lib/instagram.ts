/**
 * Instagram configuration — official embed mode.
 *
 * PURE FRONTEND TEMPLATE: no Instagram API, no OAuth, no Meta tokens.
 * This is the default manual embed mode using public Instagram Reel URLs
 * and the official Instagram embed script.
 *
 * FUTURE CLIENT WORKFLOW:
 * - Clone template
 * - Edit this file only
 * - Replace profileUrl, handle, and Reel URLs with client's content
 * - Website updated
 *
 * No component modification required for standard customization.
 */

export interface InstagramReel {
  /** Stable identifier for React keys */
  id: string;
  /** Full Instagram Reel URL for official embed */
  url: string;
  /** Content type - future-proofed for potential post support */
  type: "reel";
}

export interface InstagramConfiguration {
  /**
   * Full Instagram profile URL. OPTIONAL: when a gym's official profile has
   * not been verified, leave it unset — the profile CTA and footer link are
   * then omitted rather than pointing at an invented or wrong account.
   */
  profileUrl?: string;
  /** Display handle with @ prefix. Optional for the same reason. */
  handle?: string;
  /** Reel embeds - render all supplied items, no artificial limit */
  items: InstagramReel[];
}

/**
 * VELOCITY FITNESS STUDIO Instagram configuration.
 *
 * docs/gym-research.md INSTAGRAM.profile_url is NOT_FOUND and the only handle
 * found (@wearecult) is the Cult.fit CORPORATE account — the research states
 * it must not be represented as this gym's own account. `profileUrl` and
 * `handle` are therefore deliberately left unset: the section heading falls
 * back to the gym name, and the "View more on Instagram" CTA and footer
 * Instagram link are not rendered. Each embedded Reel still carries
 * Instagram's own creator name and "View profile" link.
 * OWNER QUESTION: "Does the gym have its own official Instagram account?"
 *
 * INSTAGRAM.items supplies 3 Reel URLs, each `status: VERIFIED_OFFICIAL`
 * (source "Official Instagram"), wired below exactly as supplied. (The
 * research note that says "no Reel URLs were supplied" is a stale template
 * line that contradicts the items; the items are the authoritative,
 * operator-supplied values.)
 *   1. Strength training session inside the gym
 *   2. Gym interior and equipment walkthrough
 *   3. Gym interior and equipment walkthrough
 */
export const instagramConfig: InstagramConfiguration = {
  profileUrl: undefined,
  handle: undefined,
  items: [
    {
      id: "reel-01",
      type: "reel",
      url: "https://www.instagram.com/reel/DehSKx-TYi8/?utm_source=ig_web_copy_link&xtok=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    },
    {
      id: "reel-02",
      type: "reel",
      url: "https://www.instagram.com/reel/DeFlh_Iz4Nl/?utm_source=ig_web_copy_link&mdxt=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    },
    {
      id: "reel-03",
      type: "reel",
      url: "https://www.instagram.com/reel/DeBE9ksyKuo/?utm_source=ig_web_copy_link&srtk=MzRlODBiNWFlZA==",
    },
  ],
};
