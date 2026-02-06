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
    icon: "01",
  },
  {
    title: "Strong Visual Identity",
    description:
      "With a background in creative makeup artistry, I bring a trained eye for color, composition, and visual storytelling to every project.",
    icon: "02",
  },
  {
    title: "Audience-Aware Content",
    description:
      "I create content with the end viewer in mind — understanding what stops the scroll and drives action for your target audience.",
    icon: "03",
  },
  {
    title: "Fast Brand Adaptation",
    description:
      "I work efficiently within brand guidelines, adapting tone, style, and messaging to match your existing visual and verbal identity.",
    icon: "04",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100/30">
        <div className="absolute top-[20%] right-[10%] w-72 h-72 rounded-full bg-purple-200/25 blur-3xl animate-float" />
        <div className="absolute bottom-[10%] left-[5%] w-48 h-48 rounded-full bg-purple-300/20 blur-2xl animate-pulse-glow" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-950/5 border border-purple-200/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span className="text-purple-600 text-sm font-medium tracking-wide">
              About Me
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold leading-[0.95]">
            <span className="gradient-text">Creator, artist,</span>
            <br />
            <span className="brush-underline text-purple-950">storyteller.</span>
          </h1>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-6 text-purple-800 leading-relaxed text-lg">
            <p className="text-xl text-purple-950 font-medium">
              I&apos;m Hannah Joy — a UGC content creator and creative makeup
              artist building concept-driven short-form content for
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
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-purple-100/40 to-purple-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-200/20 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6">
          <SectionHeading
            title="What I Bring"
            subtitle="Core strengths that set my work apart"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="group glass-card rounded-2xl p-8 hover-lift"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold gradient-text opacity-30 group-hover:opacity-60 transition-opacity font-[family-name:var(--font-display)]">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-950 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-purple-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Style */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            title="How I Work"
            subtitle="What you can expect from a collaboration"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: "Collaborative",
                description:
                  "I work with your team to understand goals, audience, and brand voice before creating anything.",
                accent: "bg-purple-300",
              },
              {
                title: "Clear Communication",
                description:
                  "You'll always know where things stand. I keep communication straightforward and responsive.",
                accent: "bg-purple-400",
              },
              {
                title: "Deadline-Focused",
                description:
                  "I deliver on time, every time. Reliable turnaround is non-negotiable in my workflow.",
                accent: "bg-purple-500",
              },
            ].map((item) => (
              <div key={item.title} className="text-center group">
                <div
                  className={`w-12 h-1 rounded-full ${item.accent} mx-auto mb-6 group-hover:w-20 transition-all duration-500`}
                />
                <h3 className="text-lg font-semibold text-purple-950 mb-3">
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
      <section className="relative py-28 bg-purple-950 text-white overflow-hidden">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-purple-800/30 blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] w-48 h-48 rounded-full bg-purple-700/20 blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-6">
            Interested in working{" "}
            <span className="text-purple-300">together</span>?
          </h2>
          <p className="text-purple-300 mb-10 text-lg">
            I&apos;d love to hear about your next project.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-white text-purple-950 rounded-full text-sm font-medium hover:bg-purple-100 transition-all duration-300"
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
