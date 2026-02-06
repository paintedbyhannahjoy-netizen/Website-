"use client";

interface TikTokEmbedProps {
  videoId: string;
  username?: string;
}

export default function TikTokEmbed({
  videoId,
  username = "paintedbyhannahjoy",
}: TikTokEmbedProps) {
  return (
    <div className="group relative">
      {/* Decorative glow behind */}
      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-purple-200/40 via-transparent to-purple-300/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      <div className="relative aspect-[9/16] max-w-[325px] mx-auto rounded-2xl overflow-hidden bg-purple-950/5 border border-purple-200/50 shadow-lg group-hover:shadow-2xl group-hover:shadow-purple-500/10 transition-all duration-500 group-hover:-translate-y-1">
        <iframe
          src={`https://www.tiktok.com/player/v1/${videoId}?description=1&music_info=0&rel=0`}
          className="absolute inset-0 w-full h-full"
          allowFullScreen
          allow="encrypted-media"
          loading="lazy"
          title={`TikTok video by @${username}`}
        />
      </div>
    </div>
  );
}
