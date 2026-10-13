import { motion } from "framer-motion";
import { itemVariants } from "../../utils/motion";
import heroArt from "../../assets/hero-student.webp";
import { images } from "../../data/images";
import Button from "../ui/Button";

/* Gentle up-and-down bob for the floating hero cards */
const float = (delay) => ({
  animate: { y: [0, -10, 0] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
});

/*
 * The student artwork comes from the design (src/assets/Home.png).
 * The two cards are real HTML laid on top of the artwork. Every size and position
 * is a % / cqw of the artwork's width, so they stay lined up at any screen size.
 */
function HeroArt() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="@container relative aspect-[1060/1141] w-full">
      <img
        src={heroArt}
        alt="Smiling student with glasses holding books"
        className="absolute inset-0 h-full w-full"
        fetchPriority="high"
      />
      {/* yellow dot sits inside the image's soft right edge, so it is drawn here at full strength */}
      <span className="absolute left-[93.21%] top-[54.78%] h-[1.98cqw] w-[1.98cqw] rounded-full bg-accent" aria-hidden="true" />

      {/* 125+ Achievement awards */}
      <motion.div {...float(0)} className="absolute left-[14.53%] top-[56.35%] flex min-h-[10.08%] w-[31.98%] min-w-[140px] items-center py-[1cqw] gap-[1.81cqw] rounded-[1.33cqw] bg-[#f2f8f2] px-[2.48cqw] text-ink">
        <svg className="h-[5.53cqw] w-[5.53cqw] shrink-0" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
          <path strokeLinejoin="round" d="M4 6h36v24H26l-8 8v-8H4z" />
          <path strokeLinecap="round" d="M10 13h22M10 18h16M10 23h10" />
          <path strokeLinejoin="round" d="M37 27l2.6 5.2 5.7.8-4.1 4 1 5.7-5.2-2.7-5.1 2.7 1-5.7-4.2-4 5.8-.8z" fill="#f2f8f2" />
        </svg>
        <div className="leading-tight">
          <p className="font-heading text-[max(3.1cqw,13px)] font-medium leading-none">125+</p>
          <p className="mt-[0.9cqw] text-[max(2.05cqw,10px)]">Achievement awards</p>
        </div>
      </motion.div>

      {/* Trusted by 15000+ enrolled students */}
      <motion.div {...float(1.2)} className="absolute left-[59.25%] top-[65.56%] flex min-h-[19.81%] w-[31.98%] min-w-[140px] flex-col pb-[2cqw] items-center rounded-[3.81cqw] bg-[#0e262a] pt-[3.05cqw] text-center text-white">
        <p className="text-[max(1.95cqw,9px)] leading-none text-white/60">Trusted By</p>
        <p className="mt-[1.33cqw] text-[max(2.5cqw,11px)] leading-none">15000+ enrolled students</p>
        <div className="mt-[1.62cqw] flex -space-x-[1.7cqw]">
          {images.avatars.map((src) => (
            <img key={src} src={src} alt="" className="h-[4.72cqw] w-[4.72cqw] rounded-full border-[0.33cqw] border-white object-cover" />
          ))}
        </div>
        <p className="mt-[2.48cqw] flex items-center gap-[1.33cqw] text-[max(1.95cqw,9px)] leading-none">
          <span className="text-[max(2.3cqw,10px)] tracking-[0.05em] text-accent" aria-label="Rated 4.94 out of 5">
            ★★★★★
          </span>
          4.94 (625)
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="bg-doodle overflow-hidden">
      <div className="mx-auto grid max-w-[1920px] items-center gap-10 lg:grid-cols-[1060fr_860fr] lg:gap-0">
        <HeroArt />

        {/* Text side */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } } }}
          className="px-4 pb-16 text-white sm:px-6 lg:pb-0 lg:pl-[5.2%] lg:pr-8"
        >
          <motion.p variants={itemVariants} className="text-sm font-medium uppercase tracking-wide xl:text-lg">Online learning</motion.p>
          <motion.h1 variants={itemVariants} className="mt-4 font-heading text-4xl font-semibold leading-[1.08] sm:text-5xl xl:text-[64px] 2xl:text-[76px]">
            More then <span className="text-accent">25000+</span> education courses online
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-6 max-w-xl text-base leading-relaxed text-white/90 xl:text-xl xl:leading-[1.8]">
            Lorem ipsum dolor sit amet consectetur. Gravida enim risus sollicitudin mauris tincidunt commodo ornare.
          </motion.p>
          <motion.div variants={itemVariants}>
              <Button to="/courses" variant="ghostLight" className="mt-10 h-12 px-10 xl:h-16 xl:px-14 xl:text-lg">
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
