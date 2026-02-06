interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <h2
        className={`font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold mb-4 ${
          light ? "text-white" : "gradient-text"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl text-lg ${centered ? "mx-auto" : ""} ${
            light ? "text-purple-300" : "text-purple-500"
          }`}
        >
          {subtitle}
        </p>
      )}
      {/* Artistic brush stroke divider */}
      <div className={`mt-6 flex items-center gap-2 ${centered ? "justify-center" : ""}`}>
        <div className={`h-[2px] w-8 rounded-full ${light ? "bg-purple-400" : "bg-purple-300"}`} />
        <div className={`h-[2px] w-16 rounded-full ${light ? "bg-purple-500" : "bg-purple-400"}`} />
        <div className={`h-[2px] w-8 rounded-full ${light ? "bg-purple-400" : "bg-purple-300"}`} />
      </div>
    </div>
  );
}
