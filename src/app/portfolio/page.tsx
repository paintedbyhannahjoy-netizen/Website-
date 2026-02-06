"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import TikTokEmbed from "@/components/TikTokEmbed";

type Category = "all" | "beauty" | "creative-makeup" | "product" | "storytelling";

interface Video {
  videoId: string;
  category: Category[];
  title: string;
}

const videos: Video[] = [
  {
    videoId: "7493702811498684702",
    category: ["beauty", "creative-makeup"],
    title: "Creative glam look",
  },
  {
    videoId: "7490084959738924318",
    category: ["product", "beauty"],
    title: "Product showcase",
  },
  {
    videoId: "7441506285158518046",
    category: ["storytelling", "beauty"],
    title: "Brand story concept",
  },
  {
    videoId: "7489671942484312350",
    category: ["creative-makeup"],
    title: "Artistic makeup transformation",
  },
  {
    videoId: "7478866498388041006",
    category: ["product", "storytelling"],
    title: "Product unboxing concept",
  },
  {
    videoId: "7475991553794400542",
    category: ["beauty", "product"],
    title: "Beauty routine content",
  },
];

const filters: { value: Category; label: string }[] = [
  { value: "all", label: "All Work" },
  { value: "beauty", label: "Beauty" },
  { value: "creative-makeup", label: "Creative Makeup" },
  { value: "product", label: "Product-Focused" },
  { value: "storytelling", label: "Brand Storytelling" },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filtered =
    activeFilter === "all"
      ? videos
      : videos.filter((v) => v.category.includes(activeFilter));

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-purple-500 text-sm font-medium uppercase tracking-widest mb-4">
            Portfolio
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-purple-950 leading-tight">
            My Work
          </h1>
          <p className="mt-4 text-purple-600 text-lg max-w-2xl mx-auto">
            A curated selection of short-form UGC content across beauty,
            creative makeup, and brand storytelling.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeFilter === filter.value
                    ? "bg-purple-950 text-white"
                    : "bg-purple-50 text-purple-700 hover:bg-purple-100"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((video) => (
              <div key={video.videoId}>
                <TikTokEmbed videoId={video.videoId} />
                <p className="text-center text-sm text-purple-600 mt-3">
                  {video.title}
                </p>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-purple-400 py-12">
              No videos in this category yet. Check back soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
