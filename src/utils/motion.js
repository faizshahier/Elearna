/* Shared Framer Motion settings (Home page animations) */
export const ease = [0.22, 1, 0.36, 1];

/* Reveal once, when ~20% of the element is on screen */
export const viewport = { once: true, amount: 0.2 };

/* Fade + rise; used by <StaggerItem> and any motion element inside a <Stagger> */
export const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};
