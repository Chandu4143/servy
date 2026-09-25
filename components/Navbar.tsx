/**
 * Navbar — fixed header with scroll-spy + mobile drawer.
 *
 * - Links come from `navLinks` in `data/site.ts`; section highlight comes
 *   from `sectionIds` via IntersectionObserver.
 * - Transparent over the indigo hero, frosted-white once scrolled.
 * - Mobile menu locks body scroll, closes on Escape, animates with
 *   framer-motion (disabled for reduced-motion users).
 * - All CTAs are `#download` placeholders — wire to real URLs later.
 */
"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { navLinks, sectionIds } from "@/data/site";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const shouldReduceMotion = useReducedMotion();

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeMenu]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const solidHeader = isScrolled || isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solidHeader
          ? "bg-white/85 shadow-[0_16px_40px_-32px_rgba(32,33,36,0.55)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-6 px-5 py-3.5 sm:px-8"
      >
        <a
          href="#home"
          onClick={closeMenu}
          aria-label="Servy home"
          className="flex items-center"
        >
          <Logo tone={solidHeader ? "dark" : "light"} />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    solidHeader
                      ? isActive
                        ? "bg-lavender text-brand"
                        : "text-ink-soft hover:text-brand"
                      : isActive
                        ? "bg-white/15 text-white"
                        : "text-white/75 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="#download"
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
              solidHeader
                ? "border-ink/10 text-ink hover:border-brand hover:text-brand"
                : "border-white/35 text-white hover:bg-white/10"
            }`}
          >
            Login
          </a>
          <a
            href="#download"
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
              solidHeader
                ? "bg-brand text-white hover:bg-brand-dark"
                : "bg-white text-brand hover:bg-white/90"
            }`}
          >
            Get Started
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className={`grid size-11 place-items-center rounded-full transition-colors duration-200 lg:hidden ${
            solidHeader
              ? "bg-lavender text-brand"
              : "bg-white/15 text-white hover:bg-white/25"
          }`}
        >
          {isOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </nav>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={
              shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }
            }
            animate={
              shouldReduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }
            }
            exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ink/5 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="mx-auto flex w-full max-w-[1240px] flex-col gap-1 px-5 py-4 sm:px-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block rounded-2xl px-4 py-3 text-base font-medium text-ink-soft transition-colors duration-200 hover:bg-canvas hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#download"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-brand px-4 py-3.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-brand-dark"
                >
                  Get Started
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
