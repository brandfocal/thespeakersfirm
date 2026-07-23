"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Search, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

import { FEATURED_SPEAKERS } from "./generated/TSFHome";


const COLORS = {
  black: '#000000',
  red: '#e30e04',
  gray: '#000000',
  borderGray: '#ffffff',
};

const getTextFromNode = (node: any): string => {
  if (!node) return "";
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(getTextFromNode).join(" ");
  }
  if (node.props && node.props.children) {
    return getTextFromNode(node.props.children);
  }
  return "";
};

import { CATEGORIES_CONFIG, getCategoryByLabel, CATEGORY_SPEAKERS_MAP } from "@/lib/categories";

const getTrackIdForSpeaker = (speakerId: string): string => {
  for (const [catId, speakerIds] of Object.entries(CATEGORY_SPEAKERS_MAP)) {
    if (speakerIds.includes(speakerId)) {
      return catId;
    }
  }
  return "leadership-governance-and-risk-intelligence";
};

const FACULTY_LIST = FEATURED_SPEAKERS.map(s => {
  const bioText = getTextFromNode(s.bio);
  const trackId = getTrackIdForSpeaker(s.id);
  return {
    id: s.id,
    name: s.name,
    designation: bioText,
    image: s.image,
    trackId: trackId,
    category: s.category,
    topics: s.topics
  };
});


// We split categories into 11 main ones and 7 submenu ones
const MAIN_CATEGORIES = CATEGORIES_CONFIG.slice(0, 11);
const SUBMENU_CATEGORIES = CATEGORIES_CONFIG.slice(11);


const FOOTER_NAV_LINKS = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'faculty', label: 'Faculty', href: '/#faculty' },
  { id: 'methodology', label: 'Methodology', href: '/#methodology' },
  { id: 'executive-dialogues', label: 'Executive Dialogues', href: '/#dialogues' },
  { id: 'find-speaker', label: 'Find a Speaker', href: '/#faculty' }
];

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isSearchExpanded, setIsSearchExpanded] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const searchInputRef = React.useRef<HTMLInputElement | null>(null);

  const searchQuery = searchParams.get("search") || "";
  const [inputValue, setInputValue] = React.useState(searchQuery);
  const [isMoreCategoriesOpen, setIsMoreCategoriesOpen] = React.useState(false);
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = React.useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = React.useState(false);


  React.useEffect(() => {
    if (isSearchExpanded) {
      searchInputRef.current?.focus();
    }
  }, [isSearchExpanded]);

  React.useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      const activeEl = document.activeElement;
      const isInputFocused = activeEl && (
        activeEl.tagName === 'INPUT' || 
        activeEl.tagName === 'TEXTAREA' || 
        activeEl.tagName === 'SELECT' ||
        activeEl.getAttribute('contenteditable') === 'true'
      );
      
      if (isInputFocused) return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      
      // Auto-open and capture typing if user presses alphanumeric keys or "/" key
      if (event.key === '/' || (event.key.length === 1 && /[a-zA-Z0-9]/.test(event.key))) {
        event.preventDefault();
        setIsSearchExpanded(true);
        if (event.key !== '/') {
          setInputValue(prev => {
            const nextVal = prev + event.key;
            window.dispatchEvent(new CustomEvent('tsf-search', { detail: nextVal }));
            return nextVal;
          });
        }
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  React.useEffect(() => {
    const handleCategoryEvent = (e: Event) => {
      const customEvent = e as CustomEvent<any>;
      const detail = customEvent.detail;
      const label = typeof detail === 'string' ? detail : detail?.label;
      const syncSearch = typeof detail === 'string' ? true : (detail?.syncSearch !== false);
      
      if (label && syncSearch) {
        setIsSearchExpanded(true);
        setInputValue(label);
        // Force focus on next tick
        setTimeout(() => {
          searchInputRef.current?.focus();
        }, 50);
      }
    };
    window.addEventListener("tsf-select-category", handleCategoryEvent);
    return () => window.removeEventListener("tsf-select-category", handleCategoryEvent);
  }, []);

  const handleSearchToggle = () => {
    setIsSearchExpanded(current => !current);
  };

  React.useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  // Sync state instantly when custom search event is triggered elsewhere
  React.useEffect(() => {
    const handleSearchEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setInputValue(customEvent.detail);
    };
    window.addEventListener('tsf-search', handleSearchEvent);
    return () => window.removeEventListener('tsf-search', handleSearchEvent);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      const currentQuery = params.get("search") || "";
      if (inputValue === currentQuery) return;

      if (inputValue) {
        params.set("search", inputValue);
      } else {
        params.delete("search");
      }
      
      router.push(`/?${params.toString()}`, { scroll: false });
    }, 250);

    return () => clearTimeout(timer);
  }, [inputValue, router]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setInputValue(val);
    window.dispatchEvent(new CustomEvent('tsf-search', { detail: val }));
  };

  const filteredFaculty = inputValue.trim() === "" 
    ? [] 
    : FACULTY_LIST.filter(member => {
        const q = inputValue.toLowerCase();
        const nameMatch = member.name.toLowerCase().includes(q);
        const designationMatch = member.designation.toLowerCase().includes(q);
        
        const categoryMatch = Array.isArray(member.category)
          ? member.category.some(cat => cat.toLowerCase().includes(q))
          : member.category.toLowerCase().includes(q);
          
        const topicsMatch = Array.isArray(member.topics)
          ? member.topics.some(topic => topic.toLowerCase().includes(q))
          : false;
          
        return nameMatch || designationMatch || categoryMatch || topicsMatch;
      });

  const handleSearchKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setIsSearchExpanded(false);
    }
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(current => !current);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className="fixed top-4 left-0 right-0 mx-auto z-50 flex min-h-[56px] w-[calc(100vw-24px)] max-w-[calc(100vw-24px)] items-center rounded-[28px] border bg-[#ffffff] px-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl md:top-6 lg:h-[56px] lg:w-fit lg:rounded-full lg:px-6" 
      style={{ borderColor: 'rgba(199, 199, 200, 0.6)' }}
    >
      <div className="flex items-center cursor-pointer shrink-0" onClick={() => router.push("/")}>
        <img 
          src="/the-speakers-firm-logo.png" 
          alt="The Speakers Firm Logo" 
          className="h-10 w-auto object-contain"
        />
      </div>
      
      {/* Desktop categories nav bar */}
      <div className="hidden lg:flex items-center gap-6 mx-8">
        
        {/* Categories Menu Item with Mega Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setIsMoreCategoriesOpen(true)}
          onMouseLeave={() => setIsMoreCategoriesOpen(false)}
        >
          <Link 
            href="/categories"
            className={cn(
              "flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.1em] transition-colors relative py-1 group",
              pathname === "/categories" 
                ? "text-[#e30e04]" 
                : "text-[#686869] hover:text-[#e30e04]"
            )}
          >
            <span>Categories</span>
            <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", isMoreCategoriesOpen && "rotate-180")} />
            <span className={cn(
              "absolute bottom-0 left-0 w-full h-[1.5px] bg-[#e30e04] transition-transform duration-300",
              pathname === "/categories" 
                ? "scale-x-100" 
                : "scale-x-0 origin-left group-hover:scale-x-100"
            )} />
          </Link>

          <AnimatePresence>
            {isMoreCategoriesOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[560px] rounded-3xl border border-gray-200 bg-white/95 p-6 shadow-2xl backdrop-blur-md z-[100]"
              >
                <div className="grid grid-cols-2 gap-x-8 gap-y-1.5 text-left">
                  {CATEGORIES_CONFIG.map(cat => {
                    const isKeynote = cat.id === "inspirational-keynote-speakers";
                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          if (isKeynote) {
                            router.push('/categories/inspirational-keynote-speakers');
                          } else {
                            window.dispatchEvent(new CustomEvent("tsf-select-category", { detail: cat.buttonLabel }));
                            router.push(`/?category=${encodeURIComponent(cat.buttonLabel)}`);
                          }
                          setIsMoreCategoriesOpen(false);
                        }}
                        className="w-full text-left rounded-xl px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#686869] hover:bg-gray-50 hover:text-[#e30e04] transition-all"
                      >
                        {cat.buttonLabel}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* About Us Link */}
        <Link 
          href="/about" 
          className={cn(
            "text-[10px] font-bold uppercase tracking-[0.1em] transition-colors relative py-1 group",
            pathname === "/about" 
              ? "text-[#e30e04]" 
              : "text-[#686869] hover:text-[#e30e04]"
          )} 
        >
          <span>About Us</span>
          <span className={cn(
            "absolute bottom-0 left-0 w-full h-[1.5px] bg-[#e30e04] transition-transform duration-300",
            pathname === "/about" 
              ? "scale-x-100" 
              : "scale-x-0 origin-left group-hover:scale-x-100"
          )} />
        </Link>

        {/* Executive Dialogues Link */}
        <Link 
          href="/executive-dialogues" 
          className={cn(
            "text-[10px] font-bold uppercase tracking-[0.1em] transition-colors relative py-1 group",
            pathname === "/executive-dialogues" 
              ? "text-[#e30e04]" 
              : "text-[#686869] hover:text-[#e30e04]"
          )} 
        >
          <span>Executive Dialogues</span>
          <span className={cn(
            "absolute bottom-0 left-0 w-full h-[1.5px] bg-[#e30e04] transition-transform duration-300",
            pathname === "/executive-dialogues" 
              ? "scale-x-100" 
              : "scale-x-0 origin-left group-hover:scale-x-100"
          )} />
        </Link>

        {/* Upcoming Events Link */}
        <Link 
          href="/upcoming-events" 
          className={cn(
            "text-[10px] font-bold uppercase tracking-[0.1em] transition-colors relative py-1 group",
            pathname === "/upcoming-events" 
              ? "text-[#e30e04]" 
              : "text-[#686869] hover:text-[#e30e04]"
          )} 
        >
          <span>Upcoming Events</span>
          <span className={cn(
            "absolute bottom-0 left-0 w-full h-[1.5px] bg-[#e30e04] transition-transform duration-300",
            pathname === "/upcoming-events" 
              ? "scale-x-100" 
              : "scale-x-0 origin-left group-hover:scale-x-100"
          )} />
        </Link>

        {/* Gallery Link */}
        <Link 
          href="/gallery" 
          className={cn(
            "text-[10px] font-bold uppercase tracking-[0.1em] transition-colors relative py-1 group",
            pathname === "/gallery" 
              ? "text-[#e30e04]" 
              : "text-[#686869] hover:text-[#e30e04]"
          )} 
        >
          <span>Gallery</span>
          <span className={cn(
            "absolute bottom-0 left-0 w-full h-[1.5px] bg-[#e30e04] transition-transform duration-300",
            pathname === "/gallery" 
              ? "scale-x-100" 
              : "scale-x-0 origin-left group-hover:scale-x-100"
          )} />
        </Link>

        {/* Media Link */}
        <Link 
          href="/media" 
          className={cn(
            "text-[10px] font-bold uppercase tracking-[0.1em] transition-colors relative py-1 group",
            pathname === "/media" 
              ? "text-[#e30e04]" 
              : "text-[#686869] hover:text-[#e30e04]"
          )} 
        >
          <span>Media</span>
          <span className={cn(
            "absolute bottom-0 left-0 w-full h-[1.5px] bg-[#e30e04] transition-transform duration-300",
            pathname === "/media" 
              ? "scale-x-100" 
              : "scale-x-0 origin-left group-hover:scale-x-100"
          )} />
        </Link>

        {/* Contact Us Link */}
        <Link 
          href="/contact" 
          className={cn(
            "text-[10px] font-bold uppercase tracking-[0.1em] transition-colors relative py-1 group",
            pathname === "/contact" 
              ? "text-[#e30e04]" 
              : "text-[#686869] hover:text-[#e30e04]"
          )} 
        >
          <span>Contact Us</span>
          <span className={cn(
            "absolute bottom-0 left-0 w-full h-[1.5px] bg-[#e30e04] transition-transform duration-300",
            pathname === "/contact" 
              ? "scale-x-100" 
              : "scale-x-0 origin-left group-hover:scale-x-100"
          )} />
        </Link>
      </div>

      <div className="ml-auto hidden items-center gap-3 lg:ml-0 lg:flex">
        <div className="relative flex items-center">
          <div className="flex items-center gap-2 overflow-hidden">
            <button 
              type="button" 
              aria-label={isSearchExpanded ? 'Collapse faculty search' : 'Expand faculty search'} 
              aria-expanded={isSearchExpanded} 
              onClick={handleSearchToggle} 
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full transition-colors duration-300" 
              style={{ color: isSearchExpanded ? COLORS.red : COLORS.gray }}
            >
              <Search aria-hidden="true" className="h-5 w-5" />
            </button>
            <motion.div 
              initial={false} 
              animate={isSearchExpanded ? { width: 240, opacity: 1 } : { width: 0, opacity: 0 }} 
              transition={{ duration: 0.3, ease: 'easeOut' }} 
              className="overflow-hidden"
            >
              <label htmlFor="nav-faculty-search" className="sr-only">Search faculty</label>
              <input 
                ref={searchInputRef} 
                id="nav-faculty-search" 
                value={inputValue} 
                onChange={handleSearchChange} 
                onKeyDown={handleSearchKeyDown} 
                type="search" 
                placeholder="Search faculty..." 
                className="w-[240px] border-b bg-transparent pb-1 text-[14px] font-normal outline-none placeholder:text-[#686869]" 
                style={{ borderColor: COLORS.borderGray, color: COLORS.black }} 
              />
            </motion.div>
          </div>

          {/* Desktop Search Suggestions Dropdown */}
          <AnimatePresence>
            {isSearchExpanded && inputValue.trim().length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="absolute left-0 top-[48px] w-[340px] rounded-2xl border bg-white p-3 shadow-xl z-[100] max-h-[380px] overflow-y-auto" 
                style={{ borderColor: COLORS.borderGray }}
              >
                {filteredFaculty.length > 0 ? (
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#686869] px-2 py-1">
                      Matching Faculty
                    </div>
                    {filteredFaculty.map((member) => (
                      <Link
                        key={member.id}
                        href={`/tracks/${member.trackId}/${member.id}`}
                        onClick={() => {
                          setIsSearchExpanded(false);
                          setInputValue("");
                        }}
                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-100 transition-colors group text-left"
                      >
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-10 h-10 rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all shrink-0" 
                        />
                        <div className="min-w-0 flex-1">
                          <h4 className="text-xs font-bold text-[#212121] truncate">{member.name}</h4>
                          <p className="text-[10px] text-[#686869] truncate">{member.designation}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-xs text-[#686869] p-4 text-center">
                    No matching speakers found
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link 
          href="/book-a-speaker" 
          className="whitespace-nowrap rounded-full px-5 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition-transform active:scale-95" 
          style={{ backgroundColor: COLORS.red }}
        >
          Book A Speaker
        </Link>
        <a 
          href="/#faculty" 
          className="whitespace-nowrap rounded-full px-5 py-2 text-[10px] font-bold uppercase tracking-[0.1em] transition-transform active:scale-95 text-white hover:bg-[#333333] transition-colors" 
          style={{ backgroundColor: COLORS.black }}
        >
          Find a Speaker
        </a>
      </div>
      <button 
        type="button" 
        aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} 
        aria-expanded={isMobileMenuOpen} 
        aria-controls="mobile-navigation-menu" 
        onClick={handleMobileMenuToggle} 
        className="ml-auto grid h-10 w-10 place-items-center rounded-full border transition-colors duration-300 lg:hidden" 
        style={{ borderColor: COLORS.borderGray, color: COLORS.black }}
      >
        {isMobileMenuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
      </button>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            id="mobile-navigation-menu" 
            initial={{ opacity: 0, y: -8 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -8 }} 
            transition={{ duration: 0.24, ease: 'easeOut' }} 
            className="absolute left-0 right-0 top-[calc(100%+10px)] overflow-hidden rounded-[26px] border bg-[#ffffff] p-5 shadow-[0_18px_48px_rgba(0,0,0,0.12)] backdrop-blur-xl lg:hidden" 
            style={{ borderColor: 'rgba(199, 199, 200, 0.72)' }}
          >
            <div className="flex flex-col gap-1 max-h-[300px] overflow-y-auto pr-1">
              <button 
                onClick={() => setIsMobileCategoriesOpen(!isMobileCategoriesOpen)}
                className="flex items-center justify-between rounded-2xl px-2 py-3 text-[13px] font-bold uppercase tracking-[0.12em] text-[#212121] transition-colors active:text-[#e30e04]"
              >
                <span>Categories</span>
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isMobileCategoriesOpen && "rotate-180")} />
              </button>

              <AnimatePresence>
                {isMobileCategoriesOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pl-4 flex flex-col gap-1 border-l border-gray-100"
                  >
                    {MAIN_CATEGORIES.map(cat => {
                      const isKeynote = cat.id === "inspirational-keynote-speakers";
                      return (
                        <button
                          key={cat.id}
                          onClick={() => {
                            if (isKeynote) {
                              router.push('/categories/inspirational-keynote-speakers');
                            } else {
                              window.dispatchEvent(new CustomEvent("tsf-select-category", { detail: cat.buttonLabel }));
                              router.push(`/?category=${encodeURIComponent(cat.buttonLabel)}`);
                            }
                            setIsMobileMenuOpen(false);
                          }}
                          className="w-full text-left rounded-xl px-2 py-2 text-[11px] font-bold uppercase tracking-wider text-[#686869] active:text-[#e30e04]"
                        >
                          {cat.buttonLabel}
                        </button>
                      );
                    })}
                    
                    <button 
                      onClick={() => setIsMobileMoreOpen(!isMobileMoreOpen)}
                      className="flex items-center justify-between rounded-2xl px-2 py-2 text-[11px] font-bold uppercase tracking-wider text-[#212121]"
                    >
                      <span>More Categories</span>
                      <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", isMobileMoreOpen && "rotate-180")} />
                    </button>

                    <AnimatePresence>
                      {isMobileMoreOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4 flex flex-col gap-1 border-l border-gray-100"
                        >
                          {SUBMENU_CATEGORIES.map(cat => {
                            const isKeynote = cat.id === "inspirational-keynote-speakers";
                            return (
                              <button
                                key={cat.id}
                                onClick={() => {
                                  if (isKeynote) {
                                    router.push('/categories/inspirational-keynote-speakers');
                                  } else {
                                    window.dispatchEvent(new CustomEvent("tsf-select-category", { detail: cat.buttonLabel }));
                                    router.push(`/?category=${encodeURIComponent(cat.buttonLabel)}`);
                                  }
                                  setIsMobileMenuOpen(false);
                                }}
                                className="w-full text-left rounded-xl px-2 py-2 text-[10px] font-bold uppercase tracking-wider text-[#686869] active:text-[#e30e04]"
                              >
                                {cat.buttonLabel}
                              </button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* About Us */}
              <Link 
                href="/about" 
                onClick={handleMobileMenuClose}
                className="flex items-center justify-between rounded-2xl px-2 py-3 text-[13px] font-bold uppercase tracking-[0.12em] text-[#212121] transition-colors active:text-[#e30e04]"
              >
                <span>About Us</span>
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>



              {/* Executive Dialogues */}
              <Link 
                href="/executive-dialogues" 
                onClick={handleMobileMenuClose}
                className="flex items-center justify-between rounded-2xl px-2 py-3 text-[13px] font-bold uppercase tracking-[0.12em] text-[#212121] transition-colors active:text-[#e30e04]"
              >
                <span>Executive Dialogues</span>
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>

              {/* Upcoming Events */}
              <Link 
                href="/upcoming-events" 
                onClick={handleMobileMenuClose}
                className="flex items-center justify-between rounded-2xl px-2 py-3 text-[13px] font-bold uppercase tracking-[0.12em] text-[#212121] transition-colors active:text-[#e30e04]"
              >
                <span>Upcoming Events</span>
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>

              {/* Gallery */}
              <Link 
                href="/gallery" 
                onClick={handleMobileMenuClose}
                className="flex items-center justify-between rounded-2xl px-2 py-3 text-[13px] font-bold uppercase tracking-[0.12em] text-[#212121] transition-colors active:text-[#e30e04]"
              >
                <span>Gallery</span>
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>

              {/* Media */}
              <Link 
                href="/media" 
                onClick={handleMobileMenuClose}
                className="flex items-center justify-between rounded-2xl px-2 py-3 text-[13px] font-bold uppercase tracking-[0.12em] text-[#212121] transition-colors active:text-[#e30e04]"
              >
                <span>Media</span>
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>

              {/* Contact Us */}
              <Link 
                href="/contact" 
                onClick={handleMobileMenuClose}
                className="flex items-center justify-between rounded-2xl px-2 py-3 text-[13px] font-bold uppercase tracking-[0.12em] text-[#212121] transition-colors active:text-[#e30e04]"
              >
                <span>Contact Us</span>
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>


            <div 
              className="mt-4 border-t pt-5" 
              style={{ borderColor: COLORS.borderGray }}
            >
              <label htmlFor="mobile-nav-faculty-search" className="sr-only">Search faculty</label>
              <div 
                className="flex items-center gap-3 rounded-full border bg-white/60 px-4 py-3" 
                style={{ borderColor: COLORS.borderGray }}
              >
                <Search aria-hidden="true" className="h-4 w-4 shrink-0" style={{ color: COLORS.red }} />
                <input 
                  id="mobile-nav-faculty-search" 
                  value={inputValue} 
                  onChange={handleSearchChange} 
                  type="search" 
                  placeholder="Search faculty..." 
                  className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-[#686869]" 
                  style={{ color: COLORS.black }} 
                />
              </div>

              {/* Mobile Search Suggestions List */}
              {inputValue.trim().length > 0 && (
                <div className="mt-3 max-h-[220px] overflow-y-auto divide-y divide-[#C7C7C8]/20 bg-white/70 rounded-2xl p-2 border border-[#C7C7C8]/20">
                  {filteredFaculty.length > 0 ? (
                    filteredFaculty.map((member) => (
                      <Link
                        key={`mobile-suggest-${member.id}`}
                        href={`/tracks/${member.trackId}/${member.id}`}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setInputValue("");
                        }}
                        className="flex items-center gap-3 py-2 px-1 hover:bg-gray-100 transition-colors text-left"
                      >
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-8 h-8 rounded-lg object-cover grayscale shrink-0" 
                        />
                        <div className="min-w-0 flex-1">
                          <h4 className="text-xs font-bold text-[#212121] truncate">{member.name}</h4>
                          <p className="text-[9px] text-[#686869] truncate">{member.designation}</p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="text-[11px] text-[#686869] p-3 text-center">
                      No matching speakers found
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
