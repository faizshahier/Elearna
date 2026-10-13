import { useParams } from "react-router-dom";
import CourseHero from "../components/course/CourseHero";
import CourseTabs from "../components/course/CourseTabs";
import PhotoCta from "../components/course/PhotoCta";
import RelatedCourses from "../components/course/RelatedCourses";
import { getCourse } from "../data/courses";
import NotFound from "./NotFound";

export default function CourseDetails() {
  const { id } = useParams();
  const course = getCourse(id);

  if (!course) return <NotFound />;

  return (
    <>
      <CourseHero course={course} />
      {/* key resets the tabs when moving to another course */}
      <CourseTabs key={course.id} course={course} />
      <RelatedCourses course={course} />
      <PhotoCta />
    </>
  );
}
