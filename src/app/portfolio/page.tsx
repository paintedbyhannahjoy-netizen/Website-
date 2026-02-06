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
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100/30">
        <div className="absolute top-[30%] left-[10%] w-64 h-64 rounded-full bg-purple-200/25 blur-3xl animate-float" />
        <div className="absolute bottom-[15%] right-[8%] w-48 h-48 rounded-full bg-purple-300/20 blur-2xl animate-pulse-glow" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-950/5 border border-purple-200/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span className="text-purple-600 text-sm font-medium tracking-wide">
              Portfolio
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold leading-[0.95] mb-6">
            <span className="gradient-text">My </span>
            <span className="brush-underline text-purple-950">Work</span>
          </h1>
          <p className="text-purple-600 text-lg max-w-2xl mx-auto">
            A curated selection of short-form UGC content across beauty,
            creative makeup, and brand storytelling.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
        <div className="max-w-6xl mx-auto px-6">
          {/* Filters as pill bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.value
                    ? "bg-purple-950 text-white shadow-lg shadow-purple-950/20"
                    : "bg-purple-50 text-purple-600 hover:bg-purple-100 border border-purple-200/50"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((video) => (
              <div key={video.videoId} className="animate-fade-up">
                <TikTokEmbed videoId={video.videoId} />
                <p className="text-center text-sm text-purple-500 mt-4 font-medium">
                  {video.title}
                </p>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 rounded-full bg-purple-200" />
              </div>
              <p className="text-purple-400">
                No videos in this category yet. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
