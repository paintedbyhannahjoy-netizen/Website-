"use client";

import { useState } from "react";
import Link from "next/link";

type Category = "all" | "threadwork" | "kiss" | "transformations";

const videos: {
  id: string;
  tiktokId: string;
  title: string;
  category: Exclude<Category, "all">;
  caption: string;
}[] = [
  // Threadwork
  {
    id: "tw-1",
    tiktokId: "7493702811498684702",
    title: "Silk Ribbon No. 1",
    category: "threadwork",
    caption: "The one that started it.",
  },
  {
    id: "tw-2",
    tiktokId: "7490084959738924318",
    title: "Thread Study",
    category: "threadwork",
    caption: "Pulling stitches through shadow.",
  },
  {
    id: "tw-3",
    tiktokId: "7441506285158518046",
    title: "Ribbon Eye",
    category: "threadwork",
    caption: "What happens when you use a loom on your face.",
  },
  // The Kiss
  {
    id: "ki-1",
    tiktokId: "7493702811498684702",
    title: "Lip Study I",
    category: "kiss",
    caption: "A lipstick print as the whole look.",
  },
  {
    id: "ki-2",
    tiktokId: "7490084959738924318",
    title: "Red, Repeated",
    category: "kiss",
    caption: "Twelve layers. One shade.",
  },
  // Transformations
  {
    id: "tr-1",
    tiktokId: "7441506285158518046",
    title: "Full Character",
    category: "transformations",
    caption: "Before and after. Three hours.",
  },
  {
    id: "tr-2",
    tiktokId: "7493702811498684702",
    title: "Editorial",
    category: "transformations",
    caption: "For the campaign look.",
  },
];

const categories: { id: Category; label: string; description: string }[] = [
  { id: "all", label: "All Work", description: "" },
  {
    id: "threadwork",
    label: "Threadwork",
    description: "Stitched, ribbon-based, textile techniques applied to the face.",
  },
  {
    id: "kiss",
    label: "The Kiss",
    description: "Lipstick prints, color studies, mark-making with makeup.",
  },
  {
    id: "transformations",
    label: "Transformations",
    description: "Character work, cosplay, editorial — full-face storytelling.",
  },
];

export default function WorkPage() {
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all" ? videos : videos.filter((v) => v.category === active);

  const activeCategory = categories.find((c) => c.id === active);

  return (
    <>
      {/* ── Header ── */}
      <section className="pt-40 pb-16 px-6 bg-cream-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-ink-muted tracking-widest uppercase mb-6 animate-fade-up">Portfolio</p>
          <h1 className="font-display italic text-5xl md:text-7xl text-ink leading-tight animate-fade-up animation-delay-100 mb-8">
            The Work
          </h1>
          <p className="text-ink-soft max-w-md animate-fade-up animation-delay-200">
            Organized by series, not by date. Each category is an ongoing experiment.
          </p>
        </div>
      </section>

      {/* ── Category filter ── */}
      <section className="bg-cream-100 border-t border-cream-400/40 sticky top-[57px] z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto scrollbar-none">
          {categories.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`flex-shrink-0 px-5 py-2 text-sm transition-all duration-200 border ${
                active === id
                  ? "bg-ink text-cream-100 border-ink"
                  : "bg-transparent text-ink-muted border-cream-400 hover:border-ink-soft hover:text-ink"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* ── Category description ── */}
      {active !== "all" && activeCategory?.description && (
        <div className="bg-cream-100 border-b border-cream-400/40">
          <div className="max-w-6xl mx-auto px-6 pb-6">
            <p className="text-sm text-ink-muted italic">{activeCategory.description}</p>
          </div>
        </div>
      )}

      {/* ── Video grid ── */}
      <section className="bg-cream-100 section pt-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((video) => (
              <div key={video.id} className="group">
                {/* Video embed */}
                <div className="relative overflow-hidden bg-ink" style={{ aspectRatio: "9 / 16", borderRadius: "2px" }}>
                  <iframe
                    src={`https://www.tiktok.com/embed/v2/${video.tiktokId}`}
                    className="w-full h-full"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    title={video.title}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-all duration-300 pointer-events-none" />
                </div>

                {/* Caption */}
                <div className="mt-3">
                  <p className="font-display text-base text-ink">{video.title}</p>
                  <p className="text-xs text-ink-muted mt-0.5">{video.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Link to TikTok */}
          <div className="mt-20 pt-12 border-t border-cream-400/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="font-display text-xl text-ink mb-1">See everything on TikTok</p>
              <p className="text-sm text-ink-muted">New video every day. Links directly to @paintedbyhannahjoy.</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://tiktok.com/@paintedbyhannahjoy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                TikTok ↗
              </a>
              <a
                href="https://instagram.com/paintedbyhannahjoy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Instagram ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
