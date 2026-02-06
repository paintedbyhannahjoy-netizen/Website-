"use client";

import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production, wire this to an API route or service like Formspree/Resend
    setSubmitted(true);
  }

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-purple-500 text-sm font-medium uppercase tracking-widest mb-4">
            Contact
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-purple-950 leading-tight">
            Let&apos;s Work Together
          </h1>
          <p className="mt-4 text-purple-600 text-lg max-w-2xl mx-auto">
            Have a project in mind? Fill out the form below and I&apos;ll get
            back to you within 48 hours.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          {submitted ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-purple-600"
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
              <h2 className="text-2xl font-bold text-purple-950 mb-3">
                Message Sent
              </h2>
              <p className="text-purple-600">
                Thank you for reaching out. I&apos;ll review your inquiry and
                get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-purple-800 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-purple-950 placeholder:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-shadow"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-purple-800 mb-2"
                >
                  Company / Brand
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-purple-950 placeholder:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-shadow"
                  placeholder="Your company or brand name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-purple-800 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-purple-950 placeholder:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-shadow"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="details"
                  className="block text-sm font-medium text-purple-800 mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-purple-950 placeholder:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-shadow resize-none"
                  placeholder="Tell me about your project — goals, timeline, platforms, budget range, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-purple-950 text-white rounded-full text-sm font-medium hover:bg-purple-800 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          )}

          {/* Social Links */}
          <div className="mt-16 pt-12 border-t border-purple-100 text-center">
            <h3 className="text-sm font-semibold text-purple-500 uppercase tracking-wider mb-6">
              Or find me on
            </h3>
            <div className="flex justify-center gap-8">
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
                  className="text-purple-700 hover:text-purple-950 transition-colors font-medium"
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
