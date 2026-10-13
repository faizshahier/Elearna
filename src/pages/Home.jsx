import { MotionConfig } from "framer-motion";
import Categories from "../components/home/Categories";
import CtaBanner from "../components/home/CtaBanner";
import Hero from "../components/home/Hero";
import Partners from "../components/home/Partners";
import Personalized from "../components/home/Personalized";
import PromoBanners from "../components/home/PromoBanners";
import Testimonials from "../components/home/Testimonials";
import TopCourses from "../components/home/TopCourses";
import TopPrograms from "../components/home/TopPrograms";
import WhyUs from "../components/home/WhyUs";
import { Reveal } from "../components/ui/Reveal";

export default function Home() {
  return (
    // reducedMotion="user": visitors who turn off animations in their OS settings get no motion
    <MotionConfig reducedMotion="user">
      <Hero />
      <Reveal>
        <Partners />
      </Reveal>
      <Categories />
      <Reveal>
        <PromoBanners />
      </Reveal>
      <TopCourses />
      <Reveal from="left">
        <Personalized />
      </Reveal>
      <Testimonials />
      <TopPrograms />
      <WhyUs />
      <Reveal>
        <CtaBanner top="bg-light" />
      </Reveal>
    </MotionConfig>
  );
}
