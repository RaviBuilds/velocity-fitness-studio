import type { GalleryItem } from "./types";

/**
 * Master gallery data. This array is authoritative for display order —
 * filename order is not a data dependency. Every item requires alt text
 * describing the actual image.
 *
 * VELOCITY FITNESS STUDIO — operator-supplied photographs of the actual
 * studio (public/assets/gallery/velocity-fitness-studio-srinagar-colony-gallery-*.jpg),
 * renamed from their original upload names to the asset-contract pattern.
 * Alt text describes only what is visible in each frame.
 *
 * ORDER is editorial: wide floor, strength floor, members training, cardio,
 * turf lane, then reception.
 *
 * No claim, count, award or superlative is encoded here.
 */
const GALLERY = "/assets/gallery/velocity-fitness-studio-srinagar-colony-gallery";

export const galleryItems: GalleryItem[] = [
  {
    src: `${GALLERY}-training-floor.jpg`,
    alt: "Velocity Fitness Studio training floor in Srinagar Colony with cable machines, dumbbell racks and plate-loaded equipment",
  },
  {
    src: `${GALLERY}-strength-floor.jpg`,
    alt: "Adjustable benches, cable station and weight plates on the strength floor at Velocity Fitness Studio",
  },
  {
    src: `${GALLERY}-lat-pulldown-training.jpg`,
    alt: "Member training on a pulldown machine at Velocity Fitness Studio",
  },
  {
    src: `${GALLERY}-seated-machine-training.jpg`,
    alt: "Member training on a seated plate-loaded machine at Velocity Fitness Studio",
  },
  {
    src: `${GALLERY}-cardio-area.jpg`,
    alt: "Row of treadmills beside a window in the cardio area at Velocity Fitness Studio",
  },
  {
    src: `${GALLERY}-turf-training-lane.jpg`,
    alt: "Green turf training lane with step platform and racks at Velocity Fitness Studio",
  },
  {
    src: `${GALLERY}-reception.jpg`,
    alt: "Reception desk with Cult and Velocity Fitness Studio signage",
  },
];
