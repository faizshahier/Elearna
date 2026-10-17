import { images, unsplash } from "./images";

export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.",
    name: "Linda Grady",
    role: "Co-assistant manager",
    image: images.testimonial,
  },
  {
    quote:
      "The courses are clear and practical. I finished the full-stack track in three months and landed my first developer job right after. Highly recommended for anyone starting out.",
    name: "Darnell Kuphal",
    role: "Junior developer",
    image: unsplash("1507003211169-0a1dd7228f2d"),
  },
  {
    quote:
      "Flexible lessons fit around my work schedule, and the instructors always answered my questions quickly. The certificate helped me get a promotion.",
    name: "Tonya Flatley",
    role: "Marketing lead",
    image: unsplash("1438761681033-6461ffad8d80"),
  },
];

/* About page slider starts with Jim Adams (from the About design) */
export const aboutTestimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.",
    name: "Jim Adams",
    role: "Designer",
    image: unsplash("1506794778202-cad84cf45f1d"),
  },
  ...testimonials,
];
