import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hannah Joy | UGC Content Creator & Creative Makeup Artist",
  description:
    "High-performing short-form UGC content for beauty and lifestyle brands. Concept-driven storytelling that converts.",
  keywords: [
    "UGC creator",
    "beauty content creator",
    "creative makeup",
    "brand collaborations",
    "short-form video",
    "TikTok creator",
  ],
  openGraph: {
    title: "Hannah Joy | UGC Content Creator",
    description:
      "High-performing short-form UGC content for beauty and lifestyle brands.",
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
      <body className="bg-white text-purple-950 font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
