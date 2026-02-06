import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About | Hannah Joy",
  description:
    "Learn about Hannah Joy — UGC content creator and creative makeup artist specializing in concept-driven storytelling for beauty and lifestyle brands.",
};

const strengths = [
  {
    title: "Concept-Driven UGC",
    description:
      "Every piece of content starts with a concept. I develop ideas rooted in brand identity and audience psychology, not trends alone.",
  },
  {
    title: "Strong Visual Identity",
    description:
      "With a background in creative makeup artistry, I bring a trained eye for color, composition, and visual storytelling to every project.",
  },
  {
    title: "Audience-Aware Content",
    description:
      "I create content with the end viewer in mind — understanding what stops the scroll and drives action for your target audience.",
  },
  {
    title: "Fast Brand Adaptation",
    description:
      "I work efficiently within brand guidelines, adapting tone, style, and messaging to match your existing visual and verbal identity.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-purple-500 text-sm font-medium uppercase tracking-widest mb-4">
            About Me
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-purple-950 leading-tight">
            Creator, artist, storyteller.
          </h1>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-6 text-purple-800 leading-relaxed text-lg">
            <p>
              I&apos;m Hannah Joy — a UGC content creator and creative makeup
              artist based in building concept-driven short-form content for
              beauty and lifestyle brands.
            </p>
            <p>
              My background in creative and artistic makeup gives me a unique
              perspective on visual storytelling. I don&apos;t just film content
              — I develop concepts that connect brand identity with audience
              attention, creating pieces that are both visually compelling and
              strategically effective.
            </p>
            <p>
              I specialize in short-form video for TikTok, Instagram Reels, and
              YouTube Shorts. My approach is intuitive but intentional: every
              frame, transition, and creative choice serves the brand&apos;s
              goals.
            </p>
            <p>
              I work exclusively on paid collaborations and usage-based
              partnerships. If you&apos;re looking for a creator who brings both
              artistry and professionalism to the table, let&apos;s talk.
            </p>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="What I Bring"
            subtitle="Core strengths that set my work apart"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="p-8 bg-white rounded-xl border border-purple-100 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-purple-950 mb-3">
                  {item.title}
                </h3>
                <p className="text-purple-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Style */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeading
            title="How I Work"
            subtitle="What you can expect from a collaboration"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: "Collaborative",
                description:
                  "I work with your team to understand goals, audience, and brand voice before creating anything.",
              },
              {
                title: "Clear Communication",
                description:
                  "You'll always know where things stand. I keep communication straightforward and responsive.",
              },
              {
                title: "Deadline-Focused",
                description:
                  "I deliver on time, every time. Reliable turnaround is non-negotiable in my workflow.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-purple-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-purple-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-4">
            Interested in working together?
          </h2>
          <p className="text-purple-300 mb-8">
            I&apos;d love to hear about your next project.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 bg-white text-purple-950 rounded-full text-sm font-medium hover:bg-purple-100 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
