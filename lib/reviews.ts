import type { GoogleReviews } from "./types";

/**
 * Master Google Reviews data. Manually curated, never scraped at runtime.
 * Do not invent review content, reviewer names, ratings, or counts.
 *
 * VELOCITY FITNESS STUDIO — rating/reviewCount are VERIFIED_OFFICIAL (Google
 * Business Profile visual capture described in docs/gym-research.md REVIEWS:
 * 4.4 / 126 reviews). The research supplies no capture date
 * (`rating_read_on` NOT_FOUND), so the operator should re-read the live
 * Google values before launch.
 *
 * EXTERNAL METRICS (not merged): Nears.me lists 4.6 / 81 and LyfSkills
 * 4.5 / 111. Those are different platforms and are NOT Google figures, so
 * they are not used here. Only the Google Business Profile values are shown,
 * and the UI labels them as Google.
 *
 * REVIEWS.selected_reviews is EMPTY (NOT_FOUND): the research provides review
 * themes only, with no complete, attribution-ready verbatim quotations. No
 * reviewer name or quote is invented, so `reviews` stays an empty array.
 * components/sections/Reviews.tsx then renders nothing (graceful omission);
 * the Google rating and count still show in the trust rail and the footer
 * trust card. Add real, attributed reviews here to bring the section back —
 * and restore the "Reviews" links in lib/nav.ts.
 *
 * `tagline` is not shown while there are no reviews. It stays empty because
 * the research's sentiment summary is INFERRED synthesis, not a quotation.
 *
 * REVIEWS.google_profile_url is NOT_FOUND — no direct Google Business
 * Profile URL exists. Never invent one and never substitute a third-party
 * directory URL for the Google review CTA. googleBusinessProfileUrl uses a
 * Google Maps search-by-name-and-address query (the same safe fallback
 * pattern as lib/business.ts mapUrl) that includes the Hyderabad address so
 * it cannot resolve to the unrelated Lucknow "Velocity Fitness Studio". No
 * Place ID or profile slug is invented. `reviewUrl` / `reviewQrSrc` stay
 * unset until the owner supplies the Google "write a review" link.
 */
export const googleReviews: GoogleReviews = {
  rating: 4.4,
  reviewCount: 126,
  tagline: "",
  googleBusinessProfileUrl:
    "https://www.google.com/maps/search/?api=1&query=Velocity+Fitness+Studio+8-3-988+34%2F7+Srinagar+Colony+Main+Road+Hyderabad+Telangana",
  reviewUrl: undefined,
  reviewQrSrc: undefined,
  reviews: [
    {
      name: "Monimma Venkat",
      text: "I joined 3 month ago with no idea about gym equipment or weight lifting. I was too week to hold even 2.5 kg. But under the personal training of VAMSI RAPURU. I have seen drastic improvement in my strength and noticable fat loss. He also explain the purpose of each weight lifting equipment and how it impacts and strengthen specific muscles. Overall it has been great experience training with Vamsi Rapuru.",
    },
    {
      name: "saroja reddy velagala",
      text: "I usually don't write reviews, but Vamsi Rapuru truly deserves one. Training with him for the last 6 months has been a great experience. He's always on time, never skips details, and makes sure every workout is done the right way. Even on days when I felt like giving up, he kept motivating me without putting unnecessary pressure. I could clearly see the difference in my strength and confidence because of his guidance. If you're looking for a trainer who genuinely cares about your progress and not just completing a session, Vamsi Rapuru is the right person. Thank you for all your support and dedication, such an amazing coach",
    },
    {
      name: "sravani vellaturi",
      text: "Velocity fitness is a spacious, well maintained gym. Staff is friendly and polite. I had a great personal training experience with Coach Vamsi. He is very knowledgeable and gives excellent guidance based on your fitness goals. My strength and form has greatly improved while training with him. Highly recommend Velocity and coach Vamsi.",
    },
    {
      name: "Swathi Yaganti",
      text: "It’s my second year at gym i go regular to gym I took support from trainer Vamsi Rapuru when I required he is very professional the way he train his clients with his behaviour and patience I recommend to join this gym and get trained by him workout everyday get fit yourself guys all da best 👍😊",
    },
  ],
};
