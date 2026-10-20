import type { Business } from "./types";

/**
 * Master business data. Public business information only — never put API
 * keys, tokens, or server credentials here.
 *
 * VELOCITY FITNESS STUDIO (Srinagar Colony, Hyderabad) — populated from
 * docs/gym-research.md. VERIFIED_OFFICIAL: name, city, state. PUBLICLY_REPORTED
 * (owner verification required before final-client production): phone,
 * locality, hours, description.
 *
 * ADDRESS / FLOOR — DOCUMENTED SOURCE CONFLICT (not silently resolved):
 *   The Google Business Profile wording says "5th floor"; Cult.fit lists
 *   "4th & 5th floors". Per the research, no single floor description is
 *   published until management confirms it, so `addressLine` carries only
 *   the unconflicted street part. No postal code was found (left empty;
 *   every consumer filters empty parts).
 *
 * PHONE: "+91 83096870101" is transcribed exactly as the research supplies
 * it. It has 11 digits after +91 (an Indian mobile number has 10), so it is
 * very likely a transcription error — OWNER MUST CONFIRM THE NUMBER before
 * this site is shown as final. Nothing was guessed or trimmed.
 *
 * WHATSAPP: no WhatsApp number was found (CONTACT.whatsapp NOT_FOUND). The
 * site-wide WhatsApp CTA needs a number to function, so it points at the
 * same phone number until the owner confirms a WhatsApp Business number.
 *
 * EMAIL: not found; `email` is omitted. WEBSITE: the only official web
 * presence is the branch's Cult.fit page; no own-domain website exists.
 *
 * HOURS: Monday–Saturday 05:30–21:45, Sunday 06:00–12:00 (Cult.fit listing,
 * PUBLICLY_REPORTED). Holiday hours are not documented.
 *
 * mapUrl: no verified Google Maps / Place URL was found in research. This is
 * a standard Google Maps search-by-name-and-address URL built from the
 * researched address text (with city/state so it cannot resolve to the
 * unrelated Lucknow "Velocity Fitness Studio" or the Kavadiguda "Velocity
 * Fitness Zone"). No latitude, longitude or Place ID has been invented.
 */
export const business: Business = {
  name: "Velocity Fitness Studio",
  // Research BUSINESS.tagline is NOT_FOUND. This line is shown as the closing
  // headline and under the footer logo, so it is a factual summary of the
  // listed programs — not a claim and not a superlative.
  tagline: "Strength, conditioning and mind-body training.",
  description:
    "Velocity Fitness Studio is a gym in Srinagar Colony, Hyderabad, listed on Cult.fit as a cultpass PRO and cultpass SELECT centre. Listed training includes bodybuilding, functional training, HIIT, cycling, kickboxing, personal training and yoga/Pilates.",
  phone: "+91-83096870101",
  whatsapp: {
    number: "+9183096870101",
    message: "Hi, I'd like to know more about membership and training at Velocity Fitness Studio, Srinagar Colony.",
  },
  email: undefined,
  address: {
    addressLine: "8-3-988, 34/7, Srinagar Colony Main Road",
    locality: "Srinagar Colony",
    city: "Hyderabad",
    state: "Telangana",
    postalCode: "",
    landmark: "Srinagar Colony Main Road, Yousufguda area",
  },
  hours: [
    { day: "Monday", open: "05:30 AM", close: "09:45 PM" },
    { day: "Tuesday", open: "05:30 AM", close: "09:45 PM" },
    { day: "Wednesday", open: "05:30 AM", close: "09:45 PM" },
    { day: "Thursday", open: "05:30 AM", close: "09:45 PM" },
    { day: "Friday", open: "05:30 AM", close: "09:45 PM" },
    { day: "Saturday", open: "05:30 AM", close: "09:45 PM" },
    { day: "Sunday", open: "06:00 AM", close: "12:00 PM" },
  ],
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Velocity+Fitness+Studio+8-3-988+34%2F7+Srinagar+Colony+Main+Road+Hyderabad+Telangana",
  // Prompt A — PRIMARY brand colour "Velocity Lime Green" #48C900 (logo-
  // extracted; action / energy / major brand signal). The authentic hex is
  // entered here exactly once and is never altered; app/globals.css derives
  // the UI fill variants from it and lib/color.ts picks the text colour on a
  // primary fill by contrast (a bright lime resolves to dark text, not white).
  accentColor: "#48C900",
  // Prompt A — SECONDARY brand colour "Electric Yellow" #FFD400 (structure /
  // support / depth: eyebrows, metadata, technical marks, focus). Bright on
  // the near-black base, so it is safe as small text there; fills carry dark
  // text (--brand-secondary-foreground); light surfaces use the derived ink
  // variant (--brand-secondary-ink) — never this value raw.
  secondaryColor: "#FFD400",
};
