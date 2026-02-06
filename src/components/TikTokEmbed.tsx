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
    <div className="relative aspect-[9/16] max-w-[325px] mx-auto rounded-xl overflow-hidden bg-purple-50 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <iframe
        src={`https://www.tiktok.com/player/v1/${videoId}?description=1&music_info=0&rel=0`}
        className="absolute inset-0 w-full h-full"
        allowFullScreen
        allow="encrypted-media"
        loading="lazy"
        title={`TikTok video by @${username}`}
      />
    </div>
  );
}
