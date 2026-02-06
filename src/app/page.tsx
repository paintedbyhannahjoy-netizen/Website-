import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import TikTokEmbed from "@/components/TikTokEmbed";

const featuredVideos = [
  { videoId: "7493702811498684702" },
  { videoId: "7490084959738924318" },
  { videoId: "7441506285158518046" },
];

const trustedBrands = [
  "NYX Professional Makeup",
  "e.l.f. Cosmetics",
  "ColourPop",
  "Glossier",
  "Rare Beauty",
  "Morphe",
  "Fenty Beauty",
  "MAC Cosmetics",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100/50">
        {/* Artistic background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[15%] left-[5%] w-80 h-80 rounded-full bg-purple-200/30 blur-3xl animate-float" />
          <div className="absolute bottom-[10%] right-[8%] w-[28rem] h-[28rem] rounded-full bg-purple-300/20 blur-3xl animate-float animation-delay-2000" />
          <div className="absolute top-[40%] right-[20%] w-48 h-48 rounded-full bg-purple-400/15 blur-2xl animate-pulse-glow" />

          {/* Abstract brush strokes */}
          <div className="absolute top-[20%] left-[15%] w-32 h-[2px] bg-gradient-to-r from-transparent via-purple-300 to-transparent rotate-[30deg] opacity-40" />
          <div className="absolute bottom-[30%] right-[12%] w-48 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent -rotate-[20deg] opacity-30" />
          <div className="absolute top-[60%] left-[8%] w-24 h-[2px] bg-gradient-to-r from-transparent via-purple-300 to-transparent rotate-[60deg] opacity-30" />

          {/* Scattered dots */}
          <div className="absolute top-[25%] right-[25%] w-3 h-3 rounded-full bg-purple-400/30" />
          <div className="absolute top-[70%] left-[20%] w-2 h-2 rounded-full bg-purple-500/25" />
          <div className="absolute bottom-[25%] right-[35%] w-4 h-4 rounded-full bg-purple-300/20" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-20 text-center">
          {/* Tagline pill */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-950/5 border border-purple-200/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse-glow" />
            <span className="text-purple-600 text-sm font-medium tracking-wide">
              UGC Content Creator &amp; Creative Makeup Artist
            </span>
          </div>

          {/* Main headline */}
          <h1 className="animate-fade-up animation-delay-200 font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8">
            <span className="gradient-text">UGC that converts</span>
            <br />
            <span className="text-purple-950">through </span>
            <span className="brush-underline text-purple-950">creativity</span>
          </h1>

          <p className="animate-fade-up animation-delay-400 text-lg md:text-xl text-purple-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            I create high-performing short-form content for beauty and lifestyle
            brands — concept-driven storytelling that stops the scroll.
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-up animation-delay-600 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/portfolio"
              className="group px-8 py-4 bg-purple-950 text-white rounded-full text-sm font-medium hover:bg-purple-800 transition-all duration-300 hover:shadow-xl hover:shadow-purple-950/20 flex items-center gap-2"
            >
              View Portfolio
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
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-purple-300 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-50 hover:border-purple-400 transition-all duration-300"
            >
              Work With Me
            </Link>
          </div>

          {/* Stats */}
          <div className="animate-fade-up animation-delay-600 mt-20 flex flex-wrap justify-center gap-6 md:gap-12">
            {[
              { value: "50K+", label: "TikTok", color: "bg-purple-500" },
              { value: "24K+", label: "Instagram", color: "bg-purple-400" },
              { value: "4K+", label: "YouTube", color: "bg-purple-300" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl px-8 py-5 hover-lift"
              >
                <p className="text-3xl md:text-4xl font-bold gradient-text">
                  {stat.value}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`w-2 h-2 rounded-full ${stat.color}`} />
                  <p className="text-sm text-purple-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Featured Videos */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="Featured Work"
            subtitle="A selection of concept-driven content that showcases creative range and storytelling"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredVideos.map((video) => (
              <TikTokEmbed key={video.videoId} videoId={video.videoId} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-purple-100/50 to-purple-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-200/20 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6">
          <SectionHeading
            title="Trusted By"
            subtitle="Brands I've created paid UGC content for"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustedBrands.map((brand) => (
              <div
                key={brand}
                className="group glass-card rounded-2xl p-8 hover-lift cursor-default"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-purple-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm font-medium text-purple-800 group-hover:text-purple-950 transition-colors">
                    {brand}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 bg-purple-950 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-purple-800/30 blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] w-48 h-48 rounded-full bg-purple-700/20 blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to create content that{" "}
            <span className="text-purple-300">converts</span>?
          </h2>
          <p className="text-purple-300 text-lg mb-10 max-w-xl mx-auto">
            I work with brands on paid UGC collaborations. Let&apos;s discuss
            your next campaign.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-white text-purple-950 rounded-full text-sm font-medium hover:bg-purple-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/10"
          >
            Get In Touch
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
          </Link>
        </div>
      </section>
    </>
  );
}
