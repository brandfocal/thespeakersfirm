import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransitionProvider } from "@/components/PageTransitionProvider";
import { BottomCategoryMenu } from "@/components/BottomCategoryMenu";
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
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://thespeakersfirm.co.za/#organization",
        "name": "The Speakers Firm",
        "url": "https://thespeakersfirm.co.za",
        "logo": "https://thespeakersfirm.co.za/favicon.png",
        "description": "Elite partner in boardroom transformation. The Speakers Firm curates strategic voices, keynotes, and leadership authorities to shift rooms and drive commercial momentum.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+27-11-482-7256",
          "contactType": "sales",
          "areaServed": "ZA",
          "availableLanguage": "English"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://thespeakersfirm.co.za/#service",
        "name": "The Speakers Firm Keynote & Bureau Services",
        "url": "https://thespeakersfirm.co.za",
        "image": "https://thespeakersfirm.co.za/favicon.png",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Johannesburg",
          "addressCountry": "ZA"
        },
        "telephone": "+27-11-482-7256"
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col justify-between bg-[#ffffff] text-[#212121] pb-20">
        {/* Global Header */}
        <Suspense fallback={
          <div className="fixed top-4 left-1/2 -translate-x-1/2 h-[56px] w-[320px] rounded-full bg-[#ffffff]/90 border border-gray-200 animate-pulse z-50" />
        }>
          <Header />
        </Suspense>

        {/* Page Content */}
        <main className="flex-1 w-full">
          <PageTransitionProvider>
            {children}
          </PageTransitionProvider>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Bottom Category Menu */}
        <Suspense fallback={null}>
          <BottomCategoryMenu />
        </Suspense>
      </body>
    </html>
  );
}
