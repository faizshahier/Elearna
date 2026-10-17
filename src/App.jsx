import { MotionConfig } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Career from "./pages/Career";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import CourseDetails from "./pages/CourseDetails";
import Courses from "./pages/Courses";
import Events from "./pages/Events";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";

export default function App() {
  return (
    // reducedMotion="user": visitors who turn off animations in their OS settings get no motion
    <MotionConfig reducedMotion="user">
      <Routes>
        {/* Login / Register are full-screen pages with their own logo + footer bar (no site header/footer) */}
        <Route path="login" element={<Auth key="login" mode="login" />} />
        <Route path="register" element={<Auth key="register" mode="register" />} />
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetails />} />
          <Route path="pages/courses" element={<Courses key="pages" variant="pages" />} />
          <Route path="category/:slug" element={<Category />} />
          <Route path="events" element={<Events />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="team" element={<Team />} />
          <Route path="faq" element={<Faq />} />
          <Route path="career" element={<Career />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </MotionConfig>
  );
}
