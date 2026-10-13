import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
  const { pathname } = useLocation();

  // On every route change: scroll to top and name the browser tab after the page's main heading
  useEffect(() => {
    window.scrollTo(0, 0);
    const heading = document.querySelector("main h1")?.textContent.trim();
    document.title = pathname === "/" || !heading ? "Elearna — Online courses" : `${heading} | Elearna`;
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col [&:has(.cta-overlap)]:[--footer-pt:14.5rem]">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
