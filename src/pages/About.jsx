import BecomeInstructor from "../components/about/BecomeInstructor";
import CenteredTestimonial from "../components/about/CenteredTestimonial";
import FeatureBar from "../components/about/FeatureBar";
import OurStory from "../components/about/OurStory";
import WhySteps from "../components/about/WhySteps";
import PhotoCta from "../components/course/PhotoCta";
import Partners from "../components/home/Partners";
import Personalized from "../components/home/Personalized";
import { unsplash } from "../data/images";

export default function About() {
  return (
    <>
      <OurStory />
      <FeatureBar />
      <WhySteps />
      <Personalized
        variant="circle"
        imgOne={unsplash("1588196749597-9ff075ee6b5b", 600)}
        imgTwo={unsplash("1515378791036-0648a3ef77b2", 900)}
      />
      <Partners dark />
      <BecomeInstructor />
      <CenteredTestimonial />
      <PhotoCta />
    </>
  );
}
