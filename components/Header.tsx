"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

const COLORS = {
  black: '#212121',
  red: '#e30e04',
  gray: '#686869',
  borderGray: '#C7C7C8',
};

const HEADER_NAV_LINKS = [
  { id: 'faculty', label: 'Faculty', href: '/#faculty' },
  { id: 'methodology', label: 'Our Process', href: '/#methodology' },
  { id: 'executive-dialogues', label: 'Executive Dialogues', href: '/#dialogues' },
  { id: 'contact', label: 'Contact Us', href: '/#brief-us' }
];

const FOOTER_NAV_LINKS = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'faculty', label: 'Faculty', href: '/#faculty' },
  { id: 'methodology', label: 'Methodology', href: '/#methodology' },
  { id: 'executive-dialogues', label: 'Executive Dialogues', href: '/#dialogues' },
  { id: 'brief-bureau', label: 'Brief the Bureau', href: '/#brief-us' }
];

export function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSearchExpanded, setIsSearchExpanded] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const searchInputRef = React.useRef<HTMLInputElement | null>(null);

  const searchQuery = searchParams.get("search") || "";

  React.useEffect(() => {
    if (isSearchExpanded) {
      searchInputRef.current?.focus();
    }
  }, [isSearchExpanded]);

  const handleSearchToggle = () => {
    setIsSearchExpanded(current => !current);
  };

  const updateSearchQuery = (val: string) => {
    const params = new URLSearchParams(window.location.search);
    if (val) {
      params.set("search", val);
    } else {
      params.delete("search");
    }
    // If not on home page, navigate to home page with query
    if (window.location.pathname !== "/") {
      router.push(`/?${params.toString()}`);
    } else {
      router.push(`/?${params.toString()}`, { scroll: false });
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchQuery(event.target.value);
  };

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
    <motion.nav 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ delay: 0.9, duration: 0.5 }} 
      className="fixed top-4 left-0 right-0 mx-auto z-50 flex min-h-[56px] w-[calc(100vw-24px)] max-w-[calc(100vw-24px)] items-center rounded-[28px] border bg-[#F8F7F5]/90 px-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl md:top-6 lg:h-[56px] lg:w-fit lg:rounded-full lg:px-6" 
      style={{ borderColor: 'rgba(199, 199, 200, 0.6)' }}
    >
      <div className="flex items-center cursor-pointer" onClick={() => router.push("/")}>
        <img 
          src="/the-speakers-firm-logo.png" 
          alt="The Speakers Firm Logo" 
          className="h-10 w-auto object-contain"
        />
      </div>
      <div className="hidden lg:flex items-center gap-6 mx-8">
        {HEADER_NAV_LINKS.map(item => (
          <a 
            key={`nav-${item.id}`} 
            href={item.href} 
            className="text-[12px] font-bold uppercase tracking-[0.1em] transition-colors" 
            style={{ color: COLORS.gray }}
            onMouseEnter={event => event.currentTarget.style.color = COLORS.black} 
            onMouseLeave={event => event.currentTarget.style.color = COLORS.gray}
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className="ml-auto hidden items-center gap-3 lg:ml-0 lg:flex">
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
              value={searchQuery} 
              onChange={handleSearchChange} 
              onKeyDown={handleSearchKeyDown} 
              type="search" 
              placeholder="Search faculty..." 
              className="w-[240px] border-b bg-transparent pb-1 text-[14px] font-normal outline-none placeholder:text-[#686869]" 
              style={{ borderColor: COLORS.borderGray, color: COLORS.black }} 
            />
          </motion.div>
        </div>
        <a 
          href="/#brief-us" 
          className="whitespace-nowrap rounded-full px-5 py-2 text-[12px] font-bold uppercase tracking-[0.1em] text-white transition-transform active:scale-95" 
          style={{ backgroundColor: COLORS.red }}
        >
          Book A Speaker
        </a>
        <a 
          href="/#brief-us" 
          className="whitespace-nowrap rounded-full px-5 py-2 text-[12px] font-bold uppercase tracking-[0.1em] transition-transform active:scale-95 text-white hover:bg-[#333333] transition-colors" 
          style={{ backgroundColor: COLORS.black }}
        >
          Brief the Bureau
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
            className="absolute left-0 right-0 top-[calc(100%+10px)] overflow-hidden rounded-[26px] border bg-[#F8F7F5]/95 p-5 shadow-[0_18px_48px_rgba(0,0,0,0.12)] backdrop-blur-xl lg:hidden" 
            style={{ borderColor: 'rgba(199, 199, 200, 0.72)' }}
          >
            <div className="flex flex-col gap-1">
              {HEADER_NAV_LINKS.map(item => (
                <a 
                  key={`mobile-nav-${item.id}`} 
                  href={item.href} 
                  onClick={handleMobileMenuClose} 
                  className="flex items-center justify-between rounded-2xl px-2 py-3 text-[13px] font-bold uppercase tracking-[0.12em] transition-colors active:text-[#e30e04]" 
                  style={{ color: COLORS.black }}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              ))}
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
                  value={searchQuery} 
                  onChange={handleSearchChange} 
                  type="search" 
                  placeholder="Search faculty..." 
                  className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-[#686869]" 
                  style={{ color: COLORS.black }} 
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
