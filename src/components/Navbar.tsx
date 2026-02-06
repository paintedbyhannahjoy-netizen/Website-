"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/brands", label: "Brands" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [closing, setClosing] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function closeSidebar() {
    setClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setClosing(false);
    }, 300);
  }

  return (
    <>
      {/* Floating pill navbar */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? "top-3" : "top-5"
        }`}
      >
        <div
          className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-purple-950/5 border border-purple-100/50"
              : "bg-white/60 backdrop-blur-md border border-purple-200/30"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="px-4 py-2 font-[family-name:var(--font-display)] text-base font-bold text-purple-950 tracking-tight whitespace-nowrap"
          >
            Hannah Joy
          </Link>

          {/* Desktop links as pills */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? "bg-purple-950 text-white"
                      : "text-purple-700 hover:bg-purple-50 hover:text-purple-950"
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
            className="lg:hidden relative w-10 h-10 rounded-full bg-purple-950 flex items-center justify-center group"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col items-center justify-center gap-[5px]">
              <span
                className={`block w-4 h-[1.5px] bg-white rounded-full transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 translate-y-[3.25px]"
                    : "group-hover:w-5"
                }`}
              />
              <span
                className={`block w-4 h-[1.5px] bg-white rounded-full transition-all duration-300 ${
                  isOpen
                    ? "-rotate-45 -translate-y-[3.25px]"
                    : "group-hover:w-3"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile sidebar overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-purple-950/30 backdrop-blur-sm ${
              closing ? "animate-fade-out" : "animate-fade-in"
            }`}
            onClick={closeSidebar}
          />

          {/* Sidebar */}
          <div
            className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-white/95 backdrop-blur-xl shadow-2xl ${
              closing ? "animate-slide-out" : "animate-slide-in"
            }`}
          >
            {/* Decorative top gradient */}
            <div className="h-1 w-full bg-gradient-to-r from-purple-300 via-purple-500 to-purple-300" />

            {/* Close button */}
            <div className="flex justify-end p-6">
              <button
                onClick={closeSidebar}
                className="w-10 h-10 rounded-full border border-purple-200 flex items-center justify-center text-purple-600 hover:bg-purple-50 transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Brand */}
            <div className="px-8 mb-8">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-purple-950">
                Hannah Joy
              </h2>
              <p className="text-sm text-purple-500 mt-1">
                UGC Creator & Makeup Artist
              </p>
              {/* Decorative swatch dots */}
              <div className="flex gap-2 mt-4">
                <span className="swatch-dot bg-purple-300" />
                <span className="swatch-dot bg-purple-500" />
                <span className="swatch-dot bg-purple-700" />
                <span className="swatch-dot bg-purple-950" />
              </div>
            </div>

            {/* Nav links */}
            <div className="px-8 space-y-1">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeSidebar}
                    className={`flex items-center gap-4 px-4 py-4 rounded-2xl text-lg transition-all duration-200 animate-fade-up ${
                      isActive
                        ? "bg-purple-950 text-white font-medium"
                        : "text-purple-800 hover:bg-purple-50 font-normal"
                    }`}
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isActive ? "bg-white" : "bg-purple-300"
                      }`}
                    />
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Bottom artistic element */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="border-t border-purple-100 pt-6">
                <div className="flex gap-6">
                  {[
                    {
                      label: "TikTok",
                      href: "https://tiktok.com/@paintedbyhannahjoy",
                    },
                    {
                      label: "Instagram",
                      href: "https://instagram.com/paintedbyhannahjoy",
                    },
                    {
                      label: "YouTube",
                      href: "https://youtube.com/@paintedbyhannahjoy",
                    },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-purple-500 hover:text-purple-950 transition-colors uppercase tracking-widest"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Abstract paint splatter decoration */}
              <div className="absolute bottom-32 -left-8 w-32 h-32 rounded-full bg-purple-100/40 blur-2xl" />
              <div className="absolute bottom-20 right-4 w-20 h-20 rounded-full bg-purple-200/30 blur-xl" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
