import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Hannah Joy",
  description:
    "Self-taught makeup artist, content creator, 70M+ views. Started in March 2025. Still going.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="pt-40 pb-20 px-6 bg-cream-200 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #EDD5CA 0%, transparent 70%)" }}
        />
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-ink-muted tracking-widest uppercase mb-6 animate-fade-up">About</p>
          <h1 className="font-display italic text-5xl md:text-7xl text-ink leading-tight animate-fade-up animation-delay-100">
            I&apos;ve been doing this<br />since I was three.
          </h1>
        </div>
      </section>

      {/* ── Bio ── */}
      <section className="bg-cream-100 section">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            {/* Pull quote */}
            <div className="md:col-span-4">
              <div className="sticky top-28">
                <div className="w-8 h-px bg-mauve mb-6" />
                <p className="font-display italic text-2xl text-ink leading-snug">
                  &ldquo;Self-taught.
                  Still figuring it out.
                  Still growing.&rdquo;
                </p>
                <div className="mt-8 flex gap-4">
                  <div>
                    <p className="font-display text-3xl text-ink leading-none">70M+</p>
                    <p className="text-xs text-ink-muted tracking-widest uppercase mt-1">Views</p>
                  </div>
                  <div className="w-px bg-cream-400 mx-2" />
                  <div>
                    <p className="font-display text-3xl text-ink leading-none">26K</p>
                    <p className="text-xs text-ink-muted tracking-widest uppercase mt-1">Instagram</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio text */}
            <div className="md:col-span-7 md:col-start-6">
              <div className="space-y-5 text-ink-soft leading-relaxed text-base">
                <p className="text-lg text-ink font-display italic">
                  I&apos;ve loved makeup since I was three years old.
                </p>
                <p>
                  Self-taught — no cosmetology school, no formal training. Just years of
                  experimenting, watching, and practicing. Makeup for me has always been
                  less about looking good and more about seeing what&apos;s possible.
                  What happens when you stitch ribbon into an eyelid? What does a lipstick
                  print look like blown up and abstracted?
                </p>
                <p>
                  In March 2025, I started a brand new TikTok account. Zero followers.
                  I just started posting — daily, because I wanted to see what would happen
                  if I actually committed. By September I was at 50K. The threadwork videos
                  caught people off guard. That was the point.
                </p>
                <p>
                  Now at 26K on Instagram, 70 million views across platforms, and I still
                  post every day. I&apos;ve worked with brands I genuinely admire — Urban
                  Decay, Farmacy, Byredo (PR seeding), Doja Cat&apos;s team, and others.
                  I care about the work. That hasn&apos;t changed.
                </p>
                <p>
                  I&apos;m not trying to be an influencer. I&apos;m trying to make things
                  that are worth making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-cream-200 section border-t border-cream-400/40">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs text-ink-muted tracking-widest uppercase mb-14">The Timeline</p>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-cream-400" />

            <div className="space-y-12 pl-10">
              {[
                {
                  date: "March 2025",
                  headline: "Started over.",
                  body: "Brand new TikTok. Zero followers. Zero expectations. Just started posting and kept going.",
                },
                {
                  date: "Summer 2025",
                  headline: "The threadwork videos took off.",
                  body: "The stitched-ribbon makeup series caught people's attention in a way I didn't expect. Comments were something like: 'I've never seen this before.' That felt right.",
                },
                {
                  date: "September 2025",
                  headline: "50K on TikTok.",
                  body: "Six months of daily posting. It's not a hack. It's just showing up.",
                },
                {
                  date: "Late 2025",
                  headline: "Brand campaigns start.",
                  body: "Urban Decay, Farmacy, Doja Cat's team. Byredo sent product. I was honest about each one — I don't do mystery.",
                },
                {
                  date: "Today",
                  headline: "70M+ views. Still posting daily.",
                  body: "26K Instagram, 50K TikTok, more incoming. Still self-taught. Still figuring things out. Still having fun with it.",
                  current: true,
                },
              ].map(({ date, headline, body, current }) => (
                <div key={date} className="relative">
                  {/* Dot */}
                  <div
                    className={`absolute -left-10 top-1.5 w-2 h-2 rounded-full border ${
                      current
                        ? "bg-mauve border-mauve"
                        : "bg-cream-200 border-cream-500"
                    }`}
                  />

                  <p className="text-xs text-ink-muted tracking-widest uppercase mb-2">{date}</p>
                  <h3 className="font-display text-xl md:text-2xl text-ink mb-2">{headline}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed max-w-lg">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-cream-100 section border-t border-cream-400/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Process over polish",
                body: "The most-watched videos are the ones where something is happening — pigment being mixed, ribbon being placed. I film the work, not the result.",
              },
              {
                num: "02",
                title: "Daily means daily",
                body: "Not 'posting often.' Every day. That consistency is how I know what works and what doesn't. It's also how the algorithm gets to know you.",
              },
              {
                num: "03",
                title: "Honest about the collabs",
                body: "If something was gifted, I say so. If it was a campaign, I say so. Byredo sent product — that's PR seeding, and I'll call it that. Trust is the whole thing.",
              },
            ].map(({ num, title, body }) => (
              <div key={num} className="border-t border-cream-400 pt-6">
                <p className="font-display text-4xl text-cream-400 leading-none mb-4">{num}</p>
                <h3 className="font-display text-lg text-ink mb-3">{title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-ink section">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display italic text-3xl md:text-4xl text-cream-100 mb-2">
              Want to make something?
            </h2>
            <p className="text-sm text-cream-500">
              Brand campaigns, creator collabs, or just a conversation.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/work-with-me" className="btn-light">
              Work With Me
            </Link>
            <Link href="/work" className="text-sm text-cream-400 border-b border-cream-600 pb-px hover:text-cream-100 hover:border-cream-400 transition-colors self-end mb-1">
              See my work →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
