import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Me | Hannah Joy",
  description:
    "Brand collaboration hub for @paintedbyhannahjoy. Campaign packages, single posts, and co-created content series.",
};

type BrandEntry = {
  brand: string;
  subtitle?: string;
  type: "paid" | "music" | "pr";
  deliverable: string;
  url?: string;
  url2?: string;
  year: string;
};

const beautyBrands: BrandEntry[] = [
  {
    brand: "Farmacy",
    type: "paid",
    deliverable: "Instagram Reel — paid campaign",
    url: "https://www.instagram.com/reel/DQesOnbDYq7/",
    year: "2025",
  },
  {
    brand: "Salon Perfect",
    type: "paid",
    deliverable: "Instagram Reel — paid campaign",
    url: "https://www.instagram.com/reel/DP9hj8sAL41/",
    year: "2025",
  },
  {
    brand: "YouCam Makeup App",
    type: "paid",
    deliverable: "Instagram Reel — paid campaign",
    url: "https://www.instagram.com/reel/DT-uUxBAGrT/",
    year: "2025",
  },
  {
    brand: "DDG Beauty",
    type: "paid",
    deliverable: "Instagram Reel — paid campaign",
    url: "https://www.instagram.com/reel/DVJtZcNEgWB/",
    year: "2025",
  },
  {
    brand: "Urban Decay",
    type: "pr",
    deliverable: "TikTok — PR",
    url: "https://www.tiktok.com/t/ZP8C6KVV4/",
    year: "2025",
  },
  {
    brand: "Half Magic",
    type: "pr",
    deliverable: "TikTok — PR (ongoing list)",
    url: "https://www.tiktok.com/t/ZP8C6bLUR/",
    year: "2025",
  },
  {
    brand: "Byredo",
    type: "pr",
    deliverable: "Product gifted",
    year: "2025",
  },
];

const musicBrands: BrandEntry[] = [
  {
    brand: "Doja Cat",
    subtitle: "AAAAHH MEN!",
    type: "music",
    deliverable: "TikTok — paid campaign",
    url: "https://www.tiktok.com/t/ZP8CMPa1t/",
    year: "2025",
  },
  {
    brand: "Nina Simone",
    subtitle: "I Put a Spell on You",
    type: "music",
    deliverable: "TikTok — paid campaign (2 videos)",
    url: "https://www.tiktok.com/t/ZP8CMAdbw/",
    url2: "https://www.tiktok.com/t/ZP8CMeodu/",
    year: "2025",
  },
  {
    brand: "Madds Buckley",
    subtitle: "The Red Means I Love You",
    type: "music",
    deliverable: "TikTok — paid campaign",
    url: "https://www.tiktok.com/t/ZP8CMNADP/",
    year: "2025",
  },
  {
    brand: "Paddington the Musical",
    type: "music",
    deliverable: "TikTok — paid campaign",
    url: "https://www.tiktok.com/t/ZP8CMecvH/",
    year: "2025",
  },
];

const allBrandNames = [
  "Farmacy",
  "Salon Perfect",
  "YouCam Makeup",
  "DDG Beauty",
  "Urban Decay",
  "Half Magic",
  "Byredo",
  "Doja Cat",
  "Nina Simone",
  "Madds Buckley",
  "Paddington",
];

const tiers = [
  {
    name: "The Touch-Up",
    format: "Single post or story",
    includes: [
      "One TikTok or Reel",
      "Concept developed with your brief",
      "Raw files + usage rights (organic)",
      "2 revision rounds",
    ],
    cta: "Starting at $800",
    accent: "bg-mauve-light",
  },
  {
    name: "The Transformation",
    format: "Campaign package",
    includes: [
      "3–5 videos across platforms",
      "Full creative direction from Hannah",
      "Raw + edited deliverables",
      "Paid ad usage rights available",
      "Priority turnaround",
    ],
    cta: "Starting at $2,500",
    accent: "bg-sage-light",
    featured: true,
  },
  {
    name: "The Collaboration",
    format: "Co-created content series",
    includes: [
      "Ongoing monthly content",
      "Dedicated series concept",
      "Cross-platform delivery",
      "Full usage rights",
      "Brand ambassador options",
    ],
    cta: "Custom — let's talk",
    accent: "bg-gold-light",
  },
];

function BrandRow({ brand, subtitle, type, deliverable, url, url2, year }: BrandEntry) {
  const badge =
    type === "pr"
      ? { label: "PR / Gifted", style: "bg-cream-300 text-ink-muted" }
      : type === "music"
      ? { label: "Music", style: "bg-gold-light text-ink-soft" }
      : { label: "Paid", style: "bg-mauve-light text-mauve-dark" };

  return (
    <div className="py-5 grid grid-cols-12 gap-4 items-start border-b border-cream-400/40 last:border-0">
      <div className="col-span-4">
        <p className="font-display text-base text-ink leading-snug">{brand}</p>
        {subtitle && (
          <p className="text-xs text-ink-muted italic mt-0.5">&ldquo;{subtitle}&rdquo;</p>
        )}
        <p className="text-xs text-ink-muted mt-0.5">{year}</p>
      </div>
      <div className="col-span-5">
        <p className="text-sm text-ink-soft">{deliverable}</p>
        <div className="flex gap-3 mt-1">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-ink-muted border-b border-ink-muted/30 pb-px hover:text-ink hover:border-ink transition-colors"
            >
              View ↗
            </a>
          )}
          {url2 && (
            <a
              href={url2}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-ink-muted border-b border-ink-muted/30 pb-px hover:text-ink hover:border-ink transition-colors"
            >
              View 2 ↗
            </a>
          )}
        </div>
      </div>
      <div className="col-span-3 text-right">
        <span className={`text-xs tracking-wide uppercase px-2 py-1 ${badge.style}`}>
          {badge.label}
        </span>
      </div>
    </div>
  );
}

export default function WorkWithMePage() {
  const marqueeList = [...allBrandNames, ...allBrandNames];

  return (
    <>
      {/* ── Header ── */}
      <section className="pt-40 pb-20 px-6 bg-cream-200 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #D4DFCC 0%, transparent 70%)" }}
        />
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-ink-muted tracking-widest uppercase mb-6 animate-fade-up">
            For Brands
          </p>
          <h1 className="font-display italic text-5xl md:text-7xl text-ink leading-tight animate-fade-up animation-delay-100 mb-6">
            Work With Me
          </h1>
          <p className="text-ink-soft max-w-md text-base leading-relaxed animate-fade-up animation-delay-200">
            70M+ views, 26K Instagram, daily posting. The content quality is
            what drives the numbers — not the other way around.
          </p>
        </div>
      </section>

      {/* ── Brand logos marquee ── */}
      <section className="bg-cream-300/60 border-t border-b border-cream-400/40 py-6 overflow-hidden relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #E8DFD0, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
          style={{ background: "linear-gradient(-90deg, #E8DFD0, transparent)" }}
        />
        <div className="flex gap-8 animate-marquee">
          {marqueeList.map((brand, i) => (
            <span key={i} className="brand-pill flex-shrink-0">
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* ── Collaboration record ── */}
      <section className="bg-cream-100 section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-4">
              <p className="text-xs text-ink-muted tracking-widest uppercase mb-4">The record</p>
              <h2 className="font-display text-3xl md:text-4xl text-ink leading-snug">
                What we&apos;ve<br />
                <em>actually built together.</em>
              </h2>
              <p className="text-sm text-ink-muted mt-4 leading-relaxed">
                No filler brands, no mystery credits. This is exactly what each
                collaboration was — and whether it was paid or gifted.
              </p>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              {/* Beauty / Product */}
              <p className="text-xs text-ink-muted tracking-widest uppercase mb-4">
                Beauty &amp; Product
              </p>
              <div className="mb-10">
                {beautyBrands.map((entry) => (
                  <BrandRow key={entry.brand} {...entry} />
                ))}
              </div>

              {/* Music */}
              <p className="text-xs text-ink-muted tracking-widest uppercase mb-4">
                Music Campaigns
              </p>
              <div className="mb-6">
                {musicBrands.map((entry) => (
                  <BrandRow key={entry.brand} {...entry} />
                ))}
              </div>

              <p className="text-xs text-ink-muted italic mt-6">
                PR / Gifted = product was sent, no payment. I always say so.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="border-t border-cream-400/40 pt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { num: "70M+", label: "Total Views" },
                { num: "26K", label: "Instagram Followers" },
                { num: "50K", label: "TikTok Followers" },
                { num: "Daily", label: "Posting Frequency" },
              ].map(({ num, label }) => (
                <div key={label} className="text-center md:text-left">
                  <p className="font-display text-4xl text-ink leading-none">{num}</p>
                  <p className="text-xs text-ink-muted tracking-widest uppercase mt-2">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Service tiers ── */}
      <section className="bg-cream-200 section border-t border-cream-400/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs text-ink-muted tracking-widest uppercase mb-4">Services</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink leading-snug max-w-lg">
              Three ways to work together.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map(({ name, format, includes, cta, accent, featured }) => (
              <div
                key={name}
                className={`${accent} p-8 relative ${featured ? "ring-1 ring-ink/20" : ""}`}
              >
                {featured && (
                  <p className="text-xs text-ink-muted tracking-widest uppercase mb-4 absolute top-4 right-6">
                    Most popular
                  </p>
                )}
                <p className="text-xs text-ink-muted tracking-widest uppercase mb-2">{format}</p>
                <h3 className="font-display text-2xl text-ink mb-6">{name}</h3>

                <ul className="space-y-2 mb-8">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                      <span className="text-ink-muted mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="font-display text-lg text-ink border-t border-ink/10 pt-4">
                  {cta}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs text-ink-muted mt-6 max-w-sm">
            Pricing is a starting point. Full quote after a conversation about
            your project goals — usage rights, exclusivity, and timeline all
            factor in.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-ink section">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6">
              <h2 className="font-display italic text-4xl md:text-5xl text-cream-100 leading-tight mb-4">
                Let&apos;s build something worth watching.
              </h2>
              <p className="text-sm text-cream-400 leading-relaxed">
                Fill out the form and I&apos;ll get back to you with a full
                proposal. Or use the direct line if you already know what you
                want.
              </p>
            </div>

            <div className="md:col-span-5 md:col-start-8">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function BookingForm() {
  return (
    <div>
      <form className="space-y-6" action="#" method="POST">
        <div>
          <label className="block text-xs text-cream-500 tracking-widest uppercase mb-2">
            Brand / Company
          </label>
          <input
            type="text"
            name="brand"
            required
            placeholder="Your brand name"
            className="w-full bg-transparent border-b border-cream-600 text-cream-100 text-sm py-3 outline-none focus:border-cream-300 transition-colors placeholder:text-cream-700"
          />
        </div>

        <div>
          <label className="block text-xs text-cream-500 tracking-widest uppercase mb-2">
            Your name + email
          </label>
          <input
            type="text"
            name="contact"
            required
            placeholder="Name · email@brand.com"
            className="w-full bg-transparent border-b border-cream-600 text-cream-100 text-sm py-3 outline-none focus:border-cream-300 transition-colors placeholder:text-cream-700"
          />
        </div>

        <div>
          <label className="block text-xs text-cream-500 tracking-widest uppercase mb-2">
            What you&apos;re thinking
          </label>
          <textarea
            name="brief"
            required
            placeholder="Tell me about the campaign, the product, the vibe — whatever helps."
            rows={4}
            className="w-full bg-transparent border-b border-cream-600 text-cream-100 text-sm py-3 outline-none focus:border-cream-300 transition-colors placeholder:text-cream-700 resize-none"
          />
        </div>

        <div>
          <label className="block text-xs text-cream-500 tracking-widest uppercase mb-2">
            Which tier?
          </label>
          <select
            name="tier"
            className="w-full bg-transparent border-b border-cream-600 text-cream-400 text-sm py-3 outline-none focus:border-cream-300 transition-colors appearance-none cursor-pointer"
          >
            <option value="" className="bg-ink">Select one</option>
            <option value="touch-up" className="bg-ink">The Touch-Up — single post</option>
            <option value="transformation" className="bg-ink">The Transformation — campaign</option>
            <option value="collaboration" className="bg-ink">The Collaboration — ongoing series</option>
            <option value="unsure" className="bg-ink">Not sure yet</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn-light w-full justify-center mt-8"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  );
}
