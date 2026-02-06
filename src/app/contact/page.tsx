"use client";

import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100/30">
        <div className="absolute top-[25%] right-[12%] w-72 h-72 rounded-full bg-purple-200/25 blur-3xl animate-float" />
        <div className="absolute bottom-[10%] left-[8%] w-48 h-48 rounded-full bg-purple-300/20 blur-2xl animate-pulse-glow" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-950/5 border border-purple-200/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span className="text-purple-600 text-sm font-medium tracking-wide">
              Contact
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold leading-[0.95] mb-6">
            <span className="gradient-text">Let&apos;s Work</span>
            <br />
            <span className="brush-underline text-purple-950">Together</span>
          </h1>
          <p className="text-purple-600 text-lg max-w-2xl mx-auto">
            Have a project in mind? Fill out the form below and I&apos;ll get
            back to you within 48 hours.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
        <div className="max-w-2xl mx-auto px-6">
          {submitted ? (
            <div className="text-center py-16 animate-fade-up">
              <div className="w-20 h-20 rounded-full bg-purple-50 border border-purple-200/50 flex items-center justify-center mx-auto mb-8">
                <svg
                  className="w-8 h-8 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold gradient-text mb-4">
                Message Sent
              </h2>
              <p className="text-purple-600 text-lg">
                Thank you for reaching out. I&apos;ll review your inquiry and
                get back to you soon.
              </p>
            </div>
          ) : (
            <div className="glass-card rounded-3xl p-8 md:p-12">
              {/* Decorative top accent */}
              <div className="flex gap-2 mb-8">
                <div className="w-8 h-1 rounded-full bg-purple-300" />
                <div className="w-12 h-1 rounded-full bg-purple-400" />
                <div className="w-6 h-1 rounded-full bg-purple-300" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-purple-400 uppercase tracking-[0.15em] mb-3"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-5 py-3.5 rounded-xl border border-purple-200/50 bg-white text-purple-950 placeholder:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-300 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-semibold text-purple-400 uppercase tracking-[0.15em] mb-3"
                    >
                      Company / Brand
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-5 py-3.5 rounded-xl border border-purple-200/50 bg-white text-purple-950 placeholder:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-300 transition-all"
                      placeholder="Your company or brand"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-purple-400 uppercase tracking-[0.15em] mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-5 py-3.5 rounded-xl border border-purple-200/50 bg-white text-purple-950 placeholder:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-300 transition-all"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="details"
                    className="block text-xs font-semibold text-purple-400 uppercase tracking-[0.15em] mb-3"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    required
                    rows={5}
                    className="w-full px-5 py-3.5 rounded-xl border border-purple-200/50 bg-white text-purple-950 placeholder:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-300 transition-all resize-none"
                    placeholder="Tell me about your project — goals, timeline, platforms, budget range, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-3 py-4 bg-purple-950 text-white rounded-full text-sm font-medium hover:bg-purple-800 transition-all duration-300 hover:shadow-xl hover:shadow-purple-950/20"
                >
                  Send Message
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </form>
            </div>
          )}

          {/* Social Links */}
          <div className="mt-16 text-center">
            <p className="text-xs font-semibold text-purple-400 uppercase tracking-[0.2em] mb-6">
              Or find me on
            </p>
            <div className="flex justify-center gap-4">
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
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full border border-purple-200/50 text-sm font-medium text-purple-700 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
