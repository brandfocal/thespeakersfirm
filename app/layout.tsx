import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Speakers Firm | Our Voice, Driving Exponential Growth",
  description: "Our Voice, Driving Exponential Growth. Elite speakers, lectures, and corporate engagements.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col justify-between bg-[#F8F7F5] text-[#212121]">
        {/* Global Header */}
        <Suspense fallback={
          <div className="fixed top-4 left-1/2 -translate-x-1/2 h-[56px] w-[320px] rounded-full bg-[#F8F7F5]/90 border border-gray-200 animate-pulse z-50" />
        }>
          <Header />
        </Suspense>

        {/* Page Content */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
