import { motion } from "framer-motion";
import { ease, itemVariants, viewport } from "../../utils/motion";

/* Shared scroll-reveal helpers. Each plays once, when ~20% of the element is on screen. */

/* Fade + slide a single block into view. `from` = "up" | "left" | "right". */
export function Reveal({ children, from = "up", delay = 0, className = "", as = "div" }) {
  const offset = { up: { y: 40 }, left: { x: -60 }, right: { x: 60 } }[from];
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </Tag>
  );
}

/* Container that reveals its <StaggerItem> children one after another. */
export function Stagger({ children, className = "", gap = 0.1 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
