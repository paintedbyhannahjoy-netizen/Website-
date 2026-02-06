import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Hannah Joy",
  description:
    "See the results and process behind Hannah Joy's UGC campaigns for beauty and lifestyle brands.",
};

interface CaseStudy {
  brandName: string;
  campaignGoal: string;
  contentDelivered: string;
  platformsUsed: string[];
  usageRights: string;
  results: string[];
}

const caseStudies: CaseStudy[] = [
  {
    brandName: "Beauty Brand A",
    campaignGoal:
      "Drive awareness for a new eyeshadow palette launch targeting Gen Z beauty enthusiasts.",
    contentDelivered:
      "3 TikTok videos featuring creative makeup looks using the palette, with trending audio and strong hooks.",
    platformsUsed: ["TikTok", "Instagram Reels"],
    usageRights: "Organic + paid ads usage for 6 months",
    results: [
      "Combined 250K+ views across all videos",
      "12% average engagement rate",
      "Brand repurposed content for paid social ads",
    ],
  },
  {
    brandName: "Lifestyle Brand B",
    campaignGoal:
      "Create relatable product-focused UGC for a skincare line aimed at young professionals.",
    contentDelivered:
      "2 short-form videos with a morning routine concept, demonstrating product usage in a natural, lifestyle setting.",
    platformsUsed: ["TikTok", "YouTube Shorts"],
    usageRights: "Full usage rights for 12 months",
    results: [
      "Content outperformed brand's previous UGC by 3x in engagement",
      "Videos used in email marketing campaigns",
      "Led to repeat collaboration",
    ],
  },
  {
    brandName: "Cosmetics Brand C",
    campaignGoal:
      "Showcase the versatility of a lip product line through creative, artistic content.",
    contentDelivered:
      "4 concept-driven videos each featuring a different shade with unique creative makeup pairings.",
    platformsUsed: ["TikTok", "Instagram Reels"],
    usageRights: "Organic usage rights in perpetuity",
    results: [
      "Highest-performing creator content in the campaign",
      "15% save rate on Instagram",
      "Brand featured content on their main social channels",
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100/30">
        <div className="absolute top-[25%] right-[15%] w-64 h-64 rounded-full bg-purple-200/25 blur-3xl animate-float" />
        <div className="absolute bottom-[15%] left-[10%] w-48 h-48 rounded-full bg-purple-300/20 blur-2xl animate-pulse-glow" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-950/5 border border-purple-200/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span className="text-purple-600 text-sm font-medium tracking-wide">
              Case Studies
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold leading-[0.95] mb-6">
            <span className="gradient-text">Results That</span>
            <br />
            <span className="brush-underline text-purple-950">Speak</span>
          </h1>
          <p className="text-purple-600 text-lg max-w-2xl mx-auto">
            A look at the process, deliverables, and outcomes from select brand
            collaborations.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          {caseStudies.map((study, index) => (
            <article
              key={index}
              className="group relative glass-card rounded-3xl p-8 md:p-12 hover-lift overflow-hidden"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-300 via-purple-500 to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-50 border border-purple-200/50">
                  <span className="text-xl font-bold gradient-text font-[family-name:var(--font-display)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-purple-950">
                  {study.brandName}
                </h2>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-[0.15em] mb-3">
                    Campaign Goal
                  </h3>
                  <p className="text-purple-800 leading-relaxed">
                    {study.campaignGoal}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-[0.15em] mb-3">
                    Content Delivered
                  </h3>
                  <p className="text-purple-800 leading-relaxed">
                    {study.contentDelivered}
                  </p>
                </div>

                <div className="flex flex-wrap gap-8">
                  <div>
                    <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-[0.15em] mb-3">
                      Platforms
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {study.platformsUsed.map((platform) => (
                        <span
                          key={platform}
                          className="px-4 py-1.5 bg-purple-50 text-purple-700 text-sm rounded-full border border-purple-200/50 font-medium"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-[0.15em] mb-3">
                      Usage Rights
                    </h3>
                    <p className="text-purple-800 text-sm">
                      {study.usageRights}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-[0.15em] mb-3">
                    Results & Highlights
                  </h3>
                  <ul className="space-y-3">
                    {study.results.map((result, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-purple-800"
                      >
                        <span className="mt-2 w-2 h-2 rounded-full bg-purple-400 shrink-0" />
                        <span className="leading-relaxed">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
