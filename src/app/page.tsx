import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 overflow-hidden bg-cream-200">
        {/* Faint pigment smudge — top left */}
        <div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #EDD5CA 0%, transparent 70%)" }}
        />
        {/* Faint pigment smudge — bottom right */}
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #D4DFCC 0%, transparent 70%)" }}
        />

        {/* Handle — top right */}
        <div className="flex justify-end max-w-6xl mx-auto w-full">
          <span className="text-xs text-ink-muted tracking-widest uppercase animate-fade-in">
            @paintedbyhannahjoy
          </span>
        </div>

        {/* Main wordmark */}
        <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full">
          <div className="animate-fade-up">
            <h1
              className="font-display italic text-ink leading-none tracking-tight"
              style={{ fontSize: "clamp(5rem, 18vw, 16rem)" }}
            >
              painted.
            </h1>
          </div>

          <div className="mt-8 max-w-lg animate-fade-up animation-delay-200">
            <p className="text-base md:text-lg text-ink-soft leading-relaxed">
              Self-taught makeup artist. 70M+ views. Daily poster.
            </p>
          </div>

          {/* Two paths */}
          <div className="mt-12 flex flex-wrap items-center gap-4 animate-fade-up animation-delay-400">
            <Link href="/work" className="btn-primary">
              Watch My Work
              <span className="ml-2 opacity-60">↗</span>
            </Link>
            <Link href="/work-with-me" className="btn-outline">
              Work With Me
            </Link>
          </div>
        </div>

        {/* Stats strip — bottom */}
        <div className="max-w-6xl mx-auto w-full animate-fade-up animation-delay-600">
          <div className="rule-ink mb-8" />
          <div className="flex flex-wrap gap-10 md:gap-16">
            {[
              { num: "70M+", label: "Views" },
              { num: "26K", label: "Instagram" },
              { num: "50K", label: "TikTok" },
              { num: "Daily", label: "Posting" },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="font-display text-3xl md:text-4xl text-ink leading-none">{num}</p>
                <p className="text-xs text-ink-muted tracking-widest uppercase mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What I make ── */}
      <section className="bg-cream-100 section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div>
              <p className="text-xs text-ink-muted tracking-widest uppercase mb-4">The Work</p>
              <h2 className="font-display text-4xl md:text-5xl text-ink leading-snug mb-6">
                Makeup as a medium,<br />
                <em>not a service.</em>
              </h2>
              <p className="text-ink-soft leading-relaxed mb-8">
                Threadwork. Ribbon. Pigment. Process. What I post isn&apos;t
                a tutorial — it&apos;s a document of something I&apos;m
                figuring out. That&apos;s what keeps people watching.
              </p>
              <Link href="/work" className="text-sm text-ink border-b border-ink/30 pb-px hover:border-ink/70 transition-colors">
                Browse the portfolio →
              </Link>
            </div>

            {/* Category cards */}
            <div className="grid grid-cols-1 gap-3">
              {[
                {
                  title: "Threadwork",
                  desc: "Stitched and ribbon-based techniques — the series that started it all.",
                  bg: "bg-mauve-light",
                },
                {
                  title: "The Kiss",
                  desc: "Lipstick print techniques, abstract and precise.",
                  bg: "bg-sage-light",
                },
                {
                  title: "Transformations",
                  desc: "Character work, cosplay, full editorial looks.",
                  bg: "bg-gold-light",
                },
              ].map(({ title, desc, bg }) => (
                <Link
                  key={title}
                  href="/work"
                  className={`${bg} p-6 flex items-center justify-between group hover-lift`}
                >
                  <div>
                    <p className="font-display text-xl text-ink mb-1">{title}</p>
                    <p className="text-sm text-ink-muted">{desc}</p>
                  </div>
                  <span className="text-ink-muted group-hover:text-ink transition-colors ml-4 flex-shrink-0 text-lg">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Work ── */}
      <section className="bg-ink section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-baseline justify-between mb-12">
            <div>
              <p className="text-xs text-cream-500 tracking-widest uppercase mb-3">Featured</p>
              <h2 className="font-display italic text-3xl md:text-4xl text-cream-100">
                The ones people keep watching.
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden md:block text-sm text-cream-500 border-b border-cream-700 pb-px hover:text-cream-200 hover:border-cream-500 transition-colors flex-shrink-0 ml-8"
            >
              All work →
            </Link>
          </div>

          {/* 3-up grid: 1 tall + 2 stacked */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Hero card — Junji Ito Yuuko (7.1M total) */}
            <a
              href="https://www.tiktok.com/t/ZP8Ck4gjA/"
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-7 bg-cream-200/5 border border-cream-700/40 p-8 flex flex-col justify-between min-h-64 hover:bg-cream-200/10 transition-colors group"
            >
              <div>
                <p className="text-xs text-cream-600 tracking-widest uppercase mb-4">
                  Character Work
                </p>
                <p className="font-display italic text-3xl md:text-4xl text-cream-100 leading-snug">
                  Junji Ito — Yuuko
                </p>
              </div>
              <div className="mt-8">
                <p className="font-display text-5xl md:text-6xl text-cream-100 leading-none mb-3">
                  7.1M
                </p>
                <div className="flex gap-5 text-xs text-cream-600 mb-4">
                  <span>TikTok 501.5K</span>
                  <span>·</span>
                  <span>Instagram 486K</span>
                  <span>·</span>
                  <span>YouTube 6.1M</span>
                </div>
                <span className="text-xs text-cream-500 group-hover:text-cream-200 transition-colors">
                  Watch on TikTok ↗
                </span>
              </div>
            </a>

            {/* Right column — 2 stacked cards */}
            <div className="md:col-span-5 flex flex-col gap-4">
              {/* Hot Glue Jujutsu Kaisen (5.7M total) */}
              <a
                href="https://www.tiktok.com/t/ZP8ChoCtF/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cream-200/5 border border-cream-700/40 p-6 flex flex-col justify-between hover:bg-cream-200/10 transition-colors group flex-1"
              >
                <p className="text-xs text-cream-600 tracking-widest uppercase mb-2">Studio</p>
                <p className="font-display italic text-xl text-cream-100 leading-snug">
                  Hot Glue — Jujutsu Kaisen
                </p>
                <div className="mt-4">
                  <p className="font-display text-3xl text-cream-100 leading-none mb-2">5.7M</p>
                  <p className="text-xs text-cream-600">TikTok 2.6M · Instagram 3.1M</p>
                  <span className="text-xs text-cream-500 group-hover:text-cream-200 transition-colors mt-2 block">
                    Watch ↗
                  </span>
                </div>
              </a>

              {/* Ballora (2.2M TikTok) */}
              <a
                href="https://www.tiktok.com/t/ZP8CkmRrv/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cream-200/5 border border-cream-700/40 p-6 flex flex-col justify-between hover:bg-cream-200/10 transition-colors group flex-1"
              >
                <p className="text-xs text-cream-600 tracking-widest uppercase mb-2">Five Nights at Freddy&apos;s</p>
                <p className="font-display italic text-xl text-cream-100 leading-snug">
                  Ballora
                </p>
                <div className="mt-4">
                  <p className="font-display text-3xl text-cream-100 leading-none mb-2">2.2M</p>
                  <p className="text-xs text-cream-600">TikTok 2.2M</p>
                  <span className="text-xs text-cream-500 group-hover:text-cream-200 transition-colors mt-2 block">
                    Watch ↗
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-8 md:hidden">
            <Link href="/work" className="text-sm text-cream-500 border-b border-cream-700 pb-px hover:text-cream-200 transition-colors">
              All work →
            </Link>
          </div>
        </div>
      </section>

      {/* ── About strip ── */}
      <section className="bg-cream-200 section border-t border-cream-400/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <p className="text-xs text-ink-muted tracking-widest uppercase mb-6">Who I am</p>
              <blockquote className="font-display text-3xl md:text-4xl text-ink italic leading-snug">
                &ldquo;I&apos;ve loved makeup since I was three.
                Everything since then has been an experiment.&rdquo;
              </blockquote>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:text-right">
              <p className="text-ink-soft text-sm leading-relaxed mb-6">
                Started from zero in March 2025. Hit 50K by September.
                Now at 70M+ views and still going daily.
              </p>
              <Link href="/about" className="btn-outline inline-flex">
                Read the story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brands strip ── */}
      <section className="bg-ink section">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs text-cream-500 tracking-widest uppercase mb-10 text-center">
            Brands I&apos;ve worked with
          </p>

          {/* Marquee */}
          <div className="overflow-hidden relative">
            {/* Fade edges */}
            <div
              className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(90deg, #1C1714, transparent)" }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(-90deg, #1C1714, transparent)" }}
            />

            <div className="flex gap-8 animate-marquee">
              {[
                "Farmacy", "Salon Perfect", "YouCam Makeup", "DDG Beauty",
                "Urban Decay", "Half Magic", "Byredo",
                "Doja Cat", "Nina Simone", "Madds Buckley", "Paddington",
                "Farmacy", "Salon Perfect", "YouCam Makeup", "DDG Beauty",
                "Urban Decay", "Half Magic", "Byredo",
                "Doja Cat", "Nina Simone", "Madds Buckley", "Paddington",
              ].map((brand, i) => (
                <span key={i} className="brand-pill border-cream-600/40 text-cream-400 flex-shrink-0">
                  {brand}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/work-with-me"
              className="text-sm text-cream-400 border-b border-cream-600 pb-px hover:text-cream-100 hover:border-cream-400 transition-colors"
            >
              See collaboration work →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
