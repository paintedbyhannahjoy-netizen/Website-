"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/collaborate", label: "Collaborate" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [closing, setClosing] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  function closeSidebar() {
    setClosing(true);
    setTimeout(() => { setIsOpen(false); setClosing(false); }, 300);
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 border-b border-cream-400/40 bg-cream-200/90 backdrop-blur-md"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-display text-lg tracking-tight text-ink leading-none"
          >
            Hannah Joy
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(1).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide transition-all duration-200 ${
                    isActive
                      ? "text-ink border-b border-ink pb-px"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => (isOpen ? closeSidebar() : setIsOpen(true))}
            className="md:hidden flex flex-col gap-[5px] items-end py-1 pl-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px bg-ink transition-all duration-300 ${
                isOpen ? "w-5 rotate-45 translate-y-[6px]" : "w-5"
              }`}
            />
            <span
              className={`block h-px bg-ink transition-all duration-300 ${
                isOpen ? "w-5 -rotate-45 -translate-y-[6px]" : "w-3"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-ink/20 ${
              closing ? "animate-fade-out" : "animate-fade-in"
            }`}
            onClick={closeSidebar}
          />

          {/* Drawer */}
          <div
            className={`absolute top-0 right-0 w-72 h-full bg-cream-100 ${
              closing ? "animate-slide-out" : "animate-slide-in"
            }`}
          >
            {/* Top accent */}
            <div className="h-px w-full bg-cream-400" />

            <div className="p-8 pt-10">
              {/* Brand */}
              <p className="font-display text-2xl text-ink mb-1">Hannah Joy</p>
              <p className="text-xs text-ink-muted tracking-widest uppercase mb-10">
                @paintedbyhannahjoy
              </p>

              {/* Links */}
              <nav className="space-y-1">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeSidebar}
                      className={`flex items-center gap-3 py-3 text-base border-b border-cream-300 transition-colors animate-fade-up ${
                        isActive
                          ? "text-ink"
                          : "text-ink-muted hover:text-ink"
                      }`}
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      {isActive && (
                        <span className="w-1 h-1 rounded-full bg-mauve flex-shrink-0" />
                      )}
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Social */}
              <div className="mt-10 flex gap-6">
                {[
                  { label: "TikTok", href: "https://tiktok.com/@paintedbyhannahjoy" },
                  { label: "IG", href: "https://instagram.com/paintedbyhannahjoy" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-ink-muted hover:text-ink tracking-widest uppercase transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
