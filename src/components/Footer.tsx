import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-purple-950 text-purple-200 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white mb-4">
              Hannah Joy
            </h3>
            <p className="text-sm text-purple-300 leading-relaxed">
              UGC Content Creator & Creative Makeup Artist.
              Concept-driven content for beauty and lifestyle brands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/portfolio", label: "Portfolio" },
                { href: "/case-studies", label: "Case Studies" },
                { href: "/brands", label: "Brands" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-purple-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://tiktok.com/@paintedbyhannahjoy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-300 hover:text-white transition-colors"
              >
                TikTok
              </a>
              <a
                href="https://instagram.com/paintedbyhannahjoy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-300 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://youtube.com/@paintedbyhannahjoy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-300 hover:text-white transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-purple-800 text-center">
          <p className="text-sm text-purple-400">
            &copy; {new Date().getFullYear()} Hannah Joy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
