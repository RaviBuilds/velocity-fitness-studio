import type { WhyChooseUsConfiguration, WhyChooseUsItem } from "./types";

/**
 * Why Choose Us reasons. Mandatory section — always present.
 *
 * CONTENT RULE: this file states REASONS — how membership works, how the
 * services connect. It never repeats facility metrics, amenities, opening
 * hours or program names. Those facts have an owner already:
 *   - Section 01 (lib/about.ts) owns zones, amenities and hours;
 *   - Section 02 (lib/services.ts) owns individual programs and classes.
 * Repeating them here would make three sections say the same thing.
 *
 * VELOCITY FITNESS STUDIO — from docs/gym-research.md (WHY_CHOOSE_US.*).
 *   - Cult.fit membership and booking: VERIFIED_OFFICIAL (branch-specific
 *     Cult.fit partner page).
 *   - Training formats / plan options: PUBLICLY_REPORTED. Pause allowances
 *     and cross-centre access are tier-dependent and must be confirmed per
 *     plan, so the copy states only that they vary by plan.
 *
 * Not used (owner confirmation of current terms required before advertising):
 *   - Kickstart onboarding pack (two complimentary PT sessions + body
 *     composition analysis);
 *   - app-based streaks and badges (wider Cult.fit ecosystem, not confirmed
 *     as branch-specific);
 *   - amenities list (owned by Section 01).
 */
export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: "Cult.fit membership",
    description:
      "A branch-specific Cult.fit partner page for membership and booking.",
  },
  {
    title: "One studio, several formats",
    description:
      "Gym floor training, conditioning, coaching and mind-body sessions at the same studio.",
  },
  {
    title: "Plan options",
    description:
      "Listed as a cultpass PRO and SELECT centre. Pause allowances and affiliated-centre access vary by plan.",
  },
];

/**
 * Section 03 composition data — "The Roof".
 *
 * A single accent-colour poster: the eyebrow, one headline, and the reasons
 * above as equal columns. The headline is built only from the verified reasons
 * (membership, formats, plan options); it is never a superlative. A clone
 * edits this object and the array, never the composition.
 */
export const whyChooseUsConfiguration: WhyChooseUsConfiguration = {
  eyebrow: "Why choose us",
  headline: "One studio. Several ways to train.",
};
