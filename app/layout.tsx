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

        {/* Floating WhatsApp Button for Mobile */}
        <a 
          href="https://wa.me/27737878919"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_16px_rgba(0,0,0,0.18)] hover:bg-[#20ba5a] active:scale-95 transition-all duration-300 lg:hidden"
          aria-label="Contact us on WhatsApp"
        >
          <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.528 2.028 14.07 1.001 11.5 1c-5.435 0-9.85 4.368-9.854 9.796-.002 1.773.475 3.51 1.387 5.075L2.025 21.84l6.196-1.615-.574-.328zm9.592-7.07c-.26-.13-1.534-.758-1.772-.844-.237-.087-.41-.13-.58.13-.17.26-.66.823-.808.997-.149.175-.298.195-.558.065-.26-.13-1.097-.404-2.09-1.288-.772-.689-1.293-1.54-1.444-1.8-.15-.26-.016-.4.115-.53.118-.117.26-.304.39-.457.13-.15.174-.256.26-.426.087-.17.044-.32-.022-.45-.065-.13-.58-1.397-.795-1.918-.21-.505-.44-.436-.6-.444-.15-.007-.327-.008-.503-.008-.176 0-.463.065-.705.326-.24.26-.92.9-.92 2.197 0 1.297.944 2.55 1.077 2.73.132.18 1.857 2.835 4.5 3.98 2.642 1.146 2.642.764 3.12.72.48-.045 1.534-.627 1.75-.1.218-.627.218-1.163.153-1.25-.065-.086-.237-.13-.497-.26z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
