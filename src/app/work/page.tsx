"use client";

import { useState } from "react";
import Link from "next/link";

type Category = "all" | "character" | "fnaf" | "studio";

type VideoEntry = {
  id: string;
  title: string;
  subtitle?: string;
  category: Exclude<Category, "all">;
  caption: string;
  tiktokUrl: string;
  instagramUrl?: string;
  youtubeUrl?: string;
  views: {
    tiktok?: string;
    instagram?: string;
    youtube?: string;
  };
};

const videos: VideoEntry[] = [
  // Character Work
  {
    id: "junji-uzumaki",
    title: "Junji Ito — Uzumaki",
    category: "character",
    caption: "Spiral corruption, rendered in makeup.",
    tiktokUrl: "https://www.tiktok.com/t/ZP8ChKsCN/",
    views: {
      tiktok: "1.2M",
      instagram: "984K",
    },
  },
  {
    id: "junji-yuuko",
    title: "Junji Ito — Yuuko",
    category: "character",
    caption: "Six hours of work. 6.1M on YouTube.",
    tiktokUrl: "https://www.tiktok.com/t/ZP8Ck4gjA/",
    youtubeUrl: "https://www.youtube.com/@paintedbyhannahjoy",
    views: {
      tiktok: "501.5K",
      instagram: "486K",
      youtube: "6.1M",
    },
  },
  {
    id: "scarecrow",
    title: "Scarecrow",
    category: "character",
    caption: "Straw, shadow, and structure.",
    tiktokUrl: "https://www.tiktok.com/t/ZP8CkQLXn/",
    views: {
      tiktok: "1.2M",
      instagram: "638K",
    },
  },
  // Five Nights at Freddy's
  {
    id: "ballora",
    title: "Ballora",
    category: "fnaf",
    caption: "Eyes closed. Always watching.",
    tiktokUrl: "https://www.tiktok.com/t/ZP8CkmRrv/",
    views: {
      tiktok: "2.2M",
    },
  },
  {
    id: "funtime-foxy",
    title: "Funtime Foxy",
    category: "fnaf",
    caption: "Showtime.",
    tiktokUrl: "https://www.tiktok.com/t/ZP8CkXSFG/",
    views: {
      tiktok: "1.6M",
    },
  },
  {
    id: "puppet",
    title: "The Puppet",
    category: "fnaf",
    caption: "The strings aren't what move it.",
    tiktokUrl: "https://www.tiktok.com/t/ZP8CkDvVb/",
    views: {
      tiktok: "1M",
    },
  },
  // Studio Techniques
  {
    id: "hot-glue-jjk",
    title: "Hot Glue — Jujutsu Kaisen",
    category: "studio",
    caption: "Using glue as pigment. 5.7M combined.",
    tiktokUrl: "https://www.tiktok.com/t/ZP8ChoCtF/",
    views: {
      tiktok: "2.6M",
      instagram: "3.1M",
    },
  },
  {
    id: "hot-glue-butterfly",
    title: "Hot Glue — Butterfly",
    category: "studio",
    caption: "Texture first, color second.",
    tiktokUrl: "https://www.tiktok.com/t/ZP8CkXWrx/",
    views: {
      tiktok: "40.3K",
      instagram: "1.9M",
    },
  },
  {
    id: "safety-pin-heart",
    title: "Safety Pin Heart",
    category: "studio",
    caption: "Metal and blush.",
    tiktokUrl: "https://www.tiktok.com/t/ZP8Ckafxt/",
    views: {
      tiktok: "529.8K",
      instagram: "254K",
    },
  },
];

const categories: { id: Category; label: string; description: string }[] = [
  { id: "all", label: "All Work", description: "" },
  {
    id: "character",
    label: "Character Work",
    description: "Horror, anime, editorial — full-face transformation storytelling.",
  },
  {
    id: "fnaf",
    label: "Five Nights at Freddy's",
    description: "A full series. Ballora, Funtime Foxy, The Puppet.",
  },
  {
    id: "studio",
    label: "Studio",
    description: "Material-first technique work — hot glue, safety pins, and whatever else works.",
  },
];

function totalViews(v: VideoEntry["views"]): string {
  const nums = [v.tiktok, v.instagram, v.youtube]
    .filter(Boolean)
    .map((s) => {
      const n = parseFloat(s!.replace("K", "").replace("M", ""));
      return s!.includes("M") ? n * 1_000_000 : n * 1_000;
    });
  const total = nums.reduce((a, b) => a + b, 0);
  if (total >= 1_000_000) return `${(total / 1_000_000).toFixed(1).replace(".0", "")}M`;
  if (total >= 1_000) return `${Math.round(total / 1_000)}K`;
  return String(total);
}

function VideoCard({ video }: { video: VideoEntry }) {
  const vt = totalViews(video.views);
  const platforms = [
    video.views.tiktok && { label: "TikTok", val: video.views.tiktok },
    video.views.instagram && { label: "IG", val: video.views.instagram },
    video.views.youtube && { label: "YT", val: video.views.youtube },
  ].filter(Boolean) as { label: string; val: string }[];

  return (
    <div className="bg-cream-100 border border-cream-400/40 p-6 flex flex-col gap-4 group hover-lift">
      {/* Category */}
      <p className="text-xs text-ink-muted tracking-widest uppercase">
        {categories.find((c) => c.id === video.category)?.label}
      </p>

      {/* Title + caption */}
      <div className="flex-1">
        <p className="font-display italic text-xl text-ink leading-snug mb-1">
          {video.title}
        </p>
        <p className="text-xs text-ink-muted">{video.caption}</p>
      </div>

      {/* Views */}
      <div>
        <p className="font-display text-3xl text-ink leading-none mb-2">{vt}</p>
        <div className="flex gap-4 flex-wrap">
          {platforms.map(({ label, val }) => (
            <span key={label} className="text-xs text-ink-muted">
              {label} {val}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-2 border-t border-cream-400/40">
        <a
          href={video.tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-ink border-b border-ink/30 pb-px hover:border-ink transition-colors"
        >
          TikTok ↗
        </a>
        {video.instagramUrl && (
          <a
            href={video.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-ink-muted border-b border-ink-muted/30 pb-px hover:text-ink hover:border-ink transition-colors"
          >
            Instagram ↗
          </a>
        )}
        {video.youtubeUrl && (
          <a
            href={video.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-ink-muted border-b border-ink-muted/30 pb-px hover:text-ink hover:border-ink transition-colors"
          >
            YouTube ↗
          </a>
        )}
      </div>
    </div>
  );
}

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
          <p className="text-xs text-ink-muted tracking-widest uppercase mb-6 animate-fade-up">
            Portfolio
          </p>
          <h1 className="font-display italic text-5xl md:text-7xl text-ink leading-tight animate-fade-up animation-delay-100 mb-8">
            The Work
          </h1>
          <p className="text-ink-soft max-w-md animate-fade-up animation-delay-200">
            9 videos. 70M+ views combined across TikTok, Instagram, and YouTube.
          </p>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-cream-300/60 border-t border-b border-cream-400/40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap gap-8 md:gap-14">
          {[
            { num: "2.6M", label: "Biggest TikTok", sub: "Hot Glue — Jujutsu Kaisen" },
            { num: "6.1M", label: "Biggest YouTube", sub: "Junji Ito — Yuuko" },
            { num: "3.1M", label: "Biggest Instagram", sub: "Hot Glue — Jujutsu Kaisen" },
          ].map(({ num, label, sub }) => (
            <div key={label}>
              <p className="font-display text-2xl text-ink leading-none">{num}</p>
              <p className="text-xs text-ink-muted tracking-widest uppercase mt-1">{label}</p>
              <p className="text-xs text-ink-muted italic mt-0.5">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Category filter ── */}
      <section className="bg-cream-100 border-b border-cream-400/40 sticky top-[57px] z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto">
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
          <div className="max-w-6xl mx-auto px-6 pb-5">
            <p className="text-sm text-ink-muted italic">{activeCategory.description}</p>
          </div>
        </div>
      )}

      {/* ── Video grid ── */}
      <section className="bg-cream-100 section pt-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

          {/* Bottom links */}
          <div className="mt-20 pt-12 border-t border-cream-400/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="font-display text-xl text-ink mb-1">
                New content every day.
              </p>
              <p className="text-sm text-ink-muted">
                Follow @paintedbyhannahjoy for the full feed.
              </p>
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
