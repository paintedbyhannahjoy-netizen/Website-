import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream-300">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="font-display text-3xl text-cream-100 italic leading-none block mb-3">
              painted.
            </Link>
            <p className="text-xs tracking-widest uppercase text-cream-500 mb-6">
              @paintedbyhannahjoy
            </p>
            <p className="text-sm text-cream-400 leading-relaxed max-w-xs">
              Self-taught makeup artist, daily poster, 70M+ views.
              Open to brand campaigns and creative collaborations.
            </p>
            <div className="flex gap-5 mt-8">
              {[
                { label: "TikTok", href: "https://tiktok.com/@paintedbyhannahjoy" },
                { label: "Instagram", href: "https://instagram.com/paintedbyhannahjoy" },
                { label: "YouTube", href: "https://youtube.com/@paintedbyhannahjoy" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-cream-500 hover:text-cream-100 tracking-widest uppercase transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3 md:col-start-8">
            <p className="text-xs text-cream-600 tracking-[0.15em] uppercase mb-6">Pages</p>
            <div className="flex flex-col gap-3">
              {[
                { href: "/about", label: "About" },
                { href: "/work", label: "Work" },
                { href: "/work-with-me", label: "Work With Me" },
                { href: "/collaborate", label: "Collaborate" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream-400 hover:text-cream-100 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="text-xs text-cream-600 tracking-[0.15em] uppercase mb-6">Get in touch</p>
            <Link
              href="/work-with-me"
              className="text-sm text-cream-400 hover:text-cream-100 transition-colors block mb-2"
            >
              Brand inquiries →
            </Link>
            <Link
              href="/collaborate"
              className="text-sm text-cream-400 hover:text-cream-100 transition-colors block"
            >
              Creator collabs →
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-ink-soft pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-cream-600">
            &copy; {year} Hannah Joy. All rights reserved.
          </p>
          <p className="text-xs text-cream-600 italic font-display">
            Process over perfection.
          </p>
        </div>
      </div>
    </footer>
  );
}
