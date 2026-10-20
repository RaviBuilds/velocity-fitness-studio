import type { FaqItem } from "./types";

/**
 * Master FAQ data. Generated only from real, known business information.
 * If the answer to a potential question isn't actually known, don't create
 * that FAQ entry.
 *
 * VELOCITY FITNESS STUDIO — from docs/gym-research.md (FAQ.*, plus the
 * booking route from CONTACT.booking_url). Answers keep the research's
 * caveats and are worded as "listed / reported"; owner verification is
 * required before final-client production.
 *
 * Deliberately NOT created:
 *   - trainer-roster FAQ (the research has one name from a review but no
 *     verified roster, credentials or publication permission);
 *   - transformation FAQ (no verified cases exist);
 *   - cancellation / freeze / joining-fee / trial / guest / refund FAQs
 *     (the research supports none of them);
 *   - class-timetable FAQ (schedules were not found).
 * The floor conflict (Google Business Profile "5th floor" vs Cult.fit
 * "4th & 5th floors") is stated openly in the location answer.
 */
export const faq: FaqItem[] = [
  {
    id: "01",
    question: "Where is Velocity Fitness Studio located?",
    answer:
      "8-3-988, 34/7, Srinagar Colony Main Road, Hyderabad, Telangana. Public listings word the floor differently (5th floor on Google, 4th and 5th floors on Cult.fit), so confirm the floor with the gym before your first visit.",
  },
  {
    id: "02",
    question: "What are the opening hours?",
    answer:
      "Listed hours are Monday to Saturday, 5:30 AM to 9:45 PM, and Sunday, 6:00 AM to 12:00 PM. Holiday hours are not documented, so confirm with the gym before visiting on a holiday.",
  },
  {
    id: "03",
    question: "What training programs are listed?",
    answer:
      "Personal training, HIIT, cycling, kickboxing, bodybuilding, functional training, yoga, Pilates, nutrition consulting and online classes. Class schedules and current availability are not published, so confirm with the gym.",
  },
  {
    id: "04",
    question: "What amenities are reported?",
    answer:
      "Lockers, shoe racks, showers, changing rooms, on-site parking, air conditioning and Wi-Fi are reported. Confirm current availability with the gym.",
  },
  {
    id: "05",
    question: "Is parking available?",
    answer:
      "On-site parking is reported. Confirm the current parking arrangements with the gym.",
  },
  {
    id: "06",
    question: "Does the gym offer personal training?",
    answer:
      "Personal training is listed. Cult.fit also describes a Kickstart onboarding pack with two one-on-one sessions, but the current offer and who is eligible should be confirmed with the gym.",
  },
  {
    id: "07",
    question: "How do I join or book?",
    answer:
      "The studio has its own partner page on Cult.fit for memberships and booking. You can also ask about joining on WhatsApp or by phone.",
  },
  {
    id: "08",
    question: "What are the membership prices?",
    answer:
      "The one-month to twelve-month rates shown here follow the cultpass PRO listing reported on Cult.fit. Prices can change with promotions, taxes, fees and plan eligibility, so check the current Cult.fit page or ask the team before paying.",
  },
];
