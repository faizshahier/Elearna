import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

/*
 * "Your Cart" panel that slides in from the right over a dark backdrop.
 * Closes with ✕, a click on the backdrop, or Esc. There is no cart system yet, so it is always empty.
 * Rendered into <body> so it sits above the fixed site header.
 */
export default function CartDrawer({ open, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden"; // stop the page scrolling behind the panel
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return createPortal(
    <div className={`fixed inset-0 z-[100] ${open ? "" : "pointer-events-none invisible"}`} aria-hidden={!open}>
      {/* backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
      />

      {/* panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        className={`absolute inset-y-0 right-0 flex w-[calc(100%-1rem)] max-w-[536px] flex-col bg-light text-ink shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink/40 px-7 py-4">
          <h2 id="cart-title" className="font-heading text-2xl font-medium">
            Your Cart
          </h2>
          <button ref={closeRef} onClick={onClose} aria-label="Close cart" className="text-ink">
            <IoClose className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-1 items-center justify-center px-7">
          <p className="text-lg text-muted">No items found.</p>
        </div>
      </aside>
    </div>,
    document.body,
  );
}
