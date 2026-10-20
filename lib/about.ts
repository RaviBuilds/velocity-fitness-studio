import type { AboutConfiguration, BusinessHours } from "./types";

/**
 * Section 01 — facility / training-floor story content.
 *
 * Customizable per gym (labels, image, attributes, headline). The narrative
 * paragraph is deliberately NOT duplicated here: Section 01 renders
 * `business.description`, so the facility description has exactly one source
 * of truth.
 *
 * Source-First rules that apply to this file:
 * - A zone or attribute with `verified: false` does not render. Leave it in
 *   the file as documentation of what was checked and found absent.
 * - Never add a claim, statistic, equipment count, award or superlative here
 *   to make the section look fuller. The composition carries the density.
 *
 * VELOCITY FITNESS STUDIO — populated from docs/gym-research.md (ABOUT.zones,
 * ABOUT.attributes). The Cult.fit partner listing, lockers and shoe racks are
 * VERIFIED_OFFICIAL; the other amenities are PUBLICLY_REPORTED. Owner
 * verification is required before final-client production.
 *
 * NO FACILITY METRICS: the research supplies no source-stated station counts
 * or equipment figures, and the floor count is a documented source conflict
 * (Google Business Profile "5th floor" vs Cult.fit "4th & 5th floors"), so no
 * `metric` is set anywhere and the photograph carries no figure overlay.
 *
 * Not rendered (checked, not verifiable): yoga/Pilates studio space (layout
 * "needs confirmation"), multi-floor facility (conflicting sources), CCTV
 * (only associated with Cult.fit protocols), and the body-composition /
 * Kickstart onboarding offer (current terms unconfirmed). They stay below
 * with `verified: false`. The onboarding-service gate in
 * lib/first-30-days.ts stays `verified: false` until the owner confirms.
 */
export const aboutConfiguration: AboutConfiguration = {
  index: "01",
  eyebrow: "About the gym",
  headlineLines: ["The floor behind", "the brand."],
  accentLastLine: true,
  image: {
    src: "/assets/about/velocity-fitness-studio-srinagar-colony-about-gym-interior.jpg",
    alt: "Velocity Fitness Studio training floor in Srinagar Colony, Hyderabad",
  },
  imageLabel: "Training floor",
  frameLabel: "Facility",
  zonesLabel: "Training environment",
  attributesLabel: "Floor & support",
  scheduleLabel: "Opening schedule",
  zones: [
    {
      id: "strength",
      label: "Strength / bodybuilding",
      detail: "Strength and bodybuilding training area.",
      icon: "strength",
      verified: true,
    },
    {
      id: "functional",
      label: "Functional training",
      detail: "Functional training listed alongside HIIT and kickboxing.",
      icon: "equipment",
      verified: true,
    },
    {
      id: "cardio",
      label: "Cycling & cardio",
      detail: "Cycling listed among the studio's conditioning programs.",
      icon: "cardio",
      verified: true,
    },
    // Suggested by the program listings only; exact layout needs confirmation.
    {
      id: "yoga-pilates",
      label: "Yoga & Pilates",
      detail: "Yoga and Pilates studio space.",
      icon: "floor",
      verified: false,
    },
  ],
  attributes: [
    { id: "cultfit-partner", label: "Cult.fit partner: cultpass PRO and SELECT", verified: true },
    { id: "lockers", label: "Lockers", verified: true },
    { id: "shoe-racks", label: "Shoe racks", verified: true },
    { id: "parking", label: "On-site parking", verified: true },
    { id: "showers", label: "Showers", verified: true },
    { id: "changing-rooms", label: "Changing rooms", verified: true },
    { id: "air-conditioning", label: "Air-conditioned", verified: true },
    { id: "wifi", label: "Wi-Fi", verified: true },
    // Floor count conflicts between sources — never rendered until confirmed.
    { id: "multi-floor", label: "Multi-floor facility", verified: false },
    // Associated with Cult.fit protocols only; no branch-level confirmation.
    { id: "cctv", label: "CCTV / security", verified: false },
    // Offer terms and eligibility unconfirmed.
    { id: "body-composition", label: "Body composition analysis", verified: false },
  ],
  showSchedule: true,
};

/** One grouped opening window, e.g. `Mon–Fri / 05:00 AM – 11:00 PM`. */
export interface ScheduleWindow {
  label: string;
  value: string;
}

/**
 * Beyond this many distinct windows the readout stops being a compact
 * technical module and starts being a timetable, so Section 01 renders
 * nothing and the full hours stay with the location section instead.
 */
const MAX_SCHEDULE_GROUPS = 3;

function shortDay(day: string): string {
  return day.trim().slice(0, 3);
}

/**
 * Collapse a week of opening hours into consecutive day ranges that share the
 * same open/close window. Derived, never authored: the caller passes
 * `business.hours`, so Section 01 can only ever show hours that already exist
 * in lib/business.ts (and therefore in the LocalBusiness structured data) —
 * it cannot invent a schedule. Hours are taken as an explicit argument rather
 * than imported here so this module stays pure and directly testable.
 */
export function scheduleWindows(hours: BusinessHours[]): ScheduleWindow[] {
  if (hours.length === 0) return [];

  const groups: { days: string[]; open: string; close: string }[] = [];

  for (const entry of hours) {
    if (!entry.day || !entry.open || !entry.close) return [];
    const current = groups[groups.length - 1];
    if (current && current.open === entry.open && current.close === entry.close) {
      current.days.push(entry.day);
    } else {
      groups.push({ days: [entry.day], open: entry.open, close: entry.close });
    }
  }

  if (groups.length > MAX_SCHEDULE_GROUPS) return [];

  return groups.map((group) => ({
    label:
      group.days.length === 1
        ? shortDay(group.days[0])
        : `${shortDay(group.days[0])}\u2013${shortDay(group.days[group.days.length - 1])}`,
    value: `${group.open} \u2013 ${group.close}`,
  }));
}
