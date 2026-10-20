import type { Service } from "./types";

/**
 * Master services data. Only services with verified:true render on the live
 * site. A service can exist here and remain disabled — this is the direct
 * mechanism that prevents an unverified/discontinued program from silently
 * appearing on a gym website.
 *
 * VELOCITY FITNESS STUDIO — all 10 programs from docs/gym-research.md
 * (PROGRAMS.*). Every entry is PUBLICLY_REPORTED (Google Business Profile /
 * Cult.fit listing / directories); owner verification of current availability
 * is required before final-client production. Descriptions restate the
 * research briefly; no schedule, trainer, outcome or health claim is added.
 * The research notes that exact class timetables, instructors and (for online
 * classes and nutrition consulting) availability/scope are unconfirmed.
 *
 * STABLE IDs: `strength-training`, `conditioning` and `personal-training`
 * are cross-referenced by id from the frozen educational module
 * lib/training-intelligence.ts (`programId`, see
 * components/sections/trainingLoadout.ts). These three ids must not be
 * renamed even though the gym-facing program name differs. Here
 * `strength-training` is carried by "Bodybuilding" and `conditioning` by
 * "Functional Training" (the research's conditioning-category program).
 *
 * Images are placeholders occupying their final filenames
 * (docs/MASTER-GYM-ASSET-CONTRACT.md); the operator replaces the files
 * in place with real Velocity Fitness Studio photography — no code change.
 * Several files temporarily hold the same placeholder artwork on purpose.
 */
const ASSET = "/assets/programs/velocity-fitness-studio-srinagar-colony-program";

export const services: Service[] = [
  {
    id: "strength-training",
    name: "Bodybuilding",
    description: "Bodybuilding and strength-focused training on the gym floor.",
    icon: "strength",
    image: `${ASSET}-bodybuilding.jpg`,
    verified: true,
    ctaLabel: "Ask about bodybuilding",
    ctaHref: undefined,
  },
  {
    id: "personal-training",
    name: "Personal Training",
    description: "One-on-one personal training with a coach on the training floor.",
    icon: "coaching",
    image: `${ASSET}-personal-training.jpg`,
    verified: true,
    ctaLabel: "Ask about personal training",
    ctaHref: undefined,
  },
  {
    id: "conditioning",
    name: "Functional Training",
    description: "Functional training for all-round conditioning.",
    icon: "equipment",
    image: `${ASSET}-functional-training.jpg`,
    verified: true,
    ctaLabel: "Ask about functional training",
    ctaHref: undefined,
  },
  {
    id: "hiit",
    name: "HIIT",
    description: "High-intensity interval training sessions.",
    icon: "cardio",
    image: `${ASSET}-hiit.jpg`,
    verified: true,
    ctaLabel: "Ask about HIIT",
    ctaHref: undefined,
  },
  {
    id: "cycling",
    name: "Cycling",
    description: "Cycling sessions for cardio conditioning.",
    icon: "cardio",
    image: `${ASSET}-cycling.jpg`,
    verified: true,
    ctaLabel: "Ask about cycling",
    ctaHref: undefined,
  },
  {
    id: "kickboxing",
    name: "Kickboxing",
    description: "Kickboxing training for technique and conditioning.",
    icon: "equipment",
    image: `${ASSET}-kickboxing.jpg`,
    verified: true,
    ctaLabel: "Ask about kickboxing",
    ctaHref: undefined,
  },
  {
    id: "yoga",
    name: "Yoga",
    description: "Yoga sessions for mobility and mind-body practice.",
    icon: "floor",
    image: `${ASSET}-yoga.jpg`,
    verified: true,
    ctaLabel: "Ask about yoga",
    ctaHref: undefined,
  },
  {
    id: "pilates",
    name: "Pilates",
    description: "Pilates sessions offered alongside yoga.",
    icon: "floor",
    image: `${ASSET}-pilates.jpg`,
    verified: true,
    ctaLabel: "Ask about Pilates",
    ctaHref: undefined,
  },
  {
    id: "nutrition-consulting",
    name: "Nutrition Consulting",
    description: "Nutrition consulting alongside your training.",
    icon: "coaching",
    image: `${ASSET}-nutrition-consulting.jpg`,
    verified: true,
    ctaLabel: "Ask about nutrition consulting",
    ctaHref: undefined,
  },
  {
    id: "online-classes",
    name: "Online Classes",
    description: "Online classes, with current availability confirmed on enquiry.",
    icon: "floor",
    image: `${ASSET}-online-classes.jpg`,
    verified: true,
    ctaLabel: "Ask about online classes",
    ctaHref: undefined,
  },
];
