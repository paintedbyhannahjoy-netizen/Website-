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
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-purple-500 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-700 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-purple-500 text-sm font-medium uppercase tracking-widest mb-6">
            UGC Content Creator &amp; Creative Makeup Artist
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-purple-950 leading-tight mb-6">
            UGC that converts through creativity and concept-driven storytelling
          </h1>
          <p className="text-lg md:text-xl text-purple-700 mb-10 max-w-2xl mx-auto">
            I create high-performing short-form content for beauty and lifestyle
            brands.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/portfolio"
              className="px-8 py-3.5 bg-purple-950 text-white rounded-full text-sm font-medium hover:bg-purple-800 transition-colors duration-200"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-purple-300 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-50 transition-colors duration-200"
            >
              Work With Me
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { value: "50K+", label: "TikTok Followers" },
              { value: "24K+", label: "Instagram Followers" },
              { value: "4K+", label: "YouTube Subscribers" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-purple-950">
                  {stat.value}
                </p>
                <p className="text-sm text-purple-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="Featured Work"
            subtitle="A selection of concept-driven content that showcases creative range and storytelling"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
              <TikTokEmbed key={video.videoId} videoId={video.videoId} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="Trusted By"
            subtitle="Brands I've created paid UGC content for"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustedBrands.map((brand) => (
              <div
                key={brand}
                className="flex items-center justify-center p-6 bg-white rounded-xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <span className="text-sm font-medium text-purple-800 text-center">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-purple-950 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-6">
            Ready to create content that converts?
          </h2>
          <p className="text-purple-300 text-lg mb-8">
            I work with brands on paid UGC collaborations. Let&apos;s discuss
            your next campaign.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 bg-white text-purple-950 rounded-full text-sm font-medium hover:bg-purple-100 transition-colors duration-200"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
