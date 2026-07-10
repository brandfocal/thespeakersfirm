"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "Leadership",
  "Media",
  "A.I.",
  "MC's",
  "Comedy",
  "Keynote",
  "Spirituality",
  "Economics",
  "Diversity",
  "Neuroscience",
  "Future of Work",
  "Governance",
  "Gender",
  "Workplace Wellness",
  "Financial Inclusion",
  "Entrepreneurship",
  "Masculinity",
  "Female Keynote Speakers"
];

export function BottomCategoryMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = React.useState<string>("All");

  React.useEffect(() => {
    const handleCategoryEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setActiveCategory(customEvent.detail);
    };
    window.addEventListener("tsf-select-category", handleCategoryEvent);
    return () => window.removeEventListener("tsf-select-category", handleCategoryEvent);
  }, []);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    window.dispatchEvent(new CustomEvent("tsf-select-category", { detail: category }));
    
    if (pathname !== "/") {
      router.push(`/?category=${encodeURIComponent(category)}`);
    } else {
      const target = document.getElementById("featured-speakers-heading");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 flex h-12 w-[calc(100vw-24px)] max-w-5xl items-center rounded-full border border-gray-200 bg-white/90 px-4 py-2 shadow-[0_-8px_32px_rgba(0,0,0,0.06),0_16px_48px_rgba(0,0,0,0.08)] backdrop-blur-md">
      <div className="scrollbar-none flex w-full items-center gap-1.5 overflow-x-auto">
        <button
          onClick={() => handleCategoryClick("All")}
          className={cn(
            "shrink-0 rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] transition-all duration-300",
            activeCategory === "All"
              ? "bg-[#e30e04] text-white shadow-sm"
              : "text-[#686869] hover:bg-gray-100 hover:text-[#212121]"
          )}
        >
          <span>All</span>
        </button>
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={cn(
              "shrink-0 rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] transition-all duration-300",
              activeCategory === category
                ? "bg-[#e30e04] text-white shadow-sm"
                : "text-[#686869] hover:bg-gray-100 hover:text-[#212121]"
            )}
          >
            <span>{category}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
