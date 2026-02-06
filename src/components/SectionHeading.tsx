interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-purple-950 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-purple-600 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-0.5 w-16 bg-purple-400 ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}
