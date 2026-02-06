import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

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
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-purple-500 text-sm font-medium uppercase tracking-widest mb-4">
            Collaborations
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-purple-950 leading-tight">
            Brands I&apos;ve Worked With
          </h1>
          <p className="mt-4 text-purple-600 text-lg max-w-2xl mx-auto">
            A selection of beauty and lifestyle brands I&apos;ve created paid
            UGC content for.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <div
                key={brand}
                className="flex items-center justify-center p-8 bg-purple-50 rounded-xl border border-purple-100 hover:bg-white hover:shadow-md transition-all duration-200"
              >
                <span className="text-sm font-medium text-purple-800 text-center">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-purple-700 text-lg leading-relaxed">
            I work exclusively on paid UGC collaborations and usage-based
            partnerships. If your brand is looking for concept-driven
            short-form content, I&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 px-8 py-3.5 bg-purple-950 text-white rounded-full text-sm font-medium hover:bg-purple-800 transition-colors"
          >
            Start a Collaboration
          </Link>
        </div>
      </section>
    </>
  );
}
