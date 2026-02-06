import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-purple-950 text-purple-200">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-purple-800/20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-purple-700/15 blur-3xl" />

      {/* Top gradient accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand column - large */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="inline-block font-[family-name:var(--font-display)] text-3xl font-bold text-white tracking-tight mb-4"
            >
              Hannah Joy
            </Link>
            <p className="text-purple-300 leading-relaxed mb-6 max-w-sm">
              Creating concept-driven UGC content that blends artistry with
              strategy. Every frame tells a story.
            </p>

            {/* Paint swatch accent */}
            <div className="flex gap-3 mb-8">
              {["bg-purple-300", "bg-purple-400", "bg-purple-500", "bg-purple-600", "bg-purple-700"].map(
                (color, i) => (
                  <div
                    key={i}
                    className={`w-8 h-3 rounded-full ${color} opacity-60`}
                  />
                )
              )}
            </div>

            {/* Social links as pill buttons */}
            <div className="flex flex-wrap gap-3">
              {[
                {
                  label: "TikTok",
                  href: "https://tiktok.com/@paintedbyhannahjoy",
                },
                {
                  label: "Instagram",
                  href: "https://instagram.com/paintedbyhannahjoy",
                },
                {
                  label: "YouTube",
                  href: "https://youtube.com/@paintedbyhannahjoy",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full border border-purple-700/50 text-sm text-purple-300 hover:bg-purple-800 hover:text-white hover:border-purple-600 transition-all duration-300"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-purple-400 uppercase tracking-[0.2em] mb-6">
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/case-studies", label: "Case Studies" },
                { href: "/brands", label: "Brands" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-purple-300 hover:text-white transition-colors duration-200 text-sm group flex items-center gap-2"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-purple-400 transition-all duration-300" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-purple-400 uppercase tracking-[0.2em] mb-6">
              Work Together
            </h4>
            <p className="text-sm text-purple-300 leading-relaxed mb-6">
              Interested in a paid UGC collaboration? Let&apos;s create
              something beautiful.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-purple-950 text-sm font-medium hover:bg-purple-100 transition-colors duration-300"
            >
              Get In Touch
              <svg
                className="w-4 h-4"
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
        </div>

        {/* Bottom bar */}
        <div className="border-t border-purple-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-purple-500">
            &copy; {new Date().getFullYear()} Hannah Joy. All rights reserved.
          </p>
          <p className="text-xs text-purple-600">
            Crafted with creativity & intention
          </p>
        </div>
      </div>
    </footer>
  );
}
