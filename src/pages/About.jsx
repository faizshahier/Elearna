import BecomeInstructor from "../components/about/BecomeInstructor";
import CenteredTestimonial from "../components/about/CenteredTestimonial";
import FeatureBar from "../components/about/FeatureBar";
import OurStory from "../components/about/OurStory";
import WhySteps from "../components/about/WhySteps";
import PhotoCta from "../components/course/PhotoCta";
import { unsplash } from "../data/images";
import { aboutTestimonials } from "../data/testimonials";
import { Partners, Personalized, Reveal } from "./Home";

export default function About() {
  return (
    <>
      <OurStory />
      <FeatureBar />
      <WhySteps />
      <Reveal from="left">
        <Personalized
          variant="circle"
          imgOne={unsplash("1588196749597-9ff075ee6b5b", 600)}
          imgTwo={unsplash("1515378791036-0648a3ef77b2", 900)}
        />
      </Reveal>
      <Reveal>
        <Partners dark />
      </Reveal>
      <BecomeInstructor />
      <CenteredTestimonial items={aboutTestimonials} />
      <PhotoCta />
    </>
  );
}
