import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hannah Joy | @paintedbyhannahjoy",
  description:
    "Self-taught makeup artist. 70M+ views. Daily poster. Based in the U.S. — open to brand campaigns and creative collaborations.",
  keywords: [
    "Hannah Joy",
    "paintedbyhannahjoy",
    "makeup artist",
    "content creator",
    "TikTok makeup",
    "threadwork makeup",
    "brand collaboration",
    "beauty creator",
  ],
  openGraph: {
    title: "Hannah Joy | @paintedbyhannahjoy",
    description:
      "Self-taught makeup artist. 70M+ views. Daily poster.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/*
          Google Fonts loaded via <link> so it works in any environment.
          Cormorant Garamond — editorial display serif
          DM Sans — clean body sans-serif
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=DM+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream-200 text-ink antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
