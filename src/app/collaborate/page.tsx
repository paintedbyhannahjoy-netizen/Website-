"use client";

import { useState } from "react";

export default function CollaboratePage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire this to your backend / Resend / form service
    setSubmitted(true);
  }

  return (
    <>
      {/* ── Header ── */}
      <section className="pt-40 pb-20 px-6 bg-cream-200 relative overflow-hidden">
        <div
          className="absolute bottom-0 right-0 w-72 h-72 rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #EDD5CA 0%, transparent 70%)" }}
        />
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-ink-muted tracking-widest uppercase mb-6 animate-fade-up">
            For Creators
          </p>
          <h1 className="font-display italic text-5xl md:text-7xl text-ink leading-tight animate-fade-up animation-delay-100 mb-6">
            Let&apos;s make<br />something.
          </h1>
          <p className="text-ink-soft max-w-md text-base leading-relaxed animate-fade-up animation-delay-200">
            If you&apos;re a creator with an idea that needs a collaborator — a
            concept, a technique, a space, a product, an audience — this is the
            place to reach out.
          </p>
        </div>
      </section>

      {/* ── The note ── */}
      <section className="bg-cream-100 section">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Left — context */}
            <div className="md:col-span-4">
              <div className="sticky top-28">
                <div className="w-8 h-px bg-sage mb-6" />
                <p className="font-display italic text-xl text-ink leading-snug mb-6">
                  &ldquo;Slip a note under the door.&rdquo;
                </p>
                <p className="text-sm text-ink-muted leading-relaxed mb-8">
                  This isn&apos;t a corporate form. There&apos;s no RFP process.
                  Tell me who you are and what you&apos;re thinking. If the
                  chemistry feels right, I&apos;ll reach out.
                </p>
                <div className="space-y-3">
                  <p className="text-xs text-ink-muted tracking-widest uppercase">
                    What I&apos;m open to
                  </p>
                  {[
                    "Dual-creator videos",
                    "Technique exchanges",
                    "Co-created series",
                    "Space or studio swaps",
                    "Product co-development",
                    "Something I haven't thought of",
                  ].map((item) => (
                    <p key={item} className="text-sm text-ink-soft flex gap-2">
                      <span className="text-ink-muted">—</span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="md:col-span-7 md:col-start-6">
              {submitted ? (
                <div className="py-16">
                  <p className="font-display italic text-3xl text-ink mb-4">
                    Note received.
                  </p>
                  <p className="text-ink-soft leading-relaxed max-w-sm">
                    If the chemistry feels right, you&apos;ll hear from me within
                    a week. Thank you for reaching out.
                  </p>
                  <div className="mt-8 w-8 h-px bg-sage" />
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="block text-xs text-ink-muted tracking-widest uppercase mb-3">
                      Name + creator handle
                    </label>
                    <input
                      type="text"
                      name="handle"
                      required
                      placeholder="Your name · @yourhandle"
                      className="input-studio"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-ink-muted tracking-widest uppercase mb-3">
                      Primary platform + link
                    </label>
                    <input
                      type="text"
                      name="platform"
                      required
                      placeholder="TikTok · tiktok.com/@yourhandle"
                      className="input-studio"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-ink-muted tracking-widest uppercase mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="input-studio"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-ink-muted tracking-widest uppercase mb-3">
                      What you&apos;re bringing
                    </label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {[
                        "A concept",
                        "A technique",
                        "An audience",
                        "A space",
                        "A product",
                        "Something else",
                      ].map((opt) => (
                        <label
                          key={opt}
                          className="flex items-center gap-2 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            name="bringing"
                            value={opt}
                            className="sr-only peer"
                          />
                          <span className="text-xs px-3 py-1.5 border border-cream-400 text-ink-muted peer-checked:border-ink peer-checked:text-ink peer-checked:bg-cream-300 transition-all cursor-pointer">
                            {opt}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-ink-muted tracking-widest uppercase mb-3">
                      The idea — 2 or 3 sentences
                    </label>
                    <textarea
                      name="idea"
                      required
                      placeholder="What do you have in mind? Keep it loose — I just want to get a sense of the energy."
                      className="input-studio"
                      rows={4}
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-ink-muted tracking-widest uppercase mb-3">
                      Rough availability
                    </label>
                    <input
                      type="text"
                      name="availability"
                      placeholder="e.g. Open starting April, or flexible, or specific dates"
                      className="input-studio"
                    />
                  </div>

                  <div className="pt-4">
                    <button type="submit" className="btn-primary">
                      Send it →
                    </button>
                    <p className="text-xs text-ink-muted mt-4">
                      No automatic responses. If I&apos;m interested, I&apos;ll write back personally.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Direct line ── */}
      <section className="bg-cream-200 section border-t border-cream-400/40">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-xs text-ink-muted tracking-widest uppercase mb-3">Direct line</p>
            <h2 className="font-display text-2xl text-ink mb-2">
              Prefer to email directly?
            </h2>
            <p className="text-sm text-ink-muted">
              Works too. I read every email.
            </p>
          </div>
          <a
            href="mailto:hello@paintedbyhannahjoy.com"
            className="btn-outline flex-shrink-0"
          >
            hello@paintedbyhannahjoy.com
          </a>
        </div>
      </section>
    </>
  );
}
