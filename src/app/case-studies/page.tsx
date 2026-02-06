import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

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
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-purple-500 text-sm font-medium uppercase tracking-widest mb-4">
            Case Studies
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-purple-950 leading-tight">
            Results That Speak
          </h1>
          <p className="mt-4 text-purple-600 text-lg max-w-2xl mx-auto">
            A look at the process, deliverables, and outcomes from select brand
            collaborations.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {caseStudies.map((study, index) => (
            <article
              key={index}
              className="p-8 md:p-10 bg-white rounded-2xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block w-10 h-10 rounded-full bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-purple-950">
                  {study.brandName}
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-purple-500 uppercase tracking-wider mb-2">
                    Campaign Goal
                  </h3>
                  <p className="text-purple-800">{study.campaignGoal}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-purple-500 uppercase tracking-wider mb-2">
                    Content Delivered
                  </h3>
                  <p className="text-purple-800">{study.contentDelivered}</p>
                </div>

                <div className="flex flex-wrap gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-purple-500 uppercase tracking-wider mb-2">
                      Platforms
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {study.platformsUsed.map((platform) => (
                        <span
                          key={platform}
                          className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-purple-500 uppercase tracking-wider mb-2">
                      Usage Rights
                    </h3>
                    <p className="text-purple-800 text-sm">
                      {study.usageRights}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-purple-500 uppercase tracking-wider mb-2">
                    Results & Highlights
                  </h3>
                  <ul className="space-y-2">
                    {study.results.map((result, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-purple-800"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                        {result}
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
