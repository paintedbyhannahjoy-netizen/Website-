import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brands | Hannah Joy",
  description:
    "Brands Hannah Joy has collaborated with on paid UGC and content campaigns.",
};

const brands = [
  "NYX Professional Makeup",
  "e.l.f. Cosmetics",
  "ColourPop",
  "Glossier",
  "Rare Beauty",
  "Morphe",
  "Fenty Beauty",
  "MAC Cosmetics",
  "Urban Decay",
  "Milk Makeup",
  "Tower 28 Beauty",
  "About Face",
];

export default function BrandsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100/30">
        <div className="absolute top-[20%] left-[12%] w-64 h-64 rounded-full bg-purple-200/25 blur-3xl animate-float" />
        <div className="absolute bottom-[20%] right-[10%] w-56 h-56 rounded-full bg-purple-300/20 blur-2xl animate-pulse-glow" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-950/5 border border-purple-200/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span className="text-purple-600 text-sm font-medium tracking-wide">
              Collaborations
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold leading-[0.95] mb-6">
            <span className="gradient-text">Brands I&apos;ve</span>
            <br />
            <span className="brush-underline text-purple-950">Worked With</span>
          </h1>
          <p className="text-purple-600 text-lg max-w-2xl mx-auto">
            A selection of beauty and lifestyle brands I&apos;ve created paid
            UGC content for.
          </p>
        </div>
      </section>

      {/* Brand Grid */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {brands.map((brand) => (
              <div
                key={brand}
                className="group glass-card rounded-2xl p-8 hover-lift cursor-default text-center"
              >
                <div className="w-3 h-3 rounded-full bg-purple-300 mx-auto mb-4 group-hover:bg-purple-500 transition-colors duration-300" />
                <span className="text-sm font-medium text-purple-800 group-hover:text-purple-950 transition-colors">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-purple-100/40 to-purple-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-200/20 blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="glass-card rounded-3xl p-12">
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-8 h-1 rounded-full bg-purple-300" />
              <div className="w-8 h-1 rounded-full bg-purple-400" />
              <div className="w-8 h-1 rounded-full bg-purple-500" />
            </div>
            <p className="text-purple-700 text-lg leading-relaxed mb-8">
              I work exclusively on paid UGC collaborations and usage-based
              partnerships. If your brand is looking for concept-driven
              short-form content, I&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-purple-950 text-white rounded-full text-sm font-medium hover:bg-purple-800 transition-all duration-300 hover:shadow-xl hover:shadow-purple-950/20"
            >
              Start a Collaboration
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
        </div>
      </section>
    </>
  );
}
