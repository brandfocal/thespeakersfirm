"use client";

import * as React from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

import Link from "next/link";

const CATEGORIES = [
  { name: 'Keynote', path: '/categories/inspirational-keynote-speakers' },
  { name: 'Leadership', path: '/categories/leadership-strategy-and-executive-performance' },
  { name: 'Governance', path: '/categories/boards-governance-and-boardroom-influence' },
  { name: 'A.I.', path: '/categories/artificial-intelligence-and-intelligent-enterprise' },
  { name: 'Future of Work', path: '/categories/future-of-work-talent-and-workforce-transformation' },
  { name: 'Economics', path: '/categories/economics-markets-and-the-global-economy' },
  { name: 'Futurists', path: '/categories/futurists-trends-and-strategic-foresight' },
  { name: 'Geopolitics', path: '/categories/geopolitics-policy-and-global-affairs' },
  { name: 'Innovation', path: '/categories/innovation-disruption-and-business-transformation' },
  { name: 'Entrepreneurship', path: '/categories/entrepreneurship-investment-and-business-growth' },
  { name: 'Change & Resilience', path: '/categories/change-resilience-and-organisational-agility' },
  { name: 'Media & Executive visibility', path: '/categories/media-communication-and-executive-visibility' },
  { name: 'Reputation & Trust', path: '/categories/reputation-crisis-and-trust-leadership' },
  { name: 'Marketing & Brand', path: '/categories/marketing-branding-and-customer-growth' },
  { name: 'Sales & Negotiation', path: '/categories/sales-negotiation-and-commercial-performance' },
  { name: 'Neuroscience', path: '/categories/neuroscience-psychology-and-human-behaviour' },
  { name: 'Teams & Collaboration', path: '/categories/high-performance-teams-and-team-building-experiences' },
  { name: 'Sports Coaching', path: '/categories/sports-coaching-and-the-winning-mindset' },
  { name: 'Sustainability & ESG', path: '/categories/sustainability-esg-health-and-human-performance' },
  { name: 'MCs & Entertainment', path: '/categories/celebrity-speakers-mcs-comedy-and-entertainment' }
];

export function BottomCategoryMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = React.useState<string>("");
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  React.useEffect(() => {
    const handleCategoryEvent = (e: Event) => {
      const customEvent = e as CustomEvent<any>;
      const detail = customEvent.detail;
      const label = typeof detail === 'string' ? detail : detail?.label;
      if (label) {
        setActiveCategory(label);
      }
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
          <Link
            key={category.path}
            href={category.path}
            className={cn(
              "shrink-0 rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] transition-all duration-300",
              pathname === category.path
                ? "bg-[#e30e04] text-white shadow-sm"
                : "text-[#686869] hover:bg-gray-100 hover:text-[#212121]"
            )}
          >
            <span>{category.name}</span>
          </Link>
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
