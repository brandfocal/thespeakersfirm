"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const CATEGORIES = [
  "Keynote",
  "Leadership",
  "Governance",
  "A.I.",
  "Future of Work",
  "Economics",
  "Futurists",
  "Geopolitics",
  "Innovation",
  "Organisational Agility",
  "Media",
  "Reputation",
  "Branding",
  "Sales",
  "Neuroscience",
  "High-Performance",
  "Sports",
  "Sustainability",
  "MCs"
];

export function BottomCategoryMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = React.useState<string>("");
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleCategoryEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setActiveCategory(customEvent.detail);
    };
    window.addEventListener("tsf-select-category", handleCategoryEvent);
    return () => window.removeEventListener("tsf-select-category", handleCategoryEvent);
  }, []);

  React.useEffect(() => {
    if (pathname !== "/") {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      const target = document.getElementById("featured-speakers-heading");
      if (target) {
        const rect = target.getBoundingClientRect();
        // Show once the heading is scrolled to or passed (rect.top <= 100px from top of viewport)
        if (rect.top <= 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

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

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div 
      className={cn(
        "fixed left-1/2 z-40 -translate-x-1/2 flex h-12 w-[calc(100vw-24px)] max-w-5xl items-center rounded-full border border-gray-200 bg-white/90 px-4 py-2 shadow-[0_-8px_32px_rgba(0,0,0,0.06),0_16px_48px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-500 ease-out",
        isVisible 
          ? "bottom-4 opacity-100 translate-y-0 pointer-events-auto" 
          : "-bottom-20 opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      <div 
        ref={scrollRef}
        className="scrollbar-none flex w-full items-center gap-1.5 overflow-x-auto scroll-smooth"
      >
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
      
      {/* Scroll indicator right arrow */}
      <button
        onClick={handleScrollRight}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors ml-2 border border-gray-200 shadow-sm"
        aria-label="Scroll right to reveal more categories"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
