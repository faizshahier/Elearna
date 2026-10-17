import { useEffect } from "react";
import { matchPath, Outlet, useLocation } from "react-router-dom";
import { getCategory, getCourse } from "../../data/courses";
import { getPost } from "../../data/posts";
import Footer from "./Footer";
import Navbar from "./Navbar";

/*
 * Header + footer per page, matching each design:
 *   overlay → see-through header laid over the page hero (turns solid on scroll)
 *   topBar  → thin info row (coaching / email / phone) above the menu
 *   footer  → "help" = footer with the Need help? column, "default" = footer with Quick links
 * Unknown course / post ids show the 404 page, so they get the plain chrome.
 */
const PLAIN = { overlay: false, topBar: false, footer: "default" };
const PHOTO = { overlay: true, topBar: true, footer: "help" };
const PAGE_CHROME = {
  "/courses": PHOTO,
  "/about": { ...PHOTO, topBar: false },
  "/pricing": PHOTO,
  "/blog": PHOTO,
  "/team": PHOTO,
  "/career": PHOTO,
  "/faq": { ...PHOTO, topBar: false },
  "/pages/courses": { overlay: true, topBar: false, footer: "default" },
};

function chromeFor(pathname) {
  const course = matchPath("/courses/:id", pathname);
  if (course) return getCourse(course.params.id) ? PHOTO : PLAIN;
  const post = matchPath("/blog/:slug", pathname);
  if (post) return getPost(post.params.slug) ? PHOTO : PLAIN;
  const category = matchPath("/category/:slug", pathname);
  if (category) return getCategory(category.params.slug) ? { overlay: true, topBar: false, footer: "help" } : PLAIN;
  return PAGE_CHROME[pathname] ?? PLAIN;
}

export default function Layout() {
  const { pathname } = useLocation();
  const chrome = chromeFor(pathname);

  // On every route change: scroll to top and name the browser tab after the page's main heading
  useEffect(() => {
    window.scrollTo(0, 0);
    const heading = document.querySelector("main h1")?.textContent.trim();
    document.title = pathname === "/" || !heading ? "Elearna — Online courses" : `${heading} | Elearna`;
  }, [pathname]);

  return (
    // --header-h = height of the fixed see-through header (top bar shows from md); heroes add it to their top padding
    <div
      className={`flex min-h-screen flex-col [&:has(.cta-overlap)]:[--footer-pt:14.5rem] ${
        !chrome.overlay
          ? ""
          : chrome.topBar
            ? "[--header-h:80px] md:[--header-h:125px] 2xl:[--header-h:141px]"
            : "[--header-h:80px] 2xl:[--header-h:88px]"
      }`}
    >
      <Navbar overlay={chrome.overlay} topBar={chrome.topBar} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer variant={chrome.footer} />
    </div>
  );
}
